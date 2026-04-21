'use strict';

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Terminal, ChevronRight } from 'lucide-react';
import { projects } from "@/lib/data";
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-blue-600">Projects.</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link key={idx} href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] group-hover:bg-blue-600/10 transition-colors" />
                
                <div className="flex justify-between items-start mb-10">
                  <div className="text-3xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors">
                    {project.id}
                  </div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-slate-500 group-hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>

                <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500">
                  <Terminal size={14} />
                  {project.category}
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-1 bg-slate-950 text-slate-500 text-[10px] font-bold rounded uppercase tracking-tighter border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
