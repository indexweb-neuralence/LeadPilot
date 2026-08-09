"use client";

import { useEffect, useRef } from "react";
import React from "react";

interface GlowyWavesHeroProps {
  children?: React.ReactNode;
}

export default function GlowyWavesHero({ children }: GlowyWavesHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;

      constructor(x: number, y: number, dx: number, dy: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        if (mx !== null && my !== null) {
          const dxMouse = mx - this.x;
          const dyMouse = my - this.y;
          const distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distance < mouseRef.current.radius + this.size) {
            const forceX = dxMouse / distance;
            const forceY = dyMouse / distance;
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            this.x -= forceX * force * 4;
            this.y -= forceY * force * 4;
          }
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const dx = (Math.random() * 0.4) - 0.2;
        const dy = (Math.random() * 0.4) - 0.2;
        
        // LeadPilot branding colors (#7C3AED, #8B5CF6, #EC4899)
        const rand = Math.random();
        let color = "rgba(124, 58, 237, 0.22)"; // Purple
        if (rand > 0.66) {
          color = "rgba(236, 72, 153, 0.18)"; // Pink
        } else if (rand > 0.33) {
          color = "rgba(139, 92, 246, 0.22)"; // Violet
        }

        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    window.addEventListener("resize", resize);
    resize();

    const connect = () => {
      if (!ctx || !canvas) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);
          if (dist < (canvas.width / 8) * (canvas.height / 8)) {
            const opacity = 1 - (dist / 12000);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.08})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* 1. Animated particle canvas background layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* 2. Large blurred ombre radial glow layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="absolute w-[950px] h-[550px] bg-gradient-to-tr from-[#7C3AED]/8 via-[#EC4899]/6 to-[#8B5CF6]/3 blur-[130px] rounded-full top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* 3. Hero content layer */}
      <div className="relative z-[3] w-full">
        {children}
      </div>
    </div>
  );
}
