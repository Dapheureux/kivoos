"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building2, Mail, Lock, User, Phone, MapPin } from "lucide-react"

export default function InscriptionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // Informations entreprise
    businessName: "",
    businessType: "",
    address: "",
    city: "",
    acceptTerms: false,
  })

  const handleNext = () => {
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription
    console.log("Inscription:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l&#39;accueil</span>
          </Link>
          <Image src="/kivoos-logo.png" alt="kivoos" width={150} height={50} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Créer votre compte kivoos</h1>
          <p className="text-muted-foreground mt-2">Commencez votre essai gratuit de 14 jours</p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  1
                </div>
                <span className="text-sm font-medium">Informations personnelles</span>
              </div>
              <div className="flex-1 h-px bg-border mx-4" />
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  2
                </div>
                <span className="text-sm font-medium">Votre entreprise</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Jean"
                          className="pl-10"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Dupont"
                          className="pl-10"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@exemple.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+242 06 123 45 67"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Minimum 8 caractères</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <Button type="button" onClick={handleNext} className="w-full" size="lg">
                    Continuer
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Nom de l&#39;entreprise</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Salon Élégance"
                        className="pl-10"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Type d&#39;entreprise</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger id="businessType">
                        <SelectValue placeholder="Sélectionnez votre secteur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salon">Salon de coiffure</SelectItem>
                        <SelectItem value="beauty">Institut de beauté</SelectItem>
                        <SelectItem value="spa">Spa & Bien-être</SelectItem>
                        <SelectItem value="barbershop">Barbershop</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="boutique">Boutique</SelectItem>
                        <SelectItem value="pharmacy">Pharmacie</SelectItem>
                        <SelectItem value="laundry">Blanchisserie</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 Avenue de la Paix"
                        className="pl-10"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Sélectionnez votre ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brazzaville">Brazzaville</SelectItem>
                        <SelectItem value="pointe-noire">Pointe-Noire</SelectItem>
                        <SelectItem value="dolisie">Dolisie</SelectItem>
                        <SelectItem value="nkayi">Nkayi</SelectItem>
                        <SelectItem value="ouesso">Ouesso</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                      J&#39;accepte les{" "}
                      <a href="#" className="text-primary hover:underline">
                        conditions d&#39;utilisation
                      </a>{" "}
                      et la{" "}
                      <a href="#" className="text-primary hover:underline">
                        politique de confidentialité
                      </a>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={handleBack}
                      variant="outline"
                      className="flex-1 bg-transparent"
                      size="lg"
                    >
                      Retour
                    </Button>
                    <Button type="submit" className="flex-1" size="lg" disabled={!formData.acceptTerms}>
                      Créer mon compte
                    </Button>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          En créant un compte, vous bénéficiez de 14 jours d&#39;essai gratuit. Aucune carte bancaire requise.
        </p>
      </div>
    </div>
  )
}
