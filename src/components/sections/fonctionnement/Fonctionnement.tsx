"use client";

import PrestationQuoteForm from "@/components/forms/PrestationQuoteForm";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoplayPlugin from "embla-carousel-autoplay";
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
    <section id="what" className="w-full bg-[#FFDE59] relative overflow-hidden">
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
            <span className="text-white">ça marche ?</span>
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
                Optimisez la dépense énergétique de{" "}
                <span className="text-blue-600"> votre logement</span>.
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  variant="slate"
                  className="w-full bg-green-500 text-white hover:bg-white hover:text-green-500 border-green-500 border transition-colors"
                >
                  <a href="#hero">Demander un devis</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[
              AutoplayPlugin({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {[
                "/houses/maison-1.png",
                "/houses/maison-2.png",
                "/houses/maison-3.png",
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={`Maison rénovée ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
      <PrestationQuoteForm />
    </section>
  );
}
