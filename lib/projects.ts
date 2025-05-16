export interface Project {
  slug: string;
  title: string;
  summary: string;
  cover: string; // public path or remote URL
  status?: "completed" | "wip";
}

export const projects: Project[] = [
  {
    slug: "orbit-simulator",
    title: "NASA Satellite Orbit Simulator",
    summary: "Rust backend that fetches NASA Orbital data and simulates live satellite trajetories.",
    cover: "/images/farm-sim.jpg",
    status: "wip",
  },
  {
    slug: "mersenne-cluster",
    title: "Mersenne Primes Sidecar",
    summary: "Custom sidecar built in Rust to track mprime progress holistically.",
    cover: "/images/mersenne.jpg",
    status: "completed",
  },
];
