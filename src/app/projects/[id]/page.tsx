'use strict';

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Terminal, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Job Orungo Portfolio`,
      description: project.desc,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.desc,
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group w-fit"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">
              <Terminal size={16} />
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-slate-900 text-slate-400 text-xs font-bold rounded-full border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} className="glass p-4 rounded-2xl hover:bg-white/10 transition-colors">
                <Globe size={24} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="glass p-4 rounded-2xl hover:bg-white/10 transition-colors">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[32px] border border-white/5 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {project.longDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              The Challenges
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Key Results
            </h3>
            <ul className="space-y-4">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
