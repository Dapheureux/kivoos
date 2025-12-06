import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // TODO: Implémenter la logique de connexion avec la base de données
    // - Vérifier les credentials
    // - Hasher et comparer le mot de passe
    // - Créer une session/token JWT

    // Exemple de réponse (à remplacer par la vraie logique)
    if (email && password) {
      return NextResponse.json(
        {
          success: true,
          user: {
            id: 1,
            email: email,
            firstName: "Marie",
            lastName: "Dubois",
            enterprise: {
              id: 1,
              name: "Salon Belle Époque",
            },
          },
          token: "example-jwt-token",
        },
        { status: 200 },
      )
    }

    return NextResponse.json({ success: false, message: "Email ou mot de passe incorrect" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Erreur lors de la connexion:", error)
    return NextResponse.json({ success: false, message: "Erreur serveur" }, { status: 500 })
  }
}
