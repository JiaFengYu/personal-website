import { Metadata } from "next";
import ProjectsContent from "../../components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Jayden Yu",
  description: "View projects created by Jayden Yu",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
