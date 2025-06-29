"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings");

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
  ];

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
    {
      id: 4,
      provider: "Carlos Mendoza",
      service: "Home Painting",
      date: "2024-01-05",
      time: "8:00 AM",
      duration: "8 hours",
      price: 7200,
      status: "completed",
      rating: 4,
      address: "321 Elm St, Pasig City",
      providerImage: "/placeholder.svg?height=40&width=40",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

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
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/help" className="text-gray-600 hover:text-gray-900">
              Help
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="hidden md:block font-medium">Sam Nahutdo</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John!
          </h1>
          <p className="text-gray-600">
            Manage your bookings and find new services
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
              <div className="text-sm text-gray-600">Upcoming Bookings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Completed Services</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">4.8</div>
              <div className="text-sm text-gray-600">Average Rating Given</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                ₱24,500
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            {/* Upcoming Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>Your scheduled services</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src={
                                  booking.providerImage || "/placeholder.svg"
                                }
                                alt={booking.provider}
                              />
                              <AvatarFallback>
                                {booking.provider
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">
                                {booking.service}
                              </h3>
                              <p className="text-gray-600">
                                {booking.provider}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>
                                    {new Date(
                                      booking.date
                                    ).toLocaleDateString()}
                                  </span>
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
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(booking.status)}>
                              {getStatusIcon(booking.status)}
                              <span className="ml-1 capitalize">
                                {booking.status}
                              </span>
                            </Badge>
                            <div className="text-lg font-semibold mt-2">
                              ₱{booking.price}
                            </div>
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
                            Reschedule
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming bookings</p>
                    <Button className="mt-4" asChild>
                      <Link href="/services">Book a Service</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Past Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Past Bookings</CardTitle>
                <CardDescription>Your service history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={booking.providerImage || "/placeholder.svg"}
                              alt={booking.provider}
                            />
                            <AvatarFallback>
                              {booking.provider
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{booking.service}</h3>
                            <p className="text-gray-600">{booking.provider}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {new Date(booking.date).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>
                                  {booking.time} ({booking.duration})
                                </span>
                              </div>
                            </div>
                            {booking.rating && (
                              <div className="flex items-center space-x-1 mt-2">
                                <span className="text-sm text-gray-500">
                                  Your rating:
                                </span>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < booking.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(booking.status)}>
                            {getStatusIcon(booking.status)}
                            <span className="ml-1 capitalize">
                              {booking.status}
                            </span>
                          </Badge>
                          <div className="text-lg font-semibold mt-2">
                            ₱{booking.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Book Again
                        </Button>
                        <Button size="sm" variant="outline">
                          Leave Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Providers</CardTitle>
                <CardDescription>
                  Your trusted service providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No favorite providers yet</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Heart providers you love to add them to your favorites
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your account information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src="/placeholder.svg?height=80&width=80"
                        alt="User"
                      />
                      <AvatarFallback className="text-lg">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Sam Nahutdo</h3>
                      <p className="text-gray-600">
                        udtohan.samuel_angelo@hnu.edu.ph
                      </p>
                      <p className="text-gray-600">+63 912 345 6789</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <Button variant="outline">Edit Profile</Button>
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Payment Methods</Button>
                    <Button variant="outline">Notification Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
