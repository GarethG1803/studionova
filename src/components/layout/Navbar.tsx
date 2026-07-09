"use client";

/* =============================================================================
   NAVBAR — COOL ANIMATIONS
   =============================================================================
   Staggered link reveal, magnetic logo hover, spring CTA button,
   animated mobile menu with stagger, and smooth scroll backdrop.
   ============================================================================= */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_NAME, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {COMPANY_NAME}
          <motion.span
            className="text-teal-500 inline-block"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 120 }}
            >
              <a
                href={link.href}
                className="relative py-1 hover:text-slate-900 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.07, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
        >
          Start a Project
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="block h-0.5 w-6 bg-slate-800"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-6 bg-slate-800"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="block h-0.5 w-6 bg-slate-800"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            className="md:hidden bg-white/95 backdrop-blur-xl overflow-hidden border-t border-slate-100"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-slate-600">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 120 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="px-6 py-2.5 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors"
                >
                  Start a Project
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
