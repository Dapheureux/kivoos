import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/kivoos.png" alt="kivoos" width={120} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#fonctionnalites" className="text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#temoignages" className="text-muted-foreground hover:text-foreground transition-colors">
              Témoignages
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Se connecter</Button>
            <Button>Essai gratuit</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="w-4 h-4 mr-2" />
                  Nouveau : Notifications SMS automatiques
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  La plateforme complète pour gérer votre
                  <span className="text-primary"> salon</span> ou
                  <span className="text-secondary"> boutique</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Fini les rendez-vous oubliés, les clients perdus et la paperasse. kivoos centralise tout :
                  rendez-vous, suivi clients, notifications et statistiques.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Commencer gratuitement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Voir la démo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Sans engagement</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Tableau de bord</h3>
                    <Badge variant="secondary">En direct</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">24</div>
                      <div className="text-sm text-muted-foreground">RDV aujourd&#39;hui</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary">156</div>
                      <div className="text-sm text-muted-foreground">Clients actifs</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Marie Dubois - Coupe + Couleur - 14h30</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Jean Martin - Barbe - 15h00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Vous reconnaissez ces problèmes ?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Les défis quotidiens des salons et boutiques que kivoos résout
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Rendez-vous oubliés",
                description: "Clients qui ne viennent pas, créneaux perdus, manque à gagner",
              },
              {
                icon: Users,
                title: "Clients mal suivis",
                description: "Pas d'historique, préférences oubliées, fidélisation difficile",
              },
              {
                icon: MessageSquare,
                title: "Communication dispersée",
                description: "SMS, appels, notes papier... tout est éparpillé",
              },
              {
                icon: BarChart3,
                title: "Pas de visibilité",
                description: "Difficile de savoir ce qui marche, chiffres d'affaires flous",
              },
              {
                icon: Smartphone,
                title: "Gestion manuelle",
                description: "Agenda papier, calculs à la main, perte de temps énorme",
              },
              {
                icon: Globe,
                title: "Pas de présence en ligne",
                description: "Clients qui cherchent sur internet mais ne vous trouvent pas",
              },
            ].map((problem, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <problem.icon className="w-8 h-8 text-destructive mb-2" />
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Une solution complète et simple</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour professionnaliser votre gestion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Gestion des rendez-vous",
                description: "Planning intelligent, rappels automatiques, gestion des annulations",
              },
              {
                icon: Users,
                title: "Suivi des clients",
                description: "Fiches clients complètes, historique des prestations, préférences",
              },
              {
                icon: MessageSquare,
                title: "Notifications SMS/Email",
                description: "Rappels automatiques, confirmations, promotions ciblées",
              },
              {
                icon: BarChart3,
                title: "Statistiques et reporting",
                description: "Chiffre d'affaires, clients fidèles, prestations populaires",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Tarifs transparents et flexibles</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Payez seulement pour ce dont vous avez besoin, selon votre nombre de clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Parfait pour débuter</CardDescription>
                <div className="text-3xl font-bold">
                  20 000 <span className="text-lg font-normal text-muted-foreground">FCFA/mois</span>
                </div>
                <p className="text-sm text-muted-foreground">Jusqu&#39;à 50 clients</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Gestion des rendez-vous",
                    "Suivi de 50 clients max",
                    "Notifications SMS/Email",
                    "Statistiques de base",
                    "Support par email",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Commencer l&#39;essai</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Populaire</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Standard</CardTitle>
                <CardDescription>Pour les entreprises en croissance</CardDescription>
                <div className="text-3xl font-bold">
                  25 000 <span className="text-lg font-normal text-muted-foreground">FCFA/mois</span>
                </div>
                <p className="text-sm text-muted-foreground">Jusqu&#39;à 100 clients</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Tout du plan Starter",
                    "Suivi de 100 clients max",
                    "Promotions ciblées",
                    "Statistiques avancées",
                    "Support prioritaire",
                    "Intégrations tierces",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Commencer l&#39;essai</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>Pour les grandes structures</CardDescription>
                <div className="text-3xl font-bold">Sur mesure</div>
                <p className="text-sm text-muted-foreground">Clients illimités</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Tout du plan Standard",
                    "Clients illimités",
                    "Multi-établissements",
                    "API personnalisée",
                    "Support dédié",
                    "Formation incluse",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Découvrez comment kivoos transforme la gestion de nos clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Kongo",
                business: "Salon de coiffure Élégance",
                location: "Brazzaville",
                testimonial:
                  "Depuis kivoos, j'ai réduit les rendez-vous manqués de 80%. Mes clients adorent recevoir les rappels SMS !",
                rating: 5,
              },
              {
                name: "Jean-Paul Mbemba",
                business: "Institut de beauté Zen",
                location: "Pointe-Noire",
                testimonial:
                  "La gestion des clients est devenue un jeu d'enfant. Je connais maintenant tous leurs préférences et historiques.",
                rating: 5,
              },
              {
                name: "Sylvie Moukoko",
                business: "Boutique Mode & Style",
                location: "Dolisie",
                testimonial:
                  "Les statistiques m'aident à mieux comprendre ma clientèle. Mon chiffre d'affaires a augmenté de 30% !",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.business} • {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&#34;{testimonial.testimonial}&#34;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Prêt à transformer votre gestion ?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Rejoignez les centaines de salons et boutiques qui ont déjà choisi kivoos. Essai gratuit de 14 jours, sans
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Planifier une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image src="/kivoos-logo.png" alt="kivoos" width={120} height={40} className="h-8 w-auto" />
              <p className="text-sm text-muted-foreground">
                La plateforme SaaS qui simplifie la gestion des salons et boutiques en Afrique.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Produit</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Sécurité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Centre d&#39;aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Statut
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Entreprise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Partenaires
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 kivoos. Tous droits réservés. Fait avec ❤️ pour l&#39;Afrique.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
