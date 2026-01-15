import { useEffect, useRef, useState, type FC } from "react";

/**
 * HeroVisual Component - Simplified and debugged
 * Dust particles animate from across the hero section to form the logo
 */

const SVG_VIEWBOX = { width: 512, height: 524 };
const PARTICLE_COUNT = 1200;
const ANIMATION_DURATION = 2500;
const FADE_DURATION = 400;

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
  color: string;
  size: number;
  delay: number;
}

const HeroVisual: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  
  const [showSvg, setShowSvg] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    if (!container || !canvas) {
      console.log("HeroVisual: Missing refs");
      return;
    }

    console.log("HeroVisual: Starting animation setup");

    // Check for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      console.log("HeroVisual: Reduced motion detected, showing SVG immediately");
      setShowSvg(true);
      setAnimationComplete(true);
      return;
    }

    // Setup canvas
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    console.log("HeroVisual: Canvas size", { width: rect.width, height: rect.height, dpr });
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("HeroVisual: Failed to get canvas context");
      return;
    }

    // Generate target points (logo shape)
    const padding = 0.1;
    const availableWidth = rect.width * (1 - padding * 2);
    const availableHeight = rect.height * (1 - padding * 2);
    const scale = Math.min(
      availableWidth / SVG_VIEWBOX.width,
      availableHeight / SVG_VIEWBOX.height
    );
    
    const offsetX = (rect.width - SVG_VIEWBOX.width * scale) / 2;
    const offsetY = (rect.height - SVG_VIEWBOX.height * scale) / 2;
    
    // Path bounding boxes
    const pathBounds = [
      { minX: 253, maxX: 290, minY: 238, maxY: 310, color: "#ff595a" },
      { minX: 218, maxX: 253, minY: 238, maxY: 309, color: "#00bed6" },
      { minX: 218, maxX: 253, minY: 201, maxY: 272, color: "#5fd0df" },
      { minX: 218, maxX: 253, minY: 275, maxY: 310, color: "#00abc8" },
    ];
    
    const pointsPerPath = Math.floor(PARTICLE_COUNT / pathBounds.length);
    const targets: { x: number; y: number; color: string }[] = [];
    
    pathBounds.forEach((bounds) => {
      for (let i = 0; i < pointsPerPath; i++) {
        const svgX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
        const svgY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);
        targets.push({
          x: offsetX + svgX * scale,
          y: offsetY + svgY * scale,
          color: bounds.color,
        });
      }
    });

    console.log("HeroVisual: Generated", targets.length, "target points");

    // Create particles with start positions from all sides
    const spreadX = rect.width * 2;
    const spreadY = rect.height * 2;
    
    particlesRef.current = targets.map((target, index) => {
      const side = Math.floor(Math.random() * 4);
      let startX: number, startY: number;
      
      switch (side) {
        case 0: // top
          startX = Math.random() * spreadX - spreadX / 4;
          startY = -Math.random() * spreadY / 3;
          break;
        case 1: // right
          startX = rect.width + Math.random() * spreadX / 3;
          startY = Math.random() * spreadY - spreadY / 4;
          break;
        case 2: // bottom
          startX = Math.random() * spreadX - spreadX / 4;
          startY = rect.height + Math.random() * spreadY / 3;
          break;
        default: // left
          startX = -Math.random() * spreadX / 3;
          startY = Math.random() * spreadY - spreadY / 4;
          break;
      }
      
      return {
        x: startX,
        y: startY,
        targetX: target.x,
        targetY: target.y,
        startX,
        startY,
        color: target.color,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 500,
      };
    });

    console.log("HeroVisual: Created", particlesRef.current.length, "particles");

    // Animation loop
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let allComplete = true;
      
      // Draw particles
      particlesRef.current.forEach((particle) => {
        const particleElapsed = Math.max(0, elapsed - particle.delay);
        const progress = Math.min(1, particleElapsed / ANIMATION_DURATION);
        
        if (progress < 1) allComplete = false;
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        
        // Update position
        particle.x = particle.startX + (particle.targetX - particle.startX) * eased;
        particle.y = particle.startY + (particle.targetY - particle.startY) * eased;
        
        // Draw
        const alpha = 0.4 + eased * 0.6;
        const size = particle.size * (0.3 + eased * 0.7);
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x * dpr, particle.y * dpr, size * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      
      if (!allComplete) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        console.log("HeroVisual: Animation complete, showing SVG");
        setShowSvg(true);
        setTimeout(() => setAnimationComplete(true), FADE_DURATION);
      }
    };

    // Start animation
    console.log("HeroVisual: Starting animation loop");
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Run once on mount

  console.log("HeroVisual: Render", { showSvg, animationComplete });

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: animationComplete ? 0 : 1,
          transition: `opacity ${FADE_DURATION}ms ease-out`,
          pointerEvents: "none",
        }}
      />
      
      {/* Final SVG logo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: showSvg ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-out`,
          animation: animationComplete ? "heroFloat 6s ease-in-out infinite" : "none",
        }}
      >
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 524"
          style={{
            width: "70%",
            height: "70%",
            maxWidth: "350px",
            maxHeight: "350px",
            filter: "drop-shadow(0 8px 32px rgba(0, 153, 168, 0.3))",
          }}
        >
          <path fillRule="evenodd" fill="#ff595a" d="m253.83 309.64h36.18v-35.43l-36.18-36.17z" />
          <path fillRule="evenodd" fill="#00bed6" d="m218.69 308.79l34.58-34.48v-36.27l-34.58 34.48z" />
          <path fillRule="evenodd" fill="#5fd0df" d="m218.69 271.67l34.58-34.48v-36.27l-34.58 34.48z" />
          <path fillRule="evenodd" fill="#00abc8" d="m253.27 275.15l-34.58 34.49h34.58z" />
        </svg>
      </div>
      
      <style>
        {`
          @keyframes heroFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroVisual;
