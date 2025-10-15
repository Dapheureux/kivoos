"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calendar, Users, Settings, BarChart3, Bell, Scissors, Menu, X, Home, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home },
  { name: "Rendez-vous", href: "/dashboard/rendez-vous", icon: Calendar },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Services", href: "/dashboard/services", icon: Scissors },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Statistiques", href: "/dashboard/statistiques", icon: BarChart3 },
  { name: "Paramètres", href: "/dashboard/parametres", icon: Settings },
]

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)} className="bg-white shadow-md">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Image src="/kivoos-logo.png" alt="Kivoos" width={100} height={32} />
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-purple-100 text-purple-700 border-r-2 border-purple-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Salon Belle Époque</p>
                <p className="text-xs text-gray-500 truncate">Marie Dubois</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
              <LogOut className="mr-3 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
