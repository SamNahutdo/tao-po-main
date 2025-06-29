"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Palette, Globe, Volume2, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState({
    darkMode: false,
    language: "en",
    currency: "PHP",
    notifications: true,
    sounds: true,
    vibration: true,
    autoDownload: false,
    dataSync: true,
  })

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSelectChange = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-gray-900">App Settings</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-4">
        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Appearance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">Dark Mode</h3>
                <p className="text-xs text-gray-500">Use dark theme for better night viewing</p>
              </div>
              <Switch checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Language & Region</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-sm mb-2">Language</h3>
              <Select value={settings.language} onValueChange={(value) => handleSelectChange("language", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fil">Filipino</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-2">Currency</h3>
              <Select value={settings.currency} onValueChange={(value) => handleSelectChange("currency", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PHP">Philippine Peso (₱)</SelectItem>
                  <SelectItem value="USD">US Dollar ($)</SelectItem>
                  <SelectItem value="EUR">Euro (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Sounds */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Volume2 className="h-5 w-5" />
              <span>Notifications & Sounds</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">Notification Sounds</h3>
                <p className="text-xs text-gray-500">Play sounds for notifications</p>
              </div>
              <Switch checked={settings.sounds} onCheckedChange={() => handleToggle("sounds")} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">Vibration</h3>
                <p className="text-xs text-gray-500">Vibrate for notifications and interactions</p>
              </div>
              <Switch checked={settings.vibration} onCheckedChange={() => handleToggle("vibration")} />
            </div>
          </CardContent>
        </Card>

        {/* Data & Storage */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Data & Storage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">Auto-download Images</h3>
                <p className="text-xs text-gray-500">Automatically download images in chats</p>
              </div>
              <Switch checked={settings.autoDownload} onCheckedChange={() => handleToggle("autoDownload")} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm">Data Sync</h3>
                <p className="text-xs text-gray-500">Sync data across devices</p>
              </div>
              <Switch checked={settings.dataSync} onCheckedChange={() => handleToggle("dataSync")} />
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">App Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Version</span>
              <span className="text-sm font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Build</span>
              <span className="text-sm font-medium">2024.01.15</span>
            </div>
            <div className="pt-2">
              <Button variant="outline" className="w-full bg-transparent">
                Check for Updates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
