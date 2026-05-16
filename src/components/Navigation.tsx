"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function Navigation() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ["work", "services", "about", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: "Work", id: "work" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#about", label: "About", id: "about" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  // Determine icon to show - default to sun (for dark mode) during SSR
  const showSunIcon = !mounted || theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-medium tracking-tight text-[var(--foreground)] group flex items-center gap-3"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--border)] group-hover:scale-110 transition-transform shadow-sm">
              <img 
                src="/dslabs.jpg" 
                alt="DS Labs Avatar" 
                className="object-cover w-full h-full"
              />
            </div>
            DS Labs
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-full border border-[var(--border)] bg-[var(--background)]/50 mr-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                      isActive ? "text-[var(--background)]" : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[var(--foreground)] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--border)] text-[var(--foreground)] transition-colors mr-2"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {showSunIcon ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2 bg-[var(--accent)] text-[var(--background)] rounded-full text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
            >
              Start a Project
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--border)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[var(--border)] pt-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-[var(--foreground)] text-[var(--background)]" 
                        : "text-[var(--foreground-muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-[var(--border)]">
                <button
                  onClick={toggleTheme}
                  className="px-4 py-3 rounded-lg hover:bg-[var(--border)] transition-colors text-left text-sm font-medium text-[var(--foreground-muted)] flex items-center gap-2"
                  aria-label="Toggle theme"
                >
                  {showSunIcon ? (
                    <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> Light Mode</>
                  ) : (
                    <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> Dark Mode</>
                  )}
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 bg-[var(--accent)] text-[var(--background)] rounded-lg text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors text-center mt-2"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
