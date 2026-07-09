"use client";

/* =============================================================================
   FOOTER — DARK FOOTER (contrast against light site)
   ============================================================================= */

import { motion } from "framer-motion";
import { COMPANY_NAME, COMPANY_TAGLINE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const SERVICE_LINKS = ["Custom Website Design", "Website Development", "Landing Pages", "E-commerce Websites", "Website Redesign"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-500/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-3">{COMPANY_NAME}<span className="text-teal-400">.</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed">{COMPANY_TAGLINE}</p>
            <div className="flex gap-3 mt-6">
              {Object.entries(SOCIAL_LINKS).map(([platform, href]) => (
                <motion.a key={platform} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all duration-300 text-xs uppercase" aria-label={platform}>{platform.charAt(0).toUpperCase()}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (<li key={link.href}><a href={link.href} className="text-slate-400 text-sm hover:text-teal-400 hover:translate-x-1 transition-all duration-300 inline-block">{link.label}</a></li>))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((service) => (<li key={service}><a href="#services" className="text-slate-400 text-sm hover:text-teal-400 hover:translate-x-1 transition-all duration-300 inline-block">{service}</a></li>))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>hello@studionova.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block mt-6 px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">Start a Project</motion.a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>&copy; {year} {COMPANY_NAME}. All rights reserved.</p>
          <p>Designed &amp; developed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
