"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import {
  Calendar,
  Plus,
  Search,
  Phone,
  Mail,
  Edit,
  CheckCircle,
  XCircle,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function RendezVousPage() {
  // Types
  type Client = { nom: string; telephone: string; email: string }
  type ServiceType = { id: number; nom: string; duree: number; prix: number }
  type Appointment = {
    id: number
    client: Client
    service: ServiceType
    staff: string
    dateHeure: string
    statut: string
    notes?: string
    canal: string
  }

  const [selectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"jour" | "semaine" | "mois">("jour")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  // Données simulées
  const rendezVous = [
    {
      id: 1,
      client: { nom: "Marie Dubois", telephone: "+242 06 123 45 67", email: "marie@email.com" },
      service: { id: 1, nom: "Coupe + Brushing", duree: 90, prix: 25000 },
      staff: "Sophie Martin",
      dateHeure: "2024-01-15T09:00:00",
      statut: "confirmé",
      notes: "Cliente régulière, préfère les coupes courtes",
      canal: "admin",
    },
    {
      id: 2,
      client: { nom: "Jean Kouassi", telephone: "+242 06 987 65 43", email: "jean@email.com" },
      service: { id: 2, nom: "Coupe homme", duree: 45, prix: 15000 },
      staff: "Marie Dubois",
      dateHeure: "2024-01-15T10:30:00",
      statut: "en-attente",
      notes: "",
      canal: "online",
    },
    {
      id: 3,
      client: { nom: "Fatou Diallo", telephone: "+242 06 555 12 34", email: "fatou@email.com" },
      service: { id: 4, nom: "Manucure", duree: 60, prix: 20000 },
      staff: "Sophie Martin",
      dateHeure: "2024-01-15T14:00:00",
      statut: "nouveau",
      notes: "Première visite",
      canal: "walk_in",
    },
    {
      id: 4,
      client: { nom: "Paul Mbemba", telephone: "+242 06 777 88 99", email: "paul@email.com" },
      service: { id: 3, nom: "Coloration", duree: 120, prix: 35000 },
      staff: "Marie Dubois",
      dateHeure: "2024-01-15T15:30:00",
      statut: "confirmé",
      notes: "Allergie aux produits chimiques - utiliser produits bio",
      canal: "admin",
    },
  ]

  const services: ServiceType[] = [
    { id: 1, nom: "Coupe + Brushing", duree: 90, prix: 25000 },
    { id: 2, nom: "Coupe homme", duree: 45, prix: 15000 },
    { id: 3, nom: "Coloration", duree: 120, prix: 35000 },
    { id: 4, nom: "Manucure", duree: 60, prix: 20000 },
    { id: 5, nom: "Pédicure", duree: 75, prix: 22000 },
  ]

  const staff: { id: number; nom: string }[] = [
    { id: 1, nom: "Marie Dubois" },
    { id: 2, nom: "Sophie Martin" },
    { id: 3, nom: "Claire Nkomo" },
  ]

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case "confirmé":
        return <Badge className="bg-green-100 text-green-800">Confirmé</Badge>
      case "en-attente":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
      case "nouveau":
        return <Badge className="bg-blue-100 text-blue-800">Nouveau</Badge>
      case "terminé":
        return <Badge className="bg-gray-100 text-gray-800">Terminé</Badge>
      case "annulé":
        return <Badge className="bg-red-100 text-red-800">Annulé</Badge>
      default:
        return <Badge variant="secondary">{statut}</Badge>
    }
  }

  const getCanalBadge = (canal: string) => {
    switch (canal) {
      case "admin":
        return <Badge variant="outline">Admin</Badge>
      case "online":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            En ligne
          </Badge>
        )
      case "walk_in":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700">
            Sur place
          </Badge>
        )
      default:
        return <Badge variant="outline">{canal}</Badge>
    }
  }

  const formatHeure = (dateTime: string) => {
    return new Date(dateTime).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleStatusChange = (appointmentId: number, newStatus: string) => {
    // Logique pour changer le statut
    console.log(`Changement statut RDV ${appointmentId} vers ${newStatus}`)
  }

  return (
    <div className="flex h-screen bg-gray-50">
 

      <div className="flex-1 flex flex-col overflow-hidden">

        <main className="flex-1 overflow-y-auto p-6">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestion des rendez-vous</h1>
              <p className="text-gray-600">Planifiez et gérez tous vos rendez-vous</p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau rendez-vous
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedAppointment ? "Modifier le rendez-vous" : "Nouveau rendez-vous"}</DialogTitle>
                  <DialogDescription>Remplissez les informations du rendez-vous</DialogDescription>
                </DialogHeader>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="client">Client</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un client" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marie">Marie Dubois</SelectItem>
                          <SelectItem value="jean">Jean Kouassi</SelectItem>
                          <SelectItem value="fatou">Fatou Diallo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id.toString()}>
                              {service.nom} - {service.duree}min - {service.prix.toLocaleString()} FCFA
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="staff">Coiffeur/Coiffeuse</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner le staff" />
                        </SelectTrigger>
                        <SelectContent>
                          {staff.map((person) => (
                            <SelectItem key={person.id} value={person.id.toString()}>
                              {person.nom}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input type="date" id="date" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="heure">Heure</Label>
                      <Input type="time" id="heure" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="statut">Statut</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Statut" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nouveau">Nouveau</SelectItem>
                          <SelectItem value="confirmé">Confirmé</SelectItem>
                          <SelectItem value="en-attente">En attente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Notes particulières pour ce rendez-vous..." rows={3} />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      {selectedAppointment ? "Modifier" : "Créer"} le rendez-vous
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filtres et recherche */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Rechercher par client, service..." className="pl-10" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous les statuts</SelectItem>
                      <SelectItem value="confirmé">Confirmé</SelectItem>
                      <SelectItem value="en-attente">En attente</SelectItem>
                      <SelectItem value="nouveau">Nouveau</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Staff" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tout le staff</SelectItem>
                      {staff.map((person) => (
                        <SelectItem key={person.id} value={person.nom}>
                          {person.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vues calendrier */}
          <Tabs value={viewMode} onValueChange={(value: string) => setViewMode(value as "jour" | "semaine" | "mois")} className="mb-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="jour">Jour</TabsTrigger>
                <TabsTrigger value="semaine">Semaine</TabsTrigger>
                <TabsTrigger value="mois">Mois</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium px-4">{formatDate(selectedDate.toISOString())}</span>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  Aujourd&#39;hui
                </Button>
              </div>
            </div>

            <TabsContent value="jour" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2" />
                    Rendez-vous du jour
                  </CardTitle>
                  <CardDescription>{rendezVous.length} rendez-vous programmés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rendezVous.map((rdv) => (
                      <div key={rdv.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-purple-600">{formatHeure(rdv.dateHeure)}</div>
                              <div className="text-xs text-gray-500">{rdv.service.duree}min</div>
                            </div>

                            <div className="w-px h-16 bg-gray-200" />

                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{rdv.client.nom}</h4>
                                {getStatutBadge(rdv.statut)}
                                {getCanalBadge(rdv.canal)}
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{rdv.service.nom}</p>
                              <p className="text-sm text-gray-500">Staff: {rdv.staff}</p>
                              {rdv.notes && <p className="text-xs text-gray-500 mt-2 italic">&quot;{rdv.notes}&quot;</p>}
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-900">
                                {rdv.service.prix.toLocaleString()} FCFA
                              </div>
                              <div className="text-xs text-gray-500">{rdv.client.telephone}</div>
                            </div>
                          </div>

                          <div className="flex space-x-2 ml-4">
                            <Button variant="ghost" size="sm" title="Appeler">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Envoyer SMS">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              title="Modifier"
                              onClick={() => {
                                setSelectedAppointment(rdv)
                                setIsDialogOpen(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>

                            {rdv.statut === "en-attente" && (
                              <Button
                                variant="ghost"
                                size="sm"
                                title="Confirmer"
                                onClick={() => handleStatusChange(rdv.id, "confirmé")}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}

                            <Button
                              variant="ghost"
                              size="sm"
                              title="Annuler"
                              onClick={() => handleStatusChange(rdv.id, "annulé")}
                              className="text-red-600 hover:text-red-700"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="semaine" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500 py-12">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Vue semaine en cours de développement</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mois" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500 py-12">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Vue mois en cours de développement</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
