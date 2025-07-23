"use client";

import PrestationQuoteForm from "@/components/forms/PrestationQuoteForm";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const prestations = [
  {
    id: 1,
    title: "ITI",
    description: "Isolation thermique des murs par l'intérieur",
    color: "bg-green-100 hover:bg-green-200",
    href: "/iti",
  },
  {
    id: 2,
    title: "Isolation des combles",
    description: "Isolation thermique des combles perdus ou aménagés",
    color: "bg-blue-100 hover:bg-blue-200",
    href: "/isolation-combles",
  },
  {
    id: 3,
    title: "Aides financières",
    description: "CEE, MaPrimeRénov' et autres dispositifs",
    color: "bg-yellow-100 hover:bg-yellow-200",
    href: "/simuler-mes-aides",
  },
];

export default function Prestation() {
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
              <a
                href="#hero"
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
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <PrestationQuoteForm />
    </section>
  );
}
