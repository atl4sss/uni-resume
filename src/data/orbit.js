export const orbitCategories = [
  { id: "all", label: "All" },
  { id: "graphic-design", label: "Graphic design" },
  { id: "biomedicine", label: "Biomedicine" },
  { id: "ai-startups", label: "AI & startups" },
  { id: "robotics", label: "Robotics" }
];

// заполни под себя, это каркас
export const orbitItems = [
  // Design
  {
    id: "d1",
    category: "graphic-design",
    title: "Branding / posters",
    date: "2024–2026",
    desc: "posters, visual identity, ui concepts. clean layout + strong structure.",
    tags: ["branding", "ui/ux", "posters"]
  },
  {
    id: "d2",
    category: "graphic-design",
    title: "Social / content design",
    date: "2024–2026",
    desc: "design systems, templates, fast iterations for events and teams.",
    tags: ["design system", "content"]
  },

  // Biomedicine / internship
  {
    id: "b1",
    category: "biomedicine",
    title: "Internship #1",
    date: "2025",
    desc: "clinic environment, workflows, real constraints, responsibility.",
    tags: ["internship", "healthcare"]
  },
  {
    id: "b2",
    category: "biomedicine",
    title: "Internship #2",
    date: "2025",
    desc: "observations + notes, learning how teams operate.",
    tags: ["clinical", "teamwork"]
  },
  {
    id: "b3",
    category: "biomedicine",
    title: "Internship #3",
    date: "2026",
    desc: "deepened understanding of practical biomedical context.",
    tags: ["biomed", "practice"]
  },

  // AI & Startups
  {
    id: "s1",
    category: "ai-startups",
    title: "AI prototype → product",
    date: "2025–2026",
    desc: "building prototypes, testing, iterating, thinking about impact.",
    tags: ["ml", "product", "pitch"]
  },
  {
    id: "s2",
    category: "ai-startups",
    title: "Startup mindset",
    date: "2025–2026",
    desc: "shipping fast, learning, showing outcomes not just ideas.",
    tags: ["entrepreneurship", "execution"]
  },

  // Robotics
  {
    id: "r1",
    category: "robotics",
    title: "FTC / competitions",
    date: "2023–2026",
    desc: "competitions, engineering under deadlines, real iteration cycles.",
    tags: ["ftc", "competition"]
  },
  {
    id: "r2",
    category: "robotics",
    title: "CAD & mechanisms",
    date: "2024–2026",
    desc: "cad modeling, mechanisms, testing, reliability improvements.",
    tags: ["cad", "fusion 360"]
  },
  {
    id: "r3",
    category: "robotics",
    title: "Prototyping & build",
    date: "2024–2026",
    desc: "fast prototypes → test → refine → repeat.",
    tags: ["prototype", "build"]
  }
];