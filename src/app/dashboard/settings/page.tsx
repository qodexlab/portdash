"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Page() {
  const { setTheme } = useTheme();

  const [settings, setSettings] = useState({
    email: "john.doe@example.com",
    password: "",
    theme: "light",
    language: "en",
    notifications: "enabled",
    privacy: "public",
    timezone: "UTC",
  });

  const handleSettingsChange = (field: string, value: string) => {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account details and security.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={settings.email}
              onChange={(e) => handleSettingsChange("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Change Password</label>
            <Input
              id="password"
              type="password"
              placeholder="New password"
              value={settings.password}
              onChange={(e) => handleSettingsChange("password", e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Account</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Website Customization</CardTitle>
          <CardDescription>Customize your website appearance and language.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="theme">Theme</label>
            <Select
              value={settings.theme}
              onValueChange={(value) => handleSettingsChange("theme", value)}
            >
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="language">Language</label>
            <Select
              value={settings.language}
              onValueChange={(value) => handleSettingsChange("language", value)}
            >
              <SelectTrigger id="language">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setTheme(settings.theme)}>Save Preferences</Button>
        </CardFooter>
      </Card>

      {/* New Settings Options */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Settings</CardTitle>
          <CardDescription>Manage other common preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="notifications">Notifications</label>
            <Select
              value={settings.notifications}
              onValueChange={(value) => handleSettingsChange("notifications", value)}
            >
              <SelectTrigger id="notifications">
                <SelectValue placeholder="Enable or Disable notifications" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="privacy">Privacy</label>
            <Select
              value={settings.privacy}
              onValueChange={(value) => handleSettingsChange("privacy", value)}
            >
              <SelectTrigger id="privacy">
                <SelectValue placeholder="Select privacy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="timezone">Timezone</label>
            <Select
              value={settings.timezone}
              onValueChange={(value) => handleSettingsChange("timezone", value)}
            >
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select your timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="GMT">GMT</SelectItem>
                <SelectItem value="EST">EST</SelectItem>
                <SelectItem value="PST">PST</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
