"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MobileHeader } from "@/components/mobile-header"
import { Star, Search, MapPin, Clock, Shield, MessageCircle, SlidersHorizontal, Home, Sparkles, Droplets, Scissors } from "lucide-react"
import Link from "next/link"

export default function CleaningPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const cleaningProviders = [
    {
      id: 1,
      name: "Maria Santos",
      service: "House Cleaning",
      type: "regular",
      rating: 4.9,
      reviews: 127,
      price: 800,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 1 hour",
      distance: "2.3 km",
      availability: "Available today",
      specialties: ["Deep Cleaning", "Regular Maintenance", "Move-in/out"]
    },
    {
      id: 2,
      name: "Lisa Chen",
      service: "Deep Cleaning",
      type: "deep",
      rating: 4.8,
      reviews: 94,
      price: 1000,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 1 hour",
      distance: "1.5 km",
      availability: "Available today",
      specialties: ["Deep Cleaning", "Carpet Cleaning", "Window Cleaning"]
    },
    {
      id: 3,
      name: "Ana Rodriguez",
      service: "Move-in Cleaning",
      type: "move",
      rating: 4.9,
      reviews: 156,
      price: 1200,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 2 hours",
      distance: "3.1 km",
      availability: "Available tomorrow",
      specialties: ["Move-in/out", "Deep Cleaning", "Disinfection"]
    },
    {
      id: 4,
      name: "Sarah Johnson",
      service: "Office Cleaning",
      type: "commercial",
      rating: 4.7,
      reviews: 89,
      price: 1500,
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      responseTime: "< 3 hours",
      distance: "4.2 km",
      availability: "Available today",
      specialties: ["Commercial", "Regular Maintenance", "Sanitization"]
    },
  ]

  const cleaningTypes = [
    { icon: Home, name: "Regular Cleaning", count: "80+", color: "bg-blue-100 text-blue-700" },
    { icon: Sparkles, name: "Deep Cleaning", count: "45+", color: "bg-purple-100 text-purple-700" },
    { icon: Droplets, name: "Move-in/out", count: "30+", color: "bg-green-100 text-green-700" },
    { icon: Scissors, name: "Commercial", count: "25+", color: "bg-orange-100 text-orange-700" },
  ]

  const cleaningCategories = [
    { value: "all", label: "All Types" },
    { value: "regular", label: "Regular Cleaning" },
    { value: "deep", label: "Deep Cleaning" },
    { value: "move", label: "Move-in/out" },
    { value: "commercial", label: "Commercial" },
  ]

  const filteredProviders = cleaningProviders.filter((provider) => {
    const matchesType = selectedType === "all" || provider.type === selectedType
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.service.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileHeader title="Cleaning Services" />

      {/* Search and Filters */}
      <div className="bg-white border-b px-4 py-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search cleaning services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex space-x-2">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Cleaning Type" />
            </SelectTrigger>
            <SelectContent>
              {cleaningCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="distance">Nearest First</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{filteredProviders.length} cleaning providers found</span>
          <div className="flex items-center space-x-1 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Makati City</span>
          </div>
        </div>
      </div>

      {/* Cleaning Types */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-bold mb-4">Cleaning Services</h3>
        <div className="grid grid-cols-2 gap-3">
          {cleaningTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mx-auto mb-2`}
                >
                  <type.icon className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-sm mb-1">{type.name}</h4>
                <p className="text-xs text-gray-500">{type.count} providers</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Provider Listings */}
      <div className="px-4 py-4 space-y-3">
        <h3 className="text-lg font-bold mb-4">Top Cleaning Providers</h3>
        {filteredProviders.map((provider) => (
          <Card key={provider.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                  <AvatarFallback>
                    {provider.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-sm truncate">{provider.name}</h3>
                        {provider.verified && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                            <Shield className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mb-1">{provider.service}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
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
                      <div className="flex flex-wrap gap-1 mb-2">
                        {provider.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-600 font-medium">{provider.availability}</span>
                        <span className="text-xs text-gray-500">{provider.distance} away</span>
                      </div>
                    </div>

                    <div className="text-right ml-3">
                      <div className="text-lg font-bold text-blue-600">₱{provider.price}</div>
                      <div className="text-xs text-gray-500">per hour</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/book/${provider.id}`}>Book Now</Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <MobileNavigation />
    </div>
  )
}