"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Bell, MessageCircle, Calendar, DollarSign, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotificationsPage() {
  const router = useRouter()
  const [notifications, setNotifications] = useState({
    bookingUpdates: true,
    messages: true,
    promotions: false,
    reminders: true,
    payments: true,
    reviews: true,
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
  })

  const handleToggle = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const notificationSections = [
    {
      title: "Booking Notifications",
      items: [
        {
          key: "bookingUpdates",
          icon: Calendar,
          title: "Booking Updates",
          description: "Get notified about booking confirmations, changes, and cancellations",
          enabled: notifications.bookingUpdates,
        },
        {
          key: "reminders",
          icon: Bell,
          title: "Service Reminders",
          description: "Receive reminders before your scheduled services",
          enabled: notifications.reminders,
        },
      ],
    },
    {
      title: "Communication",
      items: [
        {
          key: "messages",
          icon: MessageCircle,
          title: "Messages",
          description: "New messages from service providers",
          enabled: notifications.messages,
        },
        {
          key: "reviews",
          icon: Star,
          title: "Review Requests",
          description: "Reminders to rate and review completed services",
          enabled: notifications.reviews,
        },
      ],
    },
    {
      title: "Financial",
      items: [
        {
          key: "payments",
          icon: DollarSign,
          title: "Payment Updates",
          description: "Payment confirmations and receipt notifications",
          enabled: notifications.payments,
        },
        {
          key: "promotions",
          icon: Bell,
          title: "Promotions & Offers",
          description: "Special deals and discount notifications",
          enabled: notifications.promotions,
        },
      ],
    },
  ]

  const deliveryMethods = [
    {
      key: "pushNotifications",
      title: "Push Notifications",
      description: "Receive notifications on your device",
      enabled: notifications.pushNotifications,
    },
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive notifications via email",
      enabled: notifications.emailNotifications,
    },
    {
      key: "smsNotifications",
      title: "SMS Notifications",
      description: "Receive notifications via text message",
      enabled: notifications.smsNotifications,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-gray-900">Notifications</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-4">
        {/* Notification Categories */}
        {notificationSections.map((section, sectionIndex) => (
          <Card key={sectionIndex}>
            <CardHeader>
              <CardTitle className="text-base">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.items.map((item) => (
                <div key={item.key} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
                    <item.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <Switch checked={item.enabled} onCheckedChange={() => handleToggle(item.key)} />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Delivery Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Delivery Methods</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {deliveryMethods.map((method) => (
              <div key={method.key} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">{method.title}</h3>
                  <p className="text-xs text-gray-500">{method.description}</p>
                </div>
                <Switch checked={method.enabled} onCheckedChange={() => handleToggle(method.key)} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
