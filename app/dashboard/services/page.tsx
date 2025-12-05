"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"
import {
  Scissors,
  Plus,
  Search,
  Clock,
  DollarSign,
  Edit,
  TrendingUp,
  Calendar,
  Star,
  BarChart3,
  ToggleLeft,
  ToggleRight,
} from "lucide-react"

export default function ServicesPage() {
  // Types
  type Service = {
    id: number
    nom: string
    description: string
    duree: number
    prix: number
    categorie: string
    isActive: boolean
    nbRendezVous: number
    revenus: number
    popularite: number
    tempsAttente: number
    satisfaction: number
    dateCreation: string
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Données simulées
  const services: Service[] = [
    {
      id: 1,
      nom: "Coupe + Brushing",
      description: "Coupe de cheveux avec brushing professionnel",
      duree: 90,
      prix: 25000,
      categorie: "Coiffure",
      isActive: true,
      nbRendezVous: 45,
      revenus: 1125000,
      popularite: 95,
      tempsAttente: 15,
      satisfaction: 4.8,
      dateCreation: "2023-01-15",
    },
    {
      id: 2,
      nom: "Coupe homme",
      description: "Coupe de cheveux pour homme",
      duree: 45,
      prix: 15000,
      categorie: "Coiffure",
      isActive: true,
      nbRendezVous: 32,
      revenus: 480000,
      popularite: 78,
      tempsAttente: 10,
      satisfaction: 4.6,
      dateCreation: "2023-01-15",
    },
    {
      id: 3,
      nom: "Coloration",
      description: "Coloration complète des cheveux",
      duree: 120,
      prix: 35000,
      categorie: "Coloration",
      isActive: true,
      nbRendezVous: 28,
      revenus: 980000,
      popularite: 68,
      tempsAttente: 20,
      satisfaction: 4.9,
      dateCreation: "2023-02-01",
    },
    {
      id: 4,
      nom: "Manucure",
      description: "Soin complet des ongles des mains",
      duree: 60,
      prix: 20000,
      categorie: "Esthétique",
      isActive: true,
      nbRendezVous: 22,
      revenus: 440000,
      popularite: 55,
      tempsAttente: 12,
      satisfaction: 4.7,
      dateCreation: "2023-03-10",
    },
    {
      id: 5,
      nom: "Pédicure",
      description: "Soin complet des ongles des pieds",
      duree: 75,
      prix: 22000,
      categorie: "Esthétique",
      isActive: true,
      nbRendezVous: 18,
      revenus: 396000,
      popularite: 45,
      tempsAttente: 15,
      satisfaction: 4.5,
      dateCreation: "2023-03-10",
    },
    {
      id: 6,
      nom: "Mèches",
      description: "Mèches et reflets",
      duree: 150,
      prix: 40000,
      categorie: "Coloration",
      isActive: false,
      nbRendezVous: 8,
      revenus: 320000,
      popularite: 25,
      tempsAttente: 25,
      satisfaction: 4.3,
      dateCreation: "2023-04-15",
    },
  ]

  const categories = ["Tous", "Coiffure", "Coloration", "Esthétique"]

  const getStatutBadge = (isActive: boolean) => {
    return isActive ? (
      <Badge className="bg-green-100 text-green-800">Actif</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">Inactif</Badge>
    )
  }

  const getPopulariteBadge = (popularite: number) => {
    if (popularite >= 80) return <Badge className="bg-green-100 text-green-800">Très populaire</Badge>
    if (popularite >= 60) return <Badge className="bg-blue-100 text-blue-800">Populaire</Badge>
    if (popularite >= 40) return <Badge className="bg-yellow-100 text-yellow-800">Modéré</Badge>
    return <Badge className="bg-red-100 text-red-800">Peu populaire</Badge>
  }

  const formatDuree = (minutes: number) => {
    const heures = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (heures > 0) {
      return mins > 0 ? `${heures}h${mins}min` : `${heures}h`
    }
    return `${mins}min`
  }

  const filteredServices = services.filter(
    (service) =>
      service.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.categorie.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleServiceStatus = (serviceId: number) => {
    // Logique pour activer/désactiver un service
    console.log(`Toggle service ${serviceId}`)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestion des services</h1>
              <p className="text-gray-600">Gérez votre catalogue de services</p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedService ? "Modifier le service" : "Nouveau service"}</DialogTitle>
                  <DialogDescription>Configurez les détails du service</DialogDescription>
                </DialogHeader>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom du service *</Label>
                    <Input id="nom" placeholder="Coupe + Brushing" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Description détaillée du service..." rows={3} />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duree">Durée (minutes) *</Label>
                      <Input id="duree" type="number" placeholder="90" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prix">Prix (FCFA) *</Label>
                      <Input id="prix" type="number" placeholder="25000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="categorie">Catégorie</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coiffure">Coiffure</SelectItem>
                          <SelectItem value="coloration">Coloration</SelectItem>
                          <SelectItem value="esthetique">Esthétique</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="actif" />
                    <Label htmlFor="actif">Service actif</Label>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      {selectedService ? "Modifier" : "Créer"} le service
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total services</p>
                    <p className="text-2xl font-bold text-gray-900">{services.length}</p>
                  </div>
                  <Scissors className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Services actifs</p>
                    <p className="text-2xl font-bold text-gray-900">{services.filter((s) => s.isActive).length}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">RDV ce mois</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {services.reduce((sum, s) => sum + s.nbRendezVous, 0)}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenus services</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {services.reduce((sum, s) => sum + s.revenus, 0).toLocaleString()} FCFA
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filtres et recherche */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Rechercher un service..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous</SelectItem>
                      <SelectItem value="actif">Actifs</SelectItem>
                      <SelectItem value="inactif">Inactifs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="liste" className="space-y-6">
            <TabsList>
              <TabsTrigger value="liste">Liste des services</TabsTrigger>
              <TabsTrigger value="statistiques">Statistiques</TabsTrigger>
            </TabsList>

            <TabsContent value="liste">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{service.nom}</h3>
                            {getStatutBadge(service.isActive)}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {formatDuree(service.duree)}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {service.prix.toLocaleString()} FCFA
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleServiceStatus(service.id)}
                            title={service.isActive ? "Désactiver" : "Activer"}
                          >
                            {service.isActive ? (
                              <ToggleRight className="h-5 w-5 text-green-600" />
                            ) : (
                              <ToggleLeft className="h-5 w-5 text-gray-400" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedService(service)
                              setIsDialogOpen(true)
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Rendez-vous</span>
                            <span className="font-semibold text-gray-900">{service.nbRendezVous}</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Revenus</span>
                            <span className="font-semibold text-gray-900">{service.revenus.toLocaleString()} FCFA</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        {getPopulariteBadge(service.popularite)}
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{service.satisfaction}/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="statistiques">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Services les plus populaires */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Services les plus demandés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {services
                        .filter((s) => s.isActive)
                        .sort((a, b) => b.nbRendezVous - a.nbRendezVous)
                        .slice(0, 5)
                        .map((service, index) => (
                          <div key={service.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{service.nom}</p>
                                <p className="text-sm text-gray-500">{service.nbRendezVous} rendez-vous</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">{service.revenus.toLocaleString()} FCFA</p>
                              <p className="text-sm text-gray-500">{service.popularite}% popularité</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Revenus par catégorie */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Revenus par catégorie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categories.slice(1).map((categorie) => {
                        const servicesCategorie = services.filter((s) => s.categorie === categorie)
                        const revenus = servicesCategorie.reduce((sum, s) => sum + s.revenus, 0)
                        const nbServices = servicesCategorie.length

                        return (
                          <div key={categorie} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">{categorie}</span>
                              <span className="text-sm text-gray-500">{nbServices} services</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                                <div
                                  className="bg-purple-600 h-2 rounded-full"
                                  style={{
                                    width: `${(revenus / services.reduce((sum, s) => sum + s.revenus, 0)) * 100}%`,
                                  }}
                                />
                              </div>
                              <span className="font-semibold text-gray-900">{revenus.toLocaleString()} FCFA</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Temps d'attente moyen */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Temps d&#39;attente moyen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {services
                        .filter((s) => s.isActive)
                        .sort((a, b) => a.tempsAttente - b.tempsAttente)
                        .map((service) => (
                          <div key={service.id} className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{service.nom}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    service.tempsAttente <= 10
                                      ? "bg-green-500"
                                      : service.tempsAttente <= 20
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  }`}
                                  style={{ width: `${Math.min((service.tempsAttente / 30) * 100, 100)}%` }}
                                />
                              </div>
                              <span className="text-sm font-semibold text-gray-900 w-12">
                                {service.tempsAttente}min
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Satisfaction client */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="h-5 w-5 mr-2" />
                      Satisfaction client
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {services
                        .filter((s) => s.isActive)
                        .sort((a, b) => b.satisfaction - a.satisfaction)
                        .map((service) => (
                          <div key={service.id} className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{service.nom}</span>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= service.satisfaction ? "text-yellow-500 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-semibold text-gray-900">{service.satisfaction}/5</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
