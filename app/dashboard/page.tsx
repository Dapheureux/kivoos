"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"
import { Calendar, Users, DollarSign, TrendingUp, Phone, Mail, Plus, ArrowRight, AlertCircle } from "lucide-react"

export default function TableauDeBord() {
  // Données simulées
  const stats = [
    {
      title: "Rendez-vous aujourd'hui",
      value: "12",
      change: "+2 par rapport à hier",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Clients actifs",
      value: "248",
      change: "+12 ce mois",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Revenus du jour",
      value: "125 000 FCFA",
      change: "+15% vs hier",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Taux d'occupation",
      value: "85%",
      change: "+5% cette semaine",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const prochainRendezVous = [
    {
      id: 1,
      client: "Marie Dubois",
      service: "Coupe + Brushing",
      heure: "09:00",
      duree: "1h30",
      statut: "confirmé",
      telephone: "+242 06 123 45 67",
    },
    {
      id: 2,
      client: "Sophie Martin",
      service: "Coloration",
      heure: "10:30",
      duree: "2h00",
      statut: "en-attente",
      telephone: "+242 06 987 65 43",
    },
    {
      id: 3,
      client: "Jean Kouassi",
      service: "Coupe homme",
      heure: "14:00",
      duree: "45min",
      statut: "confirmé",
      telephone: "+242 06 555 12 34",
    },
    {
      id: 4,
      client: "Fatou Diallo",
      service: "Manucure",
      heure: "15:30",
      duree: "1h00",
      statut: "nouveau",
      telephone: "+242 06 777 88 99",
    },
  ]

  const activiteRecente = [
    {
      id: 1,
      type: "rendez-vous",
      message: "Nouveau rendez-vous créé pour Marie Dubois",
      temps: "Il y a 5 minutes",
      icon: Calendar,
    },
    {
      id: 2,
      type: "paiement",
      message: "Paiement reçu - 25 000 FCFA (Sophie Martin)",
      temps: "Il y a 15 minutes",
      icon: DollarSign,
    },
    {
      id: 3,
      type: "client",
      message: "Nouveau client ajouté - Jean Kouassi",
      temps: "Il y a 1 heure",
      icon: Users,
    },
    {
      id: 4,
      type: "notification",
      message: "Rappel SMS envoyé à 3 clients",
      temps: "Il y a 2 heures",
      icon: Mail,
    },
  ]

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case "confirmé":
        return <Badge className="bg-green-100 text-green-800">Confirmé</Badge>
      case "en-attente":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
      case "nouveau":
        return <Badge className="bg-blue-100 text-blue-800">Nouveau</Badge>
      default:
        return <Badge variant="secondary">{statut}</Badge>
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {/* En-tête */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
            <p className="text-gray-600">Bonjour Marie ! Voici un aperçu de votre activité aujourd&#39;hui.</p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Prochains rendez-vous */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Prochains rendez-vous</CardTitle>
                    <CardDescription>Rendez-vous d&#39;aujourd&#39;hui</CardDescription>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouveau RDV
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prochainRendezVous.map((rdv) => (
                      <div key={rdv.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col items-center">
                            <div className="text-sm font-semibold text-gray-900">{rdv.heure}</div>
                            <div className="text-xs text-gray-500">{rdv.duree}</div>
                          </div>
                          <div className="w-px h-12 bg-gray-300" />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-gray-900">{rdv.client}</h4>
                              {getStatutBadge(rdv.statut)}
                            </div>
                            <p className="text-sm text-gray-600">{rdv.service}</p>
                            <p className="text-xs text-gray-500 mt-1">{rdv.telephone}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Voir tous les rendez-vous
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Colonne droite */}
            <div className="space-y-6">
              {/* Actions rapides */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Nouveau rendez-vous
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Ajouter un client
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer une promotion
                  </Button>
                </CardContent>
              </Card>

              {/* Activité récente */}
              <Card>
                <CardHeader>
                  <CardTitle>Activité récente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activiteRecente.map((activite) => (
                      <div key={activite.id} className="flex items-start space-x-3">
                        <div className="p-2 bg-gray-100 rounded-full">
                          <activite.icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">{activite.message}</p>
                          <p className="text-xs text-gray-500">{activite.temps}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alertes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                    Alertes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">3 clients n&#39;ont pas confirmé leur rendez-vous de demain</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">Votre abonnement expire dans 15 jours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
