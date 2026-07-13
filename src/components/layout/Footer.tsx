"use client";

/* =============================================================================
   FOOTER — SOLID BLACK MULTI-COLUMN INTERACTION LAYOUT
   =============================================================================
   Designed in full black matching the Dropbox design system: 6 columns of links,
   clean light grey text, social media SVGs, divider, and a language switcher.
   ============================================================================= */

import { COMPANY_NAME } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const columns = [
  {
    title: "Studio Nova",
    links: [
      { label: "Layanan Kami", href: "/#services" },
      { label: "Mengapa Kami", href: "/#why-us" },
      { label: "Proses Kerja", href: "/#process" },
      { label: "Tentang Kami", href: "/about" },
      { label: "Hubungi Kontak", href: "/contact" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Custom Website", href: "/#services" },
      { label: "Company Profile", href: "/#services" },
      { label: "E-commerce Store", href: "/#services" },
      { label: "Landing Page", href: "/#services" },
      { label: "Redesain Web", href: "/#services" },
    ],
  },
  {
    title: "Teknologi",
    links: [
      { label: "Next.js", href: "/" },
      { label: "React JS", href: "/" },
      { label: "TypeScript", href: "/" },
      { label: "Tailwind CSS", href: "/" },
      { label: "Python & Node", href: "/" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "Pusat Bantuan", href: "/contact" },
      { label: "Ketentuan Layanan", href: "/" },
      { label: "Kebijakan Privasi", href: "/" },
      { label: "Kebijakan Cookie", href: "/" },
      { label: "Peta Situs", href: "/" },
    ],
  },
  {
    title: "Sumber Daya",
    links: [
      { label: "Blog & Wawasan", href: "/" },
      { label: "Studi Kasus", href: "/" },
      { label: "Karir & Magang", href: "/about" },
      { label: "Referral", href: "/" },
      { label: "Integrasi Partner", href: "/" },
    ],
  },
  {
    title: "Hubungan",
    links: [
      { label: "Instagram", href: "/" },
      { label: "LinkedIn", href: "/" },
      { label: "WhatsApp", href: "/contact" },
      { label: "GitHub Projects", href: "/" },
      { label: "Dribbble Mockups", href: "/" },
    ],
  },
];

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-8 lg:px-16 border-t border-zinc-900 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ---- 6 Columns Link Grid ---- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-display font-semibold text-white text-sm sm:text-base tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---- Social Media Handles ---- */}
        <div className="flex gap-5 pt-4 text-white hover:text-white">
          <a href="#home" className="hover:opacity-80 transition-opacity" aria-label="X Twitter">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#home" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>
          <a href="#home" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* ---- Divider Line ---- */}
        <div className="border-t border-zinc-850 pt-8" />

        {/* ---- Language Switcher Dropdown ---- */}
        <div 
          onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
          className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white cursor-pointer select-none transition-colors w-fit"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
          <span className="font-semibold">
            {language === "ID" ? "Bahasa Indonesia (ID)" : "English (EN)"}
          </span>
          <svg className="w-3.5 h-3.5 translate-y-[0.5px] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </div>
    </footer>
  );
}
