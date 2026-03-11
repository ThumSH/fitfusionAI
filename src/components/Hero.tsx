// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

// Framer Motion variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each element animating in
      delayChildren: 0.3,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <Sparkles className="w-4 h-4 text-[#ccff00]" />
            <span className="text-sm font-medium text-zinc-300">Powered by Gemini AI</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            FORGE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#88aa00]">
              ULTIMATE
            </span> PHYSIQUE
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            Experience the next generation of fitness. Upload your meals for instant AI calorie analysis and generate optimal workout plans tailored to your goals.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-black font-bold bg-[#ccff00] rounded-full hover:bg-[#b3e600] transition-all hover:scale-105 active:scale-95">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center px-8 py-4 text-white font-bold bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
              View Gym Culture
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Optimized Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#ccff00]/5"
        >
          {/* Note: In a real app, replace this src with a cool gym image from Unsplash */}
          <Image
            src="/hero.png"
            alt="Intense Gym Workout"
            fill
            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            priority // IMPORTANT: Prioritizes loading this image for better LCP (Largest Contentful Paint)
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay gradient to blend image with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}