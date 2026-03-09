"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { projects, categories } from "@/data/projects";
import Link from "next/link";

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section className="min-h-screen py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="text-crema-500 hover:text-crema-400 transition-colors text-sm font-medium mb-6 inline-flex items-center gap-1"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            My Work
          </h1>
          <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
            Explore my full collection of projects. Filter by category or search
            for specific technologies.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-2xl pl-12 pr-10 py-3.5 focus:outline-none focus:ring-2 focus:ring-crema-500/50 focus:border-crema-500/50 transition-all text-white placeholder:text-foreground/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-crema-500 text-espresso-900 border-crema-500 shadow-lg shadow-crema-500/25"
                    : "bg-foreground/[0.03] text-foreground/70 border-white/10 hover:border-crema-500/30 hover:text-crema-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="text-foreground/50 text-sm mb-8">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                layout
                className="group relative flex flex-col justify-between rounded-3xl bg-foreground/[0.03] border border-white/[0.05] p-7 hover:bg-foreground/[0.06] hover:border-white/[0.1] transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-crema-500/10 rounded-full blur-[60px] -mr-12 -mt-12 group-hover:bg-crema-500/20 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-crema-400 transition-colors duration-300 pr-4">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-foreground/50 shrink-0">
                      <a
                        href={project.githubLink}
                        className="hover:text-crema-400 transition-colors duration-300 transform hover:scale-110"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demoLink}
                        className="hover:text-crema-400 transition-colors duration-300 transform hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-espresso-900/50 text-crema-500 border border-crema-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-foreground/50 text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-crema-500 hover:text-crema-400 transition-colors font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
