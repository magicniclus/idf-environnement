"use client";

import PrestationQuoteForm from "@/components/forms/PrestationQuoteForm";
import { useModalStore } from "@/store/useModalStore";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const prestations = [
  {
    id: 1,
    title: "ITE",
    description: "Isolation thermique des murs par l'extérieur",

    color: "bg-blue-100 hover:bg-blue-200",
    href: "/ite",
  },
  {
    id: 2,
    title: "ITI",
    description: "Isolation thermique des murs par l'intérieur",

    color: "bg-green-100 hover:bg-green-200",
    href: "/iti",
  },
  {
    id: 3,
    title: "Isolation toiture",
    description: "Isolation thermique de la toiture",

    color: "bg-red-100 hover:bg-red-200",
    href: "/isolation-toiture",
  },
  {
    id: 4,
    title: "PAC Air/Air",
    description: "Pompe à chaleur air/air",

    color: "bg-yellow-100 hover:bg-yellow-200",
    href: "/pac-air-air",
  },
  {
    id: 5,
    title: "PAC Air/Eau",
    description: "Pompe à chaleur air/eau",

    color: "bg-purple-100 hover:bg-purple-200",
    href: "/pac-air-eau",
  },
  {
    id: 6,
    title: "PAC Thermodynamique",
    description: "Pompe à chaleur thermodynamique",

    color: "bg-cyan-100 hover:bg-cyan-200",
    href: "/pac-thermodynamique",
  },
];

export default function Prestation() {
  const { openModal } = useModalStore();
  return (
    <section id="prestations" className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 text-center"
          >
            Nos prestations pour <br />
            <span className="text-yellow-500">votre confort</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-slate-600 max-w-2xl mx-auto text-center">
              Découvrez nos solutions d&apos;isolation et de chauffage pour
              améliorer le confort de votre habitat tout en réduisant votre
              consommation énergétique.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((prestation, index) => (
            <motion.div
              key={prestation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => openModal(prestation.title)}
                className={`block w-full p-6 rounded-2xl ${prestation.color} transition-colors duration-200 group h-full flex flex-col`}
              >
                <div className="flex-1 flex md:flex-col justify-between md:items-center justify-between items-end">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 md:text-center text-left md:max-w-none max-w-9/12">
                      {prestation.title}
                    </h3>
                    <p className="text-slate-600 md:text-center text-left md:max-w-none max-w-9/12">
                      {prestation.description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowRightIcon className="md:w-5 md:h-5 w-8 h-8 text-slate-600 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <PrestationQuoteForm />
    </section>
  );
}
