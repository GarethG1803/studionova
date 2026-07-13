"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hotspot details
interface Hotspot {
  id: string;
  name: string;
  emoji: string;
  title: string;
  description: string;
  x: string; // Percentage from left
  y: string; // Percentage from top
  color: string; // Tailwind color class
  accent: string;
}

const hotspots: Hotspot[] = [
  {
    id: "design-board",
    name: "Design Board",
    emoji: "🎨",
    title: "UI/UX & Branding Studio",
    description: "Where we sketch user flows, design gorgeous interfaces, and craft unique brand identities that captivate.",
    x: "24%",
    y: "28%",
    color: "bg-pink-500",
    accent: "text-pink-500",
  },
  {
    id: "dev-desk",
    name: "Coding Station",
    emoji: "💻",
    title: "Fullstack Engineering",
    description: "Where we turn sketches into clean, fast, and scalable Next.js and TypeScript apps tailored for growth.",
    x: "58%",
    y: "46%",
    color: "bg-teal-500",
    accent: "text-teal-500",
  },
  {
    id: "ai-lab",
    name: "AI Core Lab",
    emoji: "🤖",
    title: "AI Integration & Agents",
    description: "Building automated workflows and custom AI assistant integrations that put businesses ahead of the curve.",
    x: "76%",
    y: "24%",
    color: "bg-violet-500",
    accent: "text-violet-500",
  },
  {
    id: "lounge",
    name: "Coffee Lounge",
    emoji: "☕",
    title: "Creative Brainstorms",
    description: "A cozy place where we drink coffee, share stories, and research ideas with our neighbors and clients.",
    x: "36%",
    y: "76%",
    color: "bg-amber-500",
    accent: "text-amber-500",
  },
];

export default function WorkspaceHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [activeCharacterMsg, setActiveCharacterMsg] = useState<string | null>(null);

  // SVG Avatars for Draggable Characters
  const renderNovi = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 pointer-events-none drop-shadow-md">
      {/* Hair back */}
      <circle cx="50" cy="50" r="32" fill="#2D2A2E" />
      {/* Face */}
      <circle cx="50" cy="46" r="24" fill="#FFD2B1" />
      {/* Hair front */}
      <path d="M26 46C26 30 38 22 50 22C62 22 74 30 74 46C74 48 70 42 66 40C62 38 58 42 50 36C42 42 38 38 34 40C30 42 26 48 26 46Z" fill="#2D2A2E" />
      {/* Creative Glasses */}
      <rect x="36" y="42" width="12" height="8" rx="2" fill="none" stroke="#FF4A7A" strokeWidth="2.5" />
      <rect x="52" y="42" width="12" height="8" rx="2" fill="none" stroke="#FF4A7A" strokeWidth="2.5" />
      <line x1="48" y1="46" x2="52" y2="46" stroke="#FF4A7A" strokeWidth="2.5" />
      {/* Smile */}
      <path d="M46 56Q50 60 54 56" stroke="#2D2A2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Artist Beret */}
      <path d="M34 24C34 18 66 18 66 24Z" fill="#FF4A7A" />
      <rect x="48" y="14" width="4" height="6" fill="#FF4A7A" />
    </svg>
  );

  const renderDevo = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 pointer-events-none drop-shadow-md">
      {/* Headphones back */}
      <rect x="22" y="34" width="56" height="8" rx="4" fill="#3E3D40" />
      {/* Hair */}
      <circle cx="50" cy="48" r="26" fill="#4E3629" />
      {/* Face */}
      <circle cx="50" cy="50" r="22" fill="#FFE0BD" />
      {/* Glasses */}
      <circle cx="42" cy="48" r="6" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="58" cy="48" r="6" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="48" y1="48" x2="52" y2="48" stroke="#1A1A1A" strokeWidth="2" />
      {/* Smile */}
      <path d="M47 58Q50 61 53 58" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Tech Hoodie cap */}
      <path d="M30 40C30 30 70 30 70 40" stroke="#00C2FF" strokeWidth="3" fill="none" />
      {/* Headphones */}
      <rect x="20" y="44" width="8" height="16" rx="3" fill="#3E3D40" />
      <rect x="72" y="44" width="8" height="16" rx="3" fill="#3E3D40" />
    </svg>
  );

  const renderNovaBot = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 pointer-events-none drop-shadow-md">
      {/* Antenna */}
      <line x1="50" y1="26" x2="50" y2="12" stroke="#8A2BE2" strokeWidth="3" />
      <circle cx="50" cy="10" r="4" fill="#00FFC2" />
      {/* Head */}
      <rect x="26" y="26" width="48" height="36" rx="14" fill="#E6E6FA" stroke="#8A2BE2" strokeWidth="3" />
      {/* Screen */}
      <rect x="32" y="32" width="36" height="24" rx="8" fill="#1A1A2E" />
      {/* Glowing Eyes */}
      <circle cx="42" cy="44" r="4" fill="#00FFC2" />
      <circle cx="58" cy="44" r="4" fill="#00FFC2" />
      {/* Ear lights */}
      <rect x="20" y="36" width="6" height="16" rx="2" fill="#8A2BE2" />
      <rect x="74" y="36" width="6" height="16" rx="2" fill="#8A2BE2" />
      {/* Thruster flame (floating effect) */}
      <path d="M44 68Q50 78 56 68" fill="#FF5E00" />
      <path d="M47 68Q50 74 53 68" fill="#FFE600" />
    </svg>
  );

  const handleCharacterClick = (msg: string) => {
    setActiveCharacterMsg(msg);
    setTimeout(() => setActiveCharacterMsg(null), 5000);
  };

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 bg-[#FAF9F5] shadow-2xl">
      {/* Background Studio Nova Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/workspace_bg.png')` }}
      />
      {/* Soft overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <button
          key={spot.id}
          className="absolute z-20 group -translate-x-1/2 -translate-y-1/2"
          style={{ left: spot.x, top: spot.y }}
          onClick={() => {
            setActiveHotspot(spot);
            setActiveCharacterMsg(null);
          }}
        >
          {/* Pulsing ring */}
          <span className="absolute inline-flex h-8 w-8 rounded-full opacity-75 animate-ping bg-white" />
          {/* Main Hotspot Dot */}
          <span className={`relative flex items-center justify-center h-8 w-8 rounded-full border-2 border-white shadow-lg text-sm bg-white hover:scale-115 transition duration-300`}>
            {spot.emoji}
          </span>
          {/* Invisible hover trigger zone */}
          <span className="absolute -inset-4 rounded-full pointer-events-none" />

          {/* Simple floating tooltips */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 hidden group-hover:flex flex-col items-center">
            <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
              {spot.name}
            </div>
            <div className="w-2.5 h-2.5 bg-slate-900 rotate-45 -mt-1" />
          </div>
        </button>
      ))}

      {/* Character Instruction / Msg Box */}
      <div className="absolute top-4 left-4 right-4 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          {activeCharacterMsg ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-slate-900/95 text-white backdrop-blur-sm p-3.5 rounded-2xl shadow-xl max-w-sm mx-auto pointer-events-auto border border-slate-700/50 flex items-center gap-3"
            >
              <div className="text-xl">💬</div>
              <p className="text-xs font-medium leading-relaxed">{activeCharacterMsg}</p>
            </motion.div>
          ) : activeHotspot ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white/95 text-slate-800 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-md mx-auto pointer-events-auto border border-slate-200/80"
            >
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="text-base">{activeHotspot.emoji}</span>
                  {activeHotspot.title}
                </h3>
                <button 
                  onClick={() => setActiveHotspot(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{activeHotspot.description}</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#FAF9F5]/90 border border-slate-200 backdrop-blur-sm px-4 py-2.5 rounded-full text-center text-[11px] font-semibold text-slate-700 shadow-sm max-w-xs mx-auto"
            >
              👇 Geser-geser orangnya ke area studio!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Draggable Characters */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex justify-around items-end pointer-events-none">
        
        {/* Character: Novi */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileDrag={{ scale: 1.15, rotate: 4 }}
          whileHover={{ scale: 1.08 }}
          onDragEnd={(event, info) => {
            // Check if dropped near design-board (approx 20-30% left, 20-30% top)
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const relX = ((info.point.x - rect.left) / rect.width) * 100;
              const relY = ((info.point.y - rect.top) / rect.height) * 100;
              
              if (Math.abs(relX - 24) < 15 && Math.abs(relY - 28) < 15) {
                handleCharacterClick("Novi: 'Desain UI/UX siap! Aku sedang menyusun layout & kustomisasi palette warna untuk Studio Nova.'");
              } else {
                handleCharacterClick("Novi: 'Halo! Aku desainer di Studio Nova. Geser aku ke Design Board untuk mulai coret-coret wireframe!'");
              }
            }
          }}
          onClick={() => handleCharacterClick("Novi: 'Aku desainer Studio Nova. Seret aku ke papan tulis (Design Board) di kiri atas!'")}
          className="pointer-events-auto cursor-grab active:cursor-grabbing flex flex-col items-center group"
        >
          {renderNovi()}
          <span className="mt-1 bg-pink-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full shadow-sm select-none">
            Novi (UI/UX)
          </span>
        </motion.div>

        {/* Character: Devo */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileDrag={{ scale: 1.15, rotate: -4 }}
          whileHover={{ scale: 1.08 }}
          onDragEnd={(event, info) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const relX = ((info.point.x - rect.left) / rect.width) * 100;
              const relY = ((info.point.y - rect.top) / rect.height) * 100;
              
              if (Math.abs(relX - 58) < 15 && Math.abs(relY - 46) < 15) {
                handleCharacterClick("Devo: 'npm run dev sedang jalan! Coding Next.js + Tailwind di Studio Nova sangat smooth.'");
              } else {
                handleCharacterClick("Devo: 'Aku fullstack developer. Geser aku ke Coding Station di tengah kanan untuk mulai coding!'");
              }
            }
          }}
          onClick={() => handleCharacterClick("Devo: 'Aku programmer Studio Nova. Geser aku ke Meja Coding di tengah-kanan!'")}
          className="pointer-events-auto cursor-grab active:cursor-grabbing flex flex-col items-center group"
        >
          {renderDevo()}
          <span className="mt-1 bg-teal-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full shadow-sm select-none">
            Devo (Dev)
          </span>
        </motion.div>

        {/* Character: NovaBot */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileDrag={{ scale: 1.15, y: -5 }}
          whileHover={{ scale: 1.08 }}
          onDragEnd={(event, info) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const relX = ((info.point.x - rect.left) / rect.width) * 100;
              const relY = ((info.point.y - rect.top) / rect.height) * 100;
              
              if (Math.abs(relX - 76) < 15 && Math.abs(relY - 24) < 15) {
                handleCharacterClick("NovaBot: 'AI Core diaktifkan. Melakukan sinkronisasi data dan deploy otomatis ke cloud.'");
              } else {
                handleCharacterClick("NovaBot: 'Bip-bop! Seret aku ke AI Core Lab di kanan atas untuk meluncurkan asisten AI.'");
              }
            }
          }}
          onClick={() => handleCharacterClick("NovaBot: 'Bip-bop! Geser aku ke AI Core Lab di kanan atas!'")}
          className="pointer-events-auto cursor-grab active:cursor-grabbing flex flex-col items-center group"
        >
          {renderNovaBot()}
          <span className="mt-1 bg-violet-600 text-white font-bold text-[9px] px-2 py-0.5 rounded-full shadow-sm select-none">
            NovaBot (AI)
          </span>
        </motion.div>

      </div>
    </div>
  );
}
