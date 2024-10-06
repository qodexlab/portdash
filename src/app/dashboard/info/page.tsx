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
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

export default function Page() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    title: "Web Developer",
    bio: "Passionate about creating amazing web experiences.",
  });

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Manage your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" value={personalInfo.name} onChange={handleInfoChange} />
          </div>
          <div className="space-y-2">
            <label htmlFor="title">Title</label>
            <Input id="title" name="title" value={personalInfo.title} onChange={handleInfoChange} />
          </div>
          <div className="space-y-2">
            <label htmlFor="bio">Bio</label>
            <Textarea id="bio" name="bio" value={personalInfo.bio} onChange={handleInfoChange} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
