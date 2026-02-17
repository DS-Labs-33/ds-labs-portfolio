"use client";

import { useState } from "react";

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
      const res = await fetch("https://formsubmit.co/ajax/contactdslabs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.project,
          _subject: `New project inquiry from ${formState.name}`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", project: "" });
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
              Start a Project
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
              Let&apos;s build
              <br />
              <span className="text-[var(--foreground-muted)]">something together.</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-md">
              Have a project in mind? We&apos;d love to hear about it. Tell us what you&apos;re
              working on and we&apos;ll get back to you with our thoughts.
            </p>

            <div className="space-y-4 text-[var(--foreground-muted)]">
              {/* Email */}
              <a
                href="mailto:contactdslabs@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--foreground)] transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--foreground-subtle)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contactdslabs@gmail.com
              </a>

              {/* Address */}
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--foreground-subtle)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Surat, Gujarat, India
              </p>

              {/* Reply time */}
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--foreground-subtle)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                We usually reply within 24-48 hours
              </p>

              {/* No commitment */}
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--foreground-subtle)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                No commitment required to chat
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {isSubmitted ? (
              <div className="p-8 rounded-2xl border border-[var(--success)] bg-[var(--card-bg)] text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--success)]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[var(--foreground)] mb-2">
                  Message sent
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="project"
                    name="message"
                    required
                    rows={5}
                    value={formState.project}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, project: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow resize-none"
                    placeholder="What are you building? What problem are you trying to solve?"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Start a Project"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
