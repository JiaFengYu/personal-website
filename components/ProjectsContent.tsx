'use client';

import React from 'react';
import { ProjectCard } from "./index";
import { projects } from "../lib/projects";

const ProjectsContent: React.FC = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsContent; 