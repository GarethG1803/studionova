"use client";

/* =============================================================================
   WHY CHOOSE US — DROPBOX-STYLE VIBRANT CARDS (WITH TRANSLATIONS)
   =============================================================================
   Dark charcoal section background, 3-column layout, vibrant blue cards,
   giant faint watermark background icons, all-white text aligned to bottom.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t("why_card1_title"),
      description: t("why_card1_desc"),
      // Giant paint palette SVG watermark
      watermark: (
        <svg className="absolute -top-6 -right-6 w-48 h-48 opacity-[0.07] text-white pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      )
    },
    {
      title: t("why_card2_title"),
      description: t("why_card2_desc"),
      // Giant code brackets SVG watermark
      watermark: (
        <svg className="absolute -top-6 -right-6 w-48 h-48 opacity-[0.07] text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      title: t("why_card3_title"),
      description: t("why_card3_desc"),
      // Giant rocket SVG watermark
      watermark: (
        <svg className="absolute -top-6 -right-6 w-48 h-48 opacity-[0.07] text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-2.2 2.2m2.2-2.2a6 6 0 00-2.2-2.2m2.2 2.2L19 18m-5.61-3.63a6 6 0 01-2.2-2.2m2.2 2.2a6 6 0 00-2.2 2.2m-2.2-2.2L5 18m9-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    }
  ];

  return (
    <SectionWrapper id="why-us" className="bg-[#121214] py-24 border-t border-slate-900">
      
      {/* Title Header */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
          {t("why_title")}
        </h2>
        <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          {t("why_desc")}
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 90 }}
            className="relative flex flex-col justify-end p-8 bg-[#0061FE] rounded-2xl border border-blue-400/40 shadow-2xl min-h-[300px] sm:min-h-[340px] overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* Watermark SVG */}
            {reason.watermark}

            {/* Glowing background effect on card hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Content text */}
            <div className="relative z-10 space-y-3">
              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl leading-snug">
                {reason.title}
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
