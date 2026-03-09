"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Layout,
  Server,
  Palette,
  Smartphone,
  GitBranch,
  Accessibility,
  Users,
  Globe,
  Figma,
  MonitorSmartphone,
  Terminal,
  Wind,
} from "lucide-react";

const skills = [
  {
    name: "HTML5 & CSS3",
    icon: <FileCode className="w-6 h-6" />,
    description: "Semantic HTML, modern CSS layout, and responsive design",
  },
  {
    name: "JavaScript (ES6+)",
    icon: <Code2 className="w-6 h-6" />,
    description: "Vanilla JavaScript and asynchronous programming",
  },
  {
    name: "React",
    icon: <Layout className="w-6 h-6" />,
    description: "Component-based interfaces and state management",
  },
  {
    name: "Next.js",
    icon: <Globe className="w-6 h-6" />,
    description: "SSR, dynamic routing, and SEO-friendly web apps",
  },
  {
    name: "Node.js",
    icon: <Server className="w-6 h-6" />,
    description: "Backend services and REST APIs",
  },
  {
    name: "Express.js",
    icon: <Terminal className="w-6 h-6" />,
    description: "RESTful APIs and server-side routing",
  },
  {
    name: "Tailwind CSS",
    icon: <Wind className="w-6 h-6" />,
    description: "Utility-first CSS for responsive, modern UIs",
  },
  {
    name: "Responsive Design",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Layouts that function seamlessly across devices",
  },
  {
    name: "Git & GitHub",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Branching, merging, and code collaboration",
  },
  {
    name: "Web Accessibility",
    icon: <Accessibility className="w-6 h-6" />,
    description: "Implementing accessible web interfaces",
  },
  {
    name: "Figma",
    icon: <Figma className="w-6 h-6" />,
    description: "Interpreting UI/UX designs into responsive code",
  },
  {
    name: "VS Code & Antigravity",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    description: "Efficient editing, debugging, and project management",
  },
  {
    name: "Teamwork",
    icon: <Users className="w-6 h-6" />,
    description: "Strong collaborator in Agile team settings",
  },
  {
    name: "Framer Motion",
    icon: <Palette className="w-6 h-6" />,
    description: "Smooth, high-end web animations",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-24 border-y border-crema-500/10 bg-background/50 relative"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Skills
            </h2>
            <div className="w-1/2 h-1 bg-crema-500 rounded-full mx-auto"></div>
          </div>
          <p className="mt-6 text-foreground/70 text-lg">
            My tools for building applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col items-center text-center gap-3 px-4 py-6 rounded-2xl bg-foreground/[0.03] border border-white/5 text-crema-400 hover:bg-foreground/[0.06] hover:border-crema-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-crema-500/10"
            >
              <div className="text-crema-500 group-hover:text-crema-400 transition-colors transform group-hover:scale-110 duration-300">
                {skill.icon}
              </div>
              <span className="font-semibold text-sm tracking-wide text-white group-hover:text-crema-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-foreground/50 text-xs leading-relaxed hidden sm:block">
                {skill.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
