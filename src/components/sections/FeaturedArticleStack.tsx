"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    title: "Q-RETIX.AI: Unlocking the \"Undruggable\" AIM2 Inflammasome",
    description:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    category: "Research",
    readTime: "15 min read",
    date: "July 4, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-1.jpg",
    slug: "unlocking-undruggable-aim2-inflammasome",
    featured: true,
  },
  {
    id: 2,
    title: "Structural AI Discovery Matrix: Beyond Static Crystallography",
    description:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    category: "AI Research",
    readTime: "12 min read",
    date: "June 28, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-2.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 3,
    title: "Allosteric Modulation: The Next Frontier in Immunology",
    description:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    category: "Drug Discovery",
    readTime: "10 min read",
    date: "June 20, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-3.jpg",
    slug: null,
    featured: false,
  },
  {
    id: 4,
    title: "From Charge Trap to Cure: The AIM2 Therapeutic Pipeline",
    description:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    category: "Market Analysis",
    readTime: "8 min read",
    date: "June 15, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-4.jpg",
    slug: null,
    featured: false,
  },
];

function ArticleCard({
  article,
  index,
  totalCards,
}: {
  article: (typeof articles)[0];
  index: number;
  totalCards: number;
}) {
  const href = article.slug ? `/blog/${article.slug}` : "/blog";
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 60, damping: 18 });

  return (
    <div
      className="card-article absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 will-change-transform"
      data-index={index}
      style={{ zIndex: index + 1 }}
    >
      <motion.div className="w-full max-w-[850px] mx-auto relative" style={{ y: springY }}>
        <Link href={href}>
          <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#E6EEF2]/50 shadow-[0_12px_48px_-16px_rgba(44,77,120,0.14)] overflow-hidden relative group hover:shadow-[0_20px_60px_-12px_rgba(44,77,120,0.22)] transition-shadow duration-700 flex flex-col max-h-[90dvh]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#98D7C2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

            <div className="card-overlay absolute inset-0 z-10 rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#F8FAFB]/90 via-[#F8FAFB]/50 to-[#F8FAFB]/95 pointer-events-none opacity-0" />

            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[28px] sm:rounded-t-[32px] bg-[#F8FAFB] shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 850px"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                <div className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-[12px] font-semibold shadow-sm">
                  {article.category}
                </div>
              </div>

              {article.featured && (
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#2C4D78] text-[11px] sm:text-[12px] font-bold text-white shadow-lg">
                    Featured
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-7 lg:p-8 shrink-0">
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <span className="text-[11px] sm:text-[12px] text-[#8A9BB0] font-medium flex items-center gap-1.5">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-[#1a2942] leading-[1.3] mb-1.5 sm:mb-2 group-hover:text-[#2C4D78] transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#5A6B82] leading-[1.65] sm:leading-[1.7] mb-4 sm:mb-5 md:mb-6 line-clamp-2">
                {article.description}
              </p>

              <div className="flex items-center justify-between pt-3.5 sm:pt-4 border-t border-[#E6EEF2]/50">
                <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12px] text-[#8A9BB0]">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-[#D0E0E8]" />
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
                    <span>{article.date}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 group/link">
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#2C4D78] group-hover/link:text-[#1a2942] transition-colors">
                    Read
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E6EEF2] group-hover/link:bg-[#2C4D78] flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C4D78] group-hover/link:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function FeaturedArticleStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !cardsContainer) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      cardsContainer.querySelectorAll(".card-article")
    );
    const overlays = cardsContainer.querySelectorAll(".card-overlay");

    // ---- Set initial state for all cards ----
    gsap.set(cards, {
      y: (i) => 140 + i * 30,
      scale: 0.88,
      opacity: 0,
      rotateX: 6,
      transformOrigin: "center top",
    });

    // ---- GSAP ScrollTrigger: Pinned Card Stack ----
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1.2,
        snap: {
          snapTo: (progress) => {
            const step = 1 / (cards.length - 1 || 1);
            return Math.round(progress / step) * step;
          },
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut",
        },
        invalidateOnRefresh: true,
      },
    });

    // ---- Animate each card in sequence ----
    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;
      const start = i * 0.25;
      const settle = start + 0.15;
      const exitStart = settle + 0.08;
      const exitEnd = start + 0.25;

      // Card flies up from below
      masterTl.to(
        card,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        start
      );

      // If not the last card, dim and scale down as the next card enters above it
      if (!isLast && overlays[i]) {
        masterTl.to(
          overlays[i],
          {
            opacity: 0.78,
            duration: 0.1,
            ease: "power2.in",
          },
          exitStart
        );

        masterTl.to(
          card,
          {
            scale: 0.95,
            y: -20,
            duration: 0.1,
            ease: "power2.in",
          },
          exitStart
        );
      }
    });

    // ---- CTA fades in at the very end ----
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });
      masterTl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.88
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="relative bg-[#F8FAFB] min-h-[100dvh]"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C4D78 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Section Header */}
      <div
        ref={headerRef}
        className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-7 bg-gradient-to-b from-[#2C4D78] to-[#98D7C2] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#2C4D78] uppercase tracking-[0.15em]">
              Blog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a2942] tracking-tight leading-[1.15] mb-4">
            Featured Top
            <br className="hidden sm:block" />{" "}
            Article
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-[#5A6B82] leading-[1.7]">
            Stay updated with breakthroughs in AI-powered healthcare, structural drug discovery, and immunology research.
          </p>
        </motion.div>
      </div>

      {/* Pinned Card Stack Area */}
      <div
        ref={cardsContainerRef}
        className="relative h-[100dvh] flex items-center justify-center z-10 overflow-hidden p-4 sm:p-6 lg:p-8"
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            totalCards={articles.length}
          />
        ))}
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center">
          <Link href="/blog">
            <motion.div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[16px] bg-gradient-to-r from-[#2C4D78] to-[#3D5F8A] text-white font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#2C4D78]/20 hover:shadow-xl hover:shadow-[#2C4D78]/30 transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative">Read All Articles</span>
              <motion.div
                className="relative w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
