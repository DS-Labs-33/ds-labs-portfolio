const projects = [
  {
    title: "SaaS Inspector",
    description: "Evidence-backed idea validation tool for micro-SaaS founders",
    problem: "Founders had no systematic way to validate SaaS ideas before investing time and money",
    outcome: "10 independent market scanners analyze search volume, competitors, Reddit buzz, and more to deliver a Go/Experiment/No-Go verdict",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Tailwind CSS"],
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
    title: "SkillWise",
    description: "AI-powered career roadmap generator from resume analysis",
    problem: "Career changers struggled to identify skill gaps and create structured learning plans",
    outcome: "Analyzes resumes with AI, generates personalized 6-month roadmaps with Gantt charts, and exports to PDF/JSON",
    tech: ["Python", "Streamlit", "Google Gemini", "PyMuPDF", "Plotly", "NLTK"],
    github: "https://github.com/Sahaj33-op/SkillWise",
    live: "https://skillwise-sahaj33.streamlit.app/",
    featured: true,
  },
  {
    title: "Campus Assistant",
    description: "Multilingual AI chatbot for educational institutions supporting 7+ Indian languages",
    problem: "Students in diverse linguistic regions couldn't access institutional information in their native language",
    outcome: "RAG-powered chatbot with ChromaDB, multi-platform support (Web, Telegram, WhatsApp), and human escalation",
    tech: ["Next.js", "FastAPI", "Google Gemini", "ChromaDB", "LangChain", "Docker"],
    github: "https://github.com/Sahaj33-op/campus-assistant",
    featured: true,
  },
  {
    title: "ServerPulse",
    description: "AI-powered real-time Discord analytics bot with anomaly detection",
    problem: "Discord server admins had no way to track engagement trends or detect unusual activity patterns",
    outcome: "Continuous activity tracking, AI-generated pulse reports, sentiment analysis, and instant anomaly alerts",
    tech: ["Python", "discord.py", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/Sahaj33-op/ServerPulse",
    featured: false,
  },
  {
    title: "Vidya Vaani",
    description: "Multilingual AI education chatbot built for Smart India Hackathon 2025",
    problem: "Educational content was inaccessible to students who preferred regional Indian languages",
    outcome: "RAG-powered chatbot supporting Hindi, Marathi, and Marwari with voice input and admin analytics dashboard",
    tech: ["Next.js", "TypeScript", "FastAPI", "Google Gemini", "FAISS", "Tailwind CSS"],
    github: "https://github.com/Sahaj33-op/Vidya-vaani-V0",
    featured: false,
  },
  {
    title: "Hypixel SkyBlock Extractor",
    description: "Comprehensive profile data extraction and analysis tool for Hypixel SkyBlock",
    problem: "Players needed a way to fetch, organize, and analyze their full game progression data",
    outcome: "Extracts profiles, inventories, skills, garden, museum, bazaar prices, and auction data via Hypixel API v2",
    tech: ["Python", "Streamlit", "Hypixel API"],
    github: "https://github.com/Sahaj33-op/SkyBlock-Profile-Extractor",
    featured: false,
  },
  {
    title: "YT-DLP Downloader",
    description: "Modern web app for downloading video and audio from 1000+ platforms",
    problem: "Downloading media from various platforms required command-line knowledge and technical setup",
    outcome: "User-friendly GUI with quality selection, batch downloads, subtitle embedding, and download history",
    tech: ["Python", "Streamlit", "yt-dlp", "FFmpeg"],
    github: "https://github.com/Sahaj33-op/Streamlit-ytdlp-downloader-app",
    live: "https://ytdlp-downloader-app-sahaj33.streamlit.app/",
    featured: false,
  },
  {
    title: "Game Price Scraper",
    description: "Multi-store game price comparison and sale detection tool",
    problem: "Gamers had to manually check multiple stores to find the best deals on games",
    outcome: "Automated scraping of Steam, Epic Games, and GOG with normalized price comparison and discount tracking",
    tech: ["Node.js", "Crawlee", "Apify SDK"],
    featured: false,
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            Projects we&apos;re
            <br />
            <span className="text-[var(--foreground-muted)]">proud of.</span>
          </h2>
          <p className="text-[var(--foreground-muted)]">
            A curated selection of systems we&apos;ve designed and shipped. Each project solved a real problem.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-medium text-[var(--foreground)]">
                        {project.title}
                      </h3>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--border)] text-[var(--foreground-muted)]">
                        Featured
                      </span>
                    </div>
                    <p className="text-lg text-[var(--foreground-muted)] mb-4">
                      {project.description}
                    </p>
                    <p className="text-[var(--foreground-subtle)] mb-6">
                      <span className="text-[var(--foreground-muted)]">Problem:</span> {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full border border-[var(--border)] text-[var(--foreground-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--background)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg text-[var(--foreground)] hover:bg-[var(--border)] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] transition-colors"
              >
                <h3 className="text-xl font-medium text-[var(--foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full border border-[var(--border)] text-[var(--foreground-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {"github" in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
