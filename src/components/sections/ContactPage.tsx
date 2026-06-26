"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
  FlaskConical,
  Globe,
  MessageCircle,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Globe, label: "LinkedIn", href: "https://www.linkedin.com/company/pharmaa-ai/" },
  { icon: LinkIcon, label: "Instagram", href: "https://www.instagram.com/qretix_ai_official/" },
  { icon: MessageCircle, label: "X", href: "https://x.com/QRETIXAIorg" },
  { icon: Globe, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590886726981" },
  { icon: LinkIcon, label: "Substack", href: "https://substack.com/@qretixai" },
  { icon: MessageCircle, label: "Medium", href: "https://medium.com/@qretix.ai2405" },
  { icon: LinkIcon, label: "Reddit", href: "https://www.reddit.com/user/Q-RETIX_AI_official/" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
  };
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[96px]">
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#98D7C2]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#A8DADC]/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2] border border-[#D0E0E8] text-sm font-medium text-[#2C4D78] mb-6">
                <FlaskConical className="w-4 h-4" />
                Contact
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C4D78] tracking-tight mb-6 leading-[1.05]"
            >
              Let&apos;s talk
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-[#5A6B82] leading-relaxed max-w-2xl"
            >
              Whether you are a researcher exploring AI tools, a pharmaceutical partner seeking collaboration, or a journalist covering the future of drug discovery — we are here.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F9FB]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <motion.div {...fadeUp(0)}>
                <h3 className="text-2xl font-bold text-[#2C4D78] mb-8 tracking-tight">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#33415C]">Email</p>
                      <a href="mailto:hello@qretix.ai" className="text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                        hello@qretix.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#33415C]">Phone</p>
                      <a href="tel:+14155551234" className="text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors">
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#D0E0E8] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#2C4D78]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#33415C]">Office</p>
                      <p className="text-sm text-[#5A6B82]">
                        350 Mission Street, Suite 200
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.15)}>
                <h4 className="text-sm font-semibold text-[#33415C] uppercase tracking-wider mb-4">
                  Follow us
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D0E0E8] text-sm text-[#5A6B82] hover:text-[#2C4D78] hover:border-[#2C4D78] transition-all"
                    >
                      <s.icon className="w-4 h-4" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp(0.1)}
              className="bg-white rounded-2xl border border-[#D0E0E8] p-8 shadow-lg shadow-[#2C4D78]/3"
            >
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#33415C] mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#33415C] mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#33415C] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                      placeholder="jane@institution.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#33415C] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full h-11 rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-4 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all"
                      placeholder="Pharma Corp"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#33415C] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full rounded-xl border border-[#D0E0E8] bg-[#F8FAFB] px-4 py-3 text-sm text-[#33415C] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#2C4D78] focus:ring-2 focus:ring-[#2C4D78]/10 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-brand text-white hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-xl font-semibold h-12 rounded-xl inline-flex items-center justify-center gap-2 text-[15px]"
                  >
                    Send message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#98D7C2]/20 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-[#98D7C2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C4D78] mb-2">Message sent</h3>
                  <p className="text-[#5A6B82]">
                    We will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
