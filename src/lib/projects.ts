import type { LucideIcon } from 'lucide-react';
import { School, HeartPulse, Church } from 'lucide-react';

export type ProjectCategory = "University" | "Hospital" | "Church";

export type Project = {
  name: string;
  description: string;
  category: ProjectCategory;
  Icon: LucideIcon;
  image: string;
  aiHint: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "University Portal Sample",
    description:
      "This portal digitizes university results to eliminate manual processing and printing. Students can conveniently access their results from home, ensuring a streamlined and efficient academic experience.",
    category: "University",
    Icon: School,
    image: "https://steemitimages.com/DQmXb3pH7Ec46FqasgrvQxqNC4iXUXJHREjuzjSbK3BWkzn/The-First-Few-Weeks-Of-University-Life.jpg",
    aiHint: "university campus",
    liveUrl: "https://university-frontend-t3q7.onrender.com/",
    repoUrl: "https://github.com/your-username/university-portal",
  },
  {
    name: "Hospital Portal",
    description:
      "Created to facilitate the efficiency of hospitals, this portal focuses on handling patient data and expediting processes without delays, ensuring a smoother patient journey.",
    category: "Hospital",
    Icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1563932127565-699eeea1e17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D",
    aiHint: "doctors surgery",
    liveUrl: "https://hospital-frontend-production.up.railway.app/",
    repoUrl: "https://github.com/your-username/hospital-portal",
  },
  {
    name: "Church Portal",
    description:
      "A community portal to help people far from their respective churches view and participate in events, pay tithe, and give offerings on Sundays, even when they are not physically present.",
    category: "Church",
    Icon: Church,
    image: "https://images.unsplash.com/photo-1589997419427-daff54553276?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aiHint: "church interior",
    liveUrl: "#",
    repoUrl: "https://github.com/your-username/church-portal",
  },
];

export const categories: ProjectCategory[] = ["University", "Hospital", "Church"];
