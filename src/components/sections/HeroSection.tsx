"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);
  const leftRotateX = useTransform(rotateX, (v) => v);
  const leftRotateY = useTransform(rotateY, (v) => v);
  const rightRotateX = useTransform(rotateX, (v) => -v);
  const rightRotateY = useTransform(rotateY, (v) => -v);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-white pt-[72px]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#98D7C2]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A8DADC]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2C4D78]/5 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <GlassPanel side="left" rotateX={leftRotateX} rotateY={leftRotateY} />

          <div className="flex flex-col items-center text-center py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
                We are accepting early waitlist now, join Q-RETIX AI
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C4D78] mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Q-RETIX AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-[#5A6B82] max-w-2xl mb-10 leading-relaxed"
            >
              AI-Powered Pharmaceutical Intelligence for Research, Drug
              Discovery, Clinical Analysis, and Scientific Innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2C4D78]/20 font-semibold px-8 py-3 text-base rounded-xl inline-flex items-center gap-2 h-12"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="#platform"
                className="border border-[#D0E0E8] text-[#33415C] hover:bg-[#E6EEF2] hover:border-[#2C4D78] font-semibold px-8 py-3 text-base rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2 h-12 bg-white"
              >
                <Play className="w-5 h-5 fill-[#2C4D78] text-[#2C4D78]" />
                Explore Platform
              </Link>
            </motion.div>
          </div>

          <GlassPanel side="right" rotateX={rightRotateX} rotateY={rightRotateY} />
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

function GlassPanel({
  side,
  rotateX,
  rotateY,
}: {
  side: "left" | "right";
  rotateX: any;
  rotateY: any;
}) {
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className="hidden lg:flex relative h-[500px] items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] h-[420px]"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2C4D78]/10 via-[#A8DADC]/10 to-[#98D7C2]/10 border border-[#D0E0E8]/60 backdrop-blur-xl shadow-2xl shadow-[#2C4D78]/10"
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[200px] h-[200px]">
              <DNAAnimation />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[220px]">
              <div className="glass rounded-xl p-4 border border-[#D0E0E8]/60">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#98D7C2] animate-pulse" />
                  <span className="text-xs font-medium text-[#2C4D78]">
                    Live Analysis
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-[#E6EEF2] rounded-full w-3/4" />
                  <div className="h-2 bg-[#E6EEF2] rounded-full w-1/2" />
                  <div className="h-2 bg-[#E6EEF2] rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-white/80 border border-[#D0E0E8] backdrop-blur-sm flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 rounded-full border-2 border-[#98D7C2] border-t-transparent animate-spin" />
        </div>

        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-[#E6EEF2]/80 border border-[#D0E0E8] backdrop-blur-sm flex items-center justify-center shadow-lg">
          <div className="text-2xl font-bold text-[#2C4D78]">98%</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DNAAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C4D78" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#98D7C2" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="dnaGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8DADC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2C4D78" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {[...Array(8)].map((_, i) => (
        <g key={i}>
          <circle cx={100 + Math.sin(i * 0.8) * 30} cy={30 + i * 20} r="6" fill="url(#dnaGrad1)">
            <animate attributeName="cy" values={`${30 + i * 20};${25 + i * 20};${30 + i * 20}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            <animate attributeName="cx" values={`${100 + Math.sin(i * 0.8) * 30};${100 + Math.sin(i * 0.8 + 1) * 30};${100 + Math.sin(i * 0.8) * 30}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </circle>
          <circle cx={100 - Math.sin(i * 0.8) * 30} cy={30 + i * 20} r="6" fill="url(#dnaGrad2)">
            <animate attributeName="cy" values={`${30 + i * 20};${35 + i * 20};${30 + i * 20}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            <animate attributeName="cx" values={`${100 - Math.sin(i * 0.8) * 30};${100 - Math.sin(i * 0.8 + 1) * 30};${100 - Math.sin(i * 0.8) * 30}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </circle>
          <line
            x1={100 + Math.sin(i * 0.8) * 30}
            y1={30 + i * 20}
            x2={100 - Math.sin(i * 0.8) * 30}
            y2={30 + i * 20}
            stroke="#D0E0E8"
            strokeWidth="2"
          >
            <animate attributeName="y1" values={`${30 + i * 20};${25 + i * 20};${30 + i * 20}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            <animate attributeName="y2" values={`${30 + i * 20};${35 + i * 20};${30 + i * 20}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            <animate attributeName="x1" values={`${100 + Math.sin(i * 0.8) * 30};${100 + Math.sin(i * 0.8 + 1) * 30};${100 + Math.sin(i * 0.8) * 30}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            <animate attributeName="x2" values={`${100 - Math.sin(i * 0.8) * 30};${100 - Math.sin(i * 0.8 + 1) * 30};${100 - Math.sin(i * 0.8) * 30}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </line>
        </g>
      ))}
    </svg>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#98D7C2]/30"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -100, 100],
            x: [null, 50, -50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
