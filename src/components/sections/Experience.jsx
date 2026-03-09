"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Bachelor’s Degree in Computer Science",
      organization: "Pharaohs Institutes, Cairo",
      date: "2019 - 2023",
      description:
        "Graduated with Very Good grade, gaining solid foundations in programming, data structures, algorithms, databases, and software development.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Front-End Development Diploma",
      organization: "ITSharks.co",
      date: "2020",
      description:
        "Covered HTML5, CSS3, JavaScript (ES6+), React.js, Git, and GitHub, with hands-on projects and team collaboration simulating real-world workflows.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "The Ultimate Next.js 15 Course",
      organization: "JSMastery.com",
      date: "2023",
      description:
        "Focused on Next.js 15, including App Router, server components, API routes, and building scalable, responsive React applications.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className="py-24 px-4 md:px-8 bg-background relative"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <div className="inline-block relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Experience & Education
            </h2>
            <div className="w-1/2 h-1 bg-crema-500 rounded-full mx-auto md:mx-0"></div>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-crema-500/20 ml-4 md:ml-8 gap-12 flex flex-col pt-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-background border-2 border-crema-500 flex items-center justify-center text-crema-500 shadow-[0_0_15px_rgba(230,194,128,0.4)]">
                <div className="scale-75">{exp.icon}</div>
              </div>

              <div className="bg-foreground/[0.03] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-crema-500/30 transition-colors duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                      {exp.title}
                    </h3>
                    <h4 className="text-crema-500 font-medium text-lg">
                      {exp.organization}
                    </h4>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-espresso-900/50 text-crema-400 text-sm font-medium border border-crema-500/10 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
