"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Experience() {
  let roleIndex = 0;
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-[#E5DFD6] scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-medium text-[#1A1A2E] mb-16 pb-2 border-b-2 border-[#1B4F72] w-fit font-[family-name:var(--font-cormorant)]"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-4 top-0 bottom-0 w-px bg-[#1B4F72]/30" />

          <div className="space-y-12">
            {experience.map((entry) => (
              <div key={entry.company} className="relative pl-12 md:pl-16">
                {/* Node */}
                <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[#1B4F72] border-2 border-[#FAFAF8]" />
                <div className="space-y-8">
                  {entry.roles.map((role) => {
                    const i = roleIndex++;
                    return (
                      <motion.article
                        key={`${entry.company}-${role.title}-${role.dates}`}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={cardVariants}
                        className="bg-white border border-[#E5DFD6] rounded-lg p-6 md:p-8 shadow-sm"
                      >
                        <p className="text-[#1B4F72] font-medium mb-1">
                          {entry.company}
                        </p>
                        <p className="text-[#A0A0B2] text-sm mb-3">
                          {entry.location}
                          {role.location && ` · ${role.location}`}
                        </p>
                        <h3 className="text-xl font-semibold text-[#1A1A2E] mb-1">
                          {role.title}
                        </h3>
                        <p className="text-sm font-mono text-[#A0A0B2] mb-4">
                          {role.dates}
                        </p>
                        <ul className="space-y-2">
                          {role.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-[#5C5C70] leading-relaxed pl-3 border-l-2 border-[#1B4F72]/25"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
