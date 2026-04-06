---
name: portfolio
description: >
  Use this skill when the user asks to build, refactor, or improve a personal portfolio website.
  Triggers include: "build my portfolio", "refactor my portfolio", "create a portfolio site",
  "redesign my portfolio", "portfolio with animations", "developer portfolio", "designer portfolio".
  Produces production-grade Next.js portfolios with cinematic animations, intentional design,
  and zero AI-slop aesthetics. Never use this skill for generic websites, SaaS products, or dashboards.
---

# Portfolio Creation Skill

You are a senior creative developer building a portfolio that wins design awards and gets people hired.
Your output must feel handcrafted, intentional, and human — not generated. Every decision is deliberate.

---

## 1. Before Writing Any Code

Ask yourself (or the user) these questions. If answers aren't provided, make bold, specific choices:

- **Who is this person?** Developer, designer, creative technologist, fullstack engineer?
- **What is the desired tone?** Minimalist editorial, dark & cinematic, brutalist, soft & organic, bold & loud?
- **What sections are needed?** Hero, About, Work/Projects, Skills/Stack, Experience, Writing/Blog, Contact?
- **Do they have existing brand colors, a typeface preference, or a reference site they love?**
- **Is this a refactor (existing codebase) or a greenfield build?**

**Only after answering these** proceed to implementation.

---

## 2. Tech Stack

Always use this stack unless the user explicitly requests otherwise:

```
Framework:     Next.js 15 (App Router, TypeScript)
Styling:       Tailwind CSS v4
UI Motion:     Motion (formerly Framer Motion) — for component/React animations
Scroll Anim:   GSAP + ScrollTrigger — for scroll-based reveals, timelines, text effects
Smooth Scroll: Lenis — pairs perfectly with GSAP ScrollTrigger
3D (optional): Three.js or React Three Fiber — only if it adds real value, not as decoration
Fonts:         Google Fonts or Fontshare — never Inter, Roboto, Arial, or system defaults
Icons:         Lucide React or custom SVG — avoid Font Awesome
Email:         Resend or EmailJS for contact form
Deploy:        Vercel
```

### Package Installation Reference
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir
cd portfolio
npm install motion gsap @studio-freight/lenis
npm install lucide-react clsx tailwind-merge
# Optional 3D
npm install three @react-three/fiber @react-three/drei
```

---

## 3. Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, Lenis provider
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # CSS variables, base styles, custom cursors
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Stack.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── TextReveal.tsx
│   │   └── Cursor.tsx      # Custom cursor (if aesthetic calls for it)
│   └── providers/
│       └── SmoothScroll.tsx
├── lib/
│   ├── data.ts             # All portfolio data (projects, stack, experience)
│   └── utils.ts            # cn() helper and misc utilities
└── hooks/
    └── useGSAP.ts          # GSAP context hook
```

---

## 4. Design System

### 4.1 Typography — NEVER Use Generic Fonts

Pick ONE of these pairings based on the aesthetic direction:

| Aesthetic       | Display Font           | Body Font         |
|-----------------|------------------------|-------------------|
| Editorial/Luxury| Playfair Display       | DM Sans           |
| Bold/Modern     | Cabinet Grotesk        | Satoshi           |
| Brutalist/Raw   | Space Mono             | IBM Plex Sans     |
| Soft/Creative   | Cormorant Garamond     | Plus Jakarta Sans |
| Dark/Cinematic  | Syne                   | Inter (exception) |
| Techy/Sharp     | Bebas Neue             | JetBrains Mono    |

Avoid: Inter as a display font, Roboto, Arial, system-ui as primary choices.

### 4.2 Color — Commit to a Palette

Define all colors as CSS variables in `globals.css`. Examples:

```css
/* Dark Cinematic */
:root {
  --bg: #080808;
  --bg-secondary: #111111;
  --fg: #f0ede6;
  --fg-muted: #6b6b6b;
  --accent: #e8ff47;       /* Sharp acid yellow */
  --accent-secondary: #ff4d4d;
  --border: rgba(255,255,255,0.08);
}

/* Editorial Light */
:root {
  --bg: #f5f2ec;
  --bg-secondary: #edeae3;
  --fg: #1a1a1a;
  --fg-muted: #888880;
  --accent: #c8410b;       /* Burnt orange */
  --accent-secondary: #1a1a6e;
  --border: rgba(0,0,0,0.1);
}
```

Rules:
- Max 2 accent colors. One dominant, one for highlights.
- Avoid purple/blue gradients on white — most overused AI aesthetic.
- Use `oklch()` for vibrant, accessible color mixing where supported.

### 4.3 Spacing & Layout

- Base unit: `4px` (Tailwind default)
- Use generous whitespace — sections should breathe
- Horizontal padding: `px-6 md:px-12 lg:px-24`
- Max content width: `max-w-7xl mx-auto` or custom `max-w-[1400px]`
- Allow elements to break the grid intentionally (negative margins, absolute positioning)

---

## 5. Animation System

### 5.1 Lenis Smooth Scroll (Provider)

```tsx
// src/components/providers/SmoothScroll.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}
```

### 5.2 Text Reveal — The Most Important Animation

Every heading should animate in. Use GSAP SplitText pattern:

```tsx
// src/components/ui/TextReveal.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children, as: Tag = "h2", className = "", delay = 0
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll(".word");

    gsap.fromTo(words,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.06,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  const wrappedWords = children.split(" ").map((word, i) => (
    <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
      <span className="word" style={{ display: "inline-block" }}>{word}</span>
    </span>
  ));

  return <Tag ref={ref as any} className={className}>{wrappedWords}</Tag>;
}
```

### 5.3 Motion (Framer Motion) — Component Animations

Use for: page transitions, card hovers, modal enter/exit, staggered lists.

```tsx
// Fade-up variant (reusable)
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Usage
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  custom={index}
>
```

### 5.4 Magnetic Button — High-Impact Interaction

```tsx
// src/components/ui/MagneticButton.tsx
"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function MagneticButton({ children, className }: {
  children: React.ReactNode; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.35,
      y: (clientY - (top + height / 2)) * 0.35,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 5.5 Animation Rules

- **Page load**: Stagger hero elements in over 1.2s total. Nothing should pop in instantly.
- **Scroll reveals**: `start: "top 85%"` for early reveals, `once: true` to avoid replay jank.
- **Hover states**: Max 200ms for hover transitions. Use `ease: [0.25, 0.1, 0.25, 1]`.
- **No layout shift**: Always set initial height/dimensions to avoid CLS.
- **Respect `prefers-reduced-motion`**: Wrap all animations with a check.

```tsx
// Check reduced motion
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReduced) { /* run animations */ }
```

---

## 6. Section Blueprints

### 6.1 Hero — Make It Unforgettable

The hero must have ONE clear memorable element. Choose:
- Giant typographic treatment (name or role as full-width type)
- A looping WebGL/Canvas element
- Kinetic text (role cycling with clip-mask transition)
- Bold image with parallax overlay

```tsx
// Hero structure pattern
export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 ...">/* grain, gradient, or WebGL */</div>

      {/* Main heading — always large */}
      <TextReveal as="h1" className="text-[12vw] font-display leading-none tracking-tighter">
        Full Name
      </TextReveal>

      {/* Role + scroll indicator row */}
      <div className="flex justify-between items-end mt-6">
        <p className="text-fg-muted text-sm uppercase tracking-widest">
          Role · Location · Year
        </p>
        <ScrollIndicator />
      </div>
    </section>
  );
}
```

### 6.2 Work/Projects — The Most Important Section

Projects must show: title, year, tags, short description, and a visual (image or video).

```tsx
// Project card pattern — horizontal layout with hover expand
interface Project {
  title: string;
  year: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
  github?: string;
}

// Render as a list of bordered rows, not a grid of cards
// On hover: expand row to reveal image + description
// This feels editorial, not template-like
```

Project card variants (pick one based on aesthetic):
- **List rows** with image reveal on hover (editorial)
- **Masonry grid** with stagger entrance (creative agency)
- **Full-bleed cards** that stack on scroll (immersive)
- **Case study tiles** with featured image top (UX/design focus)

### 6.3 About — Personal, Not Corporate

Avoid: bullet-point skills list, stock "passionate developer" copy.
Do: Short punchy paragraph, ONE personal detail, a photo (if available), and a list of what you currently use day-to-day.

### 6.4 Stack/Skills — Show, Don't Just List

Never a plain list. Options:
- Animated marquee/ticker of technology logos
- Grid of icons with hover tooltips
- Grouped by category with proficiency shown visually

### 6.5 Contact — Make It Easy and Elegant

```tsx
// Minimal but impactful contact section
<section>
  <TextReveal as="h2">Let's work together</TextReveal>
  <a href="mailto:..." className="text-[6vw] font-display hover:text-accent transition-colors">
    hello@yourname.com
  </a>
  <div className="flex gap-6 mt-8">
    {/* Social links: GitHub, LinkedIn, Twitter/X */}
  </div>
</section>
```

---

## 7. Data Layer — Keep Content Separate

All portfolio content lives in `src/lib/data.ts`. Never hardcode strings in components.

```ts
// src/lib/data.ts
export const meta = {
  name: "Your Name",
  role: "Full Stack Developer",
  location: "São Paulo, BR",
  email: "hello@yourname.com",
  bio: "...",
};

export const projects: Project[] = [
  {
    id: "project-slug",
    title: "Project Title",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Postgres"],
    description: "One line description.",
    longDescription: "...",
    image: "/projects/project-slug.jpg",
    link: "https://...",
    github: "https://github.com/...",
    featured: true,
  },
];

export const stack = {
  languages: ["TypeScript", "Python", "Go"],
  frontend: ["Next.js", "React", "Tailwind CSS"],
  backend: ["Node.js", "Fastify", "PostgreSQL"],
  tools: ["Docker", "Vercel", "Figma"],
};

export const experience = [
  {
    company: "Company Name",
    role: "Senior Developer",
    period: "2023 — Present",
    description: "...",
  },
];
```

---

## 8. Performance Requirements

- **LCP < 2.5s** — hero image must use `next/image` with `priority` prop
- **No layout shift** — set explicit width/height on all images
- **Font loading** — use `next/font` with `display: 'swap'`
- **Bundle size** — import GSAP plugins individually, not the whole package
- **Animations off-thread** — use `will-change: transform` on animated elements
- **Preload key assets** — hero image, display font

```tsx
// next/font usage
import { Playfair_Display, DM_Sans } from "next/font/google";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
```

---

## 9. SEO & Metadata

Every portfolio needs proper metadata or it won't be found:

```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "Your Name — Full Stack Developer",
  description: "...",
  openGraph: {
    title: "Your Name — Full Stack Developer",
    description: "...",
    url: "https://yourname.dev",
    siteName: "Your Name",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full Stack Developer",
    images: ["/og-image.jpg"],
  },
};
```

---

## 10. Anti-Patterns — What NOT to Do

These make portfolios look AI-generated or amateur:

| ❌ Don't                                          | ✅ Do Instead                                        |
|---------------------------------------------------|------------------------------------------------------|
| Gradient text on every heading                    | Solid color with one accent highlight                |
| Purple/pink/blue gradient backgrounds             | Commit to a real color story (dark, warm, editorial) |
| Cards with drop shadows everywhere                | Borders, negative space, or layered layouts          |
| Animated counter numbers (views, projects, etc.)  | Real metrics only, or skip entirely                  |
| Generic "I am passionate developer" bio           | Specific, personal, memorable sentences              |
| Particle.js backgrounds                           | GSAP-driven SVGs, WebGL blobs, or clean gradients    |
| Font: Inter for everything                        | Display font + body font pairing                     |
| Skill bars/percentages                            | Tech stack list grouped by category                  |
| "Download CV" as the main CTA                     | Email CTA as primary, CV secondary                   |
| Responsive only (mobile first ignored)            | Mobile-first, then scale up layouts                  |
| Animations on every single element                | Animation budget: hero + section entrances + hovers  |
| Loading screens longer than 1 second             | Skeleton or instant render                           |

---

## 11. Refactor Checklist

When refactoring an existing portfolio, audit in this order:

1. **Typography audit** — Is the font pair distinctive? Replace if generic.
2. **Color audit** — Does the palette have a point of view? Add contrast.
3. **Animation audit** — Are animations intentional or just noise? Remove jank.
4. **Content audit** — Is the copy generic? Rewrite hero tagline and bio.
5. **Project section audit** — Do projects tell a story or just list tech? Improve descriptions.
6. **Performance audit** — Run Lighthouse. Fix any LCP/CLS issues.
7. **Mobile audit** — Test at 375px. Typography and spacing should feel intentional, not just "smaller".
8. **Metadata audit** — OG image, description, and title all set?

---

## 12. Inspiration References

Point Claude Code or other LLMs to these for aesthetic direction:

- **Awwwards GSAP gallery**: https://www.awwwards.com/websites/gsap/
- **Awwwards Motion gallery**: https://www.awwwards.com/websites/motion/
- **Framer Awards 2025**: https://www.framer.com/awards/
- **Codrops tutorials**: https://tympanus.net/codrops/ (text effects, transitions)
- **Made With GSAP**: https://madewithgsap.com/ (scroll & interaction patterns)
- **Bruno Simon's portfolio**: https://bruno-simon.com (3D reference)
- **Wes Bos portfolio**: minimalist editorial reference
- **Linear.app**: motion and micro-interaction reference (not a portfolio, but best-in-class UX)

---

## 13. Delivering the Output

When building a portfolio with this skill:

1. **Confirm the aesthetic direction** before writing any code (ask 2–3 clarifying questions max)
2. **Build `data.ts` first** — separate content from structure
3. **Build the layout and design system** — `globals.css`, font setup, CSS variables
4. **Build sections top-to-bottom**: Hero → About → Work → Stack → Contact
5. **Add animations last** — get the layout right first, then layer in motion
6. **Review against anti-patterns checklist** before finishing
7. **Output complete, runnable files** — not pseudocode or placeholders

Every file output must be complete and production-ready. No `// TODO` comments left behind.