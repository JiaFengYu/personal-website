import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../lib/projects";
import ProjectDetails from "../../../components/ProjectDetails";

interface Props { params: { slug: string } }

// This function helps with static generation at build time
export function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug
  }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found"
    };
  }
  
  return {
    title: `${project.title} | Jayden Yu`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-6">
          <span className="text-gray-500 dark:text-gray-400 text-xl font-medium">
            {project.title}
          </span>
        </div>
        {project.status && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-sm rounded-full ${
              project.status === 'completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}>
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        )}
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">{project.summary}</p>
        
        {/* More project details would go here */}
        <p className="mt-4">This project is currently being documented. Check back later for more details!</p>
      </div>
      
      <ProjectDetails project={project} />
    </article>
  );
}
