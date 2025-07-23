"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Données des étapes
const etapes = [
  {
    id: 1,
    title: "Faisons connaissance",
    description: "Nos équipes internes sont formées sur les différents travaux et vous conseilleront sur les meilleures solutions pour votre logement.",
    buttonText: "Demander à être rappelé",
    buttonLink: "/contact",
    icons: [
      { text: "Confiance", icon: "phone" },
      { text: "Plan de travaux", icon: "clipboard" },
      { text: "Gratuit", icon: "check-circle" },
    ]
  },
  {
    id: 2,
    title: "Étude projet",
    description: "Nous prenons le temps d'étudier votre logement et de comprendre vos besoins. Construisons ensemble votre plan de travaux. On estime les travaux et les aides.",
    buttonText: "Prendre RDV",
    buttonLink: "/contact",
  },
  {
    id: 3,
    title: "Visite technique",
    description: "Étape importante car on se rencontre pour de vrai ! Un moment pour vérifier les points techniques ensemble et cadrer les travaux.",
    buttonText: "Planifier une visite technique",
    buttonLink: "/contact",
  },
  {
    id: 4,
    title: "Devis",
    description: "Suite à la visite technique, le devis arrive chez vous en 48h max. C'est le moment de tout relire et de valider.",
    buttonText: "Demander un devis",
    buttonLink: "/contact",
  },
  {
    id: 5,
    title: "Planification du chantier et validation des aides",
    description: "L'équipe travaux se met en marche et l'équipe administrative sécurise vos aides #simpleisbeautiful",
    buttonText: "C'est parti !",
    buttonLink: "/contact",
  }
];

export default function Etapes() {
  const [activeEtape, setActiveEtape] = useState(1);

  const handleEtapeClick = (id: number) => {
    setActiveEtape(id);
  };

  const activeEtapeData = etapes.find(etape => etape.id === activeEtape) || etapes[0];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">        
        {/* Éléments décoratifs */}
        <motion.div 
          className="absolute -left-20 top-40 w-20 h-20 hidden md:block z-10"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-500 opacity-70">
            <path d="M0,50 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute -right-34 top-20 w-16 h-16 hidden md:block z-10"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-500 opacity-50">
            <polygon points="50,0 100,50 50,100 0,50" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute right-60 -bottom-10 w-32 h-8 hidden md:block z-10"
          animate={{ 
            y: [0, 10, 0],
            x: [0, -8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <svg viewBox="0 0 100 25" className="w-full h-full fill-yellow-500 opacity-60">
            <path d="M0,25 L100,25 L100,0 C70,10 30,10 0,0 Z" />
          </svg>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch md:min-h-[700px] relative">
          {/* Contenu de l'étape active - Partie gauche */}
          <motion.div 
            key={activeEtape}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg md:w-2/3 relative overflow-hidden min-h-[400px] flex flex-col justify-center"
          >
            {/* Éléments décoratifs jaunes */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 rotate-45"
              animate={{ 
                y: [0, 5, 0],
                x: [0, 3, 0],
                rotate: [45, 50, 45]
              }}
              transition={{ 
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-500 opacity-80">
                <rect x="0" y="0" width="100" height="100" rx="20" />
              </svg>
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-yellow-500"
              animate={{ 
                y: [0, -3, 0],
                x: [0, 3, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{activeEtapeData.title}</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">{activeEtapeData.description}</p>

              {/* Icons - Si présents */}
              {activeEtapeData.icons && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-6 mb-12"
                >
                  {activeEtapeData.icons.map((icon, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {icon.icon === "phone" && (
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                      )}
                      {icon.icon === "clipboard" && (
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {icon.icon === "check-circle" && (
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      <span className="text-slate-700">{icon.text}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href={activeEtapeData.buttonLink || "/contact"}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {activeEtapeData.buttonText || "En savoir plus"}
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation des étapes - Partie droite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/3 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 flex flex-col justify-center"
          >
            <div className="space-y-4">
              {etapes.map((etape) => (
                <button
                  key={etape.id}
                  onClick={() => handleEtapeClick(etape.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                    activeEtape === etape.id
                      ? "bg-white text-blue-800 font-medium"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  {etape.title}
                </button>
              ))}
            </div>
            
            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {etapes.map((etape) => (
                <button
                  key={etape.id}
                  onClick={() => handleEtapeClick(etape.id)}
                  className={`w-2 h-2 rounded-full ${
                    activeEtape === etape.id ? "bg-white" : "bg-blue-400"
                  }`}
                  aria-label={`Aller à l'étape ${etape.id}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
