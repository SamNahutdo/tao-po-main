"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Shield, Clock, CreditCard, MessageCircle, ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [duration, setDuration] = useState("2")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")

  // Mock provider data
  const provider = {
    id: 1,
    name: "Maria Santos",
    service: "House Cleaning",
    rating: 4.9,
    reviews: 127,
    price: 800,
    image: "/placeholder.svg?height=80&width=80",
    verified: true,
    responseTime: "< 1 hour",
    description: "Professional house cleaning with eco-friendly products. 5+ years experience.",
  }

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  const calculateTotal = () => {
    const hours = Number.parseInt(duration)
    const subtotal = provider.price * hours
    const serviceFee = Math.round(subtotal * 0.1)
    const total = subtotal + serviceFee
    return { subtotal, serviceFee, total }
  }

  const { subtotal, serviceFee, total } = calculateTotal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Header with Back Button */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/services">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-bold text-gray-900">Book Service</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-4 pb-24">
        {/* Provider Info */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Avatar className="h-16 w-16">
                <AvatarImage src={provider.image || "/placeholder.svg"} alt={provider.name} />
                <AvatarFallback>
                  {provider.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold">{provider.name}</h3>
                  {provider.verified && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-gray-700 mb-2">{provider.service}</p>
                <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{provider.rating}</span>
                    <span>({provider.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{provider.responseTime}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{provider.description}</p>
              </div>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Date Selection */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Select Date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border w-full"
            />
          </CardContent>
        </Card>

        {/* Time & Duration */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Time</label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Duration</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hour</SelectItem>
                  <SelectItem value="2">2 hours</SelectItem>
                  <SelectItem value="3">3 hours</SelectItem>
                  <SelectItem value="4">4 hours</SelectItem>
                  <SelectItem value="6">6 hours</SelectItem>
                  <SelectItem value="8">8 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Service Details */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Service Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter your full address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Details</label>
              <Textarea
                placeholder="Describe what you need help with..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Price Summary */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Price Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>
                  Service ({duration} hour{Number.parseInt(duration) > 1 ? "s" : ""})
                </span>
                <span>₱{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Service fee</span>
                <span>₱{serviceFee}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-blue-600">₱{total}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <Button className="w-full h-12" size="lg">
          <CreditCard className="h-4 w-4 mr-2" />
          Proceed to Payment - ₱{total}
        </Button>
        <p className="text-xs text-gray-500 text-center mt-2">You won't be charged until the service is confirmed</p>
      </div>
    </div>
  )
}
