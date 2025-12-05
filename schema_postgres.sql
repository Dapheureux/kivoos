-- PostgreSQL schema converted from MySQL (UTF8, timestamptz, JSONB)
-- Adjust locales/owners as needed before running on your server.

-- Set client encoding and timezone for the session (optional)
SET client_encoding = 'UTF8';
SET timezone = 'UTC';

-- Create database (run as a superuser / outside the DB connection if needed)
-- Example (run in psql as superuser): CREATE DATABASE salon_saas WITH ENCODING='UTF8' LC_COLLATE='en_US.utf8' LC_CTYPE='en_US.utf8' TEMPLATE=template0;
-- After creating the DB, connect to it and run the rest of this script.

-- 0) ENUM types
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enterprise_type') THEN
    CREATE TYPE enterprise_type AS ENUM ('salon','boutique','other');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('owner','manager','staff','super_admin');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'appt_status') THEN
    CREATE TYPE appt_status AS ENUM ('pending','confirmed','completed','cancelled','no_show');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'appt_channel') THEN
    CREATE TYPE appt_channel AS ENUM ('admin','online','walk_in');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'promotion_channel') THEN
    CREATE TYPE promotion_channel AS ENUM ('sms','email','both');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'promotion_status') THEN
    CREATE TYPE promotion_status AS ENUM ('draft','scheduled','sent','cancelled');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'notification_type') THEN
    CREATE TYPE notification_type AS ENUM ('appointment_reminder','promotion');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'contact_channel') THEN
    CREATE TYPE contact_channel AS ENUM ('sms','email');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'integration_type') THEN
    CREATE TYPE integration_type AS ENUM ('sms','email','payment');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'subscription_plan') THEN
    CREATE TYPE subscription_plan AS ENUM ('starter','standard','pro');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'subscription_status') THEN
    CREATE TYPE subscription_status AS ENUM ('trial','active','past_due','canceled');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'promotion_recipient_status') THEN
    CREATE TYPE promotion_recipient_status AS ENUM ('pending','sent','failed');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'notification_status') THEN
    CREATE TYPE notification_status AS ENUM ('pending','sent','failed','cancelled');
  END IF;
END$$ LANGUAGE plpgsql;


-- Helper: update `updated_at` on row UPDATE
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- 1) Enterprises
CREATE TABLE IF NOT EXISTS enterprises (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  type enterprise_type NOT NULL DEFAULT 'salon',
  slug VARCHAR(160) NOT NULL UNIQUE,
  timezone VARCHAR(64) NOT NULL DEFAULT 'Africa/Brazzaville',
  phone VARCHAR(40),
  email VARCHAR(190),
  address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER enterprises_set_updated_at
BEFORE UPDATE ON enterprises
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 2) Users (enterprise staff + super admins)
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NULL,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  phone VARCHAR(40),
  password_hash VARCHAR(255) NOT NULL,
  role user_role NOT NULL DEFAULT 'staff',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_users_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE SET NULL
);

CREATE INDEX idx_users_enterprise_role ON users(enterprise_id, role);

CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 3) Clients
CREATE TABLE IF NOT EXISTS clients (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  phone VARCHAR(40),
  email VARCHAR(190),
  birthday DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_clients_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX ux_clients_phone ON clients(enterprise_id, phone);
CREATE INDEX idx_clients_email ON clients(enterprise_id, email);

CREATE TRIGGER clients_set_updated_at
BEFORE UPDATE ON clients
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 4) Services
CREATE TABLE IF NOT EXISTS services (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  name VARCHAR(150) NOT NULL,
  duration_min INTEGER NOT NULL,
  price NUMERIC(10,2) NOT NULL DEFAULT 0.00,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_services_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX ux_services_name ON services(enterprise_id, name);

CREATE TRIGGER services_set_updated_at
BEFORE UPDATE ON services
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 5) Appointments
CREATE TABLE IF NOT EXISTS appointments (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  client_id BIGINT NOT NULL,
  staff_user_id BIGINT NOT NULL,
  service_id BIGINT NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status appt_status NOT NULL DEFAULT 'pending',
  channel appt_channel NOT NULL DEFAULT 'admin',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_appts_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE,
  CONSTRAINT fk_appts_client FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
  CONSTRAINT fk_appts_staff FOREIGN KEY (staff_user_id) REFERENCES users(id) ON DELETE RESTRICT,
  CONSTRAINT fk_appts_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE RESTRICT
);

CREATE INDEX idx_appts_enterprise_time ON appointments(enterprise_id, start_time);
CREATE INDEX idx_appts_client ON appointments(client_id, start_time);
CREATE INDEX idx_appts_staff ON appointments(staff_user_id, start_time);

CREATE TRIGGER appointments_set_updated_at
BEFORE UPDATE ON appointments
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 6) Promotions + recipients
CREATE TABLE IF NOT EXISTS promotions (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  name VARCHAR(150) NOT NULL,
  channel promotion_channel NOT NULL DEFAULT 'sms',
  message_template TEXT NOT NULL,
  scheduled_at TIMESTAMPTZ,
  status promotion_status NOT NULL DEFAULT 'draft',
  created_by_user_id BIGINT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_promotions_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE,
  CONSTRAINT fk_promotions_creator FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE RESTRICT
);

CREATE TRIGGER promotions_set_updated_at
BEFORE UPDATE ON promotions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


CREATE TABLE IF NOT EXISTS promotion_recipients (
  id BIGSERIAL PRIMARY KEY,
  promotion_id BIGINT NOT NULL,
  client_id BIGINT NOT NULL,
  status promotion_recipient_status NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMPTZ,
  external_message_id VARCHAR(190),
  CONSTRAINT fk_recips_promo FOREIGN KEY (promotion_id) REFERENCES promotions(id) ON DELETE CASCADE,
  CONSTRAINT fk_recips_client FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE INDEX idx_recipients_promo ON promotion_recipients(promotion_id, status);


-- 7) Notifications (outbox)
CREATE TABLE IF NOT EXISTS notifications (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  type notification_type NOT NULL,
  channel contact_channel NOT NULL,
  to_client_id BIGINT,
  to_phone VARCHAR(40),
  to_email VARCHAR(190),
  scheduled_at TIMESTAMPTZ NOT NULL,
  status notification_status NOT NULL DEFAULT 'pending',
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_notifications_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE,
  CONSTRAINT fk_notifications_client FOREIGN KEY (to_client_id) REFERENCES clients(id) ON DELETE SET NULL
);

CREATE INDEX idx_notifications_sched ON notifications(enterprise_id, status, scheduled_at);

CREATE TRIGGER notifications_set_updated_at
BEFORE UPDATE ON notifications
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 8) Tags for client segmentation
CREATE TABLE IF NOT EXISTS tags (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  name VARCHAR(60) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_tags_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX ux_tags_name ON tags(enterprise_id, name);

CREATE TRIGGER tags_set_updated_at
BEFORE UPDATE ON tags
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


CREATE TABLE IF NOT EXISTS client_tags (
  client_id BIGINT NOT NULL,
  tag_id BIGINT NOT NULL,
  PRIMARY KEY (client_id, tag_id),
  CONSTRAINT fk_ct_client FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
  CONSTRAINT fk_ct_tag FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);


-- 9) Subscriptions (SaaS billing)
CREATE TABLE IF NOT EXISTS enterprise_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  plan subscription_plan NOT NULL DEFAULT 'starter',
  status subscription_status NOT NULL DEFAULT 'trial',
  period_start TIMESTAMPTZ NOT NULL,
  period_end TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_subs_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX ux_subscription_current ON enterprise_subscriptions(enterprise_id, status);

CREATE TRIGGER enterprise_subscriptions_set_updated_at
BEFORE UPDATE ON enterprise_subscriptions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- 10) Audit logs
CREATE TABLE IF NOT EXISTS audit_logs (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT,
  user_id BIGINT,
  action VARCHAR(120) NOT NULL,
  entity_type VARCHAR(120) NOT NULL,
  entity_id BIGINT,
  metadata JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_audit_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE SET NULL,
  CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_audit_enterprise_time ON audit_logs(enterprise_id, created_at);


-- 11) Integrations (SMS/Email/Payment)
CREATE TABLE IF NOT EXISTS integrations (
  id BIGSERIAL PRIMARY KEY,
  enterprise_id BIGINT NOT NULL,
  type integration_type NOT NULL,
  provider VARCHAR(60) NOT NULL,
  api_key_encrypted TEXT NOT NULL,
  settings JSONB NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT fk_integrations_enterprise FOREIGN KEY (enterprise_id) REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE INDEX idx_integrations_type ON integrations(enterprise_id, type, is_active);

CREATE TRIGGER integrations_set_updated_at
BEFORE UPDATE ON integrations
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();