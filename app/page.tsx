'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { ProjectCard } from "../components";
import { projects } from "../lib/projects";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-indigo-300 shadow-lg glow-effect">
            <Image
              src="/images/headshot.jpg"
              alt="Jayden Yu headshot"
              fill
              sizes="(max-width: 768px) 100vw, 192px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
        >
          Hi, I'm Jayden.
        </motion.h1>
        <p className="text-lg text-gray-200">
          Mathematics & Computer Science grad • Software Engineer • Aspiring homesteader
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link 
            href="/about" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all"
          >
            About Me
          </Link>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-6 py-3 bg-transparent border border-indigo-400 text-indigo-300 rounded-md hover:bg-indigo-900 hover:bg-opacity-30 transition-all"
          >
            Résumé
          </a>
        </div>
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-6 text-indigo-200">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/projects" 
            className="text-indigo-300 hover:text-indigo-100 underline"
          >
            See all projects →
          </Link>
        </div>
      </section>
    </section>
  );
}
