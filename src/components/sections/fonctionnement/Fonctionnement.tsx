"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Une étude personnalisée",
    description:
      "Votre maison est unique ! Nous réalisons une étude pour vous proposer des solutions adaptées.",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Votre rénovation simplifiée",
    description:
      "Travaux, aides, financement : les meilleures solutions pour un maximum de confort.",
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Des économies pour longtemps",
    description:
      "Vos factures s'allègent, grâce à nos conseils et solutions pour maîtriser votre consommation.",
    color: "bg-blue-600",
  },
];

export default function Fonctionnement() {
  return (
    <section className="w-full bg-yellow-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Comment <br />
            ça marche ?
          </motion.h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-1 h-full bg-blue-600 rounded-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Et votre maison devient{" "}
                <span className="text-blue-600">effyciente</span>.
              </h3>
              <Button variant="slate" className="w-fit">
                J&apos;estime mon projet{" "}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/maison.png"
            alt="Maison rénovée"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
