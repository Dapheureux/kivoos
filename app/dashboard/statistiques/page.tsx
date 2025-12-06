"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts"

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Calendar,
  Clock,
  Download,
  Star,
  Target,
  Award,
} from "lucide-react"

export default function StatistiquesPage() {
  const [periode, setPeriode] = useState("mois")
  const [comparaison, setComparaison] = useState("precedent")

  // Données simulées pour les graphiques
  const revenusData = [
    { mois: "Jan", revenus: 850000, objectif: 800000, precedent: 720000 },
    { mois: "Fév", revenus: 920000, objectif: 850000, precedent: 780000 },
    { mois: "Mar", revenus: 1050000, objectif: 900000, precedent: 850000 },
    { mois: "Avr", revenus: 980000, objectif: 950000, precedent: 920000 },
    { mois: "Mai", revenus: 1150000, objectif: 1000000, precedent: 980000 },
    { mois: "Jun", revenus: 1280000, objectif: 1100000, precedent: 1050000 },
  ]

  const rendezVousData = [
    { jour: "Lun", total: 12, confirmes: 10, annules: 1, noShows: 1 },
    { jour: "Mar", total: 15, confirmes: 13, annules: 1, noShows: 1 },
    { jour: "Mer", total: 18, confirmes: 16, annules: 1, noShows: 1 },
    { jour: "Jeu", total: 14, confirmes: 12, annules: 1, noShows: 1 },
    { jour: "Ven", total: 20, confirmes: 18, annules: 1, noShows: 1 },
    { jour: "Sam", total: 25, confirmes: 22, annules: 2, noShows: 1 },
    { jour: "Dim", total: 8, confirmes: 7, annules: 0, noShows: 1 },
  ]

  const servicesData = [
    { nom: "Coupe + Brushing", revenus: 1125000, nb: 45, couleur: "#8B5CF6" },
    { nom: "Coloration", revenus: 980000, nb: 28, couleur: "#F59E0B" },
    { nom: "Coupe homme", revenus: 480000, nb: 32, couleur: "#10B981" },
    { nom: "Manucure", revenus: 440000, nb: 22, couleur: "#EF4444" },
    { nom: "Pédicure", revenus: 396000, nb: 18, couleur: "#3B82F6" },
  ]

  const clientsData = [
    { segment: "Nouveaux", nombre: 15, pourcentage: 18, couleur: "#3B82F6" },
    { segment: "Réguliers", nombre: 35, pourcentage: 42, couleur: "#10B981" },
    { segment: "VIP", nombre: 20, pourcentage: 24, couleur: "#8B5CF6" },
    { segment: "Inactifs", nombre: 13, pourcentage: 16, couleur: "#6B7280" },
  ]

  const performanceStaff = [
    {
      nom: "Marie Dubois",
      rdvTotal: 45,
      revenus: 1125000,
      satisfaction: 4.8,
      tauxAnnulation: 5,
      clientsFideles: 28,
    },
    {
      nom: "Sophie Martin",
      rdvTotal: 38,
      revenus: 950000,
      satisfaction: 4.6,
      tauxAnnulation: 8,
      clientsFideles: 22,
    },
    {
      nom: "Claire Nkomo",
      rdvTotal: 32,
      revenus: 800000,
      satisfaction: 4.7,
      tauxAnnulation: 6,
      clientsFideles: 18,
    },
  ]

  const metriques = {
    revenusTotal: 6430000,
    croissanceRevenu: 15.2,
    rdvTotal: 153,
    croissanceRdv: 8.5,
    clientsActifs: 83,
    croissanceClients: 12.1,
    tauxOccupation: 78,
    variationOccupation: 3.2,
    panierMoyen: 42000,
    croissancePanier: 6.8,
    tauxFidelisation: 68,
    variationFidelisation: 4.1,
  }

  const getVariationIcon = (variation: number) => {
    return variation > 0 ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    )
  }

  const getVariationColor = (variation: number) => {
    return variation > 0 ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="flex h-screen bg-gray-50">

      <div className="flex-1 flex flex-col overflow-hidden">


        <main className="flex-1 overflow-y-auto p-6">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Statistiques & Reporting</h1>
              <p className="text-gray-600">Analysez les performances de votre salon</p>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={periode} onValueChange={setPeriode}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semaine">Cette semaine</SelectItem>
                  <SelectItem value="mois">Ce mois</SelectItem>
                  <SelectItem value="trimestre">Ce trimestre</SelectItem>
                  <SelectItem value="annee">Cette année</SelectItem>
                </SelectContent>
              </Select>

              <Select value={comparaison} onValueChange={setComparaison}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="precedent">Période précédente</SelectItem>
                  <SelectItem value="annee">Année précédente</SelectItem>
                  <SelectItem value="objectif">Vs Objectifs</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
            </div>
          </div>

          {/* Métriques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenus</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.revenusTotal.toLocaleString()} FCFA</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.croissanceRevenu)}`}>
                      {getVariationIcon(metriques.croissanceRevenu)}
                      <span className="ml-1">+{metriques.croissanceRevenu}%</span>
                    </div>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Rendez-vous</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.rdvTotal}</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.croissanceRdv)}`}>
                      {getVariationIcon(metriques.croissanceRdv)}
                      <span className="ml-1">+{metriques.croissanceRdv}%</span>
                    </div>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Clients actifs</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.clientsActifs}</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.croissanceClients)}`}>
                      {getVariationIcon(metriques.croissanceClients)}
                      <span className="ml-1">+{metriques.croissanceClients}%</span>
                    </div>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Taux occupation</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.tauxOccupation}%</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.variationOccupation)}`}>
                      {getVariationIcon(metriques.variationOccupation)}
                      <span className="ml-1">+{metriques.variationOccupation}%</span>
                    </div>
                  </div>
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Panier moyen</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.panierMoyen.toLocaleString()} FCFA</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.croissancePanier)}`}>
                      {getVariationIcon(metriques.croissancePanier)}
                      <span className="ml-1">+{metriques.croissancePanier}%</span>
                    </div>
                  </div>
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Fidélisation</p>
                    <p className="text-2xl font-bold text-gray-900">{metriques.tauxFidelisation}%</p>
                    <div className={`flex items-center text-sm ${getVariationColor(metriques.variationFidelisation)}`}>
                      {getVariationIcon(metriques.variationFidelisation)}
                      <span className="ml-1">+{metriques.variationFidelisation}%</span>
                    </div>
                  </div>
                  <Award className="h-8 w-8 text-pink-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="revenus" className="space-y-6">
            <TabsList>
              <TabsTrigger value="revenus">Revenus</TabsTrigger>
              <TabsTrigger value="rendez-vous">Rendez-vous</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>

            <TabsContent value="revenus">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Évolution des revenus</CardTitle>
                    <CardDescription>Revenus mensuels vs objectifs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        revenus: {
                          label: "Revenus",
                          color: "hsl(var(--chart-1))",
                        },
                        objectif: {
                          label: "Objectif",
                          color: "hsl(var(--chart-2))",
                        },
                        precedent: {
                          label: "Année précédente",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenusData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="mois" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line type="monotone" dataKey="revenus" stroke="var(--color-revenus)" strokeWidth={3} />
                          <Line
                            type="monotone"
                            dataKey="objectif"
                            stroke="var(--color-objectif)"
                            strokeDasharray="5 5"
                          />
                          <Line type="monotone" dataKey="precedent" stroke="var(--color-precedent)" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Répartition revenus</CardTitle>
                    <CardDescription>Par service ce mois</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        revenus: {
                          label: "Revenus",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={servicesData}
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="revenus"
                            label={({ nom, pourcentage }) => `${nom}: ${pourcentage}%`}
                          >
                            {servicesData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.couleur} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="rendez-vous">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rendez-vous par jour</CardTitle>
                    <CardDescription>Répartition hebdomadaire</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        confirmes: {
                          label: "Confirmés",
                          color: "hsl(var(--chart-1))",
                        },
                        annules: {
                          label: "Annulés",
                          color: "hsl(var(--chart-2))",
                        },
                        noShows: {
                          label: "No-shows",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={rendezVousData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="jour" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="confirmes" stackId="a" fill="var(--color-confirmes)" />
                          <Bar dataKey="annules" stackId="a" fill="var(--color-annules)" />
                          <Bar dataKey="noShows" stackId="a" fill="var(--color-noShows)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métriques rendez-vous</CardTitle>
                    <CardDescription>Indicateurs de performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Taux de confirmation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "89%" }} />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">89%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Taux d'annulation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "7%" }} />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">7%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Taux de no-show</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "4%" }} />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">4%</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">2.3h</p>
                          <p className="text-xs text-gray-500">Temps moyen RDV</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">15min</p>
                          <p className="text-xs text-gray-500">Temps d'attente</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Performance des services</CardTitle>
                  <CardDescription>Analyse détaillée par service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {servicesData.map((service, index) => (
                      <div key={service.nom} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold"
                            style={{ backgroundColor: service.couleur }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.nom}</h4>
                            <p className="text-sm text-gray-500">{service.nb} rendez-vous ce mois</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-8">
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{service.revenus.toLocaleString()} FCFA</p>
                            <p className="text-sm text-gray-500">Revenus</p>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              {Math.round(service.revenus / service.nb).toLocaleString()} FCFA
                            </p>
                            <p className="text-sm text-gray-500">Prix moyen</p>
                          </div>

                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                backgroundColor: service.couleur,
                                width: `${(service.revenus / Math.max(...servicesData.map((s) => s.revenus))) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clients">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Segmentation clients</CardTitle>
                    <CardDescription>Répartition par catégorie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        nombre: {
                          label: "Nombre",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={clientsData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="nombre"
                            label={({ segment, pourcentage }) => `${segment}: ${pourcentage}%`}
                          >
                            {clientsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.couleur} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métriques clients</CardTitle>
                    <CardDescription>Indicateurs de fidélisation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">3.2</p>
                        <p className="text-sm text-gray-600">Visites moyennes</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">42 000</p>
                        <p className="text-sm text-gray-600">LTV moyenne (FCFA)</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Taux de rétention</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }} />
                          </div>
                          <span className="text-sm font-semibold text-gray-900">68%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Clients recommandants</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "45%" }} />
                          </div>
                          <span className="text-sm font-semibold text-gray-900">45%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Satisfaction moyenne</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 4.7 ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">4.7/5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="staff">
              <Card>
                <CardHeader>
                  <CardTitle>Performance du personnel</CardTitle>
                  <CardDescription>Indicateurs individuels ce mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {performanceStaff.map((staff, index) => (
                      <div key={staff.nom} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="font-semibold text-purple-600">
                                {staff.nom
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{staff.nom}</h4>
                              <p className="text-sm text-gray-500">
                                {staff.rdvTotal} rendez-vous • {staff.revenus.toLocaleString()} FCFA
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Top {index + 1}</Badge>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <p className="text-lg font-bold text-gray-900">{staff.satisfaction}</p>
                            <p className="text-xs text-gray-500">Satisfaction</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <p className="text-lg font-bold text-gray-900">{staff.tauxAnnulation}%</p>
                            <p className="text-xs text-gray-500">Annulations</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <p className="text-lg font-bold text-gray-900">{staff.clientsFideles}</p>
                            <p className="text-xs text-gray-500">Clients fidèles</p>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <p className="text-lg font-bold text-gray-900">
                              {Math.round(staff.revenus / staff.rdvTotal).toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">Revenus/RDV</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
