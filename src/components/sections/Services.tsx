"use client";

/* =============================================================================
   SERVICES SECTION — DROPBOX-STYLE HORIZONTAL CARDS
   =============================================================================
   2-column grid, image left + text right, light fill background,
   minimal design, "Learn more →" links.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
    title: "Custom Website Design",
    description: "Unique, tailor-made designs that reflect your brand identity and resonate with your target audience.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    accent: "bg-amber-200/60",
    deco: "bg-amber-300/30",
  },
  {
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    title: "Website Development",
    description: "Clean, modern code built with the latest technologies for fast, reliable, and scalable websites.",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
    accent: "bg-sky-200/60",
    deco: "bg-sky-300/30",
  },
  {
    icon: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and turn visitors into customers.",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    accent: "bg-rose-200/60",
    deco: "bg-rose-300/30",
  },
  {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    title: "Company Profile Websites",
    description: "Professional websites that establish credibility and clearly communicate what your business does.",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "bg-emerald-200/60",
    deco: "bg-emerald-300/30",
  },
  {
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    title: "E-commerce Websites",
    description: "Online stores that are easy to manage, secure, and built to deliver a smooth shopping experience.",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: "bg-violet-200/60",
    deco: "bg-violet-300/30",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
    title: "Website Redesign",
    description: "Refresh your existing website with a modern look, improved performance, and better user experience.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    accent: "bg-orange-200/60",
    deco: "bg-orange-300/30",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase">What We Do</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">Services We Offer</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 max-w-2xl mx-auto">From concept to launch, we provide everything you need to establish a strong online presence.</motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <motion.a
            href="#contact"
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 80, damping: 15 }}
            className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors duration-300 cursor-pointer"
          >
            {/* Illustration area */}
            <div className={`relative flex-shrink-0 w-full sm:w-44 h-36 sm:h-auto rounded-xl ${service.bg} overflow-hidden flex items-center justify-center`}>
              {/* Decorative shapes */}
              <motion.div
                className={`absolute top-3 right-3 w-10 h-10 rounded-lg ${service.deco}`}
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={`absolute bottom-4 left-4 w-6 h-6 rounded-full ${service.deco}`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className={`absolute top-1/2 left-1/3 w-14 h-14 rounded-full ${service.accent} -translate-x-1/2 -translate-y-1/2`} />

              {/* Icon */}
              <motion.div
                className={`relative z-10 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm ${service.iconColor}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </motion.div>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center py-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-slate-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                Learn more
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
