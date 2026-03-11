"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "AI Meal Tracker", path: "/meals" },
  { name: "Workout Generator", path: "/workouts" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gym-dark/80 backdrop-blur-md border-b border-gym-card"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white group">
          <Dumbbell className="w-8 h-8 text-gym-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-widest uppercase">
            Fit<span className="text-gym-accent">AI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-sm font-medium text-gym-muted hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <button className="bg-gym-accent hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors duration-300">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}