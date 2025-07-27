"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, categories } from "@/lib/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Here's a selection of projects I've worked on. Use the AI tool to see how my skills fit your needs. For more information and sample users, please see the README on GitHub.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:w-fit sm:mx-auto sm:grid-cols-4 mb-8">
            <TabsTrigger value="All">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.category === category)
                  .map((project, index) => (
                    <ProjectCard key={`${category}-${index}`} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
