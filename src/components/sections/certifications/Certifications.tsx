"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CertificationsCarousel from "./CertificationsCarousel";

const certificates = [
  {
    src: "/logo/certificat/RGE.avif",
    alt: "RGE",
  },

  {
    src: "/logo/certificat/totalEnergies.png",
    alt: "Total Energie",
  },
  {
    src: "/logo/certificat/arkea.png",
    alt: "Arkea",
  },
  {
    src: "/logo/certificat/ffb.png",
    alt: "FFB",
  },
];

export default function Certifications() {
  return (
    <>
      <section className="w-full bg-yellow-300 hidden md:block">
        <div className="max-w-5xl mx-auto px-4 py-8">
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
      <CertificationsCarousel />
    </>
  );
}
