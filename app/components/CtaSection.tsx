"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254791339189";

export default function FrictionlessCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md w-full bg-[#f8f9fa] dark:bg-[#121417] p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
    >
      {/* Header Area */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">
              <WhatsAppIcon className="w-7 h-7 fill-[#25D366]" />
            </div>
            {/* Live Pulse Indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-[#121417]"></span>
            </span>
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-slate-900 dark:text-white leading-tight">
              Direct Briefing
            </h4>
            <div className="flex items-center gap-1.5 mt-1">
              <Zap size={12} className="text-[#1a73e8] fill-[#1a73e8]" />
              <p className="text-[13px] font-bold text-[#1a73e8] uppercase tracking-wider">
                Active Now
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
           <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
             ~10m response
           </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="space-y-4 mb-8">
        <p className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          Skip the long email chains. Send a voice note or a quick text with your vision.
        </p>
        <ul className="space-y-2">
          {["Instant quotes", "Timeline checks", "Creative feedback"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[13px] text-[#5f6368] dark:text-slate-500">
              <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Primary WhatsApp Action */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 rounded-2xl text-[15px] font-bold transition-all shadow-lg shadow-green-500/20 active:scale-95"
      >
        <MessageCircle size={18} fill="currentColor" />
        Start Conversation
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Footer Disclaimer */}
      <p className="text-center mt-6 text-[12px] text-[#bdc1c6] dark:text-slate-600 font-medium">
        Secure & Private Business Chat
      </p>
    </motion.div>
  );
}

// Official WhatsApp Branded SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.435h.006c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}