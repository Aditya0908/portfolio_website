import { Calendar } from "lucide-react";
import { GlassCard } from "../components/GlassCard.jsx";
import { ScrollReveal } from "../components/ScrollReveal.jsx";
import { journey } from "../data/journey.js";

export function About() {
  return (
    <ScrollReveal>
      <section id="about" className="py-20 max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Architecting scalable AI applications and intelligent systems, bridging the gap
            between LLMs and real-world perception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-4 text-white">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently an AI Applications Engineer at Bharat Forge (Kalyani Group). My journey
                began in the trenches of Robotics—building ROS2 perception stacks and real-time
                navigation systems—which gave me a unique perspective on how AI interacts with the
                physical world.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I am working on architecting On-Premise Generative AI systems. I focus on
                creating secure, high-performance intelligence that works where cloud-dependency
                isn't an option.
              </p>
            </GlassCard>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">My Journey</h3>
            <div className="relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 600"
                preserveAspectRatio="none"
              >
                <path
                  d="M 50 50 Q 150 100 200 200 T 350 350 Q 250 450 150 550"
                  stroke="url(#roadGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="opacity-30"
                />
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative space-y-12 py-8">
                {journey.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } gap-8`}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{item.emoji}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-30 animate-pulse"></div>
                    </div>

                    <div className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <GlassCard className="hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-blue-400 font-medium">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-1 text-white">{item.title}</h4>
                        <p className="text-purple-400 text-sm mb-3 font-medium">{item.company}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
