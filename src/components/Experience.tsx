"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [openKey, setOpenKey] = useState<string | null>(
    // Default-open the most recent role
    `${experience[0].company}-${experience[0].roles[0].title}`
  );

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

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
          className="text-4xl font-medium text-[#1A1A2E] mb-4 pb-2 border-b-2 border-[#1B4F72] w-fit font-[family-name:var(--font-cormorant)]"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#5C5C70] mb-16 max-w-xl"
        >
          Click any role to expand details.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-4 top-0 bottom-0 w-px bg-[#1B4F72]/20" />

          <div className="space-y-10">
            {experience.map((entry) => (
              <div key={entry.company} className="relative pl-12 md:pl-16">
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[#1B4F72] border-2 border-[#FAFAF8] shadow-sm"
                />

                {/* Company header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-4 flex items-center gap-3 flex-wrap"
                >
                  {entry.logo && (
                    <div className="shrink-0 w-24 h-14 rounded-lg overflow-hidden border border-[#E5DFD6] bg-white shadow-sm flex items-center justify-center p-1.5">
                      <Image
                        src={entry.logo}
                        alt={entry.company}
                        width={96}
                        height={56}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-[#1B4F72] font-semibold text-lg leading-tight">{entry.company}</p>
                    <p className="text-[#A0A0B2] text-sm">
                      {entry.location}
                      {entry.note && (
                        <span className="ml-2 italic text-[#A0A0B2]/70">· {entry.note}</span>
                      )}
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-3">
                  {entry.roles.map((role) => {
                    const i = roleIndex++;
                    const key = `${entry.company}-${role.title}`;
                    const isOpen = openKey === key;

                    return (
                      <motion.article
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                        className={`bg-white border rounded-lg shadow-sm overflow-hidden transition-all ${
                          isOpen
                            ? "border-[#1B4F72]/40 shadow-md"
                            : "border-[#E5DFD6] hover:border-[#1B4F72]/25 hover:shadow-md"
                        } ${role.isPlaceholder ? "opacity-70" : ""}`}
                      >
                        {/* Clickable header */}
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                        >
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-[#1A1A2E] mb-1 group-hover:text-[#1B4F72] transition-colors">
                              {role.title}
                              {role.isPlaceholder && (
                                <span className="ml-2 text-xs font-normal text-[#A0A0B2] italic">
                                  (coming soon)
                                </span>
                              )}
                            </h3>
                            <p className="text-xs font-mono text-[#A0A0B2]">{role.dates}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-[#A0A0B2] group-hover:text-[#1B4F72] transition-colors shrink-0 mt-1"
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>

                        {/* Expandable bullets */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="bullets"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-1 border-t border-[#E5DFD6]">
                                {role.isPlaceholder ? (
                                  <div className="space-y-3 mt-4">
                                    {role.bullets.map((_, idx) => (
                                      <div
                                        key={idx}
                                        className="h-4 rounded shimmer"
                                        style={{ width: `${75 + (idx % 3) * 8}%` }}
                                      />
                                    ))}
                                  </div>
                                ) : (
                                  <ul className="space-y-3 mt-4">
                                    {role.bullets.map((bullet, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        className="flex gap-3 text-[#5C5C70] text-sm leading-relaxed pl-3 border-l-2 border-[#1B4F72]/25"
                                      >
                                        {bullet}
                                      </motion.li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
