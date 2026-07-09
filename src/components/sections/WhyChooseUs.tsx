"use client";

/* =============================================================================
   WHY CHOOSE US — COOL ANIMATIONS
   =============================================================================
   Staggered hexagonal icon pop, draw-on underline, sliding card entrance,
   and magnetic hover effect.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TiltCard from "@/components/ui/TiltCard";
import { COMPANY_NAME } from "@/lib/constants";

const reasons = [
  { title: "Modern & Professional Design", description: "Every website we build follows current design trends and best practices, so your brand always looks its best.", icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z", iconBg: "bg-pink-100 text-pink-600" },
  { title: "Fully Responsive", description: "Your website will look and work perfectly on desktops, tablets, and phones — no compromise.", icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", iconBg: "bg-blue-100 text-blue-600" },
  { title: "SEO-Friendly Structure", description: "We build with search engines in mind, giving your website the foundation it needs to rank well.", icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z", iconBg: "bg-green-100 text-green-600" },
  { title: "Fast Performance", description: "Optimized code and smart architecture mean your pages load quickly, keeping visitors engaged.", icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z", iconBg: "bg-amber-100 text-amber-600" },
  { title: "Clear Communication", description: "We keep you informed at every stage with regular updates and transparent timelines.", icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155", iconBg: "bg-cyan-100 text-cyan-600" },
  { title: "Business-Focused Design", description: "We don't just make things look good — we design with your business goals and customers in mind.", icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941", iconBg: "bg-orange-100 text-orange-600" },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" className="bg-slate-50">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase">Why Us</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">Why Choose {COMPANY_NAME}</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 max-w-2xl mx-auto">We combine thoughtful design with solid development to deliver websites that truly serve your business.</motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotateY: i % 2 === 0 ? -10 : 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.08, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
          >
            <TiltCard className="group h-full">
              <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-teal-100 transition-all duration-500 overflow-hidden h-full">
                {/* Background shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-cyan-50/0 to-purple-50/0 group-hover:from-teal-50 group-hover:via-cyan-50/50 group-hover:to-purple-50/0 transition-all duration-700 rounded-2xl" />

                <div className="relative z-10 flex gap-4">
                  {/* Icon with spin-in animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, type: "spring", stiffness: 200, damping: 12 }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${reason.iconBg} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-teal-600 transition-colors duration-300">{reason.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">{reason.description}</p>
                  </div>
                </div>

                {/* Animated bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.6, type: "spring", stiffness: 50 }}
                />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
