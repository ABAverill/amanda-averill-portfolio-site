"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const scrollToExperience = () => {
  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 hero-dots">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#A0A0B2] mb-6"
        >
          Executive Recruiter · Life Sciences · Packaging
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-cormorant)] text-7xl md:text-9xl font-light tracking-[0.06em] text-[#1A1A2E] mb-6"
        >
          Amanda Averill
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#5C5C70] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          &ldquo;Connecting exceptional leaders with the organizations shaping
          the future of health and industry.&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToExperience}
            className="px-8 py-3.5 bg-[#1B4F72] text-white font-medium rounded-md hover:bg-[#1B4F72]/90 transition-colors"
          >
            View My Work
          </button>
          <a
            href="mailto:amanda@amanda-averill.com"
            className="px-8 py-3.5 border border-[#E5DFD6] text-[#1A1A2E] font-medium rounded-md hover:border-[#1B4F72] hover:text-[#1B4F72] transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          type="button"
          aria-label="Scroll down"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 text-[#A0A0B2] hover:text-[#1B4F72] transition-colors"
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
}
