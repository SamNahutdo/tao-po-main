"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MobileHeader } from "@/components/mobile-header"
import {
  Star,
  Search,
  MapPin,
  Map,
  Clock,
  Shield,
  Wrench,
  Home,
  Zap,
  Paintbrush,
  Car,
  Laptop,
  ChevronRight,
  X,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showMaps, setShowMaps] = useState(false)

  const serviceCategories = [
    { icon: Home, name: "Cleaning", count: "150+", color: "bg-blue-100 text-blue-700" },
    { icon: Wrench, name: "Plumbing", count: "80+", color: "bg-blue-100 text-blue-700" },
    { icon: Zap, name: "Electrical", count: "65+", color: "bg-yellow-100 text-yellow-700" },
    { icon: Paintbrush, name: "Painting", count: "90+", color: "bg-purple-100 text-purple-700" },
    { icon: Car, name: "Moving", count: "45+", color: "bg-orange-100 text-orange-700" },
    { icon: Laptop, name: "Tech", count: "35+", color: "bg-gray-100 text-gray-700" },
  ]

  const featuredProviders = [
    {
      id: 1,
      name: "Maria Santos",
      service: "House Cleaning",
      rating: 4.9,
      reviews: 127,
      price: "₱800/hr",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 1 hour",
      distance: "2.3 km",
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      service: "Plumbing",
      rating: 4.8,
      reviews: 89,
      price: "₱1,200/hr",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 30 mins",
      distance: "1.8 km",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileHeader />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Find Trusted Local
            <span className="text-blue-600 block">Service Providers</span>
          </h2>
          <p className="text-gray-600 text-sm">Connect with verified professionals for all your home service needs</p>
        </div>

        {/* Search Bar */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="What service do you need?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-white"
            />
          </div>
          <div className="relative flex">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Your location" className="pl-10 h-12 bg-white rounded-r-none" />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-12 px-3 bg-white border-l-0 rounded-l-none hover:bg-gray-50"
              onClick={() => setShowMaps(true)}
            >
              <Map className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
          <Button size="lg" className="w-full h-12">
            Search Services
          </Button>
        </div>
      </div>

      {/* Service Categories */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-bold mb-4">Popular Services</h3>
        <div className="grid grid-cols-3 gap-3">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <Link href={`/services/${category.name.toLowerCase()}`}>
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-sm mb-1">{category.name}</h4>
                <p className="text-xs text-gray-500">{category.count}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Providers */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Top-Rated Providers</h3>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/services">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="space-y-3">
          {featuredProviders.map((provider) => (
            <Card key={provider.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                    <AvatarFallback>
                      {provider.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-sm truncate">{provider.name}</h4>
                      {provider.verified && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{provider.service}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{provider.rating}</span>
                        <span>({provider.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{provider.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600 text-sm">{provider.price}</p>
                    <p className="text-xs text-gray-500">{provider.distance}</p>
                    <Button size="sm" className="mt-2">
                      Book
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="px-4 py-6">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent" asChild>
            <Link href="/emergency">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Emergency Service</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent" asChild>
            <Link href="/schedule">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Schedule Later</span>
            </Link>
          </Button>
        </div>
      </div> */}

      <MobileNavigation />

      {/* Maps Modal */}
      {showMaps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md h-96 relative">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Select Location</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMaps(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 flex items-center justify-center h-64 bg-gray-100 rounded-b-lg">
              <div className="text-center text-gray-500">
                <Map className="h-12 w-12 mx-auto mb-2" />
                <p>Map integration soon</p>
                <p className="text-sm">(Google Maps, etc.)</p>
              </div>
            </div>
            <div className="p-4 border-t">
              <Button className="w-full" onClick={() => setShowMaps(false)}>
                Confirm Location
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
