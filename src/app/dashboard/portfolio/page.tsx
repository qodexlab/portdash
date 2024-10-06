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
  const [portfolioItems, setPortfolioItems] = useState<
    { id: number; title: string; description: string; image: string }[]
  >([
    { id: 1, title: "Project 1", description: "A cool web app", image: "" },
    { id: 2, title: "Project 2", description: "An awesome mobile app", image: "" },
  ]);

  const handlePortfolioChange = (id: number, field: string, value: string) => {
    setPortfolioItems(
      portfolioItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleImageChange = (id: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPortfolioItems(
        portfolioItems.map((item) =>
          item.id === id ? { ...item, image: reader.result as string } : item,
        ),
      );
    };
    reader.readAsDataURL(file);
  };

  const addPortfolioItem = () => {
    const newId = Math.max(...portfolioItems.map((item: { id: any }) => item.id), 0) + 1;
    setPortfolioItems([...portfolioItems, { id: newId, title: "", description: "", image: "" }]);
  };

  const deletePortfolioItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Items</CardTitle>
          <CardDescription>Manage your portfolio projects here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {portfolioItems.map(
            (item: { id: number; title: string; description: string; image: string }) => (
              <div key={item.id} className="space-y-2 border-b pb-4">
                <Input
                  placeholder="Project Title"
                  value={item.title}
                  onChange={(e) => handlePortfolioChange(item.id, "title", e.target.value)}
                />
                <Textarea
                  placeholder="Project Description"
                  value={item.description}
                  onChange={(e) => handlePortfolioChange(item.id, "description", e.target.value)}
                />
                <Input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleImageChange(item.id, e.target.files[0]);
                    }
                  }}
                />
                {item.image && <img src={item.image} alt={item.title} className="mt-2 max-w-xs" />}
                <Button onClick={() => deletePortfolioItem(item.id)}>Delete</Button>
              </div>
            ),
          )}
          <Button onClick={addPortfolioItem}>Add New Project</Button>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
