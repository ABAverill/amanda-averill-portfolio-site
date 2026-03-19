"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Heart, GraduationCap, Award } from "lucide-react";
import { accomplishments, education, certifications } from "@/lib/data";

const typeIcon: Record<string, React.ElementType> = {
  award: Trophy,
  volunteer: Heart,
};

const typeColor: Record<string, string> = {
  award: "bg-[#FFF8E7] text-[#B7791F] border-[#F6E05E]/40",
  volunteer: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]/40",
};

const typeIconBg: Record<string, string> = {
  award: "bg-[#FEF3C7] text-[#D97706]",
  volunteer: "bg-[#DBEAFE] text-[#2563EB]",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Accomplishments() {
  return (
    <section
      id="accomplishments"
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
          Accomplishments
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#5C5C70] mb-16 max-w-xl"
        >
          Awards, community leadership, and continuing education.
        </motion.p>

        {/* Awards & Volunteer */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-4 mb-16"
        >
          {accomplishments.map((item) => {
            const Icon = typeIcon[item.type] ?? Award;
            return (
              <motion.div
                key={`${item.title}-${item.year}`}
                variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(27,79,114,0.10)" }}
                className={`bg-white border rounded-xl p-5 shadow-sm flex gap-4 items-start transition-all cursor-default`}
              >
                <div className={`p-2.5 rounded-lg shrink-0 ${typeIconBg[item.type]}`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#1A1A2E] text-sm">{item.title}</p>
                    <span className="text-xs font-mono text-[#A0A0B2] shrink-0 mt-0.5">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#1B4F72] font-medium mb-1">{item.subtitle}</p>
                  <p className="text-xs text-[#5C5C70] leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-[#1A1A2E] mb-5 flex items-center gap-2">
              <GraduationCap size={18} className="text-[#1B4F72]" />
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-white border border-[#E5DFD6] rounded-xl p-5 shadow-sm hover:border-[#1B4F72]/30 hover:shadow-md transition-all flex items-center gap-4"
                >
                  {edu.logo && (
                    <div className="shrink-0 rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-[#1A1A2E] text-sm">{edu.institution}</p>
                    <p className="text-xs text-[#1B4F72] font-medium mt-0.5">{edu.degree}</p>
                    <p className="text-xs font-mono text-[#A0A0B2] mt-1">{edu.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#1A1A2E] mb-5 flex items-center gap-2">
              <Award size={18} className="text-[#1B4F72]" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white border border-[#E5DFD6] rounded-xl p-5 shadow-sm hover:border-[#1B4F72]/30 hover:shadow-md transition-all flex items-center gap-4"
                >
                  {cert.logo && (
                    <div className="shrink-0 rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-[#1A1A2E] text-sm">{cert.title}</p>
                    <p className="text-xs text-[#1B4F72] font-medium mt-0.5">{cert.issuer}</p>
                    <p className="text-xs font-mono text-[#A0A0B2] mt-1">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
