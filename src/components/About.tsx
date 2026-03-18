"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Placements Made" },
  { value: "2", label: "Industries" },
];

const highlights = [
  {
    icon: Users,
    title: "Relationship-Driven",
    description: "Building trust with both clients and candidates through transparent, consultative partnership.",
  },
  {
    icon: Briefcase,
    title: "Industry Depth",
    description: "Deep networks spanning pharma, biotech, medical devices, and sustainable packaging sectors.",
  },
  {
    icon: Award,
    title: "Executive Focus",
    description: "Specialized in director, VP, and C-suite placements that drive organizational transformation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-[#E5DFD6] scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-start"
        >
          <div>
            <motion.h2
              variants={item}
              className="text-4xl font-medium text-[#1A1A2E] mb-6 pb-2 border-b-2 border-[#1B4F72] w-fit font-[family-name:var(--font-cormorant)]"
            >
              About
            </motion.h2>
            <motion.div variants={item} className="text-[#5C5C70] leading-relaxed space-y-4">
              <p>
                With over 15 years connecting exceptional talent to transformative
                organizations, I specialize in executive search across the life
                sciences and packaging industries — two sectors where precision,
                expertise, and trust are non-negotiable.
              </p>
              <p>
                My approach is consultative and relationship-first. I invest deeply
                in understanding each client&apos;s culture, strategy, and leadership
                needs — and each candidate&apos;s career goals, values, and potential.
                The result: placements that last.
              </p>
            </motion.div>
          </div>

          <motion.div variants={item} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white border border-[#E5DFD6] rounded-lg p-4 text-center shadow-sm"
                >
                  <p className="text-2xl md:text-3xl font-medium text-[#1B4F72] mb-1 font-[family-name:var(--font-cormorant)]">
                    {value}
                  </p>
                  <p className="text-xs text-[#A0A0B2]">{label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-white border border-[#E5DFD6] rounded-lg p-4 shadow-sm"
                >
                  <div className="p-2 rounded-md bg-[#D6E8F5] text-[#1B4F72] shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A2E] mb-0.5">{title}</p>
                    <p className="text-xs text-[#5C5C70] leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
