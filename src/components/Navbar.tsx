"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  FlaskConical,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Research Hub", href: "#research" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#D0E0E8] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#2C4D78] tracking-tight">
                Q-RETIX AI
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-[#5A6B82] hover:text-[#2C4D78] transition-colors rounded-lg hover:bg-[#E6EEF2]/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#waitlist"
                className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#2C4D78]/20 font-semibold px-6 inline-flex items-center gap-2 h-9 rounded-lg text-sm"
              >
                Book Demo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#E6EEF2]/50 text-[#33415C]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#D0E0E8] lg:hidden overflow-hidden"
          >
            <div className="mx-auto max-w-[1400px] px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[#5A6B82] hover:text-[#2C4D78] hover:bg-[#E6EEF2]/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="gradient-brand text-white mt-2 font-semibold inline-flex items-center justify-center gap-2 h-9 rounded-lg text-sm px-4 py-2"
              >
                Book Demo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
