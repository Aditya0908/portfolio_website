# Portfolio Redesign — Design Spec

**Date:** 2026-04-30
**Owner:** Aditya Jain

## Goal

Redesign the existing portfolio at `aditya-portfolio-fixed` to incorporate two reference sites while keeping the current AI/cyberpunk theme:

1. **moncy.dev**-inspired hero — a 3D scene with the human (Aditya) at the center and AI/robotics elements revolving around him
2. **nareshkhatri.site**-inspired skills section — a 3D keyboard whose keycaps are tech logos; clicking a keycap reveals a detail panel about that tech
3. **nareshkhatri.site**-inspired projects interaction — case-study expansion when a card is clicked

## Out of scope

- TypeScript migration (stay JavaScript)
- Designing the actual Spline scenes (placeholders are used; user swaps real scenes in via `config.js` later)
- Sourcing/producing project screenshots (kept text-driven case studies instead)
- Backend / contact form submission (still a `mailto:` link)

## Constraints / decisions already locked

| Decision | Choice |
|---|---|
| 3D engine | Spline (`@splinetool/react-spline`) — same as Naresh's site |
| Avatar | Placeholder Spline scene now; user swaps real Ready Player Me / custom scene later via single config value |
| Skills metaphor | Literal 3D keyboard with tech-logo keycaps |
| Projects format | Keep current spec-sheet card style; add click-to-expand fullscreen case-study modal |
| Smooth scroll | Lenis |
| Scroll reveals | Framer Motion (already installed, currently unused) |
| Theme | Stay JavaScript |
| Refactor | Split single 2023-line `src/app.jsx` into `components/` + `sections/` + `data/` + `hooks/` |

## File structure

```
src/
  app.jsx                    # Composition root
  index.css
  main.jsx
  assets/
    bitmoji.png              # moved from src/76565654.png
    resume.pdf               # moved from src/resume_adi.pdf
  data/
    config.js                # name, links, Spline scene URLs (placeholders), feature flags
    projects.js              # project objects (with new caseStudy field)
    skills.js                # categorized skills with descriptions for keyboard reveal panel
    journey.js               # About timeline data
  components/
    Background.jsx           # FloatingElements + InteractiveNeuralNetwork (lifted from current)
    Button.jsx
    GlassCard.jsx
    SectionHeading.jsx       # shared "Featured X / / Subhead" pattern
    StatusBadge.jsx          # the System Status pill
    ScrollReveal.jsx         # Framer Motion in-view wrapper
    SmoothScroll.jsx         # Lenis provider wrapping the app
  sections/
    Hero.jsx
    About.jsx
    Projects.jsx
    ProjectCaseStudy.jsx     # the modal/overlay
    Skills.jsx
    Contact.jsx
  hooks/
    useTypewriter.js
    useDarkMode.js
```

All currently commented-out code in `app.jsx` is deleted. Same JavaScript.

## Dependencies

**Add:**
- `@splinetool/react-spline`
- `@splinetool/runtime`
- `lenis`

**Remove (currently installed, unused):**
- `react-tsparticles`
- `tsparticles`
- `react-router-dom`
- `react-simple-typewriter`

**Keep:**
- `react`, `react-dom`, `framer-motion`, `lucide-react`, Vite, Tailwind, PostCSS, Autoprefixer

## Section-by-section design

### Hero — "You in your AI universe"

**Layout:**
- Full-viewport (100vh) section
- Centerpiece: Spline 3D scene loaded via `<Spline scene={config.heroSplineUrl} />`
- Scene contents (in the placeholder): a stylized humanoid centerpiece with floating tech-logo cards on slow orbital rings, drifting glow particles, one translucent holographic side-panel showing fake "system status" text
- Layered above the scene (DOM): AI System Status badge top-center, headline below the scene, social/CTA buttons below that

**Mechanics:**
- Cursor parallax handled natively by Spline
- While the Spline scene loads: a skeleton (current bouncing 🤖 + gradient ring) shows so the page is never empty
- Scroll past the hero: the global background neural-network canvas remains; the Spline mount can stay (Spline pauses offscreen) — simpler than unmounting
- Reduced-motion / mobile fallback: drop the Spline mount entirely, render the existing animated avatar circle (current code is the fallback)

**Copy (kept verbatim from current):**
- Typewriter: `"Hi, I'm Aditya Jain 👋"`, `"AI Applications Engineer"`, `"Building the Future with Code"`
- Tagline: `Architecting high-compute RAG systems and spatial intelligence to bridge the gap between LLMs and real-world perception.`
- Tech badges: GEN-AI & RAG, KNOWLEDGE GRAPHS, ON-PREM COMPUTE, COMPUTER VISION
- CTAs: `Deployed Systems`, `Initialize Chat`
- Social row + theme toggle

**Risks:**
- Spline scenes can be 1–5 MB. Mitigation: lazy-load (Spline component is dynamic-imported), skeleton-while-loading, mobile/reduced-motion fallback

### About — kept

The curvy SVG road timeline with milestone nodes is unique to this portfolio. Kept as-is, just modularized into `sections/About.jsx`. Wrapped in `<ScrollReveal>` for entrance animation.

### Skills — 3D keyboard

**Layout:**
- Full-width section
- Left: Spline-rendered 3D keyboard whose keycaps are tech logos for the user's stack (PyTorch, ROS2, FastAPI, Neo4j, CUDA, YOLO, SAM2, OpenCV, Docker, Linux, …)
- Right: detail panel that updates when a keycap is "pressed"
- On mobile: keyboard above, detail panel below

**Mechanics:**
- Spline scene loaded via `<Spline scene={config.skillsSplineUrl} />`
- Naresh's pattern: Spline emits an event when an object is clicked; we attach an `onSplineMouseDown` (or `onMouseDown`) listener via the Spline React API to detect which keycap was hit, then update React state (`activeSkillId`), which feeds the right-hand detail panel
- Detail panel shows: large logo, name, level (Expert/Advanced/Intermediate), one-paragraph description, where the user has used it (links to relevant projects in the projects section, anchor-scroll on click)
- Default state on mount: a "press a key" hint label in the panel area (matching Naresh's "hint: press a key" cue)
- Keyboard fallback (no Spline, reduced-motion, mobile): existing tabbed-grid skill UI from current `Skills()` component is the fallback

**Skills data (`src/data/skills.js`):**
Each skill object: `{ id, name, level, category, icon, color, description, relatedProjectIds }`. Categories: AI & LLMs, Perception, Infrastructure, Robotics. Same skills as current with one-paragraph descriptions added.

### Projects — case-study expansion

**Layout:**
- Same 2-column glassmorphism cards on the section page (current design preserved)
- Each card gets a small "View case study →" affordance in the footer area (replacing the icon-pair `ExternalLink`/`Github`)

**Click interaction:**
- Click anywhere on the card → opens a fullscreen modal overlay
- Modal contents:
  - Header: project icon + title + status badge + close button
  - **Problem** — what challenge this solved (1 paragraph)
  - **Approach** — high-level architecture (1–2 paragraphs)
  - **Architecture diagram** — animated SVG diagram (block-arrow style — Input → Stage → Output) generated per-project. For each project: a hand-authored SVG in `data/projects.js` that renders a few labeled nodes connected by arrows. No external screenshots needed.
  - **Results / Metrics** — current `metrics` field expanded to multiple lines
  - **Tech used** — current `tech` array shown as tag chips
  - **Highlights** — current `highlights` array shown as bulleted list
- Modal animation: scale-in + fade with Framer Motion. Body scroll locks while open. Esc key + backdrop click close.

**Data model change** (`src/data/projects.js`):
Each project gains a `caseStudy: { problem, approach, diagram (SVG component), results }` block. Existing fields `(title, description, use_case, tech, status, icon, highlights, metrics)` are preserved.

### Contact — kept

Terminal-window styling with `Send_Message()` and `Download_Artifact.pdf` is on-brand. Kept as-is, modularized into `sections/Contact.jsx`. Wrapped in `<ScrollReveal>`.

### Background — kept

`FloatingElements` + `InteractiveNeuralNetwork` lifted into `components/Background.jsx`. Mounted once at the top of `<App>`. The hero section dials its opacity slightly down via a CSS variable so the Spline scene reads cleanly.

### Footer — kept

`Aditya Jain // Version 2.0.25 // React_Vite_Tailwind` retained.

## Cross-cutting

### Smooth scroll
- `components/SmoothScroll.jsx` is a Lenis provider that wraps the entire app in `app.jsx`
- Default Lenis settings (no custom easing) — Naresh's site is similar
- Disabled when `prefers-reduced-motion: reduce`

### Scroll-reveal animations
- `components/ScrollReveal.jsx` wraps any child in a Framer `<motion.div>` with `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.5 }}`
- Used to wrap About, Projects, Skills, Contact section roots
- Hero is excluded (already animates on mount)

### Spline placeholder strategy
- `src/data/config.js` exports two placeholder URLs:
  ```js
  export const config = {
    heroSplineUrl: "https://prod.spline.design/<placeholder-id>/scene.splinecode",
    skillsSplineUrl: "https://prod.spline.design/<placeholder-id>/scene.splinecode",
  };
  ```
- These point to public Spline community scenes (a generic 3D character + a generic 3D keyboard).
- User changes the URL string to swap in their own scene later.
- For the skills keyboard interaction to work, the user's eventual real scene must label each keycap object with a name matching the skill's `id` field; the click handler reads `event.target.name` and looks up the skill. Documented in a `// SWAP_INSTRUCTIONS:` comment in `config.js`.

### Theme toggle
- Existing `useDarkMode` preserved
- Light mode is currently broken-looking in the existing site (most colors are dark-only); not in scope to fix. Toggle still functions.

## Testing strategy

Manual verification only (no test framework in the project). Verification steps:
1. `npm run dev` starts without errors
2. Page loads, Spline placeholders render (or skeleton if Spline is slow)
3. Hero typewriter cycles through three phrases
4. Click a project card → modal opens with all sections populated → close works (Esc, X button, backdrop)
5. Click a Skills keyboard key → detail panel updates (with placeholder scene, this requires the placeholder scene to expose at least one named object; otherwise the fallback grid is shown)
6. Smooth scroll works between sections via the social buttons / CTAs
7. Scroll-reveal animations fire when each section enters viewport
8. Resize to mobile width → layout collapses cleanly, Spline either lazy-loads or falls back per design
9. Reduced-motion preference disables Lenis and Spline fallback path activates

## Migration / risk plan

- **Refactor + rebuild done in one branch** off `main`. The current `src/app.jsx` is moved into modules; nothing is rewritten beyond what's required for the redesign.
- Each section's existing JSX is moved into its new file with minimal edits, then enhanced.
- After dev verification, commit and stay on the branch until user confirms everything works in their browser.
