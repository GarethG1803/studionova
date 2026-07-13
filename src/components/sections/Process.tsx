"use client";

/* =============================================================================
   PROCESS SECTION — DROPBOX-STYLE HORIZONTAL DRAG-SCROLL (WITH TRANSLATIONS)
   =============================================================================
   Dark background, left intro column with draggable range input slider,
   right side horizontal cards that support desktop drag-to-scroll and mobile swipe.
   ============================================================================= */

import { useState, useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const steps = [
    {
      number: "01",
      title: t("process_step1_title"),
      description: t("process_step1_desc"),
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&auto=format&fit=crop&q=80",
    },
    {
      number: "02",
      title: t("process_step2_title"),
      description: t("process_step2_desc"),
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=80",
    },
    {
      number: "03",
      title: t("process_step3_title"),
      description: t("process_step3_desc"),
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=80",
    },
    {
      number: "04",
      title: t("process_step4_title"),
      description: t("process_step4_desc"),
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80",
    },
    {
      number: "05",
      title: t("process_step5_title"),
      description: t("process_step5_desc"),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollWidth > target.clientWidth) {
      const progress = target.scrollLeft / (target.scrollWidth - target.clientWidth);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    }
  };

  // Slider change handler (scrolls the cards container)
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setScrollProgress(val);
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollLeft = val * maxScroll;
    }
  };

  // Drag handlers for the cards container
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <SectionWrapper id="process" className="bg-[#121214] py-24 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Intro & Draggable Slider Indicator (5 Columns) */}
        <div className="lg:col-span-5 space-y-6 text-left select-none">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.25] text-white">
            {t("process_title")}
          </h2>

          <div className="pt-6 space-y-4">
            <p className="font-sans text-xs text-slate-400 font-medium uppercase tracking-wider select-none">
              {t("process_caption")}
            </p>
            
            {/* Draggable Slider Track Input */}
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={scrollProgress}
                onChange={handleSliderChange}
                className="w-48 h-1 rounded-full appearance-none cursor-pointer outline-none transition-all duration-75 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FAF9F5] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0061FE] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FAF9F5] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0061FE] [&::-moz-range-thumb]:shadow-md"
                style={{
                  background: `linear-gradient(to right, #0061FE 0%, #0061FE ${scrollProgress * 100}%, rgba(255,255,255,0.2) ${scrollProgress * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Drag-Scrollable Cards (7 Columns) */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto scrollbar-none pb-6 px-1 select-none ${
              isDown ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex-shrink-0 w-[280px] sm:w-[320px] bg-slate-900/60 rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden flex flex-col"
              >
                {/* Step Image */}
                <div className="relative w-full h-44 bg-slate-800 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale-[20%]" 
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-xs font-bold text-white px-2.5 py-1 rounded-md">
                    Step {step.number}
                  </div>
                </div>

                {/* Step Text Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-display font-semibold text-white text-base sm:text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
