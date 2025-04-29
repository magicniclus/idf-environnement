"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/useModalStore";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Comment obtenir des aides pour mes travaux ?",
    answer:
      "Nous vous accompagnons dans l'obtention des aides disponibles (MaPrimeRénov', CEE, etc.). Lors de notre étude personnalisée, nous évaluons votre éligibilité et calculons le montant des aides auxquelles vous avez droit.",
  },
  {
    question: "Quel est le délai pour réaliser les travaux ?",
    answer:
      "Le délai varie selon le type et l'ampleur des travaux. Généralement, une installation de pompe à chaleur prend 2-3 jours, tandis qu'une isolation complète peut prendre 1-2 semaines. Nous établissons un planning précis lors de l'étude de votre projet.",
  },
  {
    question: "Quelles sont les garanties proposées ?",
    answer:
      "Nos travaux sont couverts par des garanties décennales et biennales. De plus, nous assurons un suivi après-travaux et restons disponibles pour toute question ou intervention nécessaire.",
  },
  {
    question: "Comment se déroule une étude de projet ?",
    answer:
      "L'étude commence par une visite technique gratuite de votre logement. Nous analysons vos besoins, effectuons les mesures nécessaires et vous proposons les solutions les plus adaptées avec un devis détaillé.",
  },
];

export default function Faq() {
  const { openModal } = useModalStore();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="w-full bg-slate-50 py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 text-center"
          >
            Nous sommes là pour <br />
            <span className="text-yellow-500">vous aider</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600 hover:no-underline py-2">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Besoin de préciser votre projet ?
            </h3>
            <p className="text-slate-700">On vous écoute.</p>
            <div className="">
              <p className="text-slate-700">
                du lundi au vendredi de 8h30 à 19h
              </p>
              <a
                href="tel:0811360027"
                className="flex items-center space-x-2 text-slate-900 mt-3"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="text-2xl font-bold">0 811 36 00 27</span>
              </a>
              <p className="text-sm text-slate-600">Service Gratuit</p>
            </div>
            <div className="pt-4">
              <Button
                onClick={() => openModal("Question Projet")}
                variant="slate"
                className="w-full bg-slate-900 text-white hover:bg-white hover:text-slate-900 transition-colors"
              >
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
