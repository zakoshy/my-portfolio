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
    image: "https://placehold.co/600x400/EFEFEF/3B82F6?text=University",
    aiHint: "university campus",
    liveUrl: "https://university-frontend-t3q7.onrender.com/",
    repoUrl: "#",
  },
  {
    name: "Hospital Portal",
    description:
      "Created to facilitate the efficiency of hospitals, this portal focuses on handling patient data and expediting processes without delays, ensuring a smoother patient journey.",
    category: "Hospital",
    Icon: HeartPulse,
    image: "https://placehold.co/600x400/EFEFEF/10B981?text=Hospital",
    aiHint: "hospital interior",
    liveUrl: "https://hospital-frontend-production.up.railway.app/",
    repoUrl: "#",
  },
  {
    name: "Church Portal",
    description:
      "A community portal to help people far from their respective churches view and participate in events, pay tithe, and give offerings on Sundays, even when they are not physically present.",
    category: "Church",
    Icon: Church,
    image: "https://placehold.co/600x400/EFEFEF/8B5CF6?text=Church",
    aiHint: "church interior",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const categories: ProjectCategory[] = ["University", "Hospital", "Church"];
