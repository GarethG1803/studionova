"use client";

/* =============================================================================
   SERVICES SECTION — DROPBOX-STYLE HORIZONTAL CARDS (WITH TRANSLATIONS)
   =============================================================================
   2-column grid, crop image left + text right, clean light off-white fill,
   minimal styling with Space Grotesk / Inter font-pairings.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&auto=format&fit=crop&q=80",
      title: t("service_design_title"),
      description: t("service_design_desc"),
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80",
      title: t("service_dev_title"),
      description: t("service_dev_desc"),
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80",
      title: t("service_landing_title"),
      description: t("service_landing_desc"),
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80",
      title: t("service_profile_title"),
      description: t("service_profile_desc"),
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=80",
      title: t("service_ecommerce_title"),
      description: t("service_ecommerce_desc"),
    },
    {
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&auto=format&fit=crop&q=80",
      title: t("service_redesign_title"),
      description: t("service_redesign_desc"),
    },
  ];

  return (
    <SectionWrapper id="services" className="bg-white py-24">
      
      {/* Header Title */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1B18] tracking-tight">
          {t("services_title")}
        </h2>
        <p className="font-sans text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          {t("services_desc")}
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.a
            href="#contact"
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.05, duration: 0.5, type: "spring", stiffness: 90 }}
            className="group flex bg-[#FAF9F5] border border-slate-200/50 hover:bg-[#F3F2ED] rounded-xl overflow-hidden min-h-[160px] cursor-pointer transition-all duration-300"
          >
            {/* Image (Left Side) */}
            <div className="relative w-32 sm:w-44 h-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter grayscale-[10%] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content (Right Side) */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center text-left">
              <h3 className="font-display font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                {service.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mt-2 mb-4">
                {service.description}
              </p>
              
              <div>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1E1B18] underline underline-offset-4 group-hover:text-[#0061FE] group-hover:no-underline transition-colors">
                  {t("service_learn_more")}
                  <svg className="w-3.5 h-3.5 translate-y-[0.5px] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
