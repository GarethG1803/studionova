"use client";

/* =============================================================================
   ABOUT SECTION — MEET OUR TEAM DESIGN (MATCHING SCREENSHOT)
   =============================================================================
   Features a clean editorial typography layout, vector spiral target art on
   the right, and a centered 2-column layout of team profiles for Joseph and Matthew.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();

  const team = [
    {
      name: "Joseph Imanuel",
      role: t("role_ceo"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&q=80",
    },
    {
      name: "Matthew Gareth Geraldo",
      role: t("role_eng"),
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop&q=80",
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-[#FAF9F5] py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ---- Top Part: Clean Typography Intro + Spiral Vector ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Title & Desc */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E1B18] font-display leading-[1.15] max-w-2xl">
              {t("about_title_meet")}{" "}
              <span className="font-serif italic font-normal">{t("about_title_creators")}</span>,{" "}
              <span className="font-serif italic font-normal">{t("about_title_designers")}</span>,{" "}
              {t("about_title_and")}{" "}
              <span className="font-serif italic font-normal">{t("about_title_solvers")}</span>
            </h1>

            {language === "EN" ? (
              <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                To build the high-performance websites our clients deserve, it takes an{" "}
                <span className="font-serif italic text-slate-900 font-medium">eclectic group</span>{" "}
                of digital builders. Get to know the team designing, engineering, and launching the web solutions at Studio Nova.
              </p>
            ) : (
              <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Untuk membangun website berkinerja tinggi yang layak didapatkan oleh klien kami, dibutuhkan{" "}
                <span className="font-serif italic text-slate-900 font-medium">kelompok pengembang</span>{" "}
                digital yang berdedikasi. Kenali tim yang mendesain, memprogram, dan meluncurkan solusi web di Studio Nova.
              </p>
            )}
          </div>

          {/* Right Column: Premium Custom Spiral Arrow SVG Illustration */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end select-none pointer-events-none">
            <svg
              className="w-full max-w-[200px] sm:max-w-[240px] text-[#1E1B18]"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Target Concentric Circles */}
              <circle cx="140" cy="85" r="12" strokeDasharray="3 3" opacity="0.25" />
              <circle cx="140" cy="85" r="26" strokeDasharray="4 4" opacity="0.35" />
              <circle cx="140" cy="85" r="40" strokeDasharray="4 4" opacity="0.45" />
              <circle cx="140" cy="85" r="54" strokeDasharray="5 5" opacity="0.55" />
              <circle cx="140" cy="85" r="68" strokeDasharray="5 5" opacity="0.65" />
              
              {/* Handdrawn Spiral Curve Path */}
              <path
                d="M15 125 C 30 185, 70 185, 90 145 C 110 105, 80 85, 100 65 C 120 45, 155 75, 140 95 C 125 115, 110 95, 125 75 C 140 55, 160 90, 144 104"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              
              {/* Arrow Head Pointing to Center */}
              <path
                d="M141 98 L144 104 L138 106"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </div>
        </div>

        {/* Space Divider */}
        <div className="h-16 lg:h-20" />

        {/* ---- Bottom Part: 2-Column Team Members Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 90 }}
              className="flex flex-col text-left group"
            >
              {/* Portrait Image Frame */}
              <div className="relative aspect-square w-full rounded-2xl bg-slate-100 border border-slate-200/50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* Identity details */}
              <h3 className="font-display font-semibold text-slate-900 text-lg sm:text-xl mt-4">
                {member.name}
              </h3>
              <p className="font-serif italic text-slate-500 text-sm sm:text-base mt-0.5">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
