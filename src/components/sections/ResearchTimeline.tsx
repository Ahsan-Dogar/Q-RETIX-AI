"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FlaskConical,
  ClipboardCheck,
  BadgeCheck,
  Factory,
  Truck,
  Check,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Hypothesis generation and target identification using AI literature mining.",
    status: "completed" as const,
    color: "#2C4D78",
    lightColor: "bg-[#2C4D78]/8",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "In-silico and laboratory screening with automated assay workflows.",
    status: "completed" as const,
    color: "#98D7C2",
    lightColor: "bg-[#98D7C2]/10",
  },
  {
    icon: ClipboardCheck,
    title: "Validation",
    description: "Preclinical and clinical validation with real-time monitoring.",
    status: "in-progress" as const,
    color: "#A8DADC",
    lightColor: "bg-[#A8DADC]/10",
  },
  {
    icon: BadgeCheck,
    title: "Approval",
    description: "Regulatory submission support and compliance documentation.",
    status: "pending" as const,
    color: "#5A6B82",
    lightColor: "bg-[#5A6B82]/8",
  },
  {
    icon: Factory,
    title: "Production",
    description: "Manufacturing scale-up with quality control automation.",
    status: "pending" as const,
    color: "#2C4D78",
    lightColor: "bg-[#2C4D78]/8",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Supply chain optimization and post-market surveillance.",
    status: "pending" as const,
    color: "#98D7C2",
    lightColor: "bg-[#98D7C2]/10",
  },
];

export default function ResearchTimeline() {
  return (
    <section id="research" className="relative py-28 bg-[#F5F9FB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#2C4D78] uppercase tracking-[0.12em] mb-4 block">
              Pipeline
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4D78] tracking-tight mb-4">
              Research Timeline
            </h2>
            <p className="text-base text-[#5A6B82] leading-relaxed">
              From discovery to delivery — track every milestone with precision and transparency.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-[44px] left-[calc(8.33%+44px)] right-[calc(8.33%+44px)] h-[2px]">
            <div className="absolute inset-0 bg-[#D0E0E8]/60 rounded-full" />
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "38%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2C4D78] via-[#98D7C2] to-[#A8DADC] rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center lg:px-2">
                  {/* Icon circle */}
                  <div className="relative mb-5">
                    <div
                      className={`w-[88px] h-[88px] rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                        step.status === "completed"
                          ? "bg-[#2C4D78] border-[#2C4D78] shadow-lg shadow-[#2C4D78]/15"
                          : step.status === "in-progress"
                            ? "bg-white border-[#A8DADC] shadow-lg shadow-[#A8DADC]/10"
                            : "bg-white border-[#D0E0E8]/80"
                      }`}
                    >
                      <step.icon
                        className={`w-6 h-6 ${
                          step.status === "completed"
                            ? "text-white"
                            : step.status === "in-progress"
                              ? "text-[#A8DADC]"
                              : "text-[#D0E0E8]"
                        }`}
                      />

                      {step.status === "completed" && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#98D7C2] border-2 border-[#F5F9FB] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-xl border border-[#D0E0E8]/60 p-5 w-full hover:border-[#D0E0E8] hover:shadow-lg hover:shadow-[#2C4D78]/3 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className={`text-[15px] font-semibold ${
                        step.status === "pending" ? "text-[#8A9BB0]" : "text-[#33415C]"
                      }`}>
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-[13px] text-[#5A6B82] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#E6EEF2]">
                      <div className="flex items-center justify-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                        <span className="text-[11px] font-medium uppercase tracking-wider"
                          style={{ color: step.color }}
                        >
                          {step.status === "completed"
                            ? "Completed"
                            : step.status === "in-progress"
                              ? "In Progress"
                              : "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-6 bg-[#D0E0E8]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
