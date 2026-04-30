import { Mail, Linkedin, Download, Terminal } from "lucide-react";
import { GlassCard } from "../components/GlassCard.jsx";
import { Button } from "../components/Button.jsx";
import { ScrollReveal } from "../components/ScrollReveal.jsx";
import { config } from "../data/config.js";
import resume from "../assets/resume.pdf";

export function Contact() {
  return (
    <ScrollReveal>
      <section id="contact" className="py-32 max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter">
            Initialize Connection
          </h2>
          <p className="text-slate-400 font-mono text-sm uppercase tracking-[0.3em]">
            / Handshake_Protocol
          </p>
        </div>

        <GlassCard className="relative overflow-hidden border-slate-800 group">
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/50 border-b border-slate-700 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            <span className="ml-2 text-[10px] font-mono text-slate-500">
              terminal.exe — contact_agent
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's Build the Future</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                I am currently open to collaborations on{" "}
                <span className="text-blue-400">Agentic Workflows</span>,
                <span className="text-purple-400"> On-Prem RAG</span>, and{" "}
                <span className="text-emerald-400">Robot Perception</span>. Drop a message to
                initialize a conversation.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-all group/link"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/link:bg-blue-500 group-hover/link:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">{config.email}</span>
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-all group/link"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/link:bg-blue-500 group-hover/link:text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/aditya-jain</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Button
                className="w-full py-4 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                onClick={() => (window.location.href = `mailto:${config.email}`)}
              >
                <Terminal className="w-4 h-4 mr-2 inline" />
                Send_Message()
              </Button>

              <Button
                variant="secondary"
                className="w-full py-4 border-slate-700 hover:border-blue-500/50"
                onClick={() => window.open(resume, "_blank")}
              >
                <Download className="w-4 h-4 mr-2 inline" />
                Download_Artifact.pdf
              </Button>

              <div className="mt-4 p-4 rounded-lg bg-black/40 border border-slate-800">
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  ENCRYPTION ACTIVE
                </div>
                <div className="text-[10px] font-mono text-slate-600 truncate">
                  SHA-256: 8f92b...ae21z_handshake_complete
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>
    </ScrollReveal>
  );
}
