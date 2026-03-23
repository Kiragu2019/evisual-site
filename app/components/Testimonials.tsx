"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Visual Studios transformed our brand with a campaign film that stopped people mid-scroll. The quality was cinematic, the process was smooth, and they delivered ahead of schedule.",
    name: "Amara Osei",
    title: "CMO, Apex Athletics",
    avatar: "https://i.pravatar.cc/150?u=amara",
    initials: "AO",
  },
  {
    quote: "We came in needing product photography and left with a full visual identity. Their eye for aesthetic is unparalleled — every image they produce tells a story.",
    name: "Léa Fontaine",
    title: "Creative Director, Solène Paris",
    avatar: "https://i.pravatar.cc/150?u=lea",
    initials: "LF",
  },
  {
    quote: "The AI-generated campaign assets they built for us cut our content production time by 70% while actually improving quality. They're genuinely ahead of the curve.",
    name: "Jordan Kim",
    title: "Head of Growth, NexGen Labs",
    avatar: "https://i.pravatar.cc/150?u=jordan",
    initials: "JK",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setActive((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-white dark:bg-[#0f1012] py-24 overflow-hidden border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header - Google UI Style */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} className="text-[#1a73e8]" />
              <span className="text-[14px] font-bold text-[#1a73e8] uppercase tracking-[0.2em]">
                Client Stories
              </span>
            </div>
            <h2 className="text-[40px] md:text-[64px] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Trusted by leaders, <br className="hidden md:block" />
              loved by audiences.
            </h2>
          </div>

          {/* Nav Controls - Modern Pill Style */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-slate-600 dark:text-slate-400"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-[14px] font-bold text-slate-400 dark:text-slate-600 tabular-nums">
              {active + 1} / {TESTIMONIALS.length}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-slate-600 dark:text-slate-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Quote Block */}
              <div className="lg:col-span-8 relative">
                <Quote 
                  className="absolute -top-10 -left-6 text-blue-50 dark:text-slate-900 h-20 w-20 -z-10" 
                  fill="currentColor" 
                />
                
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className="fill-[#1a73e8] text-[#1a73e8]" />
                  ))}
                </div>

                <blockquote className="text-[24px] md:text-[36px] font-medium leading-[1.3] text-slate-900 dark:text-white tracking-tight mb-12">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-white dark:border-[#0f1012] shadow-sm">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="text-[16px] font-bold text-slate-900 dark:text-white leading-none mb-1">
                        {t.name}
                      </h4>
                      <p className="text-[14px] font-medium text-[#5f6368] dark:text-slate-500">
                        {t.title}
                      </p>
                   </div>
                </div>
              </div>

              {/* Verified Results Card - Agency/UGC standard */}
              <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Case Verified</span>
                </div>
                <h5 className="text-[20px] font-bold text-slate-900 dark:text-white mb-2">Project Success</h5>
                <p className="text-[14px] text-[#5f6368] dark:text-slate-400 mb-6 leading-relaxed">
                  This collaboration resulted in a 40% increase in social engagement and defined a new visual direction for {t.title.split(',')[1]}.
                </p>
                <a href="#work" className="text-[14px] font-bold text-[#1a73e8] hover:underline flex items-center gap-2">
                  View Case Study <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots - Google Minimalist style */}
        <div className="flex gap-3 mt-16 justify-center md:justify-start">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-[#1a73e8]" : "w-1.5 bg-slate-200 dark:bg-slate-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}