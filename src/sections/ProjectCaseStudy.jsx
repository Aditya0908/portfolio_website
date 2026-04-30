import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export function ProjectCaseStudy({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:p-8 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 24, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl my-8 rounded-2xl border border-slate-800 bg-[#0b1220] shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-[#0b1220]/95 backdrop-blur px-6 py-4 rounded-t-2xl">
              <div className="flex items-center gap-3 min-w-0">
                <div className="text-2xl p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    ● {project.status === "completed" ? "Status: Active" : "Status: In_Progress"}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="ml-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <Section label="Problem">
                <p className="text-slate-300 leading-relaxed">{project.caseStudy.problem}</p>
              </Section>

              <Section label="Approach">
                <p className="text-slate-300 leading-relaxed">{project.caseStudy.approach}</p>
              </Section>

              <Section label="Architecture">
                <div className="rounded-xl border border-slate-800 bg-black/30 p-5 overflow-x-auto">
                  <project.caseStudy.Diagram />
                </div>
              </Section>

              <Section label="Results">
                <ul className="space-y-2">
                  {project.caseStudy.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-[11px] font-mono text-emerald-400">
                  {project.metrics}
                </div>
              </Section>

              <Section label="Highlights">
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-slate-300 text-sm flex items-start gap-2"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-blue-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section label="Tech">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-blue-500/5 text-blue-300 px-2 py-1 rounded border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              {(project.url || project.github) && (
                <div className="flex gap-3 pt-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors text-sm font-mono"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors text-sm font-mono"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-3">
        / {label}
      </div>
      {children}
    </div>
  );
}
