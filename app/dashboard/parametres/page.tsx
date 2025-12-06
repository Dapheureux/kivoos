"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Building2, User, Bell, CreditCard, Users, Shield, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ParametresPage() {
  const [notifications, setNotifications] = useState({
    nouveauRdv: true,
    rappelRdv: true,
    annulationRdv: true,
    nouveauClient: false,
    rapportHebdo: true,
    email: true,
    sms: false,
    push: true,
  })

  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
          <p className="text-muted-foreground mt-2">Gérez les paramètres de votre compte et de votre établissement</p>
        </div>
        <Badge variant="outline" className="text-purple-600 border-purple-200">
          Plan Premium
        </Badge>
      </div>

      <Tabs defaultValue="entreprise" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
          <TabsTrigger value="entreprise">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Entreprise</span>
          </TabsTrigger>
          <TabsTrigger value="profil">
            <User className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Profil</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="facturation">
            <CreditCard className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Facturation</span>
          </TabsTrigger>
          <TabsTrigger value="equipe">
            <Users className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Équipe</span>
          </TabsTrigger>
          <TabsTrigger value="securite">
            <Shield className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Sécurité</span>
          </TabsTrigger>
        </TabsList>

        {/* Entreprise Tab */}
        <TabsContent value="entreprise" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de l &#39;établissement</CardTitle>
              <CardDescription>Gérez les informations publiques de votre entreprise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nom-entreprise">Nom de l &#39;établissement</Label>
                  <Input id="nom-entreprise" defaultValue="Salon Belle Époque" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type-entreprise">Type d &#39;établissement</Label>
                  <Select defaultValue="salon">
                    <SelectTrigger id="type-entreprise">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salon">Salon de coiffure</SelectItem>
                      <SelectItem value="spa">Spa & Bien-être</SelectItem>
                      <SelectItem value="esthetique">Institut de beauté</SelectItem>
                      <SelectItem value="barbier">Barbier</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre établissement..."
                  defaultValue="Un salon de coiffure moderne offrant des services de qualité depuis 2015"
                  rows={4}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Coordonnées</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel</Label>
                    <Input id="email" type="email" defaultValue="contact@belleepoque.fr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" type="tel" defaultValue="+33 1 42 53 67 89" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adresse">Adresse</Label>
                  <Input id="adresse" defaultValue="15 Rue de la Paix, 75002 Paris" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="ville">Ville</Label>
                    <Input id="ville" defaultValue="Paris" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code-postal">Code postal</Label>
                    <Input id="code-postal" defaultValue="75002" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pays">Pays</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger id="pays">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="be">Belgique</SelectItem>
                        <SelectItem value="ch">Suisse</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Horaires d &#39;ouverture</h3>
                {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((jour) => (
                  <div key={jour} className="flex items-center gap-4">
                    <div className="w-28">
                      <Label>{jour}</Label>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <Input type="time" defaultValue={jour === "Dimanche" ? "" : "09:00"} className="w-32" />
                      <span className="text-muted-foreground">à</span>
                      <Input type="time" defaultValue={jour === "Dimanche" ? "" : "19:00"} className="w-32" />
                      <Switch defaultChecked={jour !== "Dimanche"} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profil Tab */}
        <TabsContent value="profil" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil utilisateur</CardTitle>
              <CardDescription>Gérez vos informations personnelles et préférences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-semibold text-purple-600">
                  MD
                </div>
                <div>
                  <Button variant="outline">Changer la photo</Button>
                  <p className="text-sm text-muted-foreground mt-2">JPG, GIF ou PNG. Max 5MB.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" defaultValue="Marie" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" defaultValue="Dubois" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email-perso">Email</Label>
                  <Input id="email-perso" type="email" defaultValue="marie.dubois@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tel-perso">Téléphone</Label>
                  <Input id="tel-perso" type="tel" defaultValue="+33 6 12 34 56 78" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <Select defaultValue="owner">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Propriétaire</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="employee">Employé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Préférences</h3>
                <div className="space-y-2">
                  <Label htmlFor="langue">Langue</Label>
                  <Select defaultValue="fr">
                    <SelectTrigger id="langue">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuseau horaire</Label>
                  <Select defaultValue="paris">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">(UTC+01:00) Paris</SelectItem>
                      <SelectItem value="london">(UTC+00:00) London</SelectItem>
                      <SelectItem value="new-york">(UTC-05:00) New York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notification</CardTitle>
              <CardDescription>Choisissez comment et quand vous souhaitez être notifié</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Notifications d &#39;activité</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Nouveau rendez-vous</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevoir une notification lors d &#39;une nouvelle réservation
                      </p>
                    </div>
                    <Switch
                      checked={notifications.nouveauRdv}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, nouveauRdv: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Rappel de rendez-vous</Label>
                      <p className="text-sm text-muted-foreground">Recevoir un rappel 24h avant un rendez-vous</p>
                    </div>
                    <Switch
                      checked={notifications.rappelRdv}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, rappelRdv: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Annulation de rendez-vous</Label>
                      <p className="text-sm text-muted-foreground">Être notifié lorsqu &#39;un client annule</p>
                    </div>
                    <Switch
                      checked={notifications.annulationRdv}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, annulationRdv: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Nouveau client</Label>
                      <p className="text-sm text-muted-foreground">
                        Notification lors de l &#39;inscription d &#39;un nouveau client
                      </p>
                    </div>
                    <Switch
                      checked={notifications.nouveauClient}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, nouveauClient: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Rapport hebdomadaire</Label>
                      <p className="text-sm text-muted-foreground">Recevoir un résumé chaque lundi matin</p>
                    </div>
                    <Switch
                      checked={notifications.rapportHebdo}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, rapportHebdo: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Canaux de notification</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email</Label>
                      <p className="text-sm text-muted-foreground">Recevoir des notifications par email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS</Label>
                      <p className="text-sm text-muted-foreground">Recevoir des alertes par SMS</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notifications push</Label>
                      <p className="text-sm text-muted-foreground">Recevoir des notifications dans le navigateur</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Réinitialiser</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer les préférences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Facturation Tab */}
        <TabsContent value="facturation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Abonnement et facturation</CardTitle>
              <CardDescription>Gérez votre abonnement et vos informations de paiement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">Plan Premium</h3>
                    <p className="text-sm text-purple-700">Facturé mensuellement</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-900">29€</div>
                    <div className="text-sm text-purple-700">/mois</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-purple-800">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    Rendez-vous illimités
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    Clients illimités
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    SMS & Email automatiques
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    Support prioritaire
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Changer de plan
                  </Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                    Annuler l &#39;abonnement
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Méthode de paiement</h3>
                <div className="rounded-lg border p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expire le 12/25</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      Supprimer
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  + Ajouter une carte
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Historique de facturation</h3>
                  <Button variant="outline" size="sm">
                    Télécharger tout
                  </Button>
                </div>
                <div className="space-y-2">
                  {[
                    { date: "1 Déc 2024", montant: "29,00 €", statut: "Payée" },
                    { date: "1 Nov 2024", montant: "29,00 €", statut: "Payée" },
                    { date: "1 Oct 2024", montant: "29,00 €", statut: "Payée" },
                  ].map((facture, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{facture.date}</p>
                        <p className="text-sm text-muted-foreground">Plan Premium</p>
                      </div>
                      <div className="text-right flex items-center gap-4">
                        <div>
                          <p className="font-semibold">{facture.montant}</p>
                          <Badge variant="secondary" className="text-xs">
                            {facture.statut}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          PDF
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Équipe Tab */}
        <TabsContent value="equipe" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestion de l &#39;équipe</CardTitle>
              <CardDescription>Invitez et gérez les membres de votre équipe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Input placeholder="Email du membre à inviter" type="email" />
                <Select defaultValue="employee">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrateur</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="employee">Employé</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-purple-600 hover:bg-purple-700">Inviter</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                {[
                  {
                    nom: "Marie Dubois",
                    email: "marie.dubois@example.com",
                    role: "Propriétaire",
                    statut: "Actif",
                  },
                  {
                    nom: "Sophie Martin",
                    email: "sophie.martin@example.com",
                    role: "Manager",
                    statut: "Actif",
                  },
                  {
                    nom: "Julie Bernard",
                    email: "julie.bernard@example.com",
                    role: "Employé",
                    statut: "Actif",
                  },
                  {
                    nom: "Lucas Petit",
                    email: "lucas.petit@example.com",
                    role: "Employé",
                    statut: "Invité",
                  },
                ].map((membre, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600">
                        {membre.nom
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium">{membre.nom}</p>
                        <p className="text-sm text-muted-foreground">{membre.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{membre.role}</p>
                        <Badge variant={membre.statut === "Actif" ? "secondary" : "outline"} className="text-xs">
                          {membre.statut}
                        </Badge>
                      </div>
                      {membre.role !== "Propriétaire" && (
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Retirer
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sécurité Tab */}
        <TabsContent value="securite" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité du compte</CardTitle>
              <CardDescription>Protégez votre compte et vos données</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Mot de passe</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Mot de passe actuel</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nouveau mot de passe</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Mettre à jour le mot de passe</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Authentification à deux facteurs</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Activer 2FA</p>
                    <p className="text-sm text-muted-foreground">
                      Ajoutez une couche de sécurité supplémentaire à votre compte
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Sessions actives</h3>
                {[
                  { appareil: "Chrome sur Windows", lieu: "Paris, France", date: "Maintenant" },
                  { appareil: "Safari sur iPhone", lieu: "Paris, France", date: "Il y a 2 heures" },
                  { appareil: "Chrome sur MacBook", lieu: "Lyon, France", date: "Il y a 3 jours" },
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{session.appareil}</p>
                      <p className="text-sm text-muted-foreground">
                        {session.lieu} • {session.date}
                      </p>
                    </div>
                    {index !== 0 && (
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Déconnecter
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700 bg-transparent">
                  Déconnecter toutes les sessions
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-red-600">Zone de danger</h3>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-red-900">Supprimer le compte</p>
                      <p className="text-sm text-red-700">
                        Cette action est irréversible. Toutes vos données seront perdues.
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
