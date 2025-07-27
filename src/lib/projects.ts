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
      "A comprehensive portal for universities, featuring student and faculty dashboards, course registration, and grade management systems. Built with modern web technologies for a seamless user experience.",
    category: "University",
    Icon: School,
    image: "https://placehold.co/600x400.png",
    aiHint: "university campus",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Hospital Portal",
    description:
      "An integrated hospital management system designed to streamline patient registration, appointment scheduling, and electronic health records. Focuses on security and HIPAA compliance.",
    category: "Hospital",
    Icon: HeartPulse,
    image: "https://placehold.co/600x400.png",
    aiHint: "hospital interior",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Church Portal",
    description:
      "A community portal for churches to manage memberships, events, donations, and communication. Includes features for live-streaming services and small group organization.",
    category: "Church",
    Icon: Church,
    image: "https://placehold.co/600x400.png",
    aiHint: "church interior",
    liveUrl: "#",
    repoUrl: "#",
  },
   {
    name: "Student Admission System",
    description:
      "A streamlined online admission system for universities, simplifying the application process for prospective students and administrative review for staff. Features document uploads and status tracking.",
    category: "University",
    Icon: School,
    image: "https://placehold.co/600x400.png",
    aiHint: "student application",
    repoUrl: "#",
  },
  {
    name: "Telemedicine Platform",
    description:
      "A secure telemedicine platform connecting patients with doctors for virtual consultations. Features video conferencing, secure messaging, and e-prescription capabilities.",
    category: "Hospital",
    Icon: HeartPulse,
    image: "https://placehold.co/600x400.png",
    aiHint: "online consultation",
    liveUrl: "#",
  },
  {
    name: "Volunteer Management App",
    description:
      "An application for churches and non-profits to organize and schedule volunteers for events and services. Simplifies coordination and improves engagement.",
    category: "Church",
    Icon: Church,
    image: "https://placehold.co/600x400.png",
    aiHint: "community event",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const categories: ProjectCategory[] = ["University", "Hospital", "Church"];
