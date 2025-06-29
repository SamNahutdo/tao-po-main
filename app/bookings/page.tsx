"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MobileHeader } from "@/components/mobile-header"
import { Star, Calendar, Clock, MapPin, MessageCircle, Phone, CheckCircle, AlertCircle } from "lucide-react"

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingBookings = [
    {
      id: 1,
      provider: "Maria Santos",
      service: "House Cleaning",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "3 hours",
      price: 2400,
      status: "confirmed",
      address: "123 Main St, Makati City",
      providerImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      provider: "Juan Dela Cruz",
      service: "Plumbing Repair",
      date: "2024-01-18",
      time: "2:00 PM",
      duration: "2 hours",
      price: 2400,
      status: "pending",
      address: "456 Oak Ave, BGC",
      providerImage: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastBookings = [
    {
      id: 3,
      provider: "Ana Rodriguez",
      service: "Electrical Work",
      date: "2024-01-10",
      time: "9:00 AM",
      duration: "4 hours",
      price: 6000,
      status: "completed",
      rating: 5,
      address: "789 Pine St, Quezon City",
      providerImage: "/placeholder.svg?height=40&width=40",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-3 w-3" />
      case "pending":
        return <AlertCircle className="h-3 w-3" />
      case "completed":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileHeader title="My Bookings" />

      {/* Quick Stats */}
      <div className="bg-white border-b px-4 py-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-blue-600">2</div>
            <div className="text-xs text-gray-600">Upcoming</div>
          </div>
          <div>
            <div className="text-xl font-bold text-blue-600">12</div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-xl font-bold text-yellow-600">4.8</div>
            <div className="text-xs text-gray-600">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <div className="bg-white border-b px-4">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="upcoming" className="text-sm">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="text-sm">
              Past
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="px-4 py-4 space-y-3 mt-0">
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={booking.providerImage || "/placeholder.svg"} alt={booking.provider} />
                      <AvatarFallback>
                        {booking.provider
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-sm">{booking.service}</h3>
                          <p className="text-sm text-gray-600">{booking.provider}</p>
                        </div>
                        <Badge className={`${getStatusColor(booking.status)} text-xs`}>
                          {getStatusIcon(booking.status)}
                          <span className="ml-1 capitalize">{booking.status}</span>
                        </Badge>
                      </div>

                      <div className="space-y-1 text-xs text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>
                            {booking.time} ({booking.duration})
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{booking.address}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-600">₱{booking.price}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                            <MessageCircle className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                            <Phone className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No upcoming bookings</p>
              <Button>Book a Service</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="px-4 py-4 space-y-3 mt-0">
          {pastBookings.map((booking) => (
            <Card key={booking.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={booking.providerImage || "/placeholder.svg"} alt={booking.provider} />
                    <AvatarFallback>
                      {booking.provider
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-sm">{booking.service}</h3>
                        <p className="text-sm text-gray-600">{booking.provider}</p>
                      </div>
                      <Badge className={`${getStatusColor(booking.status)} text-xs`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">{booking.status}</span>
                      </Badge>
                    </div>

                    <div className="space-y-1 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(booking.date).toLocaleDateString()}</span>
                      </div>
                      {booking.rating && (
                        <div className="flex items-center space-x-1">
                          <span>Your rating:</span>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < booking.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-600">₱{booking.price}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent">
                          Book Again
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 px-3 text-xs bg-transparent">
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <MobileNavigation />
    </div>
  )
}
