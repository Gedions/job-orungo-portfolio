'use strict';

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, Share2, Globe, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

const socials = [
  { icon: <Share2 size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/job-gedions-3035b21bb/", color: "hover:bg-blue-600" },
  { icon: <Globe size={24} />, label: "GitHub", href: "https://github.com/Gedions", color: "hover:bg-slate-700" },
  { icon: <MessageCircle size={24} />, label: "WhatsApp", href: "https://wa.me/254796893435", color: "hover:bg-emerald-600" },
  { icon: <Mail size={24} />, label: "Email", href: "mailto:jobgedions@gmail.com", color: "hover:bg-red-600" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="glass p-12 md:p-24 rounded-[48px] border border-white/5 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-6 uppercase">LET'S CONNECT</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                Ready to architect your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">next big vision?</span>
              </h3>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                I'm currently available for complex software engineering roles and high-impact consultations.
              </p>

              <div className="flex flex-wrap gap-4">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white transition-all shadow-xl",
                      social.color
                    )}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-600 rounded-3xl p-10 shadow-2xl shadow-blue-500/20 transform rotate-2">
                <h4 className="text-2xl font-bold text-white mb-4">Start a conversation</h4>
                <p className="text-blue-100 mb-10 text-lg">
                  Direct inquiries often lead to the best collaborations. Reach out today.
                </p>
                <motion.a
                  href="mailto:jobgedions@gmail.com"
                  whileHover={{ gap: '1.5rem' }}
                  className="flex items-center gap-4 text-white font-black text-xl border-b-2 border-white/30 pb-4 w-fit"
                >
                  jobgedions@gmail.com <ArrowRight size={24} />
                </motion.a>
              </div>

              {/* Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
