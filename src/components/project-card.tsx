"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";
import { ArrowUpRight, Github, Wand2 } from "lucide-react";
import AiDescriptionModal from "./ai-description-modal";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
        <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
            <div className="flex-grow">
                <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                <Badge variant="secondary" className="font-normal">{project.category}</Badge>
            </div>
            <project.Icon className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
        </CardHeader>
        <div className="px-6">
          <div className="aspect-[16/10] relative overflow-hidden rounded-md border">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              data-ai-hint={project.aiHint}
            />
          </div>
        </div>
        <CardContent className="flex-grow pt-4">
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row gap-2 items-stretch sm:items-center pt-4">
            <div className="flex gap-2 flex-grow">
                {project.liveUrl && (
                    <Button asChild variant="outline" className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo <ArrowUpRight className="ml-2" />
                        </a>
                    </Button>
                )}
                {project.repoUrl && (
                    <Button asChild variant="secondary" className="flex-1">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> GitHub
                        </a>
                    </Button>
                )}
            </div>
            <Button onClick={() => setIsModalOpen(true)} className="flex-shrink-0">
                <Wand2 className="mr-2" /> Tailor
            </Button>
        </CardFooter>
      </Card>
      <AiDescriptionModal
        project={project}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
