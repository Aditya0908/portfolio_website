import { Brain, Database, Zap, Eye, Cpu, Cloud, Code2, Box } from "lucide-react";
import bitmoji from "../assets/bitmoji.png";

// Tech "satellites" that orbit the avatar. Two rings — inner has fewer, larger
// items; outer has more, smaller items. Counter-rotation keeps icons upright
// while the orbit rotates.
const innerRing = [
  { label: "RAG", icon: Brain, color: "text-purple-300", bg: "bg-purple-500/15", border: "border-purple-500/40" },
  { label: "ROS2", icon: Cpu, color: "text-blue-300", bg: "bg-blue-500/15", border: "border-blue-500/40" },
  { label: "PyTorch", icon: Code2, color: "text-orange-300", bg: "bg-orange-500/15", border: "border-orange-500/40" },
  { label: "Vision", icon: Eye, color: "text-emerald-300", bg: "bg-emerald-500/15", border: "border-emerald-500/40" },
];

const outerRing = [
  { label: "Neo4j", icon: Database, color: "text-blue-300" },
  { label: "FastAPI", icon: Zap, color: "text-emerald-300" },
  { label: "CUDA", icon: Cpu, color: "text-green-300" },
  { label: "YOLO", icon: Eye, color: "text-yellow-300" },
  { label: "Docker", icon: Box, color: "text-cyan-300" },
  { label: "DGX", icon: Cpu, color: "text-purple-300" },
  { label: "MinIO", icon: Cloud, color: "text-pink-300" },
  { label: "SAM 2", icon: Eye, color: "text-amber-300" },
];

const styles = `
  @keyframes orbit-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes orbit-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
  @keyframes float-y   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
  .orbit-cw  { animation: orbit-cw  28s linear infinite; }
  .orbit-ccw { animation: orbit-ccw 44s linear infinite; }
  .counter-cw  { animation: orbit-ccw 28s linear infinite; }
  .counter-ccw { animation: orbit-cw  44s linear infinite; }
  .float-bob  { animation: float-y 6s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) {
    .orbit-cw, .orbit-ccw, .counter-cw, .counter-ccw, .float-bob { animation: none !important; }
  }
`;

if (typeof document !== "undefined" && !document.getElementById("orbital-hero-styles")) {
  const el = document.createElement("style");
  el.id = "orbital-hero-styles";
  el.textContent = styles;
  document.head.appendChild(el);
}

export function OrbitalHero() {
  // Sizes — tuned to look right on desktop and degrade on mobile.
  const stage = "w-[340px] h-[340px] md:w-[520px] md:h-[520px]";
  const innerRadius = "translate-y-[-115px] md:translate-y-[-175px]";
  const outerRadius = "translate-y-[-160px] md:translate-y-[-240px]";

  return (
    <div className={`relative mx-auto ${stage}`}>
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,rgba(168,85,247,0.15)_30%,transparent_60%)] blur-2xl"></div>

      {/* Faint orbital rings as visual anchors */}
      <div className="absolute inset-[14%] rounded-full border border-blue-500/15"></div>
      <div className="absolute inset-[2%] rounded-full border border-purple-500/10"></div>

      {/* Outer ring — smaller satellite chips */}
      <div className="absolute inset-0 orbit-ccw">
        {outerRing.map((item, i) => {
          const angle = (360 / outerRing.length) * i;
          return (
            <div
              key={item.label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              <div className={`${outerRadius}`}>
                <div className="counter-ccw">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm shadow-lg">
                    <item.icon className={`w-3 h-3 ${item.color}`} />
                    <span className="text-[10px] font-mono text-slate-300 tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner ring — larger feature cards */}
      <div className="absolute inset-0 orbit-cw">
        {innerRing.map((item, i) => {
          const angle = (360 / innerRing.length) * i;
          return (
            <div
              key={item.label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              <div className={`${innerRadius}`}>
                <div className="counter-cw">
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${item.bg} border ${item.border} backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-xs font-mono font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center — bitmoji avatar with halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative float-bob">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
              <img
                src={bitmoji}
                alt="Aditya Jain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Tiny rotating accent */}
          <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-400/80 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
