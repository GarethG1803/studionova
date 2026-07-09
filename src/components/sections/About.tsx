"use client";

/* =============================================================================
   ABOUT SECTION — COOL ANIMATIONS
   =============================================================================
   Parallax text reveal, 3D stat cards with flip counter, draw-on gradient
   text, and staggered paragraph cascade.
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { COMPANY_NAME } from "@/lib/constants";

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed", icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" },
  { value: 30, suffix: "+", label: "Happy Clients", icon: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" },
  { value: 3, suffix: "+", label: "Years Experience", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="group p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-100 transition-all duration-500 relative overflow-hidden"
      style={{ perspective: 600 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2, type: "spring", stiffness: 200 }}
          className="w-10 h-10 mx-auto rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mb-3 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
          </svg>
        </motion.div>

        <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-cyan-500 mb-1 tabular-nums">
          {count}{stat.suffix}
        </p>
        <p className="text-slate-500 text-sm">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-medium tracking-wider uppercase"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 60 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Building websites that{" "}
            <motion.span
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500"
            >
              work for your business
            </motion.span>
          </motion.h2>

          <div className="space-y-4 text-slate-500 leading-relaxed">
            {[
              `${COMPANY_NAME} is a web design and development studio that helps businesses build a strong online presence. We work with startups, small businesses, and growing brands to create websites that look professional, perform well, and support their goals.`,
              "Our approach is straightforward: understand what you need, design something that fits, and build it right. We care about clean code, thoughtful design, and delivering work we're proud of.",
              "Whether you need a brand-new website, a redesign, or a landing page that converts — we're here to help you make it happen.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, type: "spring", stiffness: 60 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-8 text-teal-500 font-medium group"
          >
            <span>Work with us</span>
            <motion.svg
              className="w-4 h-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </motion.svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
