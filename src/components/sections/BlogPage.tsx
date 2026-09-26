"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allPosts } from "@/lib/blogData";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const activeCategories = ["All", ...new Set(allPosts.map((p) => p.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  useEffect(() => {
    const idx = activeCategories.findIndex((c) => c === selectedCategory);
    const el = tabsRef.current[idx];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <section className="pt-36 pb-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] sm:text-[44px] font-bold text-[#111827] text-center mb-8">
            Explore our Blogs
          </h1>
          <p className="text-center text-[#6B7280] mb-16 max-w-2xl mx-auto">
            Discover the latest insights in AI-powered drug discovery, structural biology, and precision medicine.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-10 mb-24 relative overflow-x-auto pb-2">
            {activeCategories.map((cat, i) => (
              <button
                key={cat}
                ref={(el) => { tabsRef.current[i] = el; }}
                onClick={() => setSelectedCategory(cat)}
                onMouseEnter={() => setHoveredTab(cat)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative text-lg font-medium transition-colors duration-200 pb-1 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "text-[#22C55E]"
                    : hoveredTab === cat
                      ? "text-black"
                      : "text-[#6B7280]"
                }`}
              >
                {cat}
              </button>
            ))}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-[#22C55E] rounded-full"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </div>

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
            >
              {visiblePosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex">
                  <motion.article
                    layout
                    className="flex flex-col w-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[24px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-all duration-300 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm font-bold text-black">
                        {post.date}
                      </span>
                      <span className="text-sm text-[#6B7280]">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#111827] mt-4 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#2563EB]">
                      {post.title}
                    </h3>

                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-center w-full h-[50px] rounded-full bg-[#111827] text-white font-bold text-sm shadow-sm transition-all duration-200 group-hover:bg-[#262626]">
                        <span>Read Article</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-lg">No articles found.</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#D0E0E8] text-[#33415C] font-semibold text-sm hover:bg-[#F8FAFB] hover:border-[#2C4D78] transition-all duration-200"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
