"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const blobs = [
  {
    className: "top-[10%] left-[5%] w-[500px] h-[500px]",
    color: "bg-[#d6e8f5]",
    delay: "",
  },
  {
    className: "top-[50%] right-[0%] w-[450px] h-[450px]",
    color: "bg-[#c8e6da]",
    delay: "animation-delay-3000",
  },
  {
    className: "bottom-[5%] left-[30%] w-[400px] h-[400px]",
    color: "bg-[#e8eaf6]",
    delay: "animation-delay-6000",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Animated gradient blobs */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none animate-blob ${blob.delay} ${blob.className} ${blob.color}`}
        />
      ))}

      {/* Dot grid overlay */}
      <div className="absolute inset-0 hero-dots opacity-50 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20"
      >
        {/* Headshot */}
        <motion.div variants={fadeUp} className="shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#1B4F72]/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-[#1B4F72]/10 scale-125" />
            <Image
              src="/logos/Amanda_Headshot.jpg"
              alt="Amanda Averill"
              fill
              className="rounded-full object-cover shadow-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#A0A0B2] mb-4"
          >
            Talent Acquisition · Life Sciences · Medical Devices
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light tracking-[0.04em] text-[#1A1A2E] mb-5"
          >
            Amanda Averill
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#5C5C70] max-w-xl mb-10 leading-relaxed"
          >
            Building high-performing teams in the life sciences — connecting exceptional talent with the organizations shaping the future of health.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <button
              onClick={() =>
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 bg-[#1B4F72] text-white font-medium rounded-md hover:bg-[#1B4F72]/90 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
            </button>
            <a
              href="mailto:Amanda.ma.averill@gmail.com"
              className="px-8 py-3.5 border border-[#E5DFD6] text-[#1A1A2E] font-medium rounded-md hover:border-[#1B4F72] hover:text-[#1B4F72] transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
