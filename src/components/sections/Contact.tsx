"use client";

/* =============================================================================
   CONTACT SECTION — HIGH FIDELITY LAYOUT (MATCHING ABOUT US COLOR PALETTE)
   =============================================================================
   Features a 2-column grid. Left side: Title, Subtitles, Client logo wall,
   and brand subtitle. Right side: A clean white card form styled in harmony
   with the off-white layout. Integrates custom flag country code select box,
   recaptcha labels, and a circular-arrow pill submit button.
   ============================================================================= */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

const clientLogos = [
  "Agung Sedayu",
  "Danantara ID",
  "GYS Group",
  "Abbott Labs",
  "Schneider",
  "Rolls-Royce",
  "KTM Racing",
  "Wilkhahn",
  "Spital Thurgau",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-[#FAF9F5] py-20 text-[#1E1B18]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ---- Left Column: Editorial Heading & Client Logos ---- */}
        <div className="lg:col-span-6 space-y-6 text-left select-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E1B18] font-display leading-[1.15]">
            {t("contact_title")}
          </h1>
          
          <h2 className="text-lg sm:text-xl font-medium text-slate-700 font-sans leading-relaxed">
            {t("contact_subtitle")}
          </h2>

          <p className="text-slate-500 text-sm font-normal">
            {t("contact_desc")}
          </p>

          {/* Minimalist Client Logo Grid */}
          <div className="pt-8 border-t border-slate-200/60 mt-10">
            <div className="grid grid-cols-3 gap-y-8 gap-x-6 opacity-35">
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="font-display font-bold text-xs sm:text-sm tracking-widest text-[#1E1B18] uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
            
            {/* Global Brands Sub-text */}
            <p className="text-sm font-semibold text-[#1E1B18] mt-10 tracking-wide">
              {t("contact_brands")}
            </p>
          </div>
        </div>

        {/* ---- Right Column: Form Container Card (Styled in Harmony with About Us) ---- */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white border border-slate-200/60 rounded-2xl shadow-lg p-6 sm:p-8 relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-zinc-950">
                    {t("contact_success_title")}
                  </h3>
                  <p className="text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed">
                    {t("contact_success_desc")}
                  </p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                      {t("contact_label_name")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("contact_placeholder_name")}
                      className="w-full px-4 py-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-800 transition-colors font-medium placeholder-zinc-400"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                      {t("contact_label_email")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("contact_placeholder_email")}
                      className="w-full px-4 py-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-800 transition-colors font-medium placeholder-zinc-400"
                    />
                  </div>

                  {/* Phone Number with Custom Flag Country Selector */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                      {t("contact_label_phone")}
                    </label>
                    <div className="flex gap-2">
                      {/* Flag box */}
                      <div className="flex items-center gap-1.5 px-3 py-3 border border-zinc-200 bg-zinc-50 rounded-lg text-sm select-none font-medium text-zinc-800">
                        <svg className="w-5 h-3.5 shadow-sm border border-zinc-200" viewBox="0 0 3 2">
                          <rect width="3" height="1" fill="#E21F26" />
                          <rect y="1" width="3" height="1" fill="#FFFFFF" />
                        </svg>
                        <span className="text-xs">+62</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder={t("contact_placeholder_phone")}
                        className="flex-1 px-4 py-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-800 transition-colors font-medium placeholder-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Company Name field */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                      {t("contact_label_company")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("contact_placeholder_company")}
                      className="w-full px-4 py-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-800 transition-colors font-medium placeholder-zinc-400"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                      {t("contact_label_message")}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("contact_placeholder_message")}
                      className="w-full px-4 py-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-800 transition-colors font-medium placeholder-zinc-400 resize-none"
                    />
                  </div>

                  {/* Form Footer: reCAPTCHA & Submit pill button */}
                  <div className="pt-4 flex flex-row items-center justify-between gap-4">
                    {/* reCAPTCHA Info */}
                    <div className="text-[10px] text-zinc-400 font-sans tracking-wide">
                      <p className="font-semibold">{t("contact_captcha")}</p>
                      <div className="flex gap-2 mt-0.5">
                        <a href="#" className="hover:text-zinc-650 font-bold underline uppercase">{t("contact_privacy")}</a>
                        <span className="opacity-40">|</span>
                        <a href="#" className="hover:text-zinc-650 font-bold underline uppercase">{t("contact_terms")}</a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#1E1B18] text-white hover:bg-black transition-all cursor-pointer group text-xs font-black tracking-widest select-none"
                    >
                      {t("contact_btn_send")}
                      <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
