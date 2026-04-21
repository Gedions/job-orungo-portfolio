'use strict';

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Globe, MessageCircle, Share2, Camera } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: <Share2 size={18} />, href: 'https://www.linkedin.com/in/job-gedions-3035b21bb/', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: <Globe size={18} />, href: 'https://github.com/Gedions', label: 'GitHub', color: 'hover:text-white' },
  { icon: <MessageCircle size={18} />, href: 'https://wa.me/254796893435', label: 'WhatsApp', color: 'hover:text-emerald-500' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-2xl",
        isScrolled ? "glass shadow-2xl" : "bg-transparent"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <img 
              src="/darkthemes.png" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">
            Job<span className="text-blue-500">Orungo</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors animated-underline"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-800 mx-2" />

          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className={cn("text-slate-400 transition-all hover:scale-110", social.color)}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 rounded-2xl overflow-hidden border border-slate-800"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-300 hover:text-white block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className="h-[1px] w-full bg-slate-800 my-2" />
              <div className="flex gap-6 justify-center">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} className={cn("text-slate-400", social.color)}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
