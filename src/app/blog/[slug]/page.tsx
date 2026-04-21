'use strict';

import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Job Orungo Insights`,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <Link 
          href="/#blog" 
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group w-fit"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap gap-4 items-center text-sm font-mono text-slate-500 uppercase mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-400 text-xl leading-relaxed mb-12 italic border-l-4 border-blue-600 pl-6 py-2">
            {post.excerpt}
          </div>
          
          <div className="space-y-8 text-slate-300 text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-900">
          <div className="glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Want to discuss this further?</h4>
              <p className="text-slate-400">Reach out for collaborations or technical consultations.</p>
            </div>
            <Link 
              href="/#contact"
              className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
