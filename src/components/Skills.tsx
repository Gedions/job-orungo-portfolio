'use strict';

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  { 
    title: "Core Languages", 
    icon: <Code2 className="text-blue-500" />, 
    items: ["PHP", "Python", "Java", "C#", "TypeScript", "SQL"],
    desc: "Robust experience in statically typed and scripting languages."
  },
  { 
    title: "Frameworks", 
    icon: <Layers className="text-purple-500" />, 
    items: ["Yii2", "ASP.NET Core", "Blazor", "Django", "FastAPI", "React", "Next.js"],
    desc: "Building scalable web apps with enterprise-grade frameworks."
  },
  { 
    title: "Databases", 
    icon: <Database className="text-emerald-500" />, 
    items: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB", "Redis"],
    desc: "Optimizing data architecture for performance and integrity."
  },
  { 
    title: "DevOps & Cloud", 
    icon: <Cloud className="text-sky-500" />, 
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux Admin"],
    desc: "Orchestrating resilient cloud-native infrastructure."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4">TECHNICAL ARSENAL</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              A comprehensive stack <br /> 
              for <span className="text-slate-500 italic font-serif text-3xl md:text-4xl">modern engineering.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            I don't just write code; I design systems that endure, using the right tool for the job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[32px] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:bg-blue-600/10 transition-colors">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{category.title}</h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {category.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-950 text-slate-300 text-[11px] font-bold rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
