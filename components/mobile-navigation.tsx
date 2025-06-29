"use client"

import { Home, Search, Calendar, MessageCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      icon: Home,
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/services",
      icon: Search,
      label: "Services",
      active: pathname === "/services",
    },
    {
      href: "/bookings",
      icon: Calendar,
      label: "Bookings",
      active: pathname === "/bookings" || pathname === "/dashboard",
    },
    {
      href: "/messages",
      icon: MessageCircle,
      label: "Messages",
      active: pathname === "/messages",
    },
    {
      href: "/profile",
      icon: User,
      label: "Profile",
      active: pathname === "/profile",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors",
              item.active ? "text-blue-600" : "text-gray-500 hover:text-gray-700",
            )}
          >
            <item.icon className={cn("h-6 w-6", item.active && "fill-current")} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
