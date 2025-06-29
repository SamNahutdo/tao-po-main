"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MobileHeader } from "@/components/mobile-header"
import { Search, MessageCircle, Phone, Video } from "lucide-react"

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Maria Santos",
      service: "House Cleaning",
      lastMessage: "I'll be there at 10 AM tomorrow. Thank you!",
      timestamp: "2 min ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      service: "Plumbing Repair",
      lastMessage: "Can we reschedule to 3 PM?",
      timestamp: "1 hour ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    {
      id: 3,
      name: "Ana Rodriguez",
      service: "Electrical Work",
      lastMessage: "The job is completed. Please rate my service.",
      timestamp: "Yesterday",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.service.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileHeader title="Messages" />

      {/* Search */}
      <div className="bg-white border-b px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="px-4 py-4 space-y-2">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <Card key={conversation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm truncate">{conversation.name}</h3>
                      <div className="flex items-center space-x-2">
                        {conversation.unread > 0 && (
                          <Badge className="bg-blue-600 text-white text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                            {conversation.unread}
                          </Badge>
                        )}
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mb-1">{conversation.service}</p>
                    <p className="text-sm text-gray-700 truncate">{conversation.lastMessage}</p>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No conversations yet</p>
            <p className="text-sm text-gray-400">Start booking services to chat with providers</p>
          </div>
        )}
      </div>

      <MobileNavigation />
    </div>
  )
}
