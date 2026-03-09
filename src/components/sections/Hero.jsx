"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-crema-500/5 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center rounded-full border border-crema-500/30 bg-crema-500/10 px-4 py-1.5 text-sm font-medium text-crema-400 backdrop-blur-sm shadow-sm shadow-crema-500/5"
        >
          <span className="flex h-2 w-2 rounded-full bg-crema-500 mr-2.5 shadow-[0_0_8px_rgba(230,194,128,0.8)] animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          Belal Bahaa
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold text-crema-500 mb-8 tracking-tight"
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          I build high-performance, professional web applications with modern
          technologies. Specialized in crafting scalable, responsive, and
          interactive user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link href="/work">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 group text-base md:text-lg px-8"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="/belal-bahaa-cv.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 text-base md:text-lg px-8"
            >
              Download CV
              <Download className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
