"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, MoreVertical, Mail, Phone, CalendarIcon, Clock, TrendingUp, Users, Star } from "lucide-react"

export default function EquipePage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const membres = [
    {
      id: 1,
      nom: "Sophie Martin",
      role: "Coiffeuse senior",
      email: "sophie.martin@example.com",
      telephone: "+33 6 12 34 56 78",
      statut: "Actif",
      rdvCeMois: 45,
      revenuCeMois: 2250,
      satisfaction: 4.8,
      specialites: ["Coupe femme", "Coloration", "Balayage"],
      horaires: "Lun-Sam 9h-18h",
    },
    {
      id: 2,
      nom: "Julie Bernard",
      role: "Coiffeuse",
      email: "julie.bernard@example.com",
      telephone: "+33 6 23 45 67 89",
      statut: "Actif",
      rdvCeMois: 38,
      revenuCeMois: 1900,
      satisfaction: 4.6,
      specialites: ["Coupe homme", "Barbe", "Coupe enfant"],
      horaires: "Mar-Sam 10h-19h",
    },
    {
      id: 3,
      nom: "Lucas Petit",
      role: "Barbier",
      email: "lucas.petit@example.com",
      telephone: "+33 6 34 56 78 90",
      statut: "En congé",
      rdvCeMois: 0,
      revenuCeMois: 0,
      satisfaction: 4.7,
      specialites: ["Barbe", "Taille", "Rasage"],
      horaires: "Lun-Ven 11h-20h",
    },
    {
      id: 4,
      nom: "Emma Dubois",
      role: "Esthéticienne",
      email: "emma.dubois@example.com",
      telephone: "+33 6 45 67 89 01",
      statut: "Actif",
      rdvCeMois: 52,
      revenuCeMois: 3120,
      satisfaction: 4.9,
      specialites: ["Manucure", "Pédicure", "Extensions"],
      horaires: "Lun-Sam 9h-17h",
    },
  ]

  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Équipe</h1>
          <p className="text-muted-foreground mt-2">Gérez votre équipe et suivez leurs performances</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Ajouter un membre
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Ajouter un membre d &#39;équipe</DialogTitle>
              <DialogDescription>Invitez un nouveau membre à rejoindre votre établissement</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" placeholder="Sophie" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" placeholder="Martin" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="sophie.martin@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone</Label>
                <Input id="telephone" type="tel" placeholder="+33 6 12 34 56 78" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Sélectionnez un rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coiffeur">Coiffeur/Coiffeuse</SelectItem>
                    <SelectItem value="barbier">Barbier</SelectItem>
                    <SelectItem value="estheticien">Esthéticien/ne</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="receptionniste">Réceptionniste</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialites">Spécialités</Label>
                <Input id="specialites" placeholder="Ex: Coupe, Coloration, Balayage" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Annuler
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setDialogOpen(false)}>
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats rapides */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Membres actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">sur 4 membres</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">RDV ce mois</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">135</div>
            <p className="text-xs text-muted-foreground">+12% vs mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenu total</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 270€</div>
            <p className="text-xs text-muted-foreground">+8% vs mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction moyenne</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.75</div>
            <p className="text-xs text-muted-foreground">Excellent niveau</p>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Rechercher un membre..." className="pl-9" />
        </div>
        <Select defaultValue="tous">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tous">Tous les statuts</SelectItem>
            <SelectItem value="actif">Actifs</SelectItem>
            <SelectItem value="conge">En congé</SelectItem>
            <SelectItem value="inactif">Inactifs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Liste des membres */}
      <div className="grid gap-6">
        {membres.map((membre) => (
          <Card key={membre.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl font-semibold text-purple-600">
                    {membre.nom
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{membre.nom}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <span>{membre.role}</span>
                      <Badge
                        variant={membre.statut === "Actif" ? "secondary" : "outline"}
                        className={
                          membre.statut === "Actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }
                      >
                        {membre.statut}
                      </Badge>
                    </CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="infos" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="infos">Informations</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="horaires">Horaires</TabsTrigger>
                </TabsList>
                <TabsContent value="infos" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{membre.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{membre.telephone}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Spécialités</Label>
                    <div className="flex flex-wrap gap-2">
                      {membre.specialites.map((spec, index) => (
                        <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="performance" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <Label className="text-sm text-muted-foreground">RDV ce mois</Label>
                      <p className="text-2xl font-bold">{membre.rdvCeMois}</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm text-muted-foreground">Revenu généré</Label>
                      <p className="text-2xl font-bold">{membre.revenuCeMois}€</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm text-muted-foreground">Satisfaction</Label>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">{membre.satisfaction}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(membre.satisfaction)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="horaires" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{membre.horaires}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Modifier les horaires
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
