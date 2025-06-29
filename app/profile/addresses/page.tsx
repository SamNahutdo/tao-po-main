"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Plus, Edit, Trash2, Home, Building } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddressesPage() {
  const router = useRouter()
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "home",
      label: "Home",
      address: "123 Main Street, Makati City, Metro Manila",
      isDefault: true,
    },
    {
      id: 2,
      type: "work",
      label: "Work",
      address: "456 Business Ave, BGC, Taguig City",
      isDefault: false,
    },
    {
      id: 3,
      type: "other",
      label: "Mom's House",
      address: "789 Family St, Quezon City, Metro Manila",
      isDefault: false,
    },
  ])

  const getAddressIcon = (type: string) => {
    switch (type) {
      case "home":
        return <Home className="h-5 w-5" />
      case "work":
        return <Building className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  const handleSetDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    )
  }

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
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
            <h1 className="text-lg font-bold text-gray-900">My Addresses</h1>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </header>

      <div className="px-4 py-4 space-y-3">
        {addresses.map((address) => (
          <Card key={address.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {getAddressIcon(address.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-sm">{address.label}</h3>
                    {address.isDefault && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        Default
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{address.address}</p>

                  <div className="flex space-x-2 mt-3">
                    {!address.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 bg-transparent"
                        onClick={() => handleSetDefault(address.id)}
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
                      onClick={() => handleDelete(address.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Address Button */}
        <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Add New Address</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
