import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password, businessName, businessType, phone } = await request.json()

    // TODO: Implémenter la logique d'inscription
    // - Vérifier que l'email n'existe pas déjà
    // - Hasher le mot de passe avec bcrypt
    // - Créer l'entreprise dans la base de données
    // - Créer l'utilisateur propriétaire
    // - Créer une session/token JWT

    // Exemple de réponse (à remplacer par la vraie logique)
    if (email && password && businessName) {
      return NextResponse.json(
        {
          success: true,
          user: {
            id: 1,
            email: email,
            firstName: firstName,
            lastName: lastName,
            enterprise: {
              id: 1,
              name: businessName,
              type: businessType,
            },
          },
          token: "example-jwt-token",
        },
        { status: 201 },
      )
    }

    return NextResponse.json({ success: false, message: "Données invalides" }, { status: 400 })
  } catch (error) {
    console.error("[v0] Erreur lors de l'inscription:", error)
    return NextResponse.json({ success: false, message: "Erreur serveur" }, { status: 500 })
  }
}
