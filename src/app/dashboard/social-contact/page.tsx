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
  AtSignIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [socialMedia, setSocialMedia] = useState({
    linkedin: "",
    twitter: "",
    instagram: "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    website: "",
  });

  const handleSocialMediaChange = (field: string, value: string) => {
    setSocialMedia({ ...socialMedia, [field]: value });
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Social Media</CardTitle>
          <CardDescription>Manage your social media profiles.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="linkedin" className="flex items-center space-x-2">
              <LinkedinIcon className="h-5 w-5" />
              <span>LinkedIn</span>
            </label>
            <Input
              id="linkedin"
              value={socialMedia.linkedin}
              onChange={(e) => handleSocialMediaChange("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/yourusername"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="twitter" className="flex items-center space-x-2">
              <TwitterIcon className="h-5 w-5" />
              <span>Twitter</span>
            </label>
            <Input
              id="twitter"
              value={socialMedia.twitter}
              onChange={(e) => handleSocialMediaChange("twitter", e.target.value)}
              placeholder="https://twitter.com/yourusername"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="instagram" className="flex items-center space-x-2">
              <InstagramIcon className="h-5 w-5" />
              <span>Instagram</span>
            </label>
            <Input
              id="instagram"
              value={socialMedia.instagram}
              onChange={(e) => handleSocialMediaChange("instagram", e.target.value)}
              placeholder="https://instagram.com/yourusername"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Social Media</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Manage your contact details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="contact-email" className="flex items-center space-x-2">
              <AtSignIcon className="h-5 w-5" />
              <span>Email</span>
            </label>
            <Input
              id="contact-email"
              type="email"
              value={contactInfo.email}
              onChange={(e) => handleContactInfoChange("email", e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5" />
              <span>Phone</span>
            </label>
            <Input
              id="phone"
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => handleContactInfoChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="website" className="flex items-center space-x-2">
              <GlobeIcon className="h-5 w-5" />
              <span>Website</span>
            </label>
            <Input
              id="website"
              type="url"
              value={contactInfo.website}
              onChange={(e) => handleContactInfoChange("website", e.target.value)}
              placeholder="https://yourwebsite.com"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Contact Info</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
