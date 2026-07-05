"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#f0f6ff] pt-[100px] pb-24">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 197, 253, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 197, 253, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-blue-200/20 rounded-lg" />
        <div className="absolute top-[25%] right-[12%] w-12 h-12 bg-blue-200/15 rounded-lg" />
        <div className="absolute bottom-[20%] left-[18%] w-10 h-10 bg-blue-200/20 rounded-md" />
        <div className="absolute top-[10%] right-[30%] w-14 h-14 bg-blue-200/10 rounded-lg" />
        <div className="absolute bottom-[28%] right-[10%] w-8 h-8 bg-blue-200/15 rounded" />
        <div className="absolute top-[40%] left-[5%] w-6 h-6 bg-blue-200/10 rounded" />
      </div>

      {/* Left Glass Cube Image */}
      <div className="absolute left-[-80px] sm:left-[-60px] md:left-[-20px] lg:left-[20px] xl:left-[60px] top-1/2 -translate-y-1/2 hidden md:block z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-[220px] lg:w-[260px] xl:w-[300px] h-[480px] lg:h-[550px] xl:h-[620px]"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transform: "rotateY(22deg) translateX(-20px)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/hero-cube-left.png"
              alt="3D Glass Cube Left"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Right Glass Cube Image */}
      <div className="absolute right-[-80px] sm:right-[-60px] md:right-[-20px] lg:right-[20px] xl:right-[60px] top-1/2 -translate-y-1/2 hidden md:block z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-[220px] lg:w-[260px] xl:w-[300px] h-[480px] lg:h-[550px] xl:h-[620px]"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transform: "rotateY(-22deg) translateX(20px)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/hero-cube-right.png"
              alt="3D Glass Cube Right"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* Top announcement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[13px] sm:text-sm text-gray-500 mb-10 sm:mb-12"
        >
          We are accepting early waitlist now,{" "}
          <Link href="#waitlist" className="text-[#2563EB] hover:underline font-medium">
            join Q-RETIX AI
          </Link>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-5"
          style={{ letterSpacing: "-0.03em" }}
        >
          Q-RETIX AI
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-normal mb-3 sm:mb-4"
        >
          from module to medicine in seconds
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 mb-14 sm:mb-16"
        >
          Navigating your life along side you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#3b82f6] text-white pl-6 pr-2 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Schedule Call
            <span className="flex items-center justify-center w-8 h-8 bg-white/25 rounded-lg group-hover:bg-white/35 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <button className="inline-flex items-center gap-3 bg-[#f8f9fc] text-gray-600 px-6 py-2.5 rounded-full font-medium text-sm shadow-md border border-gray-200/80 hover:shadow-lg hover:bg-white transition-all hover:scale-105"
          >
            <span className="flex items-center justify-center w-8 h-8 bg-gray-200/60 rounded-full">
              <Phone className="w-4 h-4 text-gray-500" />
            </span>
            Book A Call
          </button>
        </motion.div>

        {/* Blue glow under buttons */}
        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
      </div>
    </section>
  );
}
