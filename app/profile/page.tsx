"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { MobileNavigation } from "@/components/mobile-navigation";
import { MobileHeader } from "@/components/mobile-header";
import {
  User,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  Settings,
  Star,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();

  const menuItems = [
    {
      icon: User,
      title: "Edit Profile",
      description: "Update your personal information",
      href: "/profile/edit",
      onClick: () => router.push("/profile/edit"),
    },
    {
      icon: MapPin,
      title: "Addresses",
      description: "Manage your saved addresses",
      href: "/profile/addresses",
      onClick: () => router.push("/profile/addresses"),
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage cards and payment options",
      href: "/profile/payments",
      onClick: () => router.push("/profile/payments"),
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Control your notification preferences",
      href: "/profile/notifications",
      onClick: () => router.push("/profile/notifications"),
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Manage your privacy settings",
      href: "/profile/privacy",
      onClick: () => router.push("/profile/privacy"),
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help or contact support",
      href: "/help",
      onClick: () => router.push("/help"),
    },
    {
      icon: Settings,
      title: "App Settings",
      description: "Customize your app experience",
      href: "/profile/settings",
      onClick: () => router.push("/profile/settings"),
    },
  ];

  const [isProviderMode, setIsProviderMode] = useState(false);

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
    // For now, just redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <MobileHeader title="Profile" showNotifications={false} />

      {/* Profile Header */}
      <div className="bg-white px-4 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
            <AvatarFallback className="text-xl">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Sam Nahutdo</h2>
            <p className="text-gray-600">udtohan.samuel_angelo@hnu.edu.ph</p>
            <p className="text-gray-600">+63 912 345 6789</p>
            <div className="flex items-center space-x-1 mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-blue-600">12</div>
            <div className="text-xs text-gray-600">Services Booked</div>
          </div>
          <div>
            <div className="text-xl font-bold text-blue-600">₱24,500</div>
            <div className="text-xs text-gray-600">Total Spent</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-600">3</div>
            <div className="text-xs text-gray-600">Favorite Providers</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4 space-y-2">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={item.onClick}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Provider Mode Toggle */}
        <Card className="border-blue-200 cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Become a Provider</h3>
                  <p className="text-xs text-gray-500">
                    Start offering your services
                  </p>
                </div>
              </div>
              <Switch
                checked={isProviderMode}
                onCheckedChange={(checked) => {
                  setIsProviderMode(checked);
                  if (checked) {
                    router.push("/provider-dashboard");
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-red-200 cursor-pointer" onClick={handleLogout}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <LogOut className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm text-red-600">Sign Out</h3>
                <p className="text-xs text-gray-500">
                  Sign out of your account
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <MobileNavigation />
    </div>
  );
}
