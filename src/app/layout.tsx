import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Job Gedions Orungo | Senior Software Architect & Engineer",
    template: "%s | Job Orungo"
  },
  description: "Senior Software Engineer specializing in PHP (Yii2, Laravel), Python (FastAPI, Django), C# (.NET, Blazor), and Cloud Architecture. Building scalable enterprise solutions with 8+ years of experience.",
  keywords: ["Software Architect", "Full Stack Developer", "PHP Specialist", "Yii2 Expert", "Python Developer", "C# Engineer", "Cloud Solutions", "Enterprise Software", "Job Orungo"],
  authors: [{ name: "Job Gedions Orungo" }],
  creator: "Job Orungo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joborungo.dev",
    title: "Job Gedions Orungo | Senior Software Architect",
    description: "Architecting high-performance enterprise systems and scalable web applications.",
    siteName: "Job Orungo Portfolio",
    images: [
      {
        url: "/job.jpeg",
        width: 1200,
        height: 630,
        alt: "Job Gedions Orungo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Gedions Orungo | Senior Software Architect",
    description: "Senior Software Engineer specializing in scalable enterprise solutions.",
    images: ["/job.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Job Gedions Orungo",
              "jobTitle": "Senior Software Architect",
              "url": "https://joborungo.dev",
              "sameAs": [
                "https://linkedin.com",
                "https://github.com",
                "https://twitter.com"
              ],
              "knowsAbout": [
                "Software Architecture",
                "PHP",
                "Python",
                "C#",
                "Cloud Computing",
                "Enterprise Systems"
              ]
            })
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
