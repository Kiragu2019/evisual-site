"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TICKER_ITEMS = [
  "Videography",
  "Photography",
  "Animation",
  "Graphic Design",
  "AI Content",
  "Brand Films",
  "Commercial Production",
  "Motion Graphics",
  "3D Renders",
  "Social Media Content",
];

export default function Ticker() {
  // We triple the items to ensure there is never a gap in the loop
  const tripledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full bg-white dark:bg-[#0f1012] border-y border-slate-100 dark:border-slate-800 py-6 overflow-hidden">
      {/* 
          Standard Google UI technique: Gradient Mask 
          This makes the text "fade" into the edges of the screen rather than a hard cut.
      */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-[#0f1012] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-[#0f1012] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: [0, -1035], // Adjust this value based on total content width if needed
        }}
        transition={{
          duration: 30, // Higher number = slower, more premium feel
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {tripledItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
            <span className="text-[16px] md:text-[20px] font-medium tracking-tight text-slate-800 dark:text-slate-200">
              {item}
            </span>
            {/* UGC/Industry Standard: High-quality SVG Icon instead of text star */}
            <div className="flex items-center justify-center">
              <Star 
                size={16} 
                className="fill-[#1a73e8] text-[#1a73e8] opacity-80" 
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Subtle Bottom Branding (Optional UGC Vibe) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
         <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
      </div>
    </div>
  );
}