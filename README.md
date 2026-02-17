# DS Labs — Portfolio

The official portfolio website for **DS Labs**, a selective digital studio based in Surat, Gujarat, India. Built with Next.js 16, React 19, and Tailwind CSS 4.

**Live:** Deployed on [Vercel](https://vercel.com)
**Contact:** contactdslabs@gmail.com

---

## Overview

A single-page portfolio showcasing DS Labs' projects, services, and team. Features a dark/light theme system, responsive design across all breakpoints, and a working contact form powered by [FormSubmit.co](https://formsubmit.co).

### Sections

| Section | Description |
|---------|-------------|
| **Hero** | Landing section with CTAs |
| **Selected Work** | 9 featured and supporting projects with GitHub/live demo links |
| **Services** | AI Tools, Web Apps, Business Websites, Backend APIs |
| **Why DS Labs** | Core values and differentiators |
| **About** | Team members and studio background |
| **Contact** | Working contact form + email + address |
| **Footer** | Social links and copyright |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Fonts | [Geist](https://vercel.com/font) (Sans + Mono) |
| Contact Form | [FormSubmit.co](https://formsubmit.co) |
| Deployment | [Vercel](https://vercel.com) |

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/Sahaj33-op/ds-labs-portfolio.git
cd ds-labs-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design system (CSS custom properties + Tailwind theme)
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Home page composing all sections
│   └── favicon.ico
└── components/
    ├── index.ts           # Barrel exports
    ├── ThemeProvider.tsx   # Dark/light theme context with localStorage persistence
    ├── Navigation.tsx     # Fixed navbar with mobile menu and theme toggle
    ├── Hero.tsx           # Hero section
    ├── SelectedWork.tsx   # Projects showcase (featured + grid)
    ├── Services.tsx       # Service offerings
    ├── WhyDSLabs.tsx      # Value propositions
    ├── About.tsx          # Team and studio info
    ├── Contact.tsx        # Contact form (FormSubmit.co integration)
    └── Footer.tsx         # Footer with social links
```

---

## Contact Form Setup

The contact form uses [FormSubmit.co](https://formsubmit.co) — a free form backend that forwards submissions as emails. No API keys or accounts required.

**First-time activation:**

1. Deploy the site or run locally
2. Submit a test message through the contact form
3. Check `contactdslabs@gmail.com` for the activation email from FormSubmit
4. Click the confirmation link

All subsequent submissions will be delivered directly to the inbox.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Deploy — no environment variables or additional configuration needed

### Other Platforms

Any platform supporting Next.js works. Run `npm run build` to generate static output.

---

## License

All rights reserved. This is a proprietary portfolio website for DS Labs.
