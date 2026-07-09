"use client";

/* =============================================================================
   TILT CARD
   =============================================================================
   A card that tilts toward the cursor on hover with a 3D perspective effect
   and an optional spotlight glow that follows the mouse.
   ============================================================================= */

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotX, setSpotX] = useState(50);
  const [spotY, setSpotY] = useState(50);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((0.5 - y) * 12);
    setRotateY((x - 0.5) * 12);
    setSpotX(x * 100);
    setSpotY(y * 100);
  };

  const handleLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotX(50);
    setSpotY(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
      }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative ${className}`}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${spotX}% ${spotY}%, rgba(20,184,166,0.08) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
