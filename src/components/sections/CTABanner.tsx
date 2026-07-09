"use client";

/* =============================================================================
   CTA BANNER — COOL ANIMATIONS
   =============================================================================
   Morphing gradient orbs, text reveal with spring physics, magnetic buttons,
   and floating particle dots.
   ============================================================================= */

import { motion } from "framer-motion";
import { COMPANY_NAME } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Background */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-600" />
          <div className="absolute inset-0 dot-grid opacity-10" />

          {/* Morphing orbs */}
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 blur-[80px]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              borderRadius: ["30% 70% 70% 30%", "60% 40% 30% 70%", "30% 70% 70% 30%"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              borderRadius: ["60% 40% 30% 70%", "30% 70% 70% 30%", "60% 40% 30% 70%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center py-16 px-6 sm:px-12 rounded-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Ready to build your dream website?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring", stiffness: 80 }}
            className="text-teal-100 text-lg max-w-2xl mx-auto mb-8"
          >
            Let {COMPANY_NAME} turn your vision into a website that looks great, works perfectly, and helps your business succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-8 py-4 rounded-full bg-white text-teal-600 font-semibold text-lg hover:bg-teal-50 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              See Our Work
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
