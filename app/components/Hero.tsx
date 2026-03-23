"use client";

import React, { useState, useEffect } from "react";
import { Play, ArrowRight, CheckCircle2, Star, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [showReel, setShowReel] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0f1012] pt-20">
      {/* --- Background: UGC Style Video Overlay --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white dark:from-black/20 dark:to-[#0f1012] z-10" />
        {/* Placeholder for Mux Video - In UGC platforms, video is often slightly dimmed or blurred to make text pop */}
        <div className="w-full h-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <div 
              className="w-full h-full opacity-40 dark:opacity-30 scale-110 blur-2xl transition-opacity duration-1000"
              style={{
                background: `radial-gradient(circle at 50% 50%, #1a73e8 0%, #25D366 50%, #0f1012 100%)`
              }}
            />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={loaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge (UGC Style) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
            <CheckCircle2 className="w-4 h-4 text-[#1a73e8]" />
            <span className="text-[13px] font-medium text-[#1a73e8] tracking-tight">
              Top-Rated Production Studio 2025
            </span>
          </div>

          <h1 className="text-[56px] md:text-[84px] leading-[1.05] font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Visuals that <span className="text-[#1a73e8]">Stop the Scroll.</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-10">
            High-impact video production for brands that demand attention. We blend UGC authenticity with studio-quality precision.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#contact" 
              className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full text-[15px] font-semibold hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            
            <button 
              onClick={() => setShowReel(true)}
              className="flex items-center gap-3 px-6 py-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-medium text-[15px]"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <Play size={14} fill="currentColor" />
              </div>
              Watch Showreel
            </button>
          </div>

          {/* Social Proof (Google UI Style) */}
          <div className="mt-12 flex items-center gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0f1012] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                <span className="ml-2 text-[14px] font-bold text-slate-900 dark:text-white">5.0</span>
              </div>
              <p className="text-[13px] text-slate-500 font-medium">Trusted by 200+ global brands</p>
            </div>
          </div>
        </motion.div>

        {/* --- Right Column: Visual Component (The "UGC Card") --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[400px] h-[550px] mx-auto bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border-[8px] border-slate-900 dark:border-slate-700 overflow-hidden">
             {/* Replace with <MuxPlayer /> */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                <p className="text-white/20 font-bold uppercase tracking-widest rotate-12 text-4xl">Showcase Video</p>
             </div>
             
             {/* Dynamic UGC Overlay Elements */}
             <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#1a73e8]" />
                    <p className="text-white text-xs font-bold">@visualstudios_production</p>
                </div>
                <p className="text-white/80 text-[11px] line-clamp-2">Authentic visual storytelling that generated 1.2M+ organic views for our latest fashion client.</p>
             </div>
          </div>

          {/* Floating Interaction Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[18px] font-bold text-slate-900 dark:text-white">+84%</p>
              <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Engagement Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Showreel Modal (Standard Google-clean approach) */}
      <AnimatePresence>
        {showReel && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setShowReel(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowReel(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10"
              >
                <X size={20} />
              </button>
              <div className="w-full h-full flex items-center justify-center text-white/40 font-mono italic">
                [ MUX PLAYER LOADED HERE ]
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function X({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
    );
}