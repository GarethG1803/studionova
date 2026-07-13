"use client";

/* =============================================================================
   NAVBAR — FLOATING PILL CAPSULE NAV (WITH TRANSLATIONS & ROUTING)
   =============================================================================
   Features a floating white capsule pill layout, lowercase brand logo,
   active links with hover underlines, contacts button, and a working language switcher.
   Links are routed cleanly to support subpages (/about, /contact).
   ============================================================================= */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_NAME } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/40 py-3 px-4 sm:px-6 lg:px-8"
          : "bg-transparent py-5 px-4 sm:px-6 lg:px-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* ---- Logo (Outside Pill on Desktop) ---- */}
        <a
          href="/"
          className="hidden md:block text-2xl md:text-3xl font-bold tracking-tight text-[#1E1B18] font-display lowercase hover:opacity-80 transition-opacity"
        >
          {COMPANY_NAME}
        </a>

        {/* ---- Desktop White Floating Capsule Pill ---- */}
        <div className="hidden md:flex bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-lg shadow-slate-100/50 rounded-full px-8 py-3.5 items-center gap-8 lg:gap-10 ml-auto">
          
          <ul className="flex items-center gap-8 text-base">
            <li>
              <a href="/#services" className="relative text-slate-600 hover:text-black font-semibold transition-colors py-1 group">
                {t("nav_layanan")}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-800 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </li>
            <li>
              <a href="/#why-us" className="relative text-slate-600 hover:text-black font-semibold transition-colors py-1 group">
                {t("nav_solusi")}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-800 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </li>
            <li>
              <a href="/about" className="relative text-slate-600 hover:text-black font-semibold transition-colors py-1 group">
                {t("nav_tentang")}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-800 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </li>
            <li>
              <a href="/#process" className="relative text-slate-600 hover:text-black font-semibold transition-colors py-1 group">
                {t("nav_proses")}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-800 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            </li>
          </ul>

          {/* Kontak Button */}
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1E1B18] text-white text-xs font-black tracking-wider hover:bg-black transition-colors"
          >
            {t("nav_kontak")}
            <svg className="w-3.5 h-3.5 translate-y-[-0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center border border-slate-200 rounded-md p-[3px] bg-slate-50 gap-1 select-none">
            <button
              onClick={() => setLanguage("ID")}
              className={`px-2.5 py-1 text-xs font-black italic rounded-[3px] transition-colors duration-200 ${
                language === "ID"
                  ? "bg-[#0061FE] text-white"
                  : "text-slate-400 hover:text-black cursor-pointer"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("EN")}
              className={`px-2.5 py-1 text-xs font-bold rounded-[3px] transition-colors duration-200 ${
                language === "EN"
                  ? "bg-[#0061FE] text-white italic font-black"
                  : "text-slate-400 hover:text-black cursor-pointer"
              }`}
            >
              EN
            </button>
          </div>

        </div>

        {/* ---- Mobile Unified Floating Capsule Pill ---- */}
        <div className="md:hidden w-full bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-md rounded-full px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-[#1E1B18] font-display lowercase">
            {COMPANY_NAME}
          </a>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center items-center w-7 h-7 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-slate-800 transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-slate-800 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-slate-800 transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white border border-slate-200/60 shadow-xl rounded-2xl p-6 md:hidden z-40"
          >
            <ul className="flex flex-col items-center gap-5 text-slate-600 text-sm font-semibold mb-6">
              <li>
                <a href="/#services" onClick={() => setMobileOpen(false)} className="hover:text-black">
                  {t("nav_layanan")}
                </a>
              </li>
              <li>
                <a href="/#why-us" onClick={() => setMobileOpen(false)} className="hover:text-black">
                  {t("nav_solusi")}
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setMobileOpen(false)} className="hover:text-black">
                  {t("nav_tentang")}
                </a>
              </li>
              <li>
                <a href="/#process" onClick={() => setMobileOpen(false)} className="hover:text-black">
                  {t("nav_proses")}
                </a>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-4">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#1E1B18] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
              >
                {t("nav_kontak")} →
              </a>
              
              <div className="flex items-center border border-slate-200 rounded-md p-[3px] bg-slate-50 gap-1 select-none">
                <button
                  onClick={() => { setLanguage("ID"); setMobileOpen(false); }}
                  className={`px-3 py-1 text-xs font-black italic rounded-[3px] transition-colors duration-200 ${
                    language === "ID"
                      ? "bg-[#0061FE] text-white"
                      : "text-slate-400 hover:text-black cursor-pointer"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => { setLanguage("EN"); setMobileOpen(false); }}
                  className={`px-3 py-1 text-xs font-bold rounded-[3px] transition-colors duration-200 ${
                    language === "EN"
                      ? "bg-[#0061FE] text-white italic font-black"
                      : "text-slate-400 hover:text-black cursor-pointer"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
