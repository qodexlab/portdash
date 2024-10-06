"use client";

import Image from "next/image";
import { MoreVertical, ExternalLink, Github } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PortfolioItem } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: PortfolioItem;
  openEditDialog: () => void;
  deleteProject: (id: number) => void;
}

export default function ProjectCard({ project, openEditDialog, deleteProject }: ProjectCardProps) {
  return (
    <Card key={project.id} className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
            width={300}
            height={200}
          />
        ) : (
          <div className="h-48 w-full bg-muted" />
        )}
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <Badge key={index} variant={"outline"}>
              {tool}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <ExternalLink className="mr-1 h-4 w-4" /> Demo
          </a>
          <a
            href={project.srcLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:underline"
          >
            <Github className="mr-1 h-4 w-4" /> Source
          </a>
        </div>
      </CardContent>
      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="backdrop-blur-md hover:bg-background/50">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={openEditDialog}>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => deleteProject(project.id)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
