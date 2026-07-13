"use client";

/* =============================================================================
   HERO SECTION — DROPBOX MINIMALIST STYLE WITH PROJECT NAMES MARQUEE
   =============================================================================
   A precise recreation of the Dropbox landing page aesthetic: clean sans-serif
   typography, solid dark text, single blue CTA button, and a clean scrolling
   text-only client project names marquee absolute-positioned at the bottom.
   ============================================================================= */

import { COMPANY_NAME } from "@/lib/constants";
import WorkspaceDashboard from "@/components/ui/WorkspaceDashboard";

const projects = [
  "Pulse Fitness",
  "Norden Architecture",
  "CraftBrew Co.",
  "Lumina Academy",
  "Vertex Labs",
  "Summit Media",
  "Bloom & Grow",
  "Aether Financial"
];

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#FAF9F5] pt-28 pb-24 text-[#1E1B18] font-sans antialiased"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-16">
        
        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ---- Left Column: Clean Typography (6 Columns) ---- */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] text-[#1E1B18] max-w-xl">
              {t("hero_title")}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {t("hero_desc")}
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md bg-[#0061FE] text-white font-medium text-base hover:bg-[#0052D4] shadow-sm transition-all group"
              >
                {t("hero_cta")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* ---- Right Column: Dashboard Mockup (6 Columns) ---- */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full">
              <WorkspaceDashboard />
            </div>
          </div>
        </div>

      </div>

      {/* ---- Scrolling Project Names Marquee (Bottom - Absolute Positioned) ---- */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden">
        <div className="relative w-full flex overflow-x-hidden">
          {/* Infinite scrolling wrapper */}
          <div className="flex whitespace-nowrap animate-marquee py-4 items-center" style={{ gap: "100px" }}>
            {/* Original List */}
            {projects.map((name, idx) => (
              <span key={idx} className="text-[#1E1B18]/25 font-display font-semibold text-lg sm:text-xl tracking-wider select-none">
                {name}
              </span>
            ))}
            {/* Duplicated List for Loop */}
            {projects.map((name, idx) => (
              <span key={`dup-${idx}`} className="text-[#1E1B18]/25 font-display font-semibold text-lg sm:text-xl tracking-wider select-none">
                {name}
              </span>
            ))}
            {/* Second duplication to ensure full screen width coverage */}
            {projects.map((name, idx) => (
              <span key={`dup2-${idx}`} className="text-[#1E1B18]/25 font-display font-semibold text-lg sm:text-xl tracking-wider select-none">
                {name}
              </span>
            ))}
          </div>
          
          {/* Blur fade gradients on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAF9F5] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FAF9F5] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
