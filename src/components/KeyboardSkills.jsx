import { useMemo } from "react";
import { skills, skillCategories } from "../data/skills.js";

const categoryStyles = {
  "AI & LLMs": {
    label: "AI / LLMS",
    cap: "bg-gradient-to-b from-purple-400 to-purple-700",
    side: "bg-purple-900",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    text: "text-purple-100",
  },
  Perception: {
    label: "PERCEPTION",
    cap: "bg-gradient-to-b from-emerald-400 to-emerald-700",
    side: "bg-emerald-900",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.6)]",
    text: "text-emerald-100",
  },
  Infrastructure: {
    label: "INFRA",
    cap: "bg-gradient-to-b from-amber-400 to-amber-700",
    side: "bg-amber-900",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.6)]",
    text: "text-amber-100",
  },
  Robotics: {
    label: "ROBOTICS",
    cap: "bg-gradient-to-b from-blue-400 to-blue-700",
    side: "bg-blue-900",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    text: "text-blue-100",
  },
};

const styles = `
  @keyframes scan {
    0%   { transform: translateY(-10%); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(110%); opacity: 0; }
  }
  .keyboard-scanline {
    animation: scan 6s linear infinite;
  }

  .keycap {
    position: relative;
    transition: transform 120ms ease-out, filter 120ms ease-out;
    transform-style: preserve-3d;
  }
  .keycap::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%);
    pointer-events: none;
  }
  .keycap-side {
    position: absolute;
    left: 0; right: 0; top: 100%;
    height: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    filter: brightness(0.55);
    transition: height 120ms ease-out;
  }
  .keycap:hover {
    transform: translateY(3px);
  }
  .keycap:hover .keycap-side {
    height: 5px;
  }
  .keycap:active {
    transform: translateY(6px);
  }
  .keycap:active .keycap-side {
    height: 2px;
  }
  .keycap-active {
    transform: translateY(5px);
    filter: brightness(1.1);
  }
  .keycap-active .keycap-side {
    height: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    .keyboard-scanline { animation: none !important; opacity: 0; }
    .keycap, .keycap-side { transition: none !important; }
  }
`;

if (typeof document !== "undefined" && !document.getElementById("keyboard-skills-styles")) {
  const el = document.createElement("style");
  el.id = "keyboard-skills-styles";
  el.textContent = styles;
  document.head.appendChild(el);
}

export function KeyboardSkills({ activeId, onSelect }) {
  const rows = useMemo(
    () =>
      skillCategories.map((category) => ({
        category,
        keys: skills.filter((s) => s.category === category).slice(0, 6),
      })),
    [],
  );

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      {/* Keyboard chassis with subtle 3D tilt */}
      <div
        className="relative rounded-3xl bg-gradient-to-b from-slate-800 via-slate-900 to-black border border-slate-700/60 p-5 md:p-7 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
        style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}
      >
        {/* Scanline */}
        <div
          aria-hidden
          className="keyboard-scanline absolute left-0 right-0 h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.07) 50%, transparent 100%)",
          }}
        />

        {/* Top status bar */}
        <div className="flex items-center justify-between mb-5 px-1 relative z-10">
          <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.3em] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ADITYA-OS // KEYBOARD_v1
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500">
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            PRESS ANY KEY
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          </div>
        </div>

        {/* Keyboard grid */}
        <div className="space-y-5 md:space-y-6 relative z-10 pb-3">
          {rows.map(({ category, keys }) => {
            const style = categoryStyles[category];
            return (
              <div key={category}>
                {/* Category label */}
                <div className="flex items-center gap-2 mb-2 px-1">
                  <div className={`text-[9px] font-mono uppercase tracking-[0.4em] ${style.text} opacity-80`}>
                    {style.label}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>

                {/* Keys row — fixed 6-col grid (3-col on small screens) */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3">
                  {keys.map((skill) => {
                    const active = skill.id === activeId;
                    return (
                      <div key={skill.id} className="relative pb-2">
                        <button
                          type="button"
                          onClick={() => onSelect(skill)}
                          aria-label={`Select ${skill.name}`}
                          className={`
                            keycap
                            ${active ? "keycap-active" : ""}
                            relative w-full
                            rounded-lg
                            ${style.cap}
                            ${active ? style.glow : ""}
                            border border-white/15
                            px-2 py-3 md:px-3 md:py-4
                            cursor-pointer
                            select-none
                          `}
                        >
                          <div className="flex flex-col items-center gap-1.5 relative z-10">
                            <span className="text-xl md:text-2xl leading-none drop-shadow">
                              {skill.icon}
                            </span>
                            <span
                              className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider font-bold ${style.text} truncate w-full text-center drop-shadow-sm`}
                            >
                              {shortName(skill.name)}
                            </span>
                          </div>
                          {/* Side of the keycap (gives 3D depth) */}
                          <span
                            aria-hidden
                            className={`keycap-side ${style.side}`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom edge accents */}
        <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center text-[8px] font-mono text-slate-700 tracking-[0.4em] uppercase">
          <span>● PWR</span>
          <span>HINT: HOVER + CLICK</span>
          <span>USB-C ▶</span>
        </div>
      </div>
    </div>
  );
}

function shortName(name) {
  if (name.length <= 11) return name;
  return name
    .replace("Multi-modal ", "")
    .replace("LangChain / Agents", "LangChain")
    .replace("Neo4j / GraphRAG", "GraphRAG")
    .replace("Vector Databases", "Vector DB")
    .replace("Prompt Engineering", "Prompt")
    .replace("NVIDIA DGX B200", "DGX B200")
    .replace("ROS2 (Humble)", "ROS2")
    .replace("TF2 / Transforms", "TF2")
    .replace("RealSense / LiDAR", "RealSense")
    .replace("MinIO (S3)", "MinIO")
    .replace("Linux Admin", "Linux")
    .replace("YOLO v5/v8", "YOLO");
}
