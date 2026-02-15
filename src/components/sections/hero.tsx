"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="animate-float absolute left-1/2 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative w-full px-6 pt-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5">
          {/* Left — text content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-sm font-medium text-indigo-300">
                  Full-Stack Engineer at Redo
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                Thomas Hart
              </h1>
              <p className="mt-2 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                <span className="animate-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Software Engineer.
                </span>
              </p>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
                CS grad from BYU. Co-founded a software company. Built ecommerce
                platforms processing $3M+ in transactions. Now I build products
                that ship — from SaaS tools to AI systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <Link
                href="/projects"
                className="group relative overflow-hidden rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                View Projects
              </Link>
              <Link
                href="/experience"
                className="rounded-lg border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
              >
                Experience
              </Link>
              <Link
                href="https://github.com/Thomas-Redo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3.5 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
              >
                GitHub
              </Link>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:col-span-2 lg:block"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900 shadow-[0_0_60px_rgba(99,102,241,0.08)]">
              <Image
                src="/images/thomas-hart.jpg"
                alt="Thomas Hart"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Stats bar — full width below the grid */}
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 flex flex-wrap gap-12 border-t border-neutral-800/50 pt-8"
          >
            {[
              { value: "50M+", label: "End Users Reached" },
              { value: "12+", label: "Production Sites" },
              { value: "6+", label: "Years Experience" },
              { value: "BYU", label: "CS Degree" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
