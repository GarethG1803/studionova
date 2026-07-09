"use client";

/* =============================================================================
   CONTACT SECTION — COOL ANIMATIONS
   =============================================================================
   Staggered field slide-in, spring button, 3D form card entrance,
   animated success checkmark, and pulsing contact icons.
   ============================================================================= */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { COMPANY_EMAIL } from "@/lib/constants";

const PROJECT_TYPES = ["Custom Website", "Landing Page", "E-commerce", "Company Profile", "Website Redesign", "Other"];

const inputClasses = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-300";

const fieldVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.5, type: "spring" as const, stiffness: 80 },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 60 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Let&apos;s discuss{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">your project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
            className="text-slate-500 leading-relaxed mb-8"
          >
            Have a website project in mind? Fill out the form and we&apos;ll get back to you within 24 hours to discuss how we can help bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-slate-500 text-sm group">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-teal-200 opacity-0 group-hover:opacity-40"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                </div>
              </motion.div>
              <span>{COMPANY_EMAIL}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-sm group">
              <motion.div
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-teal-200 opacity-0 group-hover:opacity-40"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <div className="relative w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
              </motion.div>
              <span>Response within 24 hours</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ perspective: 800 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="p-10 rounded-2xl bg-white border border-slate-100 shadow-lg text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-semibold text-slate-900 mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-500 text-sm"
                >
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block text-sm text-slate-700 font-medium mb-1.5">Name</label>
                    <input type="text" required className={inputClasses} placeholder="Your name" />
                  </motion.div>
                  <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block text-sm text-slate-700 font-medium mb-1.5">Email</label>
                    <input type="email" required className={inputClasses} placeholder="your@email.com" />
                  </motion.div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block text-sm text-slate-700 font-medium mb-1.5">Company Name</label>
                    <input type="text" className={inputClasses} placeholder="Your company (optional)" />
                  </motion.div>
                  <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block text-sm text-slate-700 font-medium mb-1.5">Project Type</label>
                    <select required className={`${inputClasses} appearance-none`} defaultValue="">
                      <option value="" disabled>Select type</option>
                      {PROJECT_TYPES.map((type) => (<option key={type} value={type}>{type}</option>))}
                    </select>
                  </motion.div>
                </div>
                <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block text-sm text-slate-700 font-medium mb-1.5">Message</label>
                  <textarea required rows={4} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
                </motion.div>
                <motion.button
                  type="submit"
                  custom={5}
                  variants={fieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full py-3.5 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
