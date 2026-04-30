import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "../components/GlassCard.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ScrollReveal } from "../components/ScrollReveal.jsx";
import { ProjectCaseStudy } from "./ProjectCaseStudy.jsx";
import { projects } from "../data/projects.jsx";

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <ScrollReveal>
      <section
        id="projects"
        className="py-24 max-w-6xl mx-auto px-6 relative z-10"
      >
        <SectionHeading title="Featured Projects" subtitle="Systems_and_Deployments" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              className="text-left group cursor-pointer"
              aria-label={`Open case study for ${project.title}`}
            >
              <GlassCard className="flex flex-col border-slate-800 hover:border-blue-500/50 transition-all duration-500 h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    {project.icon}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                    {project.status === "completed"
                      ? "● Status: Active"
                      : "○ Status: In_Progress"}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-mono">
                  {"> " + project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-blue-500/5 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-mono text-emerald-400 truncate pr-4">
                    {project.metrics}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </GlassCard>
            </button>
          ))}
        </div>
      </section>

      <ProjectCaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </ScrollReveal>
  );
}
