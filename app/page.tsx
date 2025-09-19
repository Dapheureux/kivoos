import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const industries = [
  {
    title: "F&B",
    items: [
      "Restaurant",
      "Cafés",
      "Entreprise alimentaire à domicile",
      "Boulangerie et pâtisserie",
      "Restauration & Abonnement repas",
      "Bars et restaurants d’hôtel",
      "Épicier & Boucher",
      "B2B et vente en gros",
    ],
  },
  {
    title: "Commerce électronique",
    items: [
      "Commerce électronique",
      "Mode et habillement",
      "Pharmacies & Santé",
      "Téléphone portable et électronique",
      "Produits et services numériques",
      "Boutique éphémère et événementielle",
      "Magasinage personnel",
      "Bijoux et accessoires",
      "Religieux et communautaire",
    ],
  },
  {
    title: "Service",
    items: [
      "Salon",
      "Blanchisserie",
      "Services professionnels",
      "Animaux de compagnie et toilettage",
      "Réservation d’hôtel",
      "Éducation",
      "Services d’impression",
      "Location",
      "Services de visites et de voyages",
      "Billetterie",
    ],
  },
];

export default function Home() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* header */}
      <header>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/kivoos.png"
              alt="Logo Kivoos"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </div>
          <nav className="flex items-center space-x-4 relative">
            <Link href="#" className="--color-primary transition-colors">Comment ça marche ?</Link>
            <Link href="#" className="--color-primary transition-colors">Tarifs</Link>
            {/* Menu Industrie */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("industrie")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="--color-primary transition-colors flex items-center"
                onClick={() => setOpenMenu(openMenu === "industrie" ? null : "industrie")}
              >
                Industrie
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {/* Sous-menu */}
              {openMenu === "industrie" && (
                <div className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-lg z-50 p-6 hidden md:flex space-x-12">
                  {industries.map((col) => (
                    <div key={col.title}>
                      <div className="font-semibold text-gray-700 mb-2">{col.title}</div>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item} className="text-gray-600 hover:text-purple-600 cursor-pointer">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {/* Mobile menu */}
              {openMenu === "industrie" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 p-4 flex flex-col md:hidden">
                  {industries.map((col) => (
                    <div key={col.title} className="mb-4">
                      <div className="font-semibold text-gray-700 mb-2">{col.title}</div>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item} className="text-gray-600 hover:text-purple-600 cursor-pointer">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link href="#" className="--color-primary transition-colors">Ressources</Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-purple-600 transition-colors">
              s'identifier
            </Link>
            <Link
              href="#"
              className="--color-secondary text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Essai Gratuit
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}