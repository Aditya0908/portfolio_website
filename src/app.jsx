// import React, { useEffect, useState } from "react";
// import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { loadFull } from "tsparticles";
// import Particles from "react-particles";
// import bitmoji from "/Users/adityajain/aditya-portfolio-fixed/src/76565654.png"; // <-- Add your actual path to bitmoji image

// function useDarkMode() {
//     const [darkMode, setDarkMode] = useState(true);
//     useEffect(() => {
//         document.documentElement.classList.toggle("dark", darkMode);
//     }, [darkMode]);
//     return [darkMode, setDarkMode];
// }

// const Card = ({ children }) => (
//     <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="rounded-2xl shadow-md bg-gray-800 p-6"
//     >
//         {children}
//     </motion.div>
// );

// const Button = ({ children, ...props }) => (
//     <button
//         {...props}
//         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
//     >
//         {children}
//     </button>
// );

// function Hero({ toggleTheme, darkMode }) {
//     return (
//         <section className="text-center space-y-4">
//             <motion.img
//                 src={bitmoji}
//                 alt="Bitmoji"
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-24 h-24 mx-auto rounded-full border-4 border-blue-400"
//             />
//             <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold"
//             >
//                 <span className="text-blue-400">
//                     <Typewriter
//                         words={["Hi, I'm Aditya Jain.", "AI/ML Engineer & Roboticist"]}
//                         loop={0}
//                         cursor
//                         cursorStyle="_"
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1000}
//                     />
//                 </span>
//             </motion.h1>
//             <p className="text-lg text-gray-300">
//                 Robotics | ROS2 | Perception | Computer Vision
//             </p>
//             <div className="flex justify-center gap-4 mt-4">
//                 <a href="mailto:your.email@example.com" aria-label="Email">
//                     <Mail className="hover:text-blue-400" />
//                 </a>
//                 <a href="https://github.com/yourgithub" target="_blank" aria-label="GitHub">
//                     <Github className="hover:text-blue-400" />
//                 </a>
//                 <a href="https://linkedin.com/in/yourlinkedin" target="_blank" aria-label="LinkedIn">
//                     <Linkedin className="hover:text-blue-400" />
//                 </a>
//                 <a href="/AdityaJain_Resume.pdf" download>
//                     <Download className="hover:text-blue-400" />
//                 </a>
//                 <button onClick={toggleTheme} aria-label="Toggle Theme">
//                     {darkMode ? <Sun className="hover:text-yellow-400" /> : <Moon className="hover:text-gray-400" />}
//                 </button>
//             </div>
//         </section>
//     );
// }

// function About() {
//     return (
//         <section className="mt-16 max-w-3xl mx-auto space-y-4">
//             <h2 className="text-2xl font-semibold">About Me</h2>
//             <p className="text-gray-300">
//                 Currently working as an AI/ML Engineer in the Robotics team at Bharat Forge (Kalyani Group), with over 1 year of prior internship in the same domain. My work focuses on ROS2-based mobile robot perception systems, object detection using YOLO, TF publishing, semantic scene annotation, and autonomous navigation. Passionate about integrating AI with real-world robotics applications.
//             </p>
//         </section>
//     );
// }

// function Projects() {
//     return (
//         <section className="mt-16">
//             <h2 className="text-2xl font-semibold mb-6">Highlighted Projects</h2>
//             <div className="grid gap-6 md:grid-cols-2">
//                 <Card>
//                     <h3 className="text-xl font-semibold">ROS2 Object Detection & Scene Annotation</h3>
//                     <p className="text-gray-400 text-sm mt-2">
//                         A ROS2 Python node for YOLO-based object detection with 360° rotation, TF publishing, pose estimation, user confirmation, and JSON logging. Supports location revisits and object re-identification with OpenAI Vision.
//                     </p>
//                     <a href="https://github.com/yourgithub/ros2-object-annotation" target="_blank">
//                         <Button>View on GitHub</Button>
//                     </a>
//                 </Card>

//                 <Card>
//                     <h3 className="text-xl font-semibold">Neo4j Robotics Knowledge Graph</h3>
//                     <p className="text-gray-400 text-sm mt-2">
//                         A system that logs detected object poses into a Neo4j database, builds spatial relationships between robot and environment, and queries the nearest object node from the robot's live pose.
//                     </p>
//                     <a href="https://github.com/yourgithub/ros2-neo4j-graph" target="_blank">
//                         <Button>View on GitHub</Button>
//                     </a>
//                 </Card>

//                 <Card>
//                     <h3 className="text-xl font-semibold">Perception Pipeline for Ground Segmentation</h3>
//                     <p className="text-gray-400 text-sm mt-2">
//                         ROS2 C++ node using RealSense D435i + PCL to perform ground segmentation, extract object boundaries, compute intersections with the ground, and visualize in RViz2.
//                     </p>
//                 </Card>

//                 <Card>
//                     <h3 className="text-xl font-semibold">Voice-Enabled Chatbot with Context Memory</h3>
//                     <p className="text-gray-400 text-sm mt-2">
//                         Built a self-interacting chatbot that continuously listens, responds in 50 words, and maintains memory using OpenAI API. Integrated TTS, STT, and contextual voice commands.
//                     </p>
//                 </Card>
//             </div>
//         </section>
//     );
// }

// function Contact() {
//     return (
//         <section className="mt-16 max-w-xl mx-auto space-y-4">
//             <h2 className="text-2xl font-semibold">Contact Me</h2>
//             <p className="text-gray-300">
//                 Reach out via <a href="mailto:your.email@example.com" className="text-blue-400">email</a> or connect on <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-400">LinkedIn</a>.
//             </p>
//         </section>
//     );
// }

// export default function App() {
//     const [darkMode, setDarkMode] = useDarkMode();
//     const toggleTheme = () => setDarkMode(!darkMode);

//     const particlesInit = async (main) => {
//         await loadFull(main);
//     };

//     return (
//         <Router>
//             <div className="relative">
//                 <Particles
//                     id="tsparticles"
//                     init={particlesInit}
//                     options={{
//                         fullScreen: { enable: true, zIndex: -1 },
//                         background: { color: darkMode ? "#000000" : "#ffffff" },
//                         particles: {
//                             number: { value: 80, density: { enable: true, area: 800 } },
//                             color: { value: "#00FFFF" },
//                             shape: { type: "circle" },
//                             opacity: {
//                                 value: 0.2,
//                                 random: true,
//                                 anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
//                             },
//                             size: {
//                                 value: 3,
//                                 random: true,
//                                 anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
//                             },
//                             links: {
//                                 enable: true,
//                                 distance: 150,
//                                 color: "#00FFFF",
//                                 opacity: 0.3,
//                                 width: 1
//                             },
//                             move: {
//                                 enable: true,
//                                 speed: 1,
//                                 direction: "none",
//                                 outModes: { default: "bounce" }
//                             }
//                         },
//                         interactivity: {
//                             events: {
//                                 onHover: { enable: true, mode: "repulse" },
//                                 onClick: { enable: true, mode: "push" }
//                             },
//                             modes: {
//                                 repulse: { distance: 100, duration: 0.4 },
//                                 push: { quantity: 4 }
//                             }
//                         },
//                         detectRetina: true
//                     }}
//                 />

//                 <main className="relative z-10 min-h-screen text-white font-sans px-6 py-10 bg-gradient-to-br from-gray-900 to-black">
//                     <nav className="flex justify-center gap-8 mb-8 text-gray-300 text-sm">
//                         <Link to="/">Home</Link>
//                         <Link to="/projects">Projects</Link>
//                         <Link to="/contact">Contact</Link>
//                     </nav>
//                     <Routes>
//                         <Route path="/" element={<><Hero toggleTheme={toggleTheme} darkMode={darkMode} /><About /></>} />
//                         <Route path="/projects" element={<Projects />} />
//                         <Route path="/contact" element={<Contact />} />
//                     </Routes>
//                     <footer className="mt-20 text-center text-gray-500 text-sm">
//                         © {new Date().getFullYear()} Aditya Jain. Built with React, Tailwind, Framer Motion.
//                     </footer>
//                 </main>
//             </div>
//         </Router>
//     );
// }



































// import React, { useEffect, useState } from "react";
// import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";

// // Custom Typewriter Hook
// function useTypewriter(words, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1000) {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[currentWordIndex];

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         // Typing
//         if (currentText.length < currentWord.length) {
//           setCurrentText(currentWord.slice(0, currentText.length + 1));
//         } else {
//           // Word complete, wait then start deleting
//           setTimeout(() => setIsDeleting(true), delaySpeed);
//         }
//       } else {
//         // Deleting
//         if (currentText.length > 0) {
//           setCurrentText(currentText.slice(0, -1));
//         } else {
//           // Deletion complete, move to next word
//           setIsDeleting(false);
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, isDeleting ? deleteSpeed : typeSpeed);

//     return () => clearTimeout(timeout);
//   }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

//   return currentText;
// }

// function useDarkMode() {
//   const [darkMode, setDarkMode] = useState(true);
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);
//   return [darkMode, setDarkMode];
// }

// const Card = ({ children }) => (
//   <div className="rounded-2xl shadow-md bg-gray-800 p-6 hover:scale-105 transition-transform duration-300">
//     {children}
//   </div>
// );

// const Button = ({ children, ...props }) => (
//   <button
//     {...props}
//     className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
//   >
//     {children}
//   </button>
// );

// function Hero({ toggleTheme, darkMode }) {
//   const typewriterText = useTypewriter(
//     ["Hi, I'm Aditya Jain.", "AI/ML Engineer & Roboticist"],
//     70,
//     50,
//     1000
//   );

//   return (
//     <section className="text-center space-y-4 relative z-10">
//       <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-400 hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
//         AJ
//       </div>
//       <h1 className="text-4xl font-bold min-h-[3rem] flex items-center justify-center">
//         <span className="text-blue-400">
//           {typewriterText}
//           <span className="animate-pulse">_</span>
//         </span>
//       </h1>
//       <p className="text-lg text-gray-300">
//         Robotics | ROS2 | Perception | Computer Vision
//       </p>
//       <div className="flex justify-center gap-4 mt-6">
//         <a href="mailto:adityashishjain@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//           <Mail className="hover:text-blue-400" />
//         </a>
//         <a href="https://github.com/Aditya0908" target="_blank" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//           <Github className="hover:text-blue-400" />
//         </a>
//         <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" target="_blank" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//           <Linkedin className="hover:text-blue-400" />
//         </a>
//         <a href="src/aditya_resume.pdf" download className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//           <Download className="hover:text-blue-400" />
//         </a>
//         <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//           {darkMode ? <Sun className="hover:text-yellow-400" /> : <Moon className="hover:text-gray-400" />}
//         </button>
//       </div>
//     </section>
//   );
// }

// function About() {
//   return (
//     <section className="mt-16 max-w-3xl mx-auto space-y-4">
//       <h2 className="text-2xl font-semibold">About Me</h2>
//       <p className="text-gray-300">
//         Currently working as an AI/ML Engineer in the Robotics team at Bharat Forge (Kalyani Group), with over 1 year of prior internship in the same domain. My work focuses on ROS2-based mobile robot perception systems, object detection using YOLO, TF publishing, semantic scene annotation, and autonomous navigation. Passionate about integrating AI with real-world robotics applications.
//       </p>
//     </section>
//   );
// }

// function Projects() {
//   return (
//     <section className="mt-16">
//       <h2 className="text-2xl font-semibold mb-6">Highlighted Projects</h2>
//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <h3 className="text-xl font-semibold">ROS2 Object Detection & Scene Annotation</h3>
//           <p className="text-gray-400 text-sm mt-2">
//             A ROS2 Python node for YOLO-based object detection with 360° rotation, TF publishing, pose estimation, user confirmation, and JSON logging. Supports location revisits and object re-identification with OpenAI Vision.
//           </p>
//           <a href="https://github.com/yourgithub/ros2-object-annotation" target="_blank">
//             <Button>View on GitHub</Button>
//           </a>
//         </Card>
//         <Card>
//           <h3 className="text-xl font-semibold">Neo4j Robotics Knowledge Graph</h3>
//           <p className="text-gray-400 text-sm mt-2">
//             A system that logs detected object poses into a Neo4j database, builds spatial relationships between robot and environment, and queries the nearest object node from the robot's live pose.
//           </p>
//           <a href="https://github.com/yourgithub/ros2-neo4j-graph" target="_blank">
//             <Button>View on GitHub</Button>
//           </a>
//         </Card>
//         <Card>
//           <h3 className="text-xl font-semibold">Perception Pipeline for Ground Segmentation</h3>
//           <p className="text-gray-400 text-sm mt-2">
//             ROS2 C++ node using RealSense D435i + PCL to perform ground segmentation, extract object boundaries, compute intersections with the ground, and visualize in RViz2.
//           </p>
//         </Card>
//         <Card>
//           <h3 className="text-xl font-semibold">Voice-Enabled Chatbot with Context Memory</h3>
//           <p className="text-gray-400 text-sm mt-2">
//             Built a self-interacting chatbot that continuously listens, responds in 50 words, and maintains memory using OpenAI API. Integrated TTS, STT, and contextual voice commands.
//           </p>
//         </Card>
//       </div>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section className="mt-16 max-w-xl mx-auto space-y-4">
//       <h2 className="text-2xl font-semibold">Contact Me</h2>
//       <p className="text-gray-300">
//         Reach out via <a href="mailto:adityashishjain@gmail.com" className="text-blue-400 hover:underline">email</a> or connect on <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" className="text-blue-400 hover:underline">LinkedIn</a>.
//       </p>
//     </section>
//   );
// }

// export default function App() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   const [currentPage, setCurrentPage] = useState('home');
//   const toggleTheme = () => setDarkMode(!darkMode);

//   const renderContent = () => {
//     switch(currentPage) {
//       case 'projects':
//         return <Projects />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return (
//           <>
//             <Hero toggleTheme={toggleTheme} darkMode={darkMode} />
//             <About />
//           </>
//         );
//     }
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Background Pattern */}
//       <div className="fixed inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
//           backgroundSize: '400px 400px'
//         }}></div>
//       </div>

//       <main className="relative z-10 min-h-screen font-sans px-6 py-8">
//         <nav className="flex justify-center gap-8 mb-12 text-gray-400 text-sm">
//           <button 
//             onClick={() => setCurrentPage('home')}
//             className={`hover:text-blue-400 transition-colors ${currentPage === 'home' ? 'text-blue-400' : ''}`}
//           >
//             Home
//           </button>
//           <button 
//             onClick={() => setCurrentPage('projects')}
//             className={`hover:text-blue-400 transition-colors ${currentPage === 'projects' ? 'text-blue-400' : ''}`}
//           >
//             Projects
//           </button>
//           <button 
//             onClick={() => setCurrentPage('contact')}
//             className={`hover:text-blue-400 transition-colors ${currentPage === 'contact' ? 'text-blue-400' : ''}`}
//           >
//             Contact
//           </button>
//         </nav>

//         {renderContent()}

//         <footer className="mt-20 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Aditya Jain. Built with React, Tailwind.
//         </footer>
//       </main>
//     </div>
//   );
// }




































// import React, { useEffect, useState } from "react";
// import { Github, Linkedin, Mail, Download, Sun, Moon, ChevronDown, ExternalLink, Calendar, MapPin, Code, Brain, Zap, Database, Cpu, Eye } from "lucide-react";

// // Custom Typewriter Hook
// function useTypewriter(words, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1000) {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[currentWordIndex];

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (currentText.length < currentWord.length) {
//           setCurrentText(currentWord.slice(0, currentText.length + 1));
//         } else {
//           setTimeout(() => setIsDeleting(true), delaySpeed);
//         }
//       } else {
//         if (currentText.length > 0) {
//           setCurrentText(currentText.slice(0, -1));
//         } else {
//           setIsDeleting(false);
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, isDeleting ? deleteSpeed : typeSpeed);

//     return () => clearTimeout(timeout);
//   }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

//   return currentText;
// }

// function useDarkMode() {
//   const [darkMode, setDarkMode] = useState(true);
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);
//   return [darkMode, setDarkMode];
// }

// const GlassCard = ({ children, className = "" }) => (
//   <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 ${className}`}>
//     {children}
//   </div>
// );

// const Button = ({ children, variant = "primary", ...props }) => {
//   const variants = {
//     primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
//     secondary: "bg-white/10 border border-white/20 hover:bg-white/20 text-white",
//     outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//   };

//   return (
//     <button
//       {...props}
//       className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${props.className || ''}`}
//     >
//       {children}
//     </button>
//   );
// };

// function FloatingElements() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
//       <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
//       <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
//       <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
//     </div>
//   );
// }

// function Hero({ toggleTheme, darkMode }) {
//   const typewriterText = useTypewriter(
//     ["Hi, I'm Aditya Jain 👋", "AI/ML Engineer & Roboticist", "Building the Future with Code"],
//     70,
//     50,
//     1500
//   );

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
//       <div className="max-w-4xl mx-auto space-y-8">
//         {/* Avatar with glow effect */}
//         <div className="relative">
//           <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 hover:scale-110 transition-all duration-500">
//             <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-2xl">
//               AJ
//             </div>
//           </div>
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
//         </div>

//         {/* Typewriter text */}
//         <div className="space-y-4">
//           <h1 className="text-5xl md:text-6xl font-bold min-h-[4rem] flex items-center justify-center">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               {typewriterText}
//               <span className="animate-pulse text-blue-400">|</span>
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
//             Passionate about integrating AI with real-world robotics applications
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
//             <span className="flex items-center gap-1">
//               <Cpu className="w-4 h-4" />
//               Robotics
//             </span>
//             <span className="flex items-center gap-1">
//               <Brain className="w-4 h-4" />
//               ROS2
//             </span>
//             <span className="flex items-center gap-1">
//               <Eye className="w-4 h-4" />
//               Computer Vision
//             </span>
//             <span className="flex items-center gap-1">
//               <Database className="w-4 h-4" />
//               Machine Learning
//             </span>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 pt-8">
//           <Button onClick={() => scrollToSection('projects')}>
//             View My Work
//           </Button>
//           <Button variant="secondary" onClick={() => scrollToSection('contact')}>
//             Let's Connect
//           </Button>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-6 pt-4">
//           <a href="mailto:adityashishjain@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
//             <Mail className="w-5 h-5 text-blue-400" />
//           </a>
//           <a href="https://github.com/Aditya0908" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
//             <Github className="w-5 h-5 text-gray-300" />
//           </a>
//           <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
//             <Linkedin className="w-5 h-5 text-blue-400" />
//           </a>
//           <a href="src/aditya_resume.pdf" download className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
//             <Download className="w-5 h-5 text-green-400" />
//           </a>
//           <button onClick={toggleTheme} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
//             {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-400" />}
//           </button>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-6 h-6 text-gray-400" />
//       </div>
//     </section>
//   );
// }

// function About() {
//   const journey = [
//     {
//       year: "2024 - Present",
//       title: "AI/ML Engineer - Robotics Team",
//       company: "Bharat Forge (Kalyani Group)",
//       description: "Working on ROS2-based mobile robot perception systems, YOLO object detection, and autonomous navigation."
//     },
//     {
//       year: "2023 - 2024",
//       title: "Robotics Intern",
//       company: "Bharat Forge (Kalyani Group)",
//       description: "1+ year internship focusing on perception systems, semantic scene annotation, and TF publishing."
//     },
//     {
//       year: "2020 - 2024",
//       title: "Computer Science Student",
//       company: "University",
//       description: "Built foundation in AI/ML, robotics, and computer vision with hands-on projects."
//     }
//   ];

//   return (
//     <section id="about" className="py-20 max-w-6xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//           Passionate about bridging the gap between artificial intelligence and real-world robotics applications
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <GlassCard>
//             <h3 className="text-2xl font-semibold mb-4">My Story</h3>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Currently working as an AI/ML Engineer in the Robotics team at Bharat Forge (Kalyani Group), with over 1 year of prior internship experience in the same domain.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               My work focuses on ROS2-based mobile robot perception systems, object detection using YOLO, TF publishing, semantic scene annotation, and autonomous navigation. I'm passionate about creating intelligent systems that can perceive and interact with the real world.
//             </p>
//           </GlassCard>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
//           <div className="space-y-6">
//             {journey.map((item, index) => (
//               <div key={index} className="relative">
//                 <div className="flex items-start gap-4">
//                   <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
//                   <div>
//                     <div className="flex items-center gap-2 mb-1">
//                       <Calendar className="w-4 h-4 text-gray-400" />
//                       <span className="text-sm text-gray-400">{item.year}</span>
//                     </div>
//                     <h4 className="text-lg font-semibold">{item.title}</h4>
//                     <p className="text-blue-400 text-sm mb-2">{item.company}</p>
//                     <p className="text-gray-400 text-sm">{item.description}</p>
//                   </div>
//                 </div>
//                 {index < journey.length - 1 && (
//                   <div className="absolute left-2 top-8 w-px h-16 bg-gray-700"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Projects() {
//   const projects = [
//     {
//       title: "ROS2 Object Detection & Scene Annotation",
//       description: "A ROS2 Python node for YOLO-based object detection with 360° rotation, TF publishing, pose estimation, user confirmation, and JSON logging. Supports location revisits and object re-identification with OpenAI Vision.",
//       tech: ["ROS2", "Python", "YOLO", "OpenAI Vision", "TensorFlow"],
//       github: "https://github.com/yourgithub/ros2-object-annotation",
//       status: "completed"
//     },
//     {
//       title: "Neo4j Robotics Knowledge Graph",
//       description: "A system that logs detected object poses into a Neo4j database, builds spatial relationships between robot and environment, and queries the nearest object node from the robot's live pose.",
//       tech: ["Neo4j", "ROS2", "Python", "Graph Database", "Spatial Computing"],
//       github: "https://github.com/yourgithub/ros2-neo4j-graph",
//       status: "completed"
//     },
//     {
//       title: "Perception Pipeline for Ground Segmentation",
//       description: "ROS2 C++ node using RealSense D435i + PCL to perform ground segmentation, extract object boundaries, compute intersections with the ground, and visualize in RViz2.",
//       tech: ["ROS2", "C++", "PCL", "RealSense", "RViz2"],
//       status: "completed"
//     },
//     {
//       title: "Voice-Enabled Chatbot with Context Memory",
//       description: "Built a self-interacting chatbot that continuously listens, responds in 50 words, and maintains memory using OpenAI API. Integrated TTS, STT, and contextual voice commands.",
//       tech: ["Python", "OpenAI API", "TTS", "STT", "NLP"],
//       status: "completed"
//     },
//     {
//       title: "Autonomous Navigation System",
//       description: "Advanced path planning and obstacle avoidance system for mobile robots using ROS2 and sensor fusion from multiple sources.",
//       tech: ["ROS2", "Path Planning", "Sensor Fusion", "SLAM"],
//       status: "coming-soon"
//     },
//     {
//       title: "Real-time Robot Monitoring Dashboard",
//       description: "Web-based dashboard for monitoring robot fleet status, performance metrics, and real-time sensor data with alerts and analytics.",
//       tech: ["React", "Node.js", "WebSocket", "D3.js", "MongoDB"],
//       status: "coming-soon"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 max-w-6xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
//         <p className="text-xl text-gray-400">Some of the things I've built and currently working on</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <GlassCard key={index} className="group hover:scale-105 transition-all duration-300">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
//                 {project.title}
//               </h3>
//               {project.status === "coming-soon" && (
//                 <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full">
//                   Coming Soon
//                 </span>
//               )}
//             </div>

//             <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tech.map((tech, i) => (
//                 <span key={i} className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {project.github && (
//               <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
//                 <Github className="w-4 h-4" />
//                 View on GitHub
//                 <ExternalLink className="w-3 h-3" />
//               </a>
//             )}
//           </GlassCard>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Skills() {
//   const skills = [
//     { name: "ROS2", level: 90, icon: <Cpu className="w-5 h-5" /> },
//     { name: "Python", level: 85, icon: <Code className="w-5 h-5" /> },
//     { name: "Computer Vision", level: 80, icon: <Eye className="w-5 h-5" /> },
//     { name: "Machine Learning", level: 75, icon: <Brain className="w-5 h-5" /> },
//     { name: "C++", level: 70, icon: <Zap className="w-5 h-5" /> },
//     { name: "TensorFlow", level: 75, icon: <Database className="w-5 h-5" /> }
//   ];

//   return (
//     <section id="skills" className="py-20 max-w-4xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
//         <p className="text-xl text-gray-400">Technologies I work with</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         {skills.map((skill, index) => (
//           <div key={index} className="space-y-2">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-400">{skill.icon}</span>
//                 <span className="font-medium">{skill.name}</span>
//               </div>
//               <span className="text-sm text-gray-400">{skill.level}%</span>
//             </div>
//             <div className="w-full bg-gray-700 rounded-full h-2">
//               <div 
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
//       <div className="mb-16">
//         <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
//         <p className="text-xl text-gray-400">
//           Ready to collaborate on robotics and AI projects? Let's build something amazing together!
//         </p>
//       </div>

//       <GlassCard className="max-w-2xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//             <p className="text-gray-400 mb-6">
//               I'm always open to discussing new opportunities, collaborations, or just having a chat about robotics and AI.
//             </p>
//             <div className="space-y-3">
//               <a href="mailto:adityashishjain@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
//                 <Mail className="w-5 h-5" />
//                 adityashishjain@gmail.com
//               </a>
//               <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
//                 <Linkedin className="w-5 h-5" />
//                 LinkedIn Profile
//               </a>
//               <a href="https://github.com/Aditya0908" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
//                 <Github className="w-5 h-5" />
//                 GitHub Profile
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <Button className="w-full">
//               <Mail className="w-4 h-4 mr-2" />
//               Send Email
//             </Button>
//             <Button variant="secondary" className="w-full">
//               <Download className="w-4 h-4 mr-2" />
//               Download Resume
//             </Button>
//           </div>
//         </div>
//       </GlassCard>
//     </section>
//   );
// }

// export default function App() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white' : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900'}`}>
//       <FloatingElements />

//       <main className="relative z-10 min-h-screen font-sans px-6">
//         <Hero toggleTheme={toggleTheme} darkMode={darkMode} />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />

//         <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-800">
//           <p>© {new Date().getFullYear()} Aditya Jain. Built with React & Tailwind CSS.</p>
//           <p className="mt-2">Inspired by modern portfolio designs • Made with ❤️</p>
//         </footer>
//       </main>
//     </div>
//   );
// }























// FROM:
import React, { useEffect, useState } from "react";

// TO: (no change needed - useState is already imported)
import { Github, Linkedin, Mail, Download, Sun, Moon, ChevronDown, ExternalLink, Calendar, MapPin, Code, Brain, Zap, Database, Cpu, Eye } from "lucide-react";

// Add fadeIn animation
const fadeInKeyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }
`;

// Add the animation styles to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = fadeInKeyframes;
  document.head.appendChild(style);
}
// Custom Typewriter Hook
function useTypewriter(words, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return currentText;
}

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return [darkMode, setDarkMode];
}

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
    secondary: "bg-white/10 border border-white/20 hover:bg-white/20 text-white",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
  };

  return (
    <button
      {...props}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${props.className || ''}`}
    >
      {children}
    </button>
  );
};

function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}

function Hero({ toggleTheme, darkMode }) {
  const typewriterText = useTypewriter(
    ["Hi, I'm Aditya Jain 👋", "AI/ML Engineer & Roboticist", "Building the Future with Code"],
    70,
    50,
    1500
  );

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Cool animated avatar */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 hover:scale-110 transition-all duration-500">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <div className="text-6xl animate-bounce">🤖</div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
          {/* Floating tech icons around avatar */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-spin">
            <span className="text-sm">⚙️</span>
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-sm">🧠</span>
          </div>
          <div className="absolute top-4 -left-4 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xs">👁️</span>
          </div>
        </div>

        {/* Typewriter text */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold min-h-[4rem] flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typewriterText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Passionate about integrating AI with real-world robotics applications
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Cpu className="w-4 h-4" />
              Robotics
            </span>
            <span className="flex items-center gap-1">
              <Brain className="w-4 h-4" />
              ROS2
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              Computer Vision
            </span>
            <span className="flex items-center gap-1">
              <Database className="w-4 h-4" />
              Machine Learning
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          <a href="mailto:adityashishjain@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
            <Mail className="w-5 h-5 text-blue-400" />
          </a>
          <a href="https://github.com/Aditya0908" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
            <Linkedin className="w-5 h-5 text-blue-400" />
          </a>
          <a href="src/aditya_resume.pdf" download className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
            <Download className="w-5 h-5 text-green-400" />
          </a>
          <button onClick={toggleTheme} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

function About() {
  const journey = [
    {
      year: "2024 - Present",
      title: "AI/ML Engineer - Robotics Team",
      company: "Bharat Forge (Kalyani Group)",
      description: "Working on ROS2-based mobile robot perception systems, YOLO object detection, and autonomous navigation."
    },
    {
      year: "2023 - 2024",
      title: "Robotics Intern",
      company: "Bharat Forge (Kalyani Group)",
      description: "1+ year internship focusing on perception systems, semantic scene annotation, and TF publishing."
    },
    {
      year: "2020 - 2024",
      title: "Computer Science Student",
      company: "Vellore Institute Of Technology",
      description: "Built foundation in AI/ML, robotics, and computer vision with hands-on projects."
    }
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Passionate about bridging the gap between artificial intelligence and real-world robotics applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <GlassCard>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Currently working as an AI/ML Engineer in the Robotics team at Bharat Forge (Kalyani Group), with over 1 year of prior internship experience in the same domain.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My work focuses on ROS2-based mobile robot perception systems, object detection using YOLO, TF publishing, semantic scene annotation, and autonomous navigation. I'm passionate about creating intelligent systems that can perceive and interact with the real world.
            </p>
          </GlassCard>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Journey</h3>
          <div className="relative">
            {/* Curvy road background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
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
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Journey node */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">
                          {index === 0 ? '🎯' : index === 1 ? '🚀' : '🌱'}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-30 animate-pulse"></div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <GlassCard className="hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400 font-medium">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
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
  );
}

function Projects() {
  const projects = [
    {
      title: "Autonomous Segmentation & YOLO Training Pipeline",
      description:
        "Designed and implemented a self-hosted pipeline using SAM2 for object segmentation from video inputs, integrated with YOLOv5/v8 for automated model training. Users upload a video and YAML class map, select objects once, and the system auto-generates YOLO-format `.txt` labels and a segmented video. The training module supports YOLO version selection, custom hyperparameters, and outputs best.pt along with mAP/precision metrics.",
      use_case:
        "Offline alternative to RoboFlow for privacy-preserving, scalable object detection dataset generation and training.",
      tech: ["Python", "OpenCV", "SAM2", "YOLOv5", "YOLOv8", "PyTorch", "YAML"],
      // github: "https://github.com/yourgithub/ros2-object-annotation",
      status: "completed",
      icon: "🎯",
      highlights: [
        "YOLO-compatible Auto-labeling",
        "Versioned Training with Metrics",
        "End-to-End Offline Workflow",
      ],
      metrics: "95% mAP on custom dataset"
    },
    {
      title: "SpatialScene: ROS2 Semantic Mapping & Object Graph Logger",
      description:
        "Engineered a ROS2 system that detects objects via YOLOv8, computes their positions in both robot (base_link) and global (map) frames using TF2, and logs annotated data into a Neo4j knowledge graph. Supports proximity-based scene querying, semantic localization, and memory-based re-alignment for re-identifying objects during revisits. Built with modular ROS2 nodes and integrates OpenAI Vision for optional scene descriptions.",
      use_case:
        "Persistent scene memory and semantic map-building for autonomous robots operating in dynamic or repetitive environments.",
      tech: ["ROS2", "Python", "Neo4j", "TF2", "OpenAI Vision", "Transformations"],
      // github: "https://github.com/yourgithub/distance_calculator",
      status: "completed",
      icon: "🧠",
      highlights: [
        "YOLO-based Object Detection in ROS2",
        "Map-Frame Localization via TF",
        "Neo4j Scene Graph Logging & Querying"
      ],
      metrics: "50+ object instances logged with 92% map-frame consistency across test runs"
    },


    // {
    //   title: "Voice-Enabled Contextual AI Assistant",
    //   description: "Sophisticated conversational AI with continuous listening capabilities, contextual memory management, and natural voice interaction. Features advanced NLP processing and intelligent response generation.",
    //   tech: ["Python", "OpenAI API", "TTS", "STT", "NLP"],
    //   status: "completed",
    //   icon: "🗣️",
    //   highlights: ["Voice Control", "Context Memory", "Natural Language"],
    //   metrics: "< 500ms response"
    // },
    {
      title: "Perceptual Autonomy Stack: Multi-Modal Spatial Intelligence for Mobile Robots",
      description:
        "Engineered a fully modular spatial intelligence architecture with dynamic environment adaptation in ROS2 that fuses LiDAR, RGB, and depth data from Intel RealSense D435i for real-time perception, object-aware localization, and autonomous navigation. The system performs 360° semantic scene annotation, transforms detections into the global (map) frame, and persists spatially anchored object graphs in Neo4j. Upon re-entry into a known environment, the robot aligns itself, detects the current frame’s object set, verifies spatial feasibility against the occupancy grid, and triggers closed-loop navigation via Nav2 to dynamically reachable semantic goals.",
      use_case:
        "SLAM-light perceptual autonomy for mobile robots — ideal for indoor search, semantic patrol, memory-guided navigation, and re-identification tasks where environment context is object-centric rather than geometry-centric.",
      tech: ["ROS2", "Neo4j", "TF2", "LiDAR", "Nav2", "OccupancyGrid", "OpenCV", "Depth", "RealSense D435i"],
      // github: "https://github.com/yourgithub/perceptual-autonomy",
      status: "in-progress",
      icon: "🧠",
      highlights: [
        "Multi-Modal Sensor Fusion Pipeline",
        "Global Object Pose Anchoring with TF2",
        "Graph-Based Memory and Goal Recall",
        "Nav2-Driven Autonomous Goal Execution"
      ],
      metrics:
        "Object re-identification accuracy: 93% | Map-frame alignment error < 0.5m | Autonomous goal reach rate: 87% | End-to-end latency per 90° cycle: ~2.5s"
    },



    {
      title: "Prompt-Guided Perceptual Navigation: Real-Time Object Search & Tracking for Quadruped Robots",
      description:    
        "Developed a real-time visual grounding and tracking pipeline for quadruped robots using GroundingDINO (CLIP-based) for open-vocabulary object detection based on natural language prompts, paired with Segment Anything (SAM) for precise instance segmentation. The system operates live in dynamic environments, continuously detecting and re-identifying the target object while the robot performs on-the-fly path planning to approach it. Capable of handling moving objects, the pipeline fuses RGB and depth data to estimate 3D object position and adjust navigation in real time.",
      use_case:
        "Search-and-approach autonomy in unstructured or dynamic environments — ideal for assistive robotics, warehouse picking, inspection, and human-robot interaction where object identity is defined in natural language.",
      tech: [
        "ROS2",
        "GroundingDINO",
        "Segment Anything (SAM)",
        "CLIP",
        "Real-Time Path Planning",
        "OpenCV",
        "Depth Estimation",
        "RealSense D435i"
      ],
      status: "in-progress",
      icon: "🤖",
      highlights: [
        "Prompt-Based Open-Vocabulary Object Detection",
        "Pixel-Accurate Segmentation with SAM",
        "RGB-D Fusion for 3D Object Localization",
        "Dynamic Path Planning for Moving Targets",
        "Real-Time Quadruped Control"
      ],
      "metrics":
        "Detection latency: ~120ms | Segmentation IoU > 90% | Real-time tracking refresh: 10Hz | Dynamic target reacquisition success rate: 87%"
    },


    {
      title: "Real-time Robot Fleet Dashboard",
      description: "Comprehensive monitoring and control system for robot fleet management. Features real-time analytics, predictive maintenance alerts, and interactive 3D visualization of robot operations.",
      tech: ["React", "Node.js", "WebSocket", "D3.js", "MongoDB"],
      status: "coming-soon",
      icon: "📊",
      highlights: ["Fleet Management", "Real-time Analytics", "Predictive Maintenance"],
      metrics: "Coming Soon"
    },
    {
      title: "Perception Pipeline for Ground Segmentation",
      description: "High-performance ROS2 C++ perception system using RealSense D435i and PCL for advanced ground segmentation, precise object boundary extraction, and real-time 3D visualization in RViz2.",
      tech: ["ROS2", "C++", "PCL", "RealSense", "RViz2"],
      status: "completed",
      icon: "👁️",
      highlights: ["Real-time Processing", "3D Visualization", "High Precision"],
      metrics: "30 FPS"
    },
  ];

  return (
//     <section id="projects" className="py-20 max-w-6xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
//         <p className="text-xl text-gray-400">Some of the things I've built and currently working on</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <GlassCard key={index} className="group hover:scale-105 transition-all duration-300 relative overflow-hidden">
//             {/* Background gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//             <div className="relative z-10">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="text-3xl">{project.icon}</div>
//                   <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
//                     {project.title}
//                   </h3>
//                 </div>
//                 {project.status === "coming-soon" && (
//                   <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full animate-pulse">
//                     Coming Soon
//                   </span>
//                 )}
//               </div>

//               <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Highlights */}
//               <div className="flex flex-wrap gap-1 mb-4">
//                 {project.highlights.map((highlight, i) => (
//                   <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
//                     {highlight}
//                   </span>
//                 ))}
//               </div>

//               {/* Tech stack */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700/50">
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Metrics and GitHub */}
//               <div className="flex justify-between items-center">
//                 <div className="text-xs text-green-400 font-medium">
//                   {project.metrics}
//                 </div>
//                 {project.github && (
//                   <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
//                     <Github className="w-4 h-4" />
//                     Code
//                     <ExternalLink className="w-3 h-3" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </GlassCard>
//         ))}
//       </div>
//     </section>
//   );
// }


    <section id="projects" className="py-20 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Some of the things I've built and currently working on</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:grid-rows-[auto] md:items-start">
            {projects.map((project, index) => (
              <GlassCard 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.icon}</div>
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.status === "coming-soon" && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full animate-pulse">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metrics and GitHub */}
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-green-400 font-medium">
                      {project.metrics}
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      );
    }
function Skills() {
  const [activeCategory, setActiveCategory] = useState('Core');

  const skillCategories = {
    'Core': [
      { name: "ROS2", icon: "🤖", level: "Proficient" },
      { name: "Python", icon: "🐍", level: "Proficient" },
      { name: "Computer Vision", icon: "👁️", level: "Proficient" },
      { name: "Machine Learning", icon: "🧠", level: "Novice" },
      { name: "YOLO", icon: "🎯", level: "Proficient" },
      { name: "OpenCV", icon: "📸", level: "Proficient" }
    ],
    'Robotics': [
      { name: "PCL", icon: "☁️", level: "Novice" },
      { name: "RealSense", icon: "📡", level: "Advanced" },
      { name: "SLAM", icon: "🗺️", level: "Novice" },
      { name: "RViz2", icon: "📊", level: "Proficient" },
      { name: "Gazebo", icon: "🌍", level: "Novice" },
      { name: "Navigation", icon: "🧭", level: "Proficient" }
    ],
    'Development': [
      { name: "C++", icon: "⚡", level: "Novice" },
      { name: "Neo4j", icon: "🕸️", level: "Proficient" },
      { name: "Docker", icon: "🐳", level: "Proficient" },
      { name: "Git", icon: "🔀", level: "Proficient" },
      { name: "Linux", icon: "🐧", level: "Proficient" },
      { name: "OpenAI API", icon: "🤖", level: "Proficient" },
      { name: "JavaScript", icon: "💛", level: "Novice" },
    ],
    'Other': [
      { name: "Figma", icon: "🎨", level: "Proficient" },
      { name: "Business Development", icon: "📈", level: "Proficient" },
      { name: "Notion", icon: "📝", level: "Proficient" },
      { name: "UI/UX Design", icon: "🖌️", level: "Proficient" },
      { name: "Canva", icon: "🎭", level: "Proficient" },
      { name: "Public Speaking", icon: "🎤", level: "Proficient" }
    ]

  };

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-xl text-gray-400">Technologies and tools I work with</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {skillCategories[activeCategory].map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{skill.name}</div>
                <div className={`text-xs mt-1 px-2 py-1 rounded-full ${skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                  skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                    skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                  }`}>
                  {skill.level}
                </div>
              </div>
            </div>

            {/* Hover effect gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="flex justify-center gap-8 mt-12">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">20+</div>
          <div className="text-sm text-gray-400">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">1+</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">6+</div>
          <div className="text-sm text-gray-400">Projects</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl text-gray-400">
          Ready to collaborate on robotics and AI projects? Let's build something amazing together!
        </p>
      </div>

      <GlassCard className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about robotics and AI.
            </p>
            <div className="space-y-3">
              <a href="mailto:adityashishjain@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                adityashishjain@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/aditya-jain-a94425200/" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a href="https://github.com/Aditya0908" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button className="w-full" onClick={() => window.location.href = 'mailto:adityashishjain@gmail.com'}>
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => window.open('src/aditya_resume.pdf', '_blank')}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white' : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900'}`}>
      <FloatingElements />

      <main className="relative z-10 min-h-screen font-sans px-6">
        <Hero toggleTheme={toggleTheme} darkMode={darkMode} />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-800">
          <p>© {new Date().getFullYear()} Aditya Jain. Built with React & Tailwind CSS.</p>
          <p className="mt-2">Inspired by modern portfolio designs • Made with ❤️</p>
        </footer>
      </main>
    </div>
  );
}