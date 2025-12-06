"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, TrendingUp, Star, MapPin, Phone, Mail } from "lucide-react"

export default function ProfilPage() {
  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header avec photo de profil */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full flex items-center justify-center text-3xl font-bold text-white">
            MD
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marie Dubois</h1>
            <p className="text-muted-foreground mt-1">Propriétaire • Salon Belle Époque</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-purple-100 text-purple-700">Compte Premium</Badge>
              <Badge variant="outline">Membre depuis Nov 2023</Badge>
            </div>
          </div>
        </div>
        <Button variant="outline">Modifier le profil</Button>
      </div>

      <Tabs defaultValue="apercu" className="space-y-6">
        <TabsList>
          <TabsTrigger value="apercu">Aperçu</TabsTrigger>
          <TabsTrigger value="activite">Activité</TabsTrigger>
          <TabsTrigger value="parametres">Paramètres</TabsTrigger>
        </TabsList>

        {/* Aperçu */}
        <TabsContent value="apercu" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Vos coordonnées et informations de contact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>marie.dubois@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>15 Rue de la Paix, 75002 Paris</span>
                </div>
              </CardContent>
            </Card>

            {/* Statistiques rapides */}
            <Card>
              <CardHeader>
                <CardTitle>Statistiques du mois</CardTitle>
                <CardDescription>Vos performances de décembre</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Rendez-vous</span>
                  </div>
                  <span className="text-2xl font-bold">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Revenu généré</span>
                  </div>
                  <span className="text-2xl font-bold">2 250€</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Note moyenne</span>
                  </div>
                  <span className="text-2xl font-bold">4.8</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges et récompenses */}
          <Card>
            <CardHeader>
              <CardTitle>Badges et réalisations</CardTitle>
              <CardDescription>Vos accomplissements sur la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { titre: "Premier RDV", description: "Première réservation", icon: "🎉" },
                  { titre: "100 Clients", description: "100 clients satisfaits", icon: "🏆" },
                  { titre: "Note 5⭐", description: "Première note 5 étoiles", icon: "⭐" },
                  { titre: "1 An", description: "1 an sur Kivoos", icon: "🎂" },
                ].map((badge, index) => (
                  <div key={index} className="flex flex-col items-center p-4 border rounded-lg text-center">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h3 className="font-semibold">{badge.titre}</h3>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card>
            <CardHeader>
              <CardTitle>À propos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionnée de coiffure depuis plus de 15 ans, j &#39;ai ouvert le Salon Belle Époque en 2015 avec la vision
                de créer un espace où l &#39;élégance rencontre la modernité. Notre équipe de professionnels qualifiés
                s &#39;engage à offrir une expérience unique à chaque client, en alliant techniques traditionnelles et
                tendances contemporaines.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activité */}
        <TabsContent value="activite" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>Historique de vos actions sur la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "Nouveau rendez-vous confirmé",
                    details: "Sophie Martin - Coupe + Coloration",
                    date: "Il y a 2 heures",
                  },
                  {
                    action: "Client ajouté",
                    details: "Jean Dupont",
                    date: "Il y a 5 heures",
                  },
                  {
                    action: "Service modifié",
                    details: "Balayage - Prix mis à jour",
                    date: "Hier à 14:30",
                  },
                  {
                    action: "Avis client reçu",
                    details: "5 étoiles de Marie Martin",
                    date: "Hier à 10:15",
                  },
                  {
                    action: "Rendez-vous annulé",
                    details: "Pierre Lefebvre - Coupe homme",
                    date: "Il y a 2 jours",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres */}
        <TabsContent value="parametres" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Modifier les informations</CardTitle>
              <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="marie.dubois@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input id="telephone" type="tel" defaultValue="+33 6 12 34 56 78" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" rows={4} defaultValue="Passionnée de coiffure depuis plus de 15 ans..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
