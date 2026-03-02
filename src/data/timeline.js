import { Brush, Stethoscope, Bot, Rocket, Cpu, Leaf, Trophy, Wrench } from "lucide-react";

export const timelineData = [
  {
    id: 1,
    title: "Graphic Design",
    date: "2024–2026",
    content: "Posters, branding, UI concepts. I focus on clarity, hierarchy, and fast iteration.",
    category: "graphic-design",
    icon: Brush,
    relatedIds: [7, 8],
    status: "in-progress",
    energy: 82
  },
  {
    id: 2,
    title: "Biomed Internship #1",
    date: "2025",
    content: "Clinic environment, real workflows, responsibility and observation.",
    category: "biomedicine",
    icon: Stethoscope,
    relatedIds: [6, 7],
    status: "completed",
    energy: 70
  },
  {
    id: 3,
    title: "Biomed Internship #2",
    date: "2025",
    content: "Team processes, documentation, learning how decisions are made in practice.",
    category: "biomedicine",
    icon: Stethoscope,
    relatedIds: [2],
    status: "completed",
    energy: 62
  },
  {
    id: 4,
    title: "Biomed Internship #3",
    date: "2026",
    content: "Deeper practical context: constraints, communication, and reliability.",
    category: "biomedicine",
    icon: Stethoscope,
    relatedIds: [2, 6],
    status: "in-progress",
    energy: 66
  },
  {
    id: 5,
    title: "Robotics (FTC)",
    date: "2023–2026",
    content: "Competitions, deadlines, iteration cycles, performance under pressure.",
    category: "robotics",
    icon: Trophy,
    relatedIds: [9, 10],
    status: "in-progress",
    energy: 90
  },
  {
    id: 6,
    title: "AI / ML Experiments",
    date: "2025–2026",
    content: "Prototyping models, testing, learning fast, measuring outcomes.",
    category: "ai-startups",
    icon: Bot,
    relatedIds: [2, 4, 7],
    status: "in-progress",
    energy: 78
  },
  {
    id: 7,
    title: "Startup Building",
    date: "2025–2026",
    content: "Product thinking, shipping, pitching, and improving based on feedback.",
    category: "ai-startups",
    icon: Rocket,
    relatedIds: [1, 6, 8],
    status: "in-progress",
    energy: 84
  },
  {
    id: 8,
    title: "Tech Stack / Web",
    date: "2024–2026",
    content: "React/Vite, UI building, clean structure, deployment, iteration.",
    category: "ai-startups",
    icon: Cpu,
    relatedIds: [1, 7],
    status: "completed",
    energy: 64
  },
  {
    id: 9,
    title: "CAD & Mechanisms",
    date: "2024–2026",
    content: "Designing mechanisms, CAD modeling, testing, reliability improvements.",
    category: "robotics",
    icon: Wrench,
    relatedIds: [5, 10],
    status: "in-progress",
    energy: 88
  },
  {
    id: 10,
    title: "Ecology Track",
    date: "2024–2026",
    content: "Ecology interest integrated into projects and real-world thinking.",
    category: "ecology",
    icon: Leaf,
    relatedIds: [5, 9],
    status: "pending",
    energy: 55
  }
];