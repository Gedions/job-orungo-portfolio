'use strict';

"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { blogPosts } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="mesh-gradient" />
      
      <div className="relative">
        <Hero />
        <Skills />
        <Projects />
        
        {/* Blog Snapshot Section */}
        <section id="blog" className="py-32 border-t border-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
              <div>
                <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4 uppercase">INSIGHTS</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Engineering <span className="italic font-serif text-slate-500">Blog.</span></h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {blogPosts.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.slug}`}>
                  <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer p-8 rounded-3xl border border-slate-900 hover:border-blue-500/30 transition-all bg-slate-900/30"
                  >
                    <div className="text-xs font-mono text-slate-500 uppercase mb-4">{post.date}</div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors mb-4">{post.title}</h4>
                    <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                    <div className="text-blue-500 font-bold text-sm flex items-center gap-2">
                      Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <Contact />
      </div>

      <footer className="py-20 border-t border-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="text-xl font-black text-white italic tracking-tighter">
              JOB<span className="text-blue-600">ORUNGO</span>
            </div>
            <div className="text-slate-600 text-sm border-l border-slate-800 pl-4">
              © {new Date().getFullYear()} Software Architect.
            </div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
