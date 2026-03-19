"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Amanda.ma.averill@gmail.com",
    href: "mailto:Amanda.ma.averill@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(484) 515-1204",
    href: "tel:+14845151204",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Downingtown, PA",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amanda-averill",
    href: "https://www.linkedin.com/in/amanda-averill-748b16b7/",
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
          Whether you&apos;re looking to place top talent or explore your next
          opportunity in life sciences or medical devices, I&apos;d love to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(27,79,114,0.12)" }}
              className="flex items-center gap-3 px-5 py-4 rounded-lg bg-white border border-[#E5DFD6] text-left hover:border-[#1B4F72]/40 transition-all shadow-sm cursor-default"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
