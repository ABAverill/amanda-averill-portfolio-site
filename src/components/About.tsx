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
      "Building trust with consultants and clients through transparent, consultative partnership — achieving the highest retention rate on the team.",
  },
  {
    icon: Briefcase,
    title: "Industry Depth",
    description:
      "Deep networks spanning pharmaceutical, medical devices, regulatory affairs, labeling, packaging, and quality functions.",
  },
  {
    icon: Award,
    title: "Results-Oriented",
    description:
      "Recruiter of the Year (2022) and consistent top performer — recognized for client engagement and consultant satisfaction.",
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
                With a background spanning talent acquisition, business development, and marketing,
                I bring a well-rounded perspective to the life sciences recruiting space. Since 2020,
                I&apos;ve specialized in placing regulatory, labeling, packaging, and quality consultants
                in pharmaceutical and medical device organizations.
              </p>
              <p>
                My approach is consultative and candidate-centered. I invest in understanding what
                drives each individual and what each organization truly needs — creating matches that
                go beyond qualifications to deliver genuine cultural and strategic fit.
              </p>
              <p>
                Currently an Executive Recruiter at Cover + Associates, I continue to build on a
                track record of high retention, strong client relationships, and meaningful placements.
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
