"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "The Urban Explorer",
    category: "Brand Film",
    year: "2024",
    description: "A cinematic journey through Tokyo's neon streets, capturing the essence of modern street culture for a leading footwear brand.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop",
    tags: ["Directing", "Post-Production"]
  },
  {
    title: "Echoes of Silence",
    category: "Short Film",
    year: "2023",
    description: "An award-winning narrative piece exploring the relationship between sound and memory in high-altitude environments.",
    image: "https://images.unsplash.com/photo-1492691523567-62792c6e715f?q=80&w=2000&auto=format&fit=crop",
    tags: ["Cinematography", "Sound Design"]
  },
  {
    title: "Velocity Racing",
    category: "Commercial",
    year: "2023",
    description: "High-octane commercial for the world's first electric hypercar, pushing the boundaries of dynamic camera movement.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    tags: ["Creative Direction", "VFX"]
  },
  {
    title: "Minimalist Living",
    category: "Documentary",
    year: "2022",
    description: "A deep dive into the architecture of modern small-scale living across Northern Europe.",
    image: "https://images.unsplash.com/photo-1449156003053-c306a0482905?q=80&w=2000&auto=format&fit=crop",
    tags: ["Documentary", "Editing"]
  },
];

export default function WorkSection() {
  const [activeImage, setActiveImage] = useState(PROJECTS[0].image);

  return (
    <section className="py-24 bg-white dark:bg-[#0f1012]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-20 border-b border-slate-100 dark:border-slate-800 pb-12">
          <h2 className="text-[48px] md:text-[80px] font-bold tracking-tighter text-slate-900 dark:text-white">
            Selected work.
          </h2>
          <button className="hidden md:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-md text-[14px] font-medium hover:opacity-80 transition-all">
            View all projects
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Project List */}
          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                onMouseEnter={() => setActiveImage(project.image)}
                className="group border-b border-slate-100 dark:border-slate-800 py-10 first:pt-0 cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-widest text-[#1a73e8] mb-2 block">
                      {project.category} — {project.year}
                    </span>
                    <h3 className="text-[32px] md:text-[44px] font-bold text-slate-900 dark:text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-8 h-8 text-slate-400" />
                  </div>
                </div>

                <p className="text-[16px] text-[#5f6368] dark:text-slate-400 leading-relaxed max-w-xl mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[13px] font-medium text-slate-400 dark:text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Project Preview */}
          <div className="sticky top-32 hidden lg:block">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900">
              {PROJECTS.map((project) => (
                <img 
                  key={project.image}
                  src={project.image} 
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    activeImage === project.image ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              {/* Overlay for a cinematic look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Project counter / Footer for the image */}
            <div className="mt-6 flex justify-between items-center text-[14px] font-mono text-slate-400">
              <span>PROJECT PREVIEW</span>
              <span>EST. 2024</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}