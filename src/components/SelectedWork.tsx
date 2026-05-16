"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  {
    title: "PocketMC",
    description: "Windows desktop app to locally host and manage Minecraft Java and Bedrock Edition servers without any mess",
    problem: "Players struggled with complex proxy setup and JVM management for local network play",
    outcome: "Self-contained C# Windows application with automated tunneling, network management, and system tray integration",
    tech: ["C#", "WPF", ".NET", "playit"],
    github: "https://github.com/PocketMC/pocket-mc-windows",
    featured: true,
  },
  {
    title: "SaaS Inspector",
    description: "Evidence-backed idea validation tool for micro-SaaS founders",
    problem: "Founders had no systematic way to validate SaaS ideas before investing time and money",
    outcome: "10 independent market scanners analyze search volume, competitors, Reddit buzz, and more to deliver a Go/Experiment/No-Go verdict",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Tailwind CSS"],
    github: "https://github.com/Sahaj33-op/SaaS-Inspector",
    featured: true,
  },
  {
    title: "Minecraft Server Manager",
    description: "Cross-platform server management with CLI and web dashboard",
    problem: "Running Minecraft servers required technical knowledge and constant manual monitoring",
    outcome: "Unified CLI + web UI for multi-server management, automated backups, plugin management, cron scheduling, and live resource monitoring",
    tech: ["Python", "FastAPI", "React", "Vite", "Tailwind CSS", "WebSocket", "SQLite"],
    github: "https://github.com/Sahaj33-op/MSM-minecraft-server-manager-win-linux-mac",
    featured: true,
  },
  {
    title: "Campus Assistant",
    description: "Enterprise-grade multilingual AI assistant with robust monitoring and security",
    problem: "Institutions needed secure, monitored AI that could handle diverse linguistic queries at scale without data leakage",
    outcome: "RAG-powered system with production-grade monitoring, enterprise security guardrails, and support for 7+ regional languages",
    tech: ["Next.js", "FastAPI", "Google Gemini", "ChromaDB", "LangChain", "Docker", "Security", "Monitoring"],
    github: "https://github.com/DS-Labs-33/Campus-Assistant",
    featured: true,
  },
  {
    title: "SkillWise",
    description: "AI-powered learning path generator that transforms your resume into a personalized 6-month roadmap",
    problem: "Career changers struggled to identify skill gaps and create structured learning plans",
    outcome: "Analyzes resumes with AI to generate roadmaps with curated courses, project ideas, and tech stack recommendations",
    tech: ["Python", "Streamlit", "Google Gemini", "PyMuPDF", "Plotly", "NLTK"],
    github: "https://github.com/Sahaj33-op/SkillWise",
    live: "https://skillwise-sahaj33.streamlit.app/",
    featured: true,
  },
  {
    title: "ReleaseWave",
    description: "AI-Powered Changelog Generator that reads real code diffs and works on messy commits",
    problem: "Writing release notes is tedious and often misses key technical context or isn't tailored to the right audience",
    outcome: "Automates changelog generation to produce 3 audience-targeted changelogs in one command",
    tech: ["Python", "CLI", "AI/LLMs", "Git"],
    github: "https://github.com/Sahaj33-op/releasewave",
    featured: false,
  },
  {
    title: "StudySage",
    description: "Offline, AI-powered note assistant to summarize notes, generate quizzes, and extract handwritten text",
    problem: "Students and professionals needed reliable AI document analysis without sending sensitive data to cloud APIs",
    outcome: "Local-first desktop GUI application exporting to PDF securely with on-device models",
    tech: ["Python", "Transformers", "NLTK", "OCR"],
    github: "https://github.com/Sahaj33-op/StudySage-Offline-Online-AI-Note-Assistant",
    featured: false,
  },
  {
    title: "ServerPulse",
    description: "Open Source Discord Analytics Bot providing real-time insights and AI-powered summaries",
    problem: "Discord server admins had no way to track engagement trends or detect unusual activity patterns",
    outcome: "Continuous activity tracking with real-time insights and anomaly alerts directly in Discord",
    tech: ["Python", "discord.py", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/Sahaj33-op/ServerPulse",
    featured: false,
  },
  {
    title: "Vidya Vaani",
    description: "An intelligent, multilingual AI chatbot platform for colleges with advanced RAG capabilities",
    problem: "Educational content was inaccessible to students who preferred regional Indian languages",
    outcome: "Production-grade monitoring, enterprise security, and multilingual voice input with an admin analytics dashboard",
    tech: ["Next.js", "TypeScript", "FastAPI", "Google Gemini", "FAISS", "Tailwind CSS"],
    github: "https://github.com/Sahaj33-op/Vidya-vaani-V0",
    featured: false,
  },
  {
    title: "Hypixel SkyBlock Extractor",
    description: "Securely extract comprehensive Hypixel SkyBlock profile data into raw JSON via Official Hypixel API v2",
    problem: "Players needed a way to fetch, organize, and analyze their full game progression data",
    outcome: "Cross-platform implementations optimized for generating context for AI analysis",
    tech: ["Python", "PowerShell", "Hypixel API v2", "JSON"],
    github: "https://github.com/Sahaj33-op/Hypixel-SkyBlock-Profile-Extractor",
    experiment: true,
    featured: false,
  },
  {
    title: "YT-DLP Downloader",
    description: "A powerful Streamlit web app for downloading video and audio using yt-dlp",
    problem: "Downloading media from various platforms required command-line knowledge and technical setup",
    outcome: "Features quality/format selection, subtitle and metadata embedding, dark theme, and batch downloads",
    tech: ["Python", "Streamlit", "yt-dlp", "FFmpeg"],
    github: "https://github.com/Sahaj33-op/Streamlit-ytdlp-downloader-app",
    live: "https://ytdlp-downloader-app-sahaj33.streamlit.app/",
    experiment: true,
    featured: false,
  },
  {
    title: "Game Price Scraper",
    description: "Multi-store game price comparison and sale detection tool",
    problem: "Gamers had to manually check multiple stores to find the best deals on games",
    outcome: "Automated scraping of Steam, Epic Games, and GOG with normalized price comparison and discount tracking",
    tech: ["Node.js", "Crawlee", "Apify SDK"],
    experiment: true,
    featured: false,
  },
];

function TiltCard({ children, className, padding = "p-8" }: { children: React.ReactNode, className?: string, padding?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 6); // Max rotation angle
    y.set(yPct * -6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="h-full w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-colors duration-300 relative group"
      >
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        />
        <div className={`h-full w-full relative z-10 ${padding}`}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);
  const coreProjects = projects.filter((p) => !p.featured && !p.experiment);
  const experimentalProjects = projects.filter((p) => !p.featured && p.experiment);

  return (
    <section id="work" className="py-32 px-6 bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] mb-6 bg-[var(--background)]/50 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] font-medium">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            Projects we&apos;re
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground-muted)]">proud of.</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            A curated selection of systems we&apos;ve designed and shipped. Each project solved a real problem.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-24">
          {featuredProjects.map((project, index) => (
            <TiltCard key={index} padding="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-medium text-[var(--foreground)] tracking-tight">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-[var(--border)] text-[var(--foreground-muted)] font-medium">
                      Featured
                    </span>
                  </div>
                  <p className="text-xl text-[var(--foreground-muted)] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border)] mb-8">
                    <p className="text-[var(--foreground-subtle)] text-sm mb-2 uppercase tracking-wide font-medium">The Problem</p>
                    <p className="text-[var(--foreground)]">{project.problem}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-muted)] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0 mt-6 lg:mt-0">
                  {"live" in project && project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:shadow-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                  {"github" in project && project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] bg-[var(--background)] rounded-full text-[var(--foreground)] hover:bg-[var(--border-subtle)] hover:shadow-md transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Other Core Projects */}
        <div className="mb-24">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium tracking-tight text-[var(--foreground)] mb-8 flex items-center gap-3"
          >
            More Systems
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" />
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreProjects.map((project, index) => (
              <TiltCard key={index} padding="p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[var(--foreground)] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-subtle)]">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      {"github" in project && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Experiments & Open Source */}
        {experimentalProjects.length > 0 && (
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-medium tracking-tight text-[var(--foreground)] mb-8 flex items-center gap-3"
            >
              Experiments & Open Source
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" />
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experimentalProjects.map((project, index) => (
                <TiltCard key={index} padding="p-6">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--foreground-muted)] mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {"github" in project && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

