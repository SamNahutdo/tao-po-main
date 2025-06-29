"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertCircle,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function ProviderDashboard() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  const pendingBookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      service: "House Cleaning",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "3 hours",
      price: 2400,
      address: "123 Main St, Makati City",
      clientImage: "/placeholder.svg?height=40&width=40",
      requestedAt: "2 hours ago",
    },
    {
      id: 2,
      client: "Mike Chen",
      service: "Deep Cleaning",
      date: "2024-01-16",
      time: "2:00 PM",
      duration: "4 hours",
      price: 3200,
      address: "456 Oak Ave, BGC",
      clientImage: "/placeholder.svg?height=40&width=40",
      requestedAt: "1 hour ago",
    },
  ]

  const upcomingJobs = [
    {
      id: 3,
      client: "Lisa Rodriguez",
      service: "House Cleaning",
      date: "2024-01-18",
      time: "9:00 AM",
      duration: "2 hours",
      price: 1600,
      address: "789 Pine St, Quezon City",
      clientImage: "/placeholder.svg?height=40&width=40",
    },
  ]

  const stats = [
    { title: "This Month's Earnings", value: "₱45,200", icon: DollarSign, color: "text-blue-600" },
    { title: "Jobs Completed", value: "28", icon: CheckCircle, color: "text-blue-600" },
    { title: "Average Rating", value: "4.9", icon: Star, color: "text-yellow-600" },
    { title: "Response Rate", value: "98%", icon: TrendingUp, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TaoPo</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Available</span>
              <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Provider" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <span className="hidden md:block font-medium">Maria Santos</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and grow your business</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Pending Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Requests
                  <Badge variant="secondary">{pendingBookings.length} new</Badge>
                </CardTitle>
                <CardDescription>Review and respond to booking requests</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {pendingBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={booking.clientImage || "/placeholder.svg"} alt={booking.client} />
                              <AvatarFallback>
                                {booking.client
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{booking.service}</h3>
                              <p className="text-gray-600">{booking.client}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(booking.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    {booking.time} ({booking.duration})
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                                <MapPin className="h-4 w-4" />
                                <span>{booking.address}</span>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">Requested {booking.requestedAt}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-blue-600">₱{booking.price}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No pending requests</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Jobs</CardTitle>
                <CardDescription>Your confirmed bookings</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingJobs.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingJobs.map((job) => (
                      <div key={job.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={job.clientImage || "/placeholder.svg"} alt={job.client} />
                              <AvatarFallback>
                                {job.client
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{job.service}</h3>
                              <p className="text-gray-600">{job.client}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(job.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    {job.time} ({job.duration})
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.address}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-blue-100 text-blue-700 mb-2">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Confirmed
                            </Badge>
                            <div className="text-lg font-semibold">₱{job.price}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming jobs</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>Manage all your bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Booking management coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>Track your income and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Earnings dashboard coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Provider Profile</CardTitle>
                <CardDescription>Manage your professional profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Provider" />
                      <AvatarFallback className="text-lg">MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Maria Santos</h3>
                      <p className="text-gray-600">House Cleaning Specialist</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">4.9</span>
                          <span className="text-gray-500">(127 reviews)</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">Verified</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Edit Profile</Button>
                    <Button variant="outline">Update Photos</Button>
                    <Button variant="outline">Manage Services</Button>
                    <Button variant="outline">Pricing Settings</Button>
                    <Button variant="outline">Availability</Button>
                    <Button variant="outline">Payment Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
