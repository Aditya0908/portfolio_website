import { Suspense, lazy, useEffect, useState } from "react";
import { Keyboard } from "lucide-react";
import { GlassCard } from "../components/GlassCard.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ScrollReveal } from "../components/ScrollReveal.jsx";
import { KeyboardSkills } from "../components/KeyboardSkills.jsx";
import { skills } from "../data/skills.js";
import { projects } from "../data/projects.jsx";
import { config } from "../data/config.js";

const Spline = lazy(() => import("@splinetool/react-spline"));

const projectMap = new Map(projects.map((p) => [p.id, p]));

function SkillDetailPanel({ skill, onProjectClick }) {
  if (!skill) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 font-mono text-xs uppercase tracking-widest">
        <Keyboard className="w-8 h-8 mb-3 text-slate-600" />
        Press a key to load skill dossier
      </div>
    );
  }

  const related = (skill.relatedProjectIds || [])
    .map((id) => projectMap.get(id))
    .filter(Boolean);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-4">
        <div className="text-4xl p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
          {skill.icon}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">
            / {skill.category}
          </div>
          <h3 className="text-xl font-bold text-white truncate">{skill.name}</h3>
          <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {skill.level}
          </span>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed">{skill.description}</p>

      {related.length > 0 && (
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">
            / Used In
          </div>
          <div className="flex flex-wrap gap-2">
            {related.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onProjectClick?.(p)}
                className="text-[11px] font-mono px-2 py-1 rounded border border-purple-500/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 transition-colors"
              >
                {p.icon} {p.title.split(":")[0].split("(")[0].trim()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function useSmallScreen() {
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

export function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const small = useSmallScreen();

  const handleProjectClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Spline upgrade path: when a keycap mesh is clicked in the 3D scene, look up
  // the skill by mesh name (matching the `id` field). Only used when
  // config.skillsSplineUrl is set.
  const handleSplineClick = (event) => {
    const name = event?.target?.name || "";
    if (!name) return;
    const match = skills.find(
      (s) => s.id.toLowerCase() === String(name).toLowerCase(),
    );
    if (match) setActiveSkill(match);
  };

  const useSpline = !!config.skillsSplineUrl && !small;

  return (
    <ScrollReveal>
      <section id="skills" className="py-24 max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading title="Tech Stack" subtitle="Press_a_key" />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            {useSpline ? (
              <GlassCard className="p-0 overflow-hidden border-slate-800">
                <div className="relative w-full h-[420px] md:h-[480px]">
                  <Suspense
                    fallback={
                      <div className="h-full flex items-center justify-center text-slate-500 font-mono text-xs uppercase tracking-widest">
                        Loading 3D keyboard…
                      </div>
                    }
                  >
                    <Spline
                      scene={config.skillsSplineUrl}
                      onSplineMouseDown={handleSplineClick}
                    />
                  </Suspense>
                </div>
              </GlassCard>
            ) : (
              <KeyboardSkills
                activeId={activeSkill?.id}
                onSelect={setActiveSkill}
              />
            )}
          </div>

          <div className="lg:col-span-2">
            <GlassCard className="border-slate-800 min-h-[300px]">
              <SkillDetailPanel
                skill={activeSkill}
                onProjectClick={handleProjectClick}
              />
            </GlassCard>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
