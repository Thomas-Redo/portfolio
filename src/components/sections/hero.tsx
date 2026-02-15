"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-neutral-500">
            Software Engineer
          </span>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-neutral-100 md:text-7xl">
            Building software{" "}
            <span className="text-neutral-500">that solves real problems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Full-stack engineer with a background in computer science and years
            of hands-on experience shipping products — from SaaS platforms and
            ecommerce systems to AI-powered tools and data visualization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-lg bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-white"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-neutral-200"
          >
            About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
