"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe2, Users2, Trophy, Briefcase } from "lucide-react";

const STATS = [
  { 
    number: 340, 
    suffix: "+", 
    label: "Projects Delivered", 
    sub: "Across 12 industries",
    icon: Briefcase 
  },
  { 
    number: 98, 
    suffix: "%", 
    label: "Client Retention", 
    sub: "Long-term partnerships",
    icon: Users2 
  },
  { 
    number: 7, 
    suffix: "", 
    label: "Years of Excellence", 
    sub: "Founded in 2017",
    icon: Trophy 
  },
  { 
    number: 60, 
    suffix: "+", 
    label: "Global Brands", 
    sub: "Startups to Fortune 500",
    icon: Globe2 
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Power3 ease out for that "Google smooth" feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function Stats() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="bg-white dark:bg-[#0f1012] py-20 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header (Optional Agency Context) */}
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-[14px] font-bold text-[#1a73e8] uppercase tracking-[0.2em] mb-4">Our Impact</h2>
           <p className="text-[32px] font-bold text-slate-900 dark:text-white tracking-tight">Proven results for world-class brands.</p>
        </div>

        <motion.div 
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {STATS.map((stat, i) => (
            <StatItem 
              key={stat.label} 
              stat={stat} 
              isInView={isInView} 
              index={i} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, isInView, index }: { stat: typeof STATS[0], isInView: boolean, index: number }) {
  const count = useCountUp(stat.number, 2500, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center md:items-start group"
    >
      {/* Icon with Google-style soft background */}
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
        <Icon className="w-6 h-6 text-[#1a73e8]" />
      </div>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-[48px] font-bold tracking-tighter text-slate-900 dark:text-white leading-none">
          {count}
          <span className="text-[#1a73e8]">{stat.suffix}</span>
        </span>
      </div>

      <h3 className="text-[16px] font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
        {stat.label}
      </h3>
      
      <p className="text-[14px] font-medium text-[#5f6368] dark:text-slate-500 leading-snug">
        {stat.sub}
      </p>

      {/* Subtle indicator line */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40px" } : {}}
        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
        className="h-[2px] bg-slate-100 dark:bg-slate-800 mt-6"
      />
    </motion.div>
  );
}