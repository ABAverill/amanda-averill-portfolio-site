"use client";

import { motion } from "framer-motion";
import { specializationCategories } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const tag = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Specializations() {
  return (
    <section
      id="specializations"
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
          Specializations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#5C5C70] mb-16 max-w-xl"
        >
          Areas of expertise spanning functional disciplines, industries, and leadership levels.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {specializationCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2"
              >
                {category.items.map((item_label) => (
                  <motion.span
                    key={item_label}
                    variants={tag}
                    className="inline-block px-3 py-1.5 text-sm rounded-full border border-[#1B4F72]/30 bg-white text-[#5C5C70] hover:bg-[#D6E8F5] hover:text-[#1B4F72] hover:border-[#1B4F72]/50 transition-colors cursor-default shadow-sm"
                  >
                    {item_label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
