"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  FileText,
  Mail,
  Bell,
  BookOpen,
} from "lucide-react";

const benefits = [
  { icon: Zap, text: "Early Access" },
  { icon: FileText, text: "Exclusive Research Insights" },
  { icon: Bell, text: "Priority Product Updates" },
  { icon: Users, text: "Community Access" },
  { icon: Sparkles, text: "Beta Invitations" },
  { icon: BookOpen, text: "Early Blog Releases" },
  { icon: Mail, text: "Industry Reports" },
];

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#98D7C2]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#A8DADC]/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
              <Sparkles className="w-4 h-4" />
              Limited Early Access
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] mb-4 tracking-tight">
              Join The Q-RETIX AI Waitlist
            </h2>
            <p className="text-lg text-[#5A6B82]">
              Become one of the first innovators, researchers, and healthcare
              professionals to experience the future of pharmaceutical
              intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl border border-[#D0E0E8] px-4 py-3 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E6EEF2] flex items-center justify-center shrink-0">
                  <benefit.icon className="w-4 h-4 text-[#2C4D78]" />
                </div>
                <span className="text-sm font-medium text-[#33415C]">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#D0E0E8] p-8 shadow-xl shadow-[#2C4D78]/5"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#33415C] mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="you@institution.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-[#D0E0E8] focus:border-[#2C4D78] focus:ring-[#2C4D78]/20 bg-[#F8FAFB]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#33415C] mb-2">
                    Full Name (Optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 border-[#D0E0E8] focus:border-[#2C4D78] focus:ring-[#2C4D78]/20 bg-[#F8FAFB]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-brand text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl font-semibold px-8 py-6 text-base rounded-xl flex-1"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="border-[#D0E0E8] text-[#33415C] hover:bg-[#E6EEF2] font-semibold px-8 py-6 text-base rounded-xl transition-all hover:scale-105 flex-1"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>

              <p className="text-xs text-[#8A9BB0] mt-4 text-center">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-[#98D7C2]/30 p-8 text-center shadow-xl shadow-[#98D7C2]/10"
            >
              <div className="w-16 h-16 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#98D7C2]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C4D78] mb-2">
                You're on the list!
              </h3>
              <p className="text-[#5A6B82]">
                We'll notify you as soon as early access is available. Watch your
                inbox for updates.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
