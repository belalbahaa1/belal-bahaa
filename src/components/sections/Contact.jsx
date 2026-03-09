"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-crema-500/20 to-transparent"></div>

      <div className="max-w-3xl mx-auto relative z-10 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed text-balance">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to collaborate, I&apos;ll get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-foreground/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
        >
          {/* Glassmorphic glow effect */}
          <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-crema-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Success Message */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
            >
              <CheckCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                Something went wrong. Please try again later.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground/80 pl-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-crema-500/50 focus:border-crema-500/50 transition-all text-white placeholder:text-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground/80 pl-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-crema-500/50 focus:border-crema-500/50 transition-all text-white placeholder:text-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground/80 pl-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-crema-500/50 focus:border-crema-500/50 transition-all text-white placeholder:text-foreground/50 resize-none"
              ></textarea>
            </div>

            <Button
              size="lg"
              className="w-full gap-2 text-lg mt-4 h-14 rounded-xl disabled:opacity-50"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  Sending...
                  <div className="w-5 h-5 border-2 border-espresso-900/30 border-t-espresso-900 rounded-full animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
