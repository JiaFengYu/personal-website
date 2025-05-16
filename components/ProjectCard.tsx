import React from 'react';
import Link from 'next/link';
import { Project } from '../lib/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-all">
      <div className="relative h-48 w-full bg-indigo-900 bg-opacity-50 flex items-center justify-center">
        <span className="text-indigo-200 text-lg font-medium">
          {project.title}
        </span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.status && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              project.status === 'completed' 
                ? 'bg-green-900 text-green-200' 
                : 'bg-yellow-900 text-yellow-200'
            }`}>
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          )}
        </div>
        <p className="text-gray-300 mb-4">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="text-indigo-300 hover:text-white transition-colors">
          View Details →
        </Link>
        {project.slug === 'mersenne-cluster' && (
          <div className="mt-2">
            <Link href="/gimps" className="text-indigo-300 hover:text-white text-sm">
              Learn more about GIMPS →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 