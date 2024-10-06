"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button variant={"default"} onClick={handleCopy} className="ml-2">
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default function Page() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>API Usage</CardTitle>
          <CardDescription>
            Use these endpoints to interact with your personal website API.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 text-base font-semibold">Get Personal Information</h3>
            <div className="flex items-center justify-between rounded-md bg-accent p-3">
              <code>https://api.yourwebsite.com/v1/personal-info</code>
              <CopyButton text="https://api.yourwebsite.com/v1/personal-info" />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold">Get Portfolio Items</h3>
            <div className="flex items-center justify-between rounded-md bg-accent p-3">
              <code>https://api.yourwebsite.com/v1/portfolio</code>
              <CopyButton text="https://api.yourwebsite.com/v1/portfolio" />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold">Get Blog Posts</h3>
            <div className="flex items-center justify-between rounded-md bg-accent p-3">
              <code>https://api.yourwebsite.com/v1/blog-posts</code>
              <CopyButton text="https://api.yourwebsite.com/v1/blog-posts" />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>The API currently supports GET requests for public information.</p>
            <p>Authentication is required for POST, PUT, and DELETE operations.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
