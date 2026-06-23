"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Globe,
  MessageCircle,
  Link as LinkIcon,
  Mail,
} from "lucide-react";


const footerLinks = {
  Platform: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#changelog" },
  ],
  Solutions: [
    { label: "Drug Discovery", href: "#solutions" },
    { label: "Clinical Trials", href: "#solutions" },
    { label: "Research Hub", href: "#research" },
    { label: "Compliance", href: "#compliance" },
  ],
  "Research Hub": [
    { label: "Publications", href: "#publications" },
    { label: "Datasets", href: "#datasets" },
    { label: "API Docs", href: "#api" },
    { label: "Whitepapers", href: "#whitepapers" },
  ],
  Blog: [
    { label: "Research", href: "/blog" },
    { label: "Drug Discovery", href: "/blog" },
    { label: "AI Insights", href: "/blog" },
    { label: "Industry", href: "/blog" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Community", href: "#community" },
    { label: "Support", href: "#support" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#E6EEF2]/50 border-t border-[#D0E0E8]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shadow-lg">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#2C4D78]">
                Q-RETIX AI
              </span>
            </Link>
            <p className="text-sm text-[#8A9BB0] mb-6 max-w-xs">
              AI-Powered Pharmaceutical Intelligence for Research, Drug Discovery, and Clinical Analysis.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: "#", label: "Website" },
                { icon: MessageCircle, href: "#", label: "Community" },
                { icon: LinkIcon, href: "#", label: "Link" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white border border-[#D0E0E8] flex items-center justify-center text-[#5A6B82] hover:text-[#2C4D78] hover:border-[#2C4D78] hover:shadow-md transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[#2C4D78] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5A6B82] hover:text-[#2C4D78] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#D0E0E8] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8A9BB0]">
            © {new Date().getFullYear()} Q-RETIX AI. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-sm text-[#8A9BB0] hover:text-[#2C4D78]">
              Privacy
            </Link>
            <Link href="#terms" className="text-sm text-[#8A9BB0] hover:text-[#2C4D78]">
              Terms
            </Link>
            <Link href="#cookies" className="text-sm text-[#8A9BB0] hover:text-[#2C4D78]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
