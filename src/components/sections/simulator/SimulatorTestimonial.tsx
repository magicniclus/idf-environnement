"use client";

import { StarIcon, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SimulatorTestimonialProps {
  currentStep?: number;
}

const SimulatorTestimonial = ({ currentStep = 1 }: SimulatorTestimonialProps) => {
  // Liste des étapes du simulateur
  const steps = [
    "Type de logement",
    "Âge du bien",
    "Travaux souhaités",
    "Surface à isoler",
    "Vos coordonnées"
  ];

  // Variantes d'animation pour les transitions
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="bg-white p-5 rounded-none h-full md:min-h-[calc(100vh-105px)] hidden md:flex flex-col md:px-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentStep === 1 ? (
          <motion.div 
            key="testimonial"
            className="flex flex-col justify-center items-center h-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.div className="mb-2" variants={itemVariants}>
              <p className="text-lg font-medium text-gray-800">
                Depuis 10 ans,<br />
                nos clients sont <span className="font-semibold">satisfaits !</span>
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-2 flex flex-col p-10 bg-blue-50 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-1">
                <StarIcon className="w-6 h-6 text-yellow-500" fill="currentColor" />
                <StarIcon className="w-6 h-6 text-yellow-500" fill="currentColor" />
                <StarIcon className="w-6 h-6 text-yellow-500" fill="currentColor" />
                <StarIcon className="w-6 h-6 text-yellow-500" fill="currentColor" />
                <StarIcon className="w-6 h-6 text-yellow-500" fill="currentColor" />
              </div>
              <p className="text-xs text-gray-600">Avis Google: 4.8/5 sur 44 881 avis</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="steps"
            className="flex flex-col justify-start h-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <div className="w-full max-w-md mx-auto mt-16">
              <motion.h3 
                className="text-xl font-semibold mb-8 text-gray-800"
                variants={itemVariants}
              >
                Étapes de votre simulation
              </motion.h3>
              
              <ul className="space-y-6">
                {steps.map((step, index) => {
                  const stepNumber = index + 1;
                  const isCompleted = stepNumber < currentStep;
                  const isCurrent = stepNumber === currentStep;
                  
                  return (
                    <motion.li 
                      key={stepNumber} 
                      className="flex items-center"
                      variants={itemVariants}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 ${isCompleted ? 'bg-green-100' : isCurrent ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <span className={`text-sm font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>{stepNumber}</span>
                        )}
                      </div>
                      <span className={`text-base ${isCurrent ? 'font-medium text-blue-600' : isCompleted ? 'text-gray-800' : 'text-gray-500'}`}>
                        {step}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimulatorTestimonial;
