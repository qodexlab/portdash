"use client";

import { ChangeEvent, useState } from "react";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import { PortfolioItem } from "@/types";

import { cn } from "@/utils/cn";

interface EditProjectDialogProps {
  project: PortfolioItem;
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: PortfolioItem) => void;
}

export default function EditProjectDialog({
  project,
  isOpen,
  onClose,
  onSave,
}: EditProjectDialogProps) {
  const [editingProject, setEditingProject] = useState<PortfolioItem>(project);
  const [newTool, setNewTool] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handlePortfolioChange = (field: string, value: string | string[]) => {
    setEditingProject({ ...editingProject, [field]: value });
  };

  const handleAddTool = () => {
    if (newTool.trim()) {
      setEditingProject({ ...editingProject, tools: [...editingProject.tools, newTool.trim()] });
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
      ...editingProject,
      image: imageFile ? imageFile.name : editingProject.image,
    };
    onSave(projectWithImage);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          <div className="w-full items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={editingProject.title}
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
              value={editingProject.description}
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
              value={editingProject.demoLink}
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
              value={editingProject.srcLink}
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
                {editingProject.tools.map((tool, index) => (
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
                          setEditingProject({
                            ...editingProject,
                            tools: editingProject.tools.filter((_, i) => i !== index),
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
          <Button onClick={handleSubmit}>Update Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
