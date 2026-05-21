"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let totalHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const REVEAL_RADIUS = 250; // Cursor reaction radius

    interface Particle {
      origX: number;
      origY: number;
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      seed: number;
    }

    let particles: Particle[] = [];

    // Distribute particles across the entire scrollable height
    const initParticles = (w: number, totalH: number) => {
      particles = [];
      // Calculate particle count targeting ~400 on standard desktop scroll space
      const count = Math.min(800, Math.max(250, Math.floor((w * totalH) / 7500)));
      const minDistance = 24; // Balanced minimum distance for ~400 particles

      for (let i = 0; i < count; i++) {
        let x = 0, y = 0;
        let valid = false;
        let attempts = 0;

        while (!valid && attempts < 50) {
          x = Math.random() * w;
          y = Math.random() * totalH;
          valid = true;

          for (const p of particles) {
            const dx = x - p.origX;
            const dy = y - p.origY;
            if (Math.sqrt(dx * dx + dy * dy) < minDistance) {
              valid = false;
              break;
            }
          }
          attempts++;
        }

        particles.push({
          origX: x,
          origY: y,
          x: x,
          y: y,
          size: Math.random() * 1.3 + 0.8, // sizes between 0.8px and 2.1px max
          baseAlpha: Math.random() * 0.35 + 0.15, // elegant semi-transparency
          alpha: 0,
          seed: Math.random() * 100,
        });
      }
    };

    initParticles(width, totalHeight);

    // Re-check page height after a short delay to make sure Next.js layout is fully painted
    const layoutTimer = setTimeout(() => {
      const currentTotalHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      if (currentTotalHeight !== totalHeight) {
        totalHeight = currentTotalHeight;
        initParticles(width, totalHeight);
      }
    }, 500);

    let mouse = { x: -9999, y: -9999, active: false };
    let scrollY = window.scrollY;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      totalHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(width, totalHeight);
    };
    window.addEventListener("resize", onResize);

    let animFrame: number;

    const animate = () => {
      const time = Date.now() * 0.0008; // slow, ambient clock
      ctx.clearRect(0, 0, width, height);

      const theme = document.documentElement.getAttribute("data-theme");
      const isDark = theme === "dark" || !theme;
      const rgb = isDark ? "228, 228, 231" : "63, 63, 70"; // zinc-200 vs zinc-700

      const particleLength = particles.length;
      for (let i = 0; i < particleLength; i++) {
        const p = particles[i];

        // Complex multi-wave noise math for organic flow
        const flowX = Math.sin(p.origY * 0.006 + time + p.seed) * 15 + Math.cos(p.origX * 0.003 + time * 0.5) * 8;
        const flowY = Math.cos(p.origX * 0.006 + time + p.seed) * 15 + Math.sin(p.origY * 0.003 + time * 0.5) * 8;

        let targetX = p.origX + flowX;
        let targetY = p.origY + flowY;

        // Current coordinates relative to the scrolled viewport
        const drawX = p.x;
        const drawY = p.y - scrollY;

        // Mouse interaction in screen space (Attraction + Repulsion)
        if (mouse.active) {
          const dx = mouse.x - drawX;
          const dy = mouse.y - drawY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REVEAL_RADIUS && dist > 0) {
            const angle = Math.atan2(dy, dx);
            
            // Attract at medium distance, repel when extremely close (creating a halo cloud around the cursor)
            const attractForce = Math.max(0, (REVEAL_RADIUS - dist) / REVEAL_RADIUS);
            const repelForce = dist < 50 ? (50 - dist) / 50 : 0;
            const netForce = attractForce * 55 - repelForce * 90;

            targetX += Math.cos(angle) * netForce;
            targetY += Math.sin(angle) * netForce;
          }
        }

        // Interpolate toward target position for smooth inertia
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        // Only draw if within viewport bounds (plus margin)
        if (drawY > -30 && drawY < height + 30) {
          // Edge fade out to prevent hard cuts near screen left/right boundaries
          const fadePadding = 30;
          const edgeFadeX = Math.min(drawX / fadePadding, (width - drawX) / fadePadding);
          // Fade particles near the absolute top/bottom of the page scroll boundaries
          const edgeFadeY = Math.min(p.y / fadePadding, (totalHeight - p.y) / fadePadding);
          const edgeFade = Math.max(0, Math.min(1, Math.min(edgeFadeX, edgeFadeY)));

          p.alpha += (p.baseAlpha - p.alpha) * 0.05; // smooth intro on mount
          const finalAlpha = p.alpha * edgeFade;

          if (finalAlpha > 0.01) {
            ctx.beginPath();
            ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb}, ${finalAlpha})`;
            ctx.fill();
          }
        }
      }

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearTimeout(layoutTimer);
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
