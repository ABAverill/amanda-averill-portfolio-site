"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { target: 5, suffix: "+", label: "Years in Life Sciences" },
  { target: 50, suffix: "+", label: "Consultants Placed" },
  { target: 6.5, suffix: "M+", label: "In Placed Salaries", prefix: "$" },
];

function StatCounter({
  target,
  suffix,
  prefix,
  label,
  active,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);
  const isDecimal = target % 1 !== 0;
  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);
  const display = isDecimal ? value.toFixed(1) : Math.round(value);
  return (
    <div className="bg-white border border-[#E5DFD6] rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-[#1B4F72]/30 transition-all">
      <p className="text-2xl md:text-3xl font-medium text-[#1B4F72] mb-1 font-[family-name:var(--font-cormorant)] tabular-nums">
        {prefix}{display}{suffix}
      </p>
      <p className="text-xs text-[#A0A0B2] leading-tight">{label}</p>
    </div>
  );
}

const highlights = [
  {
    icon: Users,
    title: "Relationship-Driven",
    description:
      "Known for building lasting relationships on both sides of the search — achieving the highest consultant retention rate on the team and repeat client partnerships.",
  },
  {
    icon: Briefcase,
    title: "Cross-Industry Depth",
    description:
      "Dual expertise in packaging & manufacturing and medical devices & life sciences — a rare combination that opens doors across both worlds.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Recruiter of the Year (2022), recognized for client engagement, and backed by the 30+ year network and reputation of Cover + Associates.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                I&apos;m a talent acquisition professional with a track record across packaging, medical devices, and life sciences. Currently an Executive Recruiter at <span className="text-[#1A1A2E] font-medium">Cover + Associates</span>, I place senior-level talent across packaging, manufacturing, logistics, CPG, and OEM sectors.
              </p>
              <p>
                Before moving into executive search, I spent several years placing regulatory, labeling, packaging, and quality professionals in medical device and pharmaceutical organizations — experience that sharpens every search I run today.
              </p>
              <p>
                My approach is consultative and relationship-first: I invest deeply in understanding what drives each candidate and what each client truly needs, creating placements that last.
              </p>
            </motion.div>
          </div>

          <motion.div variants={item} className="space-y-6">
            {/* Animated stat counters */}
            <div ref={ref} className="grid grid-cols-3 gap-4">
              {stats.map(({ target, suffix, label, prefix }) => (
                <StatCounter
                  key={label}
                  target={target}
                  suffix={suffix}
                  prefix={prefix}
                  label={label}
                  active={isInView}
                />
              ))}
            </div>

            <div className="space-y-3">
              {highlights.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-[#E5DFD6] rounded-lg p-4 shadow-sm hover:shadow-md hover:border-[#1B4F72]/30 transition-all group"
                >
                  <div className="p-2 rounded-md bg-[#D6E8F5] text-[#1B4F72] shrink-0 group-hover:bg-[#1B4F72] group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A2E] mb-0.5">{title}</p>
                    <p className="text-xs text-[#5C5C70] leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
