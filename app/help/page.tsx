"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, MessageCircle, Phone, Mail, HelpCircle, Book, Shield, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HelpPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn how to use TaoPo",
      articles: 8,
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      description: "Payment methods and billing questions",
      articles: 12,
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "Safety guidelines and trust features",
      articles: 6,
    },
    {
      icon: HelpCircle,
      title: "Booking Services",
      description: "How to book and manage services",
      articles: 15,
    },
  ]

  const faqItems = [
    {
      question: "How do I book a service?",
      answer: "Browse services, select a provider, choose date/time, and confirm booking.",
    },
    {
      question: "How do I cancel a booking?",
      answer: "Go to My Bookings, select the booking, and tap Cancel. Check cancellation policy.",
    },
    {
      question: "How do I pay for services?",
      answer: "Add payment methods in your profile. Payment is processed after service completion.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Contact support within 24 hours. We'll help resolve the issue or provide a refund.",
    },
  ]

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: true,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us at +63 2 8123 4567",
      action: "Call Now",
      available: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      action: "Send Email",
      available: true,
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
          <h1 className="text-lg font-bold text-gray-900">Help & Support</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Help Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-3">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{category.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                  <p className="text-xs text-blue-600">{category.articles} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm mb-2">{faq.question}</h3>
                  <p className="text-xs text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Support</h2>
          <div className="space-y-3">
            {contactOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <option.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{option.title}</h3>
                      <p className="text-xs text-gray-500">{option.description}</p>
                    </div>
                    <Button size="sm" variant={option.available ? "default" : "outline"} disabled={!option.available}>
                      {option.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <Book className="h-5 w-5" />
              <span className="text-sm">User Guide</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Safety Tips</span>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
