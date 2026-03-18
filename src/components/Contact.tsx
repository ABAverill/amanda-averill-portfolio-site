"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "amanda@amanda-averill.com",
    href: "mailto:amanda@amanda-averill.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Philadelphia Area",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amanda-averill",
    href: "https://linkedin.com/in/amanda-averill",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-[#E5DFD6] scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-medium text-[#1A1A2E] mb-4 font-[family-name:var(--font-cormorant)]"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#5C5C70] text-lg mb-16 max-w-xl mx-auto"
        >
          Whether you&apos;re looking to build your leadership team or explore your
          next executive opportunity, I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-4 rounded-lg bg-white border border-[#E5DFD6] text-left hover:border-[#1B4F72]/40 hover:shadow-md transition-all shadow-sm"
            >
              <div className="p-2 rounded-lg bg-[#D6E8F5] text-[#1B4F72] shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs text-[#A0A0B2] uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#1A1A2E] hover:text-[#1B4F72] transition-colors whitespace-nowrap"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-[#1A1A2E] whitespace-nowrap">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
