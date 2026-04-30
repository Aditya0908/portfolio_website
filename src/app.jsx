import { Background } from "./components/Background.jsx";
import { SmoothScroll } from "./components/SmoothScroll.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Contact } from "./sections/Contact.jsx";
import { useDarkMode } from "./hooks/useDarkMode.js";

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <SmoothScroll>
      <div className={`min-h-screen transition-all duration-300 ${darkMode ? "text-white" : "text-slate-900"}`}>
        <Background />

        <main className="relative z-10 max-w-7xl mx-auto px-6 font-sans bg-transparent">
          <Hero toggleTheme={toggleTheme} darkMode={darkMode} />
          <About />
          <Projects />
          <Skills />
          <Contact />

          <footer className="py-12 text-center text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em] border-t border-white/5">
            Aditya Jain // Version 2.0.25 // React_Vite_Tailwind
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
}
