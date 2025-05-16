export interface Project {
  slug: string;
  title: string;
  summary: string;
  cover: string; // public path or remote URL
  status?: "completed" | "wip";
}

export const projects: Project[] = [
  {
    slug: "highland-farm-simulator",
    title: "Highland Farm Simulator",
    summary: "A 3-D Unity farm sim focused on Highland cattle husbandry & sustainable homesteading.",
    cover: "/images/farm-sim.jpg",
    status: "wip",
  },
  {
    slug: "mersenne-cluster",
    title: "Distributed Mersenne Prime Cluster",
    summary: "Custom Kubernetes cluster that auto-scales Prime95 workloads across spot instances.",
    cover: "/images/mersenne.jpg",
    status: "completed",
  },
];
