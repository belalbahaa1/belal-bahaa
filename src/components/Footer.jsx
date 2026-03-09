"use client";

import { Github, Linkedin, Mail, Coffee } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/belalbahaa1/",
    icon: <Github className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/belal-bahaa-612aa73a2/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: "mailto:belalbahaa800@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col justify-center items-center md:items-start gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-crema-500 font-bold text-lg hover:text-crema-400 transition-colors"
            >
              <Coffee className="w-5 h-5" />
              <span>Belal.</span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-foreground/[0.05] border border-white/5 flex items-center justify-center text-foreground/50 hover:text-crema-400 hover:border-crema-500/30 hover:bg-crema-500/10 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-sm">
            © {new Date().getFullYear()} Belal Bahaa. All rights reserved.
          </p>
          <p className="text-foreground/30 text-sm">
            Built with <span className="text-crema-500">Next.js</span> &{" "}
            <span className="text-crema-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
