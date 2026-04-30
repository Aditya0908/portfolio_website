import { useEffect, useRef } from "react";

const aiStyles = `
  .bg-grid-sharp {
    background-size: 50px 50px;
    background-image:
      linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
  }
  canvas.neural-canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
  }
`;

if (typeof document !== "undefined" && !document.getElementById("portfolio-ai-styles")) {
  const style = document.createElement("style");
  style.id = "portfolio-ai-styles";
  style.textContent = aiStyles;
  document.head.appendChild(style);
}

function InteractiveNeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null };
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            this.x -= dx / 20;
            this.y -= dy / 20;
          }
        }
      }
      draw() {
        ctx.fillStyle = "rgba(96, 165, 250, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" />;
}

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#010409]">
      <div className="absolute inset-0 bg-grid-sharp opacity-60"></div>
      <InteractiveNeuralNetwork />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(1,4,9,0.8)_100%)]"></div>
    </div>
  );
}
