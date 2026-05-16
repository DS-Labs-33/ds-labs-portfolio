const services = [
  {
    title: "AI Tools & Automation",
    description:
      "Custom AI solutions that solve real problems. From intelligent document processing to workflow automation that saves hours of manual work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Apps & Dashboards",
    description:
      "Full-stack applications built for performance and usability. Real-time dashboards, admin panels, and data visualization tools.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Business Websites",
    description:
      "Clean, fast websites that convert. Designed for credibility and optimized for the clients you want to attract.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Backend APIs & Systems",
    description:
      "Reliable infrastructure that scales. REST APIs, database architecture, and backend services built for production.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Desktop & Systems Engineering",
    description:
      "Cross-platform native applications and system utilities. Managing local execution, file systems, and hardware resources.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            Focused expertise,
            <br />
            <span className="text-[var(--foreground-muted)]">real results.</span>
          </h2>
          <p className="text-[var(--foreground-muted)]">
            We specialize in a few things and do them well. Every project gets our full attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center text-[var(--foreground)] mb-6 group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
