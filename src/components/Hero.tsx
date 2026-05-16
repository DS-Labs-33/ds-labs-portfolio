"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Studio Label */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border)] mb-8 bg-[var(--background)]/50 backdrop-blur-md shadow-sm">
          <div className="w-5 h-5 rounded-full overflow-hidden border border-[var(--border)]">
            <img src="/dslabs.jpg" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium tracking-wide text-[var(--foreground-muted)] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_8px_var(--success)]"></span>
            Available for select projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-8 text-[var(--foreground)] leading-[1.1]">
          Software that adapts to your will...
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)]">
            that’s what we build.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
          DS Labs is a selective digital studio specializing in AI tools, web applications,
          and backend systems. We partner with clients who value quality over speed.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-full font-medium hover:shadow-[0_0_20px_var(--accent)] transition-all w-full sm:w-auto text-center"
          >
            Start a Project
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] rounded-full font-medium hover:bg-[var(--border-subtle)] hover:shadow-lg transition-all w-full sm:w-auto text-center bg-[var(--background)]/50 backdrop-blur-sm"
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1 bg-[var(--background)]/50 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-[var(--foreground-muted)] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
