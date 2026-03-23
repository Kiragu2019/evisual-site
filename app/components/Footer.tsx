"use client";

import React from "react";
import { Instagram, Twitter, Youtube, Linkedin, ArrowUpRight, CheckCircle2 } from "lucide-react";

const FOOTER_LINKS = {
  Services: ["Videography", "Photography", "Animation", "Graphic Design", "AI Content"],
  Company: ["About Us", "Our Work", "Process", "Careers", "Blog"],
  Support: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Support"],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f1012] border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Mission - Takes 2 columns on large screens */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white dark:text-slate-900 font-bold text-xl">V</span>
              </div>
              <span className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white">
                Visual Studios
              </span>
            </a>
            <p className="text-[15px] leading-relaxed text-[#5f6368] dark:text-slate-400 max-w-sm mb-8">
              We craft visual stories that define brands and move audiences. Based in Nairobi, serving global clients with studio-quality production.
            </p>
            
            {/* UGC Style Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 mb-8">
              <CheckCircle2 size={16} className="text-[#25D366]" />
              <span className="text-[12px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                Verified Production Partner
              </span>
            </div>

            {/* Social Icons - Google style circular buttons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-[#5f6368] dark:text-slate-400 hover:bg-[#1a73e8] hover:text-white dark:hover:bg-[#1a73e8] transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-[0.1em] mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] font-medium text-[#5f6368] dark:text-slate-400 hover:text-[#1a73e8] dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Contact Column */}
          <div className="col-span-1">
            <h4 className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-[0.1em] mb-6">
              Connect
            </h4>
            <a
              href="https://wa.me/254791339189"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#25D366] transition-all"
            >
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                <span className="text-[14px] font-bold text-slate-900 dark:text-white">WhatsApp</span>
              </div>
              <p className="text-[12px] text-[#5f6368] dark:text-slate-500">Available Q1 2025</p>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Google Style Legal Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[13px] text-[#5f6368] dark:text-slate-500">
              © 2025 Visual Studios, Inc.
            </p>
            <div className="hidden md:block w-[1px] h-4 bg-slate-200 dark:bg-slate-800" />
            <a href="#" className="text-[13px] text-[#5f6368] dark:text-slate-500 hover:underline">Built for the next generation</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 text-[14px] font-bold text-[#1a73e8] hover:gap-3 transition-all"
            >
              Launch a Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Official WhatsApp Icon SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.435h.006c6.552 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}