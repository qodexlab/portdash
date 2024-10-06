"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Pagination from "./components/pagination";
import AddProjectDialog from "./components/add-project-dialog";
import EditProjectDialog from "./components/edit-project-dialog";
import ProjectCard from "./components/project-card";

import { PortfolioItem } from "@/types";

export default function PortfolioManager() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems());
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [editingProject, setEditingProject] = useState<PortfolioItem | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const itemsPerPage = 6;
  const filteredItems = portfolioItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tools.some((tool: string) => tool.toLowerCase().includes(searchTerm.toLowerCase())),
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const addNewProject = (newProject: PortfolioItem) => {
    const newId = Math.max(...portfolioItems.map((item) => item.id), 0) + 1;
    setPortfolioItems([...portfolioItems, { ...newProject, id: newId }]);
  };

  const deleteProject = (id: number) => {
    setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveChanges = (updatedProject: PortfolioItem) => {
    setPortfolioItems((prev) =>
      prev.map((item) => (item.id === updatedProject.id ? updatedProject : item)),
    );
    setIsEditDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <CardTitle className="text-2xl">Portfolio Manager</CardTitle>
            </div>
            <AddProjectDialog addNewProject={addNewProject} />
          </div>
        </CardHeader>

        <CardContent>
          <div className="relative mb-6 flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow pl-10"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {paginatedItems.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                openEditDialog={() => {
                  setEditingProject(item);
                  setIsEditDialogOpen(true);
                }}
                deleteProject={deleteProject}
              />
            ))}
          </div>

          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button onClick={() => alert("Changes saved successfully!")}>Save Changes</Button>
        </CardFooter>
      </Card>

      {editingProject && (
        <EditProjectDialog
          project={editingProject}
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
}

function initialPortfolioItems(): PortfolioItem[] {
  return [
    {
      id: 1,
      title: "Project 1",
      description: "A cool web app with amazing features and cutting-edge technology.",
      image: "",
      tools: ["React", "Node.js", "MongoDB"],
      demoLink: "https://demo1.com",
      srcLink: "https://github.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An awesome mobile app that revolutionizes user experience.",
      image: "",
      tools: ["React Native", "Firebase"],
      demoLink: "https://demo2.com",
      srcLink: "https://github.com/project2",
    },
  ];
}
