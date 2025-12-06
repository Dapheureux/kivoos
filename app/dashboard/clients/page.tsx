"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Calendar,
  Edit,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Eye,
} from "lucide-react"

export default function ClientsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const [viewMode, setViewMode] = useState<"liste" | "cartes">("cartes")
  const [searchTerm, setSearchTerm] = useState("")

  // Données simulées
  const clients = [
    {
      id: 1,
      prenom: "Marie",
      nom: "Dubois",
      telephone: "+242 06 123 45 67",
      email: "marie.dubois@email.com",
      anniversaire: "1985-03-15",
      adresse: "123 Avenue de la Paix, Brazzaville",
      notes: "Cliente VIP, préfère les rendez-vous le matin",
      tags: ["VIP", "Fidèle"],
      dateCreation: "2023-01-15",
      dernierRdv: "2024-01-10",
      prochainRdv: "2024-01-20",
      nbRendezVous: 24,
      montantTotal: 580000,
      moyenneVisite: 25000,
      frequence: "Mensuelle",
      statut: "Actif",
    },
    {
      id: 2,
      prenom: "Jean",
      nom: "Kouassi",
      telephone: "+242 06 987 65 43",
      email: "jean.kouassi@email.com",
      anniversaire: "1990-07-22",
      adresse: "456 Rue des Palmiers, Pointe-Noire",
      notes: "Coupe courte uniquement",
      tags: ["Régulier"],
      dateCreation: "2023-06-10",
      dernierRdv: "2024-01-05",
      prochainRdv: null,
      nbRendezVous: 12,
      montantTotal: 180000,
      moyenneVisite: 15000,
      frequence: "Bimensuelle",
      statut: "Actif",
    },
    {
      id: 3,
      prenom: "Fatou",
      nom: "Diallo",
      telephone: "+242 06 555 12 34",
      email: "fatou.diallo@email.com",
      anniversaire: "1988-11-08",
      adresse: "789 Boulevard du Fleuve, Brazzaville",
      notes: "Allergique aux produits chimiques",
      tags: ["Nouveau", "Allergie"],
      dateCreation: "2024-01-01",
      dernierRdv: null,
      prochainRdv: "2024-01-15",
      nbRendezVous: 1,
      montantTotal: 20000,
      moyenneVisite: 20000,
      frequence: "Nouveau",
      statut: "Nouveau",
    },
    {
      id: 4,
      prenom: "Paul",
      nom: "Mbemba",
      telephone: "+242 06 777 88 99",
      email: "paul.mbemba@email.com",
      anniversaire: "1982-04-30",
      adresse: "321 Avenue des Martyrs, Dolisie",
      notes: "Client depuis 2 ans, très ponctuel",
      tags: ["Fidèle", "Ponctuel"],
      dateCreation: "2022-03-20",
      dernierRdv: "2023-12-15",
      prochainRdv: null,
      nbRendezVous: 18,
      montantTotal: 450000,
      moyenneVisite: 25000,
      frequence: "Trimestrielle",
      statut: "Inactif",
    },
  ]

  const tags = ["VIP", "Fidèle", "Nouveau", "Régulier", "Allergie", "Ponctuel"]

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case "Actif":
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>
      case "Nouveau":
        return <Badge className="bg-blue-100 text-blue-800">Nouveau</Badge>
      case "Inactif":
        return <Badge className="bg-gray-100 text-gray-800">Inactif</Badge>
      default:
        return <Badge variant="secondary">{statut}</Badge>
    }
  }

  const getInitiales = (prenom: string, nom: string) => {
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase()
  }

  const filteredClients = clients.filter(
    (client) =>
      `${client.prenom} ${client.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.telephone.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">

        <main className="flex-1 overflow-y-auto p-6">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestion des clients</h1>
              <p className="text-gray-600">Gérez votre base de données clients</p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau client
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedClient ? "Modifier le client" : "Nouveau client"}</DialogTitle>
                  <DialogDescription>Remplissez les informations du client</DialogDescription>
                </DialogHeader>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Marie" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input id="nom" placeholder="Dubois" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input id="telephone" placeholder="+242 06 123 45 67" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="marie@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="anniversaire">Date d'anniversaire</Label>
                    <Input id="anniversaire" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adresse">Adresse</Label>
                    <Input id="adresse" placeholder="123 Avenue de la Paix, Brazzaville" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-purple-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Notes particulières sur ce client..." rows={3} />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      {selectedClient ? "Modifier" : "Créer"} le client
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
                    <p className="text-sm font-medium text-gray-600">Total clients</p>
                    <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Clients actifs</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {clients.filter((c) => c.statut === "Actif").length}
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Nouveaux ce mois</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {clients.filter((c) => c.statut === "Nouveau").length}
                    </p>
                  </div>
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenus clients</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {clients.reduce((sum, c) => sum + c.montantTotal, 0).toLocaleString()} FCFA
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
                      placeholder="Rechercher par nom, téléphone, email..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous</SelectItem>
                      <SelectItem value="actif">Actifs</SelectItem>
                      <SelectItem value="nouveau">Nouveaux</SelectItem>
                      <SelectItem value="inactif">Inactifs</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous les tags</SelectItem>
                      {tags.map((tag) => (
                        <SelectItem key={tag} value={tag.toLowerCase()}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === "cartes" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("cartes")}
                      className="rounded-r-none"
                    >
                      Cartes
                    </Button>
                    <Button
                      variant={viewMode === "liste" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("liste")}
                      className="rounded-l-none"
                    >
                      Liste
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liste des clients */}
          {viewMode === "cartes" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client) => (
                <Card key={client.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">
                            {getInitiales(client.prenom, client.nom)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {client.prenom} {client.nom}
                          </h3>
                          <p className="text-sm text-gray-500">{client.telephone}</p>
                        </div>
                      </div>
                      {getStatutBadge(client.statut)}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {client.nbRendezVous} rendez-vous
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {client.montantTotal.toLocaleString()} FCFA
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {client.frequence}
                      </div>
                    </div>

                    {client.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {client.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Phone className="h-4 w-4 mr-1" />
                        Appeler
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Calendar className="h-4 w-4 mr-1" />
                        RDV
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedClient(client)
                          // Ouvrir modal de détails
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">Client</th>
                        <th className="text-left p-4 font-medium text-gray-900">Contact</th>
                        <th className="text-left p-4 font-medium text-gray-900">Statut</th>
                        <th className="text-left p-4 font-medium text-gray-900">RDV</th>
                        <th className="text-left p-4 font-medium text-gray-900">Total</th>
                        <th className="text-left p-4 font-medium text-gray-900">Dernier RDV</th>
                        <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredClients.map((client) => (
                        <tr key={client.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-purple-100 text-purple-600 text-sm">
                                  {getInitiales(client.prenom, client.nom)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {client.prenom} {client.nom}
                                </div>
                                {client.tags.length > 0 && (
                                  <div className="flex gap-1 mt-1">
                                    {client.tags.slice(0, 2).map((tag) => (
                                      <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm text-gray-900">{client.telephone}</div>
                            <div className="text-sm text-gray-500">{client.email}</div>
                          </td>
                          <td className="p-4">{getStatutBadge(client.statut)}</td>
                          <td className="p-4">
                            <div className="text-sm text-gray-900">{client.nbRendezVous}</div>
                            <div className="text-sm text-gray-500">{client.frequence}</div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm font-medium text-gray-900">
                              {client.montantTotal.toLocaleString()} FCFA
                            </div>
                            <div className="text-sm text-gray-500">
                              Moy: {client.moyenneVisite.toLocaleString()} FCFA
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm text-gray-900">
                              {client.dernierRdv ? new Date(client.dernierRdv).toLocaleDateString("fr-FR") : "Jamais"}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Phone className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Calendar className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelectedClient(client)
                                  setIsDialogOpen(true)
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
