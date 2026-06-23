"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="relative py-20 bg-[#E6EEF2]/30">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4D78] mb-4 tracking-tight">
              Stay Ahead with Research Insights
            </h2>
            <p className="text-[#5A6B82] mb-6 leading-relaxed">
              Subscribe to the Q-RETIX AI newsletter and receive curated research
              articles, AI insights, industry reports, clinical research updates,
              drug discovery content, and scientific breakthrough news directly
              to your inbox.
            </p>
            <ul className="space-y-3">
              {[
                "Research Articles & Whitepapers",
                "AI & Machine Learning Insights",
                "Industry & Regulatory Reports",
                "Clinical Research Updates",
                "Drug Discovery Breakthroughs",
                "Exclusive Product Announcements",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#98D7C2]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#98D7C2]" />
                  </div>
                  <span className="text-sm text-[#5A6B82]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#D0E0E8] p-8 shadow-lg shadow-[#2C4D78]/5"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E6EEF2] flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-[#2C4D78]" />
            </div>

            <h3 className="text-xl font-semibold text-[#33415C] mb-2">
              Newsletter Signup
            </h3>
            <p className="text-sm text-[#5A6B82] mb-6">
              Join thousands of researchers and professionals receiving weekly
              insights.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-[#D0E0E8] focus:border-[#2C4D78] focus:ring-[#2C4D78]/20 bg-[#F8FAFB]"
                />
                <Button
                  type="submit"
                  className="w-full gradient-brand text-white hover:opacity-90 transition-all hover:scale-[1.02] font-semibold py-6 rounded-xl"
                >
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-[#98D7C2]" />
                </div>
                <p className="text-[#33415C] font-medium">
                  Successfully subscribed!
                </p>
                <p className="text-sm text-[#5A6B82] mt-1">
                  Check your inbox for a confirmation email.
                </p>
              </motion.div>
            )}

            <p className="text-xs text-[#8A9BB0] mt-4 text-center">
              Double opt-in required. No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
