'use client';

import React from 'react';
import { Project } from '../lib/projects';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  // Add any client-side interactivity here
  return (
    <div className="mt-8">
      {/* Interactive elements go here */}
      <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Example gallery placeholder */}
        <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Gallery Image 1</span>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Gallery Image 2</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 