"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Video Production",
    description: "We manage the entire production process, from scripting to post-production, ensuring your story is captured with creativity and cinematic flair.",
    tags: ["Commercials", "Brand Films", "Corporate Videos", "Product Videos"],
  },
  {
    title: "Creative Direction",
    description: "Our creative team works closely with you to develop unique concepts, compelling scripts, and storylines that resonate with your audience.",
    tags: ["Concept Development", "Scriptwriting", "Storyboarding", "Art Direction"],
  },
  {
    title: "Post-Production & Editing",
    description: "We bring your footage to life with expert editing, color grading and motion graphics. Every frame is polished to perfection for maximum impact.",
    tags: ["Video Editing", "Color Grading", "Motion Graphics", "Sound Design"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f1012]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-20 border-b border-slate-100 dark:border-slate-800 pb-12">
          <h2 className="text-[48px] md:text-[80px] font-bold tracking-tighter text-slate-900 dark:text-white">
            Our services.
          </h2>
          <button className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-md text-[14px] font-medium hover:bg-slate-800 transition-all">
            Learn more
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Service List */}
          <div className="flex flex-col">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="group border-b border-slate-100 dark:border-slate-800 py-12 first:pt-0 last:border-0"
              >
                <h3 className="text-[28px] md:text-[36px] font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#5f6368] dark:text-slate-400 leading-relaxed max-w-xl mb-8">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[12px] font-medium text-slate-500 dark:text-slate-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1 hover:text-[#1a73e8] hover:border-[#1a73e8] transition-all"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>

          {/* Right Column: Featured Image */}
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop" 
                alt="Cinematic Production"
                className="w-full h-full object-cover"
              />
              {/* Subtle Overlay to match the blue cinematic tone in the screenshot */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}