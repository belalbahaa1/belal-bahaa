"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Book Store",
      description:
        "A full-stack Book Store application using Vite and Tailwind CSS for the frontend, with Express.js and MongoDB powering the backend and database.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      demoLink: "https://book-store-84zn.vercel.app/",
      githubLink: "https://github.com/belalbahaa1/book-store",
    },
    {
      title: "Healthy Kitchen",
      description:
        "A beautifully designed, modern single-page application (SPA) for a healthy food restaurant using React.js and Vite, optimizing frontend build speed and component modularity.",
      tags: ["React", "Tailwind CSS"],
      demoLink: "https://healthy-kitchen-omega.vercel.app/",
      githubLink: "https://github.com/belalbahaa1/Healthy-kitchen-",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 md:px-8 relative" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Featured Work
            </h2>
            <div className="w-2/3 h-1 bg-crema-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col justify-between rounded-3xl bg-foreground/[0.03] border border-white/[0.05] p-8 md:p-10 hover:bg-foreground/[0.06] hover:border-white/[0.1] transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Glassmorphic glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-crema-500/10 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-crema-500/20 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-crema-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-foreground/50">
                    <a
                      href={project.githubLink}
                      className="hover:text-crema-400 transition-colors duration-300 transform hover:scale-110"
                      aria-label="GitHub Repository"
                      target="_blank"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demoLink}
                      className="hover:text-crema-400 transition-colors duration-300 transform hover:scale-110"
                      aria-label="Live Demo"
                      target="_blank"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 mb-10 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-espresso-900/50 text-crema-500 border border-crema-500/20 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
