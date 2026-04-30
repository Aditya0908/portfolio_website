import { Suspense, lazy, useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sun,
  Moon,
  ChevronDown,
  Brain,
  Database,
  Zap,
  Eye,
} from "lucide-react";
import { Button } from "../components/Button.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { OrbitalHero } from "../components/OrbitalHero.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { config } from "../data/config.js";
import resume from "../assets/resume.pdf";

const Spline = lazy(() => import("@splinetool/react-spline"));

const HERO_PHRASES = [
  "Hi, I'm Aditya Jain 👋",
  "AI Applications Engineer",
  "Building the Future with Code",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useIsSmallScreen() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    setSmall(mq.matches);
    const handler = (e) => setSmall(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return small;
}

function SplineStage({ url }) {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] mx-auto">
      <Suspense fallback={<div className="flex items-center justify-center h-full"><OrbitalHero /></div>}>
        <Spline scene={url} />
      </Suspense>
      {/* Gentle inner vignette so the scene blends with the page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(1,4,9,0.6)_100%)]"></div>
    </div>
  );
}

export function Hero({ toggleTheme, darkMode }) {
  const typewriterText = useTypewriter(HERO_PHRASES, 70, 50, 1500);
  const reduced = useReducedMotion();
  const small = useIsSmallScreen();
  const useSpline = !!config.heroSplineUrl && !reduced && !small;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-10 z-10">
        <StatusBadge />

        <div className="mx-auto max-w-3xl">
          {useSpline ? <SplineStage url={config.heroSplineUrl} /> : <OrbitalHero />}
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight min-h-[4rem] flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typewriterText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Architecting{" "}
            <span className="text-blue-400 font-mono font-medium">high-compute RAG systems</span>{" "}
            and <span className="text-purple-400 font-mono font-medium">spatial intelligence</span>{" "}
            to bridge the gap between LLMs and real-world perception.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] font-mono text-gray-500">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/5 bg-white/5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              GEN-AI &amp; RAG
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/5 bg-white/5">
              <Database className="w-3.5 h-3.5 text-blue-400" />
              KNOWLEDGE GRAPHS
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/5 bg-white/5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              ON-PREM COMPUTE
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/5 bg-white/5">
              <Eye className="w-3.5 h-3.5 text-green-400" />
              COMPUTER VISION
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button onClick={() => scrollToSection("projects")}>
            Deployed Systems <ChevronDown className="w-4 h-4 ml-1 inline" />
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection("contact")}>
            Initialize Chat
          </Button>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href={`mailto:${config.email}`}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href={resume}
            download
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10"
            aria-label="Download resume"
          >
            <Download className="w-5 h-5 text-green-400" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}
