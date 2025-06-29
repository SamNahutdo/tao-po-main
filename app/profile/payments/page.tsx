"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Plus, Edit, Trash2, Smartphone, Wallet } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PaymentMethodsPage() {
  const router = useRouter()
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "card",
      brand: "Visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "25",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      brand: "Mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "26",
      isDefault: false,
    },
    {
      id: 3,
      type: "gcash",
      phone: "+63 912 345 6789",
      isDefault: false,
    },
    {
      id: 4,
      type: "paymaya",
      phone: "+63 912 345 6789",
      isDefault: false,
    },
  ])

  const getPaymentIcon = (type: string, brand?: string) => {
    switch (type) {
      case "card":
        return <CreditCard className="h-5 w-5" />
      case "gcash":
      case "paymaya":
        return <Smartphone className="h-5 w-5" />
      default:
        return <Wallet className="h-5 w-5" />
    }
  }

  const getPaymentLabel = (method: any) => {
    if (method.type === "card") {
      return `${method.brand} •••• ${method.last4}`
    }
    return method.type === "gcash" ? "GCash" : "PayMaya"
  }

  const getPaymentDetails = (method: any) => {
    if (method.type === "card") {
      return `Expires ${method.expiryMonth}/${method.expiryYear}`
    }
    return method.phone
  }

  const handleSetDefault = (id: number) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const handleDelete = (id: number) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold text-gray-900">Payment Methods</h1>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </header>

      <div className="px-4 py-4 space-y-3">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {getPaymentIcon(method.type, method.brand)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-sm">{getPaymentLabel(method)}</h3>
                    {method.isDefault && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        Default
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{getPaymentDetails(method)}</p>

                  <div className="flex space-x-2 mt-3">
                    {!method.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 bg-transparent"
                        onClick={() => handleSetDefault(method.id)}
                      >
                        Set as Default
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="h-7 w-7 p-0 bg-transparent">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 w-7 p-0 text-red-600 hover:text-red-700 bg-transparent"
                      onClick={() => handleDelete(method.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Payment Method */}
        <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Add Payment Method</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
