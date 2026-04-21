'use strict';

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-6 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-10 h-[1px] bg-blue-500/50 block"></span>
                SOFTWARE ENGINEER & ARCHITECT
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600">Polyglot</span> <br />
              Mastery.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
            >
              Expertise across <span className="text-white font-medium">PHP, Python, Java, and C#</span>. 
              I architect high-performance ERPs, FinTech portals, and cloud-native systems that scale with your vision.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="#projects" 
                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                href="https://github.com"
                target="_blank"
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <GitBranch size={20} />
                GitHub
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] shrink-0"
          >
            {/* Geometric Accents */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-slate-800 rounded-full"
            />
            
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-slate-800 bg-slate-900 group">
              <img 
                src="/IMG_3108.jpg" 
                alt="Job Gedions Orungo" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-5 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl text-blue-500">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Status</div>
                  <div className="text-sm font-bold text-white">Full Stack Architect</div>
                </div>
              </div>
            </motion.div>

            {/* Code Snippet Decoration */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-white/10 hidden md:block"
            >
              <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <code className="text-[10px] text-blue-400 font-mono">
                const expertise = ['PHP', 'C#', 'Python'];
              </code>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
