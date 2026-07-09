"use client";

/* =============================================================================
   PORTFOLIO SECTION — COOL ANIMATIONS
   =============================================================================
   Scale-in reveal with blur, 3D tilt cards, clip-path hover overlay.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  { name: "Aether Financial", type: "Company Profile", description: "A clean, authoritative website for a financial consulting firm targeting enterprise clients.", color: "from-blue-100 to-teal-100", accent: "bg-blue-100 text-blue-700" },
  { name: "Bloom & Grow", type: "E-commerce", description: "An online store for a plant and home decor brand with a warm, organic visual identity.", color: "from-emerald-100 to-teal-100", accent: "bg-emerald-100 text-emerald-700" },
  { name: "Pulse Fitness", type: "Landing Page", description: "A high-conversion landing page for a fitness app launch, focused on signups and engagement.", color: "from-orange-100 to-red-100", accent: "bg-orange-100 text-orange-700" },
  { name: "Norden Architecture", type: "Company Profile", description: "A portfolio website for a Scandinavian architecture studio showcasing completed projects.", color: "from-slate-100 to-gray-100", accent: "bg-slate-100 text-slate-700" },
  { name: "CraftBrew Co.", type: "E-commerce", description: "A vibrant online shop for a craft brewery with product showcases and event listings.", color: "from-amber-100 to-yellow-100", accent: "bg-amber-100 text-amber-700" },
  { name: "Lumina Academy", type: "Website Redesign", description: "A complete redesign for an online learning platform, improving navigation and enrollment flow.", color: "from-purple-100 to-pink-100", accent: "bg-purple-100 text-purple-700" },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="bg-white">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase">Our Work</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">Recent Projects</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 max-w-2xl mx-auto">A selection of websites we have designed and built for clients across different industries.</motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          >
            <TiltCard className="group h-full">
              <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-teal-100 transition-all duration-500 h-full">
                <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <motion.div className="absolute top-4 right-4 w-16 h-16 border border-slate-300/30 rounded-lg" animate={{ rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  <motion.div className="absolute bottom-6 left-6 w-10 h-10 border border-slate-300/30 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400/50 text-sm font-medium tracking-widest uppercase group-hover:text-slate-500/60 transition-colors duration-300">Preview</span>
                  </div>

                  {/* Hover overlay — circle expand */}
                  <div className="absolute inset-0 bg-teal-500/80 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full group-hover:rounded-none flex items-center justify-center">
                    <motion.div whileHover={{ rotate: 45 }} className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase ${project.accent}`}>{project.type}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2 group-hover:text-teal-600 transition-colors duration-300">{project.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
