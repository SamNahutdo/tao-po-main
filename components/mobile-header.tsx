"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface MobileHeaderProps {
  title?: string
  showProfile?: boolean
  showNotifications?: boolean
}

export function MobileHeader({ title = "TaoPo", showProfile = true, showNotifications = true }: MobileHeaderProps) {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

  const mockNotifications = [
    {
      id: 1,
      title: "Booking Confirmed",
      message: "Your house cleaning service is confirmed for tomorrow at 2 PM",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Payment for lawn mowing service has been processed",
      time: "1h ago",
      unread: true,
    },
    {
      id: 3,
      title: "Service Reminder",
      message: "Don't forget about your plumbing service appointment today",
      time: "3h ago",
      unread: false,
    },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        </div>

        <div className="flex items-center space-x-2 relative">
          {showNotifications && (
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative"
                onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  2
                </span>
              </Button>

              {showNotificationDropdown && (
                <Card className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto shadow-lg z-50">
                  <CardContent className="p-0">
                    <div className="border-b border-gray-100 px-4 py-3">
                      <h3 className="font-semibold text-sm">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {mockNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${
                            notification.unread ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.unread ? 'bg-blue-500' : 'bg-transparent'
                            }`} />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-gray-900">{notification.title}</p>
                              <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-3 border-t border-gray-100">
                      <Button variant="ghost" size="sm" className="w-full text-blue-600">
                        View All Notifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
          {showProfile && (
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {showNotificationDropdown && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setShowNotificationDropdown(false)}
        />
      )}
    </header>
  )
}
