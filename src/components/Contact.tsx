"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "970b8905-e70d-47dd-bc0e-07b29f31b4ce",
          name: formState.name,
          email: formState.email,
          message: formState.project,
          subject: `New project inquiry from ${formState.name}`,
          from_name: "DS Labs Portfolio",
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", project: "" });
      } else {
        setError(data?.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-sm uppercase tracking-wider text-[var(--accent)] font-medium mb-4">
              Start a Project
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--foreground)] mb-6">
              Let&apos;s build
              <br />
              <span className="text-[var(--foreground-muted)]">something together.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-[var(--foreground-muted)] mb-12 max-w-md leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Tell us what you&apos;re
              working on and we&apos;ll get back to you with our thoughts.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6 text-[var(--foreground-muted)] font-medium">
              {/* Email */}
              <motion.a
                variants={itemVariants}
                whileHover={{ x: 5 }}
                href="mailto:contactdslabs@gmail.com"
                className="flex items-center gap-4 hover:text-[var(--accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--border)] flex items-center justify-center text-[var(--foreground)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                contactdslabs@gmail.com
              </motion.a>

              {/* Address */}
              <motion.p variants={itemVariants} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--border)] flex items-center justify-center text-[var(--foreground)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Surat, Gujarat, India
              </motion.p>

              {/* Reply time */}
              <motion.p variants={itemVariants} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--border)] flex items-center justify-center text-[var(--foreground)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                We usually reply within 24-48 hours
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] text-center shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
                  <motion.svg 
                    className="w-8 h-8 text-[var(--accent)]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </motion.svg>
                </div>
                <h3 className="text-2xl font-medium text-[var(--foreground)] mb-3">
                  Message sent successfully
                </h3>
                <p className="text-[var(--foreground-muted)] text-lg">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xl space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2 ml-1"
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-5 py-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all shadow-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2 ml-1"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-5 py-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2 ml-1"
                  >
                    Tell us about your project
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="project"
                    name="message"
                    required
                    rows={5}
                    value={formState.project}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, project: e.target.value }))
                    }
                    className="w-full px-5 py-4 rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all shadow-sm resize-none"
                    placeholder="What are you building? What problem are you trying to solve?"
                  />
                </div>

                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-500 ml-1">
                    {error}
                  </motion.p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 mt-4 bg-[var(--accent)] text-[var(--background)] rounded-xl font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[var(--background)]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Inquiry"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
