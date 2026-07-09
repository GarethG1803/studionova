"use client";

/* =============================================================================
   HERO SECTION — COOL ANIMATIONS
   =============================================================================
   Word-by-word text reveal, website builder illustration with browser
   mockup, phone preview, code snippet, and design tool elements.
   ============================================================================= */

import { motion } from "framer-motion";
import { COMPANY_NAME } from "@/lib/constants";

/* ---- Word-by-word reveal ---- */
function AnimatedWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 40, rotateX: 40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.4 + i * 0.06,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Dot-grid */}
      <div className="absolute inset-0 dot-grid opacity-60 -z-10" />

      {/* Morphing gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-teal-200/30 blur-[120px]"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
            borderRadius: ["50%", "40%", "55%", "50%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-cyan-200/25 blur-[120px]"
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 40, -50, 0],
            scale: [1, 0.85, 1.15, 1],
            borderRadius: ["50%", "55%", "40%", "50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[35%] w-[250px] h-[250px] rounded-full bg-sky-200/20 blur-[100px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Spinning ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] -z-10 opacity-[0.04]">
        <div className="w-full h-full rounded-full border border-slate-400 animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* ---- Text with word-by-word reveal ---- */}
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 text-teal-600 text-xs font-medium tracking-wider uppercase mb-6"
          >
            Web Design &amp; Development
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6" style={{ perspective: 600 }}>
            <AnimatedWords text="We build websites that help" />
            <br className="hidden sm:block" />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 gradient-text-animate inline-block"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 80 }}
            >
              businesses grow
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
          >
            {COMPANY_NAME} creates modern, high-performing websites for
            startups, small businesses, and brands that want to stand out online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-7 py-3.5 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-7 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              View Services
            </motion.a>
          </motion.div>

        </div>

        {/* ---- Website Builder Illustration ---- */}
        <motion.div
          className="hidden lg:flex items-center justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-[520px]">

            {/* ===== Main Browser Window ===== */}
            <motion.div
              className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 70, damping: 14 }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3 h-5 bg-white rounded-md border border-slate-200 flex items-center px-2.5">
                  <svg className="w-2.5 h-2.5 text-slate-300 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  <span className="text-[9px] text-slate-400 truncate">yourwebsite.com</span>
                </div>
              </div>

              {/* Website content mockup */}
              <div className="p-5">
                {/* Nav bar */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    className="h-2.5 w-16 bg-slate-800 rounded-sm"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                  />
                  <div className="flex gap-3">
                    {[24, 20, 28, 20].map((w, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 bg-slate-200 rounded-sm"
                        style={{ width: w }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 1.3 + i * 0.06, duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Hero section mockup */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <motion.div
                      className="h-3.5 w-4/5 bg-slate-800 rounded-sm mb-2"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" as const }}
                    />
                    <motion.div
                      className="h-3 w-3/5 bg-teal-500 rounded-sm mb-3"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" as const }}
                    />
                    <motion.div
                      className="h-1.5 w-full bg-slate-100 rounded-sm mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    />
                    <motion.div
                      className="h-1.5 w-4/5 bg-slate-100 rounded-sm mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.65 }}
                    />
                    <motion.div
                      className="h-6 w-20 bg-teal-500 rounded-md"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                    />
                  </div>
                  <motion.div
                    className="w-28 h-24 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 120 }}
                  >
                    <svg className="w-6 h-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>
                  </motion.div>
                </div>

                {/* Cards section mockup */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { color: "bg-pink-100", delay: 1.9 },
                    { color: "bg-blue-100", delay: 2.0 },
                    { color: "bg-emerald-100", delay: 2.1 },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className="rounded-lg border border-slate-100 p-2.5"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: card.delay, type: "spring", stiffness: 120 }}
                    >
                      <div className={`w-5 h-5 ${card.color} rounded-md mb-2`} />
                      <div className="h-1.5 w-full bg-slate-100 rounded-sm mb-1" />
                      <div className="h-1.5 w-3/4 bg-slate-50 rounded-sm" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ===== Phone Preview ===== */}
            <motion.div
              className="absolute -bottom-4 -left-12 w-[100px] bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
              initial={{ opacity: 0, x: -40, rotateZ: -5 }}
              animate={{ opacity: 1, x: 0, rotateZ: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 1.6, duration: 0.6 },
                x: { delay: 1.6, duration: 0.8, type: "spring", stiffness: 80 },
                rotateZ: { delay: 1.6, duration: 0.8 },
                y: { delay: 2.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Phone notch */}
              <div className="flex justify-center pt-1.5 pb-1">
                <div className="w-8 h-1 bg-slate-200 rounded-full" />
              </div>
              {/* Phone content */}
              <div className="px-2 pb-2.5">
                <div className="h-1.5 w-10 bg-slate-800 rounded-sm mb-1.5" />
                <div className="h-1 w-8 bg-teal-400 rounded-sm mb-2" />
                <div className="h-1 w-full bg-slate-100 rounded-sm mb-0.5" />
                <div className="h-1 w-4/5 bg-slate-100 rounded-sm mb-2" />
                <div className="w-full h-8 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-md mb-2 flex items-center justify-center">
                  <svg className="w-3 h-3 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>
                </div>
                <div className="h-3 w-12 bg-teal-500 rounded-sm mx-auto" />
              </div>
            </motion.div>

            {/* ===== Code Snippet Card ===== */}
            <motion.div
              className="absolute -top-6 -right-6 w-48 bg-slate-900 rounded-xl p-3.5 shadow-xl shadow-slate-900/20 border border-slate-700"
              initial={{ opacity: 0, y: -30, scale: 0.8, rotateZ: 3 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1, rotateZ: 2 }}
              transition={{
                opacity: { delay: 1.3, duration: 0.5 },
                scale: { delay: 1.3, duration: 0.6, type: "spring", stiffness: 120 },
                y: { delay: 2, duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[8px] text-slate-500 ml-1">index.tsx</span>
              </div>
              <div className="font-mono text-[8px] leading-[14px] space-y-0.5">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  <span className="text-cyan-400">{"const"}</span>
                  <span className="text-blue-300">{" Website"}</span>
                  <span className="text-slate-500">{" = () => {"}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                  <span className="text-slate-500">{"  return ("}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
                  <span className="text-emerald-400">{"    <"}</span>
                  <span className="text-pink-400">{"Hero"}</span>
                  <span className="text-emerald-400">{" />"}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                  <span className="text-emerald-400">{"    <"}</span>
                  <span className="text-pink-400">{"Services"}</span>
                  <span className="text-emerald-400">{" />"}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
                  <span className="text-emerald-400">{"    <"}</span>
                  <span className="text-pink-400">{"Contact"}</span>
                  <span className="text-emerald-400">{" />"}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
                  <span className="text-slate-500">{"  )"}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
                  <span className="text-slate-500">{"}"}</span>
                </motion.div>
              </div>
              {/* Typing cursor */}
              <motion.div
                className="inline-block w-1 h-2.5 bg-teal-400 ml-0.5 mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* ===== Color Palette ===== */}
            <motion.div
              className="absolute -bottom-2 right-4 flex gap-1.5 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-lg"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: [0, -4, 0], scale: 1 }}
              transition={{
                opacity: { delay: 2.2, duration: 0.4 },
                scale: { delay: 2.2, type: "spring", stiffness: 200 },
                y: { delay: 3, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {[
                "bg-teal-500",
                "bg-cyan-500",
                "bg-slate-800",
                "bg-emerald-500",
                "bg-amber-400",
              ].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-4 h-4 rounded-full ${color} ring-1 ring-white`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.3 + i * 0.06, type: "spring", stiffness: 300 }}
                />
              ))}
              <span className="text-[8px] text-slate-400 self-center ml-1">Theme</span>
            </motion.div>

            {/* ===== Cursor ===== */}
            <motion.div
              className="absolute top-[45%] left-[55%] z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 1, 0],
                scale: [0, 1, 1, 1, 0],
                x: [0, 0, 40, 60, 60],
                y: [0, 0, -20, 10, 10],
              }}
              transition={{ delay: 2.5, duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M1 1L1 14.5L4.5 11L8.5 18.5L10.5 17.5L6.5 10L11.5 10L1 1Z" fill="white" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* ===== "Site Live" Badge ===== */}
            <motion.div
              className="absolute top-[52%] -left-8 flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-lg"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 2.4, type: "spring", stiffness: 120 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              >
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </motion.div>
              <div>
                <div className="text-slate-800 text-[10px] font-semibold leading-tight">Site Live!</div>
                <div className="text-slate-400 text-[8px]">Deployed</div>
              </div>
            </motion.div>

            {/* ===== Performance Score ===== */}
            <motion.div
              className="absolute top-8 -left-10 bg-white px-3 py-2.5 rounded-lg border border-slate-200 shadow-lg"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
              transition={{
                opacity: { delay: 2.0, duration: 0.4 },
                scale: { delay: 2.0, type: "spring", stiffness: 150 },
                y: { delay: 2.8, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="relative w-9 h-9"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: -90 }}
                >
                  <svg className="w-9 h-9" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                    <motion.circle
                      cx="18" cy="18" r="15" fill="none" stroke="#22c55e" strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="94.25"
                      initial={{ strokeDashoffset: 94.25 }}
                      animate={{ strokeDashoffset: 94.25 * 0.02 }}
                      transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" as const }}
                    />
                  </svg>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-green-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                  >
                    98
                  </motion.span>
                </motion.div>
                <div>
                  <div className="text-slate-800 text-[10px] font-semibold leading-tight">Speed</div>
                  <div className="text-slate-400 text-[8px]">PageSpeed</div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-slate-400 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
