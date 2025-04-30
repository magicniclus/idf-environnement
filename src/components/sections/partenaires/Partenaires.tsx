"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PartenairesCarousel from "./PartenairesCarousel";

const certificates = [
  {
    src: "/logo/partenaires/bouygues.png",
    alt: "Bouygues",
  },
  {
    src: "/logo/partenaires/vinci.avif",
    alt: "Vinci",
  },
  {
    src: "/logo/partenaires/3f.png",
    alt: "3F",
  },
  {
    src: "/logo/partenaires/seqens.png",
    alt: "Seqens",
  },
  {
    src: "/logo/partenaires/action-logement.png",
    alt: "Action Logement",
  },
];

export default function Partenaires() {
  return (
    <>
      <section className="w-full bg-white hidden md:block">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12"
          >
            Ils nous ont fait <span className="text-yellow-500">confiance</span>
          </motion.h2>
          <div className="flex justify-between items-center gap-8 flex-wrap md:flex-nowrap">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-32 h-20 relative mx-auto md:mx-0"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PartenairesCarousel />
    </>
  );
}
