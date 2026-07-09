"use client";

/* =============================================================================
   TESTIMONIALS SECTION — ROTATING BENTO GRID
   =============================================================================
   Auto-rotating featured card with smooth transitions. The active
   testimonial takes the large left slot; the other two stack on the right.
   ============================================================================= */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    id: 0,
    quote: "They delivered a website that exceeded our expectations. The design is clean, modern, and our clients constantly compliment our online presence.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Bloom & Grow",
    bg: "bg-teal-50",
    accentBg: "bg-teal-500",
    dotColor: "bg-teal-200",
  },
  {
    id: 1,
    quote: "Working with them was straightforward and professional. They listened to what we needed and built exactly that — no unnecessary complexity.",
    name: "David Chen",
    role: "Managing Director",
    company: "Aether Financial",
    bg: "bg-amber-50",
    accentBg: "bg-amber-500",
    dotColor: "bg-amber-200",
  },
  {
    id: 2,
    quote: "Our new landing page has significantly improved our conversion rate. The team was responsive, met every deadline, and the final product speaks for itself.",
    name: "Maria Rodriguez",
    role: "Marketing Lead",
    company: "Pulse Fitness",
    bg: "bg-rose-50",
    accentBg: "bg-rose-500",
    dotColor: "bg-rose-200",
  },
];

const marqueeItems = ["Bloom & Grow", "Aether Financial", "Pulse Fitness", "Norden Architecture", "CraftBrew Co.", "Lumina Academy", "Vertex Labs", "Summit Media"];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          className="w-4 h-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const featured = testimonials[activeIndex];
  const rest = testimonials.filter((_, i) => i !== activeIndex);

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase">Testimonials</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">What Our Clients Say</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 max-w-2xl mx-auto">Don&apos;t just take our word for it — here&apos;s what our clients have to say about working with us.</motion.p>
      </div>

      {/* Bento grid: featured left, stacked right */}
      <div
        className="grid grid-cols-1 lg:grid-cols-5 gap-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* Featured testimonial — spans 3 cols */}
        <div className="lg:col-span-3 relative min-h-[280px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, x: -30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`absolute inset-0 ${featured.bg} rounded-2xl p-8 sm:p-10 overflow-hidden`}
            >
              {/* Decorative elements */}
              <motion.div
                className={`absolute top-6 right-6 w-20 h-20 rounded-full ${featured.dotColor} opacity-50`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className={`absolute bottom-8 right-16 w-8 h-8 rounded-lg ${featured.dotColor} opacity-40`}
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <Stars />

                <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mt-6 mb-8">
                  &ldquo;{featured.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${featured.accentBg} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
                    {featured.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">{featured.name}</p>
                    <p className="text-slate-500 text-sm">{featured.role}, {featured.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stacked cards — spans 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <AnimatePresence mode="wait">
            {rest.map((t, i) => (
              <motion.button
                key={t.id}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, delay: i * 0.08, ease: "easeInOut" }}
                onClick={() => setActiveIndex(t.id)}
                className={`relative flex-1 ${t.bg} rounded-2xl p-7 overflow-hidden text-left cursor-pointer hover:ring-2 hover:ring-slate-200 transition-shadow duration-200`}
              >
                {/* Decorative dot */}
                <motion.div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full ${t.dotColor} opacity-40`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                />

                <div className="relative z-10">
                  <Stars />

                  <p className="text-slate-700 leading-relaxed mt-4 mb-5 text-sm sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${t.accentBg} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-semibold">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className="relative h-2 rounded-full overflow-hidden bg-slate-200 transition-all duration-300"
            style={{ width: activeIndex === i ? 32 : 8 }}
          >
            {activeIndex === i && (
              <motion.div
                className="absolute inset-0 bg-teal-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
                key={`progress-${activeIndex}`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-14 overflow-hidden relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 text-slate-200 text-lg font-semibold tracking-wide">{item}</span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
