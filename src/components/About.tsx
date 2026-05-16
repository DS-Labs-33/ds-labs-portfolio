"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const team = [
  {
    name: "Sahaj",
    role: "AI & Backend Engineering",
    focus: "AI systems, automation, backend engineering, tooling",
    strength: "Designing and shipping complex systems end-to-end, from idea to deployment",
  },
  {
    name: "Divy Viradiya",
    role: "Web Development",
    focus: "Web development, implementation, collaboration",
    strength: "Reliable execution, frontend/backend support, project delivery",
  },
];

function TerminalMockup() {
  const [text, setText] = useState("");
  const codeLines = [
    "~ $ ./deploy-system.sh",
    "> Initializing DS Labs core infrastructure...",
    "> Provisioning cloud resources: SUCCESS",
    "> Compiling AI models: SUCCESS",
    "> Starting main API server...",
    "> System online. Ready for requests."
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timer: NodeJS.Timeout;

    const typeCode = () => {
      if (currentLine >= codeLines.length) {
        timer = setTimeout(() => {
          setText("");
          currentLine = 0;
          currentChar = 0;
          typeCode();
        }, 5000);
        return;
      }

      if (currentChar < codeLines[currentLine].length) {
        setText((prev) => prev + codeLines[currentLine].charAt(currentChar));
        currentChar++;
        timer = setTimeout(typeCode, Math.random() * 30 + 20); // random typing speed
      } else {
        setText((prev) => prev + "\n");
        currentLine++;
        currentChar = 0;
        timer = setTimeout(typeCode, 400); // pause at end of line
      }
    };

    timer = setTimeout(typeCode, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-[#0d1117] border border-[#30363d] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto text-xs font-mono text-[#8b949e]">bash — ds-labs-core</div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-[#c9d1d9] whitespace-pre-wrap h-[200px] overflow-hidden">
        {text}<span className="animate-pulse text-white">_</span>
      </div>
    </div>
  );
}

export function About() {
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
    <section id="about" className="py-32 px-6 bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-sm uppercase tracking-wider text-[var(--accent)] mb-4 font-medium">
              About
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--foreground)] mb-6">
              The studio.
            </motion.h2>
            <div className="max-w-lg">
              <motion.p variants={itemVariants} className="text-xl text-[var(--foreground-muted)] leading-relaxed mb-6">
                DS Labs is a small, focused digital studio. We build AI tools, web applications,
                and backend systems for clients who prioritize quality and reliability.
              </motion.p>
              <motion.p variants={itemVariants} className="text-[var(--foreground-muted)] leading-relaxed">
                We&apos;re intentionally selective. Taking on fewer projects means giving each one
                the attention it deserves. No account managers, no handoffs between teams.
                When you work with us, you work directly with the people building your product.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="lg:pl-8"
          >
            <TerminalMockup />
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-8">
            The Team
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)] shadow-sm hover:shadow-xl hover:shadow-[var(--accent)]/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h4 className="text-2xl font-medium text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[var(--accent)] font-medium">{member.role}</p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-[var(--foreground-subtle)] mb-1 font-medium">Focus</p>
                      <p className="text-[var(--foreground-muted)]">{member.focus}</p>
                    </div>
                    <div>
                      <p className="text-[var(--foreground-subtle)] mb-1 font-medium">Strength</p>
                      <p className="text-[var(--foreground-muted)]">{member.strength}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
