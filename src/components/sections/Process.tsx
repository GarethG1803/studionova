"use client";

/* =============================================================================
   PROCESS SECTION — COOL ANIMATIONS
   =============================================================================
   Sequential reveal with connecting animated line, flip-in icons,
   and progress bars that race on scroll.
   ============================================================================= */

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  { number: "01", title: "Discovery", description: "We start by understanding your business, audience, and goals to define the right direction.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z" },
  { number: "02", title: "Planning", description: "We outline the site structure, content strategy, and technical requirements.", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" },
  { number: "03", title: "Design", description: "We create visual concepts and refine the look until it matches your brand perfectly.", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" },
  { number: "04", title: "Development", description: "We build with clean code, responsive layouts, and optimized performance across all devices.", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { number: "05", title: "Review", description: "We test everything thoroughly and work with you on revisions until the site is exactly right.", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" },
  { number: "06", title: "Launch", description: "We handle deployment and make sure your website is live, fast, and ready for visitors.", icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0Z" },
];

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-slate-50">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase">How We Work</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">Our Process</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-500 max-w-2xl mx-auto">A structured approach that keeps every project on track and delivers results you can count on.</motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            className="group relative p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-teal-100 transition-all duration-500"
            style={{ perspective: 600 }}
          >
            <motion.span
              className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-teal-100 transition-colors duration-500 select-none"
              initial={{ opacity: 0, scale: 2, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 120 }}
            >
              {step.number}
            </motion.span>

            {/* Flip-in icon */}
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.15, rotate: -8 }}
              className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
            </motion.div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

            <div className="mt-5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.5, duration: 0.8, type: "spring", stiffness: 50 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
