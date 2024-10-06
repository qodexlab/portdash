"use client";

import { useState, ChangeEvent } from "react";
import { PlusIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import { PortfolioItem } from "@/types";
import { cn } from "@/utils/cn";

interface AddProjectDialogProps {
  addNewProject: (project: PortfolioItem) => void;
}

export default function AddProjectDialog({ addNewProject }: AddProjectDialogProps) {
  const [newProject, setNewProject] = useState<PortfolioItem>({
    id: 0,
    title: "",
    description: "",
    image: "",
    tools: [],
    demoLink: "",
    srcLink: "",
  });
  const [newTool, setNewTool] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handlePortfolioChange = (field: string, value: string | string[]) => {
    setNewProject({ ...newProject, [field]: value });
  };

  const handleAddTool = () => {
    if (newTool.trim()) {
      setNewProject({ ...newProject, tools: [...newProject.tools, newTool.trim()] });
      setNewTool("");
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      // You might want to generate a preview URL here
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      handlePortfolioChange("image", imageUrl);
    }
  };

  const handleSubmit = () => {
    // Here you would typically upload the image file to your server or a storage service
    // and get back a URL to store in the project data
    // For this example, we'll just use the File object name as a placeholder
    const projectWithImage = {
      ...newProject,
      image: imageFile ? imageFile.name : newProject.image,
    };
    addNewProject(projectWithImage);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">
          <PlusIcon className="mr-2 h-4 w-4" />
          <span>Add New Project</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          <div className="w-full items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={newProject.title}
              onChange={(e) => handlePortfolioChange("title", e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={newProject.description}
              onChange={(e) => handlePortfolioChange("description", e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Project Image
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="col-span-3"
            />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="demoLink" className="text-right">
              Demo Link
            </Label>
            <Input
              id="demoLink"
              value={newProject.demoLink}
              onChange={(e) => handlePortfolioChange("demoLink", e.target.value)}
              className="col-span-3"
              placeholder="https://demo.example.com"
            />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="srcLink" className="text-right">
              Source Code Link
            </Label>
            <Input
              id="srcLink"
              value={newProject.srcLink}
              onChange={(e) => handlePortfolioChange("srcLink", e.target.value)}
              className="col-span-3"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="tools" className="text-right">
              Tools
            </Label>
            <div className="col-span-3 space-y-2">
              <div className="flex gap-2">
                <Input
                  value={newTool}
                  onChange={(e) => setNewTool(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTool()}
                  placeholder="Add a tool"
                />
                <Button onClick={handleAddTool}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newProject.tools.map((tool, index) => (
                  <div key={index} className="group">
                    <Badge className="relative" variant={"default"}>
                      <span>{tool}</span>
                      <Badge
                        variant={"secondary"}
                        className={cn(
                          "absolute -right-2 -top-2 cursor-pointer rounded-full p-0.5",
                          "hidden group-hover:block",
                        )}
                        onClick={() =>
                          setNewProject({
                            ...newProject,
                            tools: newProject.tools.filter((_, i) => i !== index),
                          })
                        }
                      >
                        <XIcon className="h-2.5 w-2.5" />
                      </Badge>
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
