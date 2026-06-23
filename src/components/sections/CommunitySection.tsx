"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2C4D78]/5 rounded-full blur-[200px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
              <Users className="w-4 h-4" />
              Community
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
              Join The Q-RETIX AI Community
            </h2>
            <p className="text-lg text-[#5A6B82] mb-10 leading-relaxed">
              Connect with pharmaceutical researchers, scientists, healthcare
              professionals, and AI innovators shaping the future of drug discovery
              and clinical research.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Users,
                  title: "Researchers",
                  count: "2,500+",
                  desc: "Active researchers sharing insights",
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  count: "40+",
                  desc: "Countries represented worldwide",
                },
                {
                  icon: MessageCircle,
                  title: "Discussions",
                  count: "Daily",
                  desc: "Active conversations and support",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#E6EEF2]/50 rounded-2xl border border-[#D0E0E8] p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-5 h-5 text-[#2C4D78]" />
                  </div>
                  <div className="text-2xl font-bold text-[#2C4D78] mb-1">
                    {stat.count}
                  </div>
                  <div className="text-sm font-semibold text-[#33415C] mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-[#5A6B82]">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="#waitlist"
              className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl font-semibold px-8 py-3 text-base rounded-xl inline-flex items-center gap-2 h-12"
            >
              Join Community
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-sm text-[#8A9BB0] mt-4">
              Currently redirecting to waitlist. Discord, Slack, and Circle
              coming soon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
