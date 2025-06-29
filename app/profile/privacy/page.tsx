"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Shield, Eye, MapPin, Phone, Lock, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PrivacyPage() {
  const router = useRouter()
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    locationSharing: true,
    phoneVisibility: false,
    reviewVisibility: true,
    activityStatus: true,
    dataCollection: true,
    marketingEmails: false,
    twoFactorAuth: false,
  })

  const handleToggle = (key: string) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const privacySections = [
    {
      title: "Profile Privacy",
      items: [
        {
          key: "profileVisibility",
          icon: Eye,
          title: "Profile Visibility",
          description: "Allow service providers to see your profile information",
          enabled: privacySettings.profileVisibility,
        },
        {
          key: "phoneVisibility",
          icon: Phone,
          title: "Phone Number Visibility",
          description: "Show your phone number to confirmed service providers",
          enabled: privacySettings.phoneVisibility,
        },
        {
          key: "reviewVisibility",
          icon: Eye,
          title: "Review Visibility",
          description: "Make your reviews visible to other users",
          enabled: privacySettings.reviewVisibility,
        },
      ],
    },
    {
      title: "Location & Activity",
      items: [
        {
          key: "locationSharing",
          icon: MapPin,
          title: "Location Sharing",
          description: "Share your location to find nearby service providers",
          enabled: privacySettings.locationSharing,
        },
        {
          key: "activityStatus",
          icon: Eye,
          title: "Activity Status",
          description: "Show when you were last active on the platform",
          enabled: privacySettings.activityStatus,
        },
      ],
    },
    {
      title: "Data & Marketing",
      items: [
        {
          key: "dataCollection",
          icon: Shield,
          title: "Data Collection",
          description: "Allow TaoPo to collect usage data to improve services",
          enabled: privacySettings.dataCollection,
        },
        {
          key: "marketingEmails",
          icon: Shield,
          title: "Marketing Communications",
          description: "Receive promotional emails and marketing content",
          enabled: privacySettings.marketingEmails,
        },
      ],
    },
  ]

  const securityActions = [
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      action: "Enable",
      enabled: privacySettings.twoFactorAuth,
      key: "twoFactorAuth",
    },
    {
      icon: Lock,
      title: "Change Password",
      description: "Update your account password",
      action: "Change",
    },
    {
      icon: Shield,
      title: "Login Activity",
      description: "View recent login attempts and active sessions",
      action: "View",
    },
    {
      icon: Trash2,
      title: "Delete Account",
      description: "Permanently delete your TaoPo account",
      action: "Delete",
      danger: true,
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
          <h1 className="text-lg font-bold text-gray-900">Privacy & Security</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-4">
        {/* Privacy Settings */}
        {privacySections.map((section, sectionIndex) => (
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

        {/* Security Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {securityActions.map((action, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    action.danger ? "bg-red-100" : "bg-gray-100"
                  }`}
                >
                  <action.icon className={`h-5 w-5 ${action.danger ? "text-red-600" : "text-gray-600"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-sm ${action.danger ? "text-red-600" : ""}`}>{action.title}</h3>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
                {action.key ? (
                  <Switch checked={action.enabled} onCheckedChange={() => handleToggle(action.key)} />
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className={`text-xs bg-transparent ${
                      action.danger ? "text-red-600 hover:text-red-700 border-red-200" : ""
                    }`}
                  >
                    {action.action}
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
