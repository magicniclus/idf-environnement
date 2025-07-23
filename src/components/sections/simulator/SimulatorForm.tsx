"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

// Progress bar component
const ProgressBar = ({ currentStep = 1, totalSteps = 5 }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full bg-gray-200 h-2">
      <div 
        className="bg-blue-600 h-2 transition-all duration-300 ease-in-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Variantes d'animation pour les transitions
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

interface SimulatorFormProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const SimulatorForm = ({ currentStep, setCurrentStep }: SimulatorFormProps) => {

  const router = useRouter();

  // États pour suivre les valeurs du formulaire
  const [direction, setDirection] = useState(1);
  const [projectType, setProjectType] = useState<string | null>("maison");
  const [buildingAge, setBuildingAge] = useState<string | null>(null);
  const [workType, setWorkType] = useState<string | null>(null);
  const [surfaceArea, setSurfaceArea] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Gestion des changements dans le formulaire de contact
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Fonction de soumission du formulaire
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      const payload = {
        prenom: formData.firstName,
        nom: formData.lastName,
        email: formData.email,
        telephone: formData.phone,
        codePostal: formData.postalCode,
        projectType: projectType,
        buildingAge: buildingAge,
        workType: workType,
        surfaceArea: surfaceArea,
        source: "Simulateur IDF"
      };
      
      console.log("Envoi des données:", payload);
      
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi du formulaire');
      }

      router.push("/merci");
      
      console.log("Réponse de l'API:", result);
      setSubmitSuccess(true);
      
      // Reset du formulaire après succès
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        postalCode: "",
        phone: ""
      });
      
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setSubmitError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Navigation entre les étapes
  const nextStep = () => {
    setDirection(1);
    setCurrentStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setDirection(-1);
    setCurrentStep(prev => prev - 1);
  };
  
  // Calcul du nombre total d'étapes
  const totalSteps = 5;
  
  // Vérification si le bouton suivant doit être activé
  const isNextButtonDisabled = () => {
    switch (currentStep) {
      case 1: return !projectType;
      case 2: return !buildingAge;
      case 3: return !workType;
      case 4: return !surfaceArea;
      case 5: return !formData.firstName || !formData.lastName || !formData.email || !formData.postalCode || !formData.phone;
      default: return false;
    }
  };

  // Rendu du contenu de l'étape actuelle
  const renderStepContent = () => {
    const variants = pageVariants;
    
    // Si le formulaire a été soumis avec succès
    if (submitSuccess && currentStep === totalSteps) {
      return (
        <motion.div
          key="success"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          custom={direction}
          className="w-full flex flex-col items-center justify-center py-10"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h3>
          <p className="text-gray-600 text-center mb-6">
            Merci pour votre demande. Un de nos conseillers vous contactera très prochainement pour étudier votre projet.
          </p>
          <Button 
            onClick={() => {
              setCurrentStep(1);
              setSubmitSuccess(false);
              setProjectType("maison");
              setBuildingAge(null);
              setWorkType(null);
              setSurfaceArea("");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Faire une nouvelle simulation
          </Button>
        </motion.div>
      );
    }
    
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="w-full"
          >
            <h3 className="text-lg font-medium mb-4 text-center">Votre projet concerne :</h3>
            
            <RadioGroup 
              value={projectType || ""} 
              onValueChange={setProjectType}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${projectType === "maison" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setProjectType("maison")}
              >
                <RadioGroupItem 
                  value="maison" 
                  id="maison" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={projectType === "maison" ? { scale: [1, 1.03, 1] } : {}}
                  transition={projectType === "maison" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="maison" 
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative w-8 h-8 mr-3">
                      <Image 
                        src="/houses/house-icon.svg" 
                        alt="Maison"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm">Une maison</span>
                    {projectType === "maison" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${projectType === "appartement" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setProjectType("appartement")}
              >
                <RadioGroupItem 
                  value="appartement" 
                  id="appartement" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={projectType === "appartement" ? { scale: [1, 1.03, 1] } : {}}
                  transition={projectType === "appartement" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="appartement" 
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative w-8 h-8 mr-3">
                      <Image 
                        src="/houses/apartment-icon.svg" 
                        alt="Appartement"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm">Un appartement</span>
                    {projectType === "appartement" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
            </RadioGroup>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="w-full"
          >
            {/* <h3 className="text-lg font-medium mb-4 text-center">Âge du bien :</h3> */}
            
            <RadioGroup 
              value={buildingAge || ""} 
              onValueChange={setBuildingAge}
              className="grid grid-cols-1 gap-4 w-full"
            >
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${buildingAge === "less-than-2" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setBuildingAge("less-than-2")}
              >
                <RadioGroupItem 
                  value="less-than-2" 
                  id="less-than-2" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={buildingAge === "less-than-2" ? { scale: [1, 1.03, 1] } : {}}
                  transition={buildingAge === "less-than-2" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="less-than-2" 
                    className="flex items-center cursor-pointer"
                  >
                    <span className="text-sm">Moins de 2 ans</span>
                    {buildingAge === "less-than-2" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${buildingAge === "2-to-15" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setBuildingAge("2-to-15")}
              >
                <RadioGroupItem 
                  value="2-to-15" 
                  id="2-to-15" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={buildingAge === "2-to-15" ? { scale: [1, 1.03, 1] } : {}}
                  transition={buildingAge === "2-to-15" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="2-to-15" 
                    className="flex items-center cursor-pointer"
                  >
                    <span className="text-sm">Entre 2 et 15 ans</span>
                    {buildingAge === "2-to-15" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${buildingAge === "more-than-15" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setBuildingAge("more-than-15")}
              >
                <RadioGroupItem 
                  value="more-than-15" 
                  id="more-than-15" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={buildingAge === "more-than-15" ? { scale: [1, 1.03, 1] } : {}}
                  transition={buildingAge === "more-than-15" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="more-than-15" 
                    className="flex items-center cursor-pointer"
                  >
                    <span className="text-sm">Plus de 15 ans</span>
                    {buildingAge === "more-than-15" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
            </RadioGroup>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="w-full"
          >
            {/* <h3 className="text-lg font-medium mb-4 text-center">Travaux souhaités :</h3> */}
            
            <RadioGroup 
              value={workType || ""} 
              onValueChange={setWorkType}
              className="grid grid-cols-1 gap-4 w-full"
            >
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${workType === "iti" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setWorkType("iti")}
              >
                <RadioGroupItem 
                  value="iti" 
                  id="iti" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={workType === "iti" ? { scale: [1, 1.03, 1] } : {}}
                  transition={workType === "iti" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="iti" 
                    className="flex items-center cursor-pointer"
                  >
                    <span className="text-sm">Isolation des murs intérieurs (ITI)</span>
                    {workType === "iti" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${workType === "combles" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                onClick={() => setWorkType("combles")}
              >
                <RadioGroupItem 
                  value="combles" 
                  id="combles" 
                  className="sr-only" 
                />
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  animate={workType === "combles" ? { scale: [1, 1.03, 1] } : {}}
                  transition={workType === "combles" ? { duration: 0.3, times: [0, 0.5, 1] } : {}}
                  className="w-full"
                >
                  <Label 
                    htmlFor="combles" 
                    className="flex items-center cursor-pointer"
                  >
                    <span className="text-sm">Isolation des combles</span>
                    {workType === "combles" && (
                      <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </Label>
                </motion.div>
              </div>
            </RadioGroup>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="w-full"
          >
            {/* <h3 className="text-lg font-medium mb-4 text-center">Surface à isoler :</h3> */}
            
            <div className="w-full">
              <div className="relative">
                <Input
                  type="number"
                  value={surfaceArea}
                  onChange={(e) => setSurfaceArea(e.target.value)}
                  placeholder="Surface en m²"
                  className="w-full p-3 border rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">m²</span>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="w-full"
          >
            {/* <h3 className="text-lg font-medium mb-4 text-center">Vos coordonnées :</h3> */}
            
            <div className="w-full space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  placeholder="Prénom"
                  className="w-full p-3 border rounded-lg"
                />
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  placeholder="Nom"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <Input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleFormChange}
                placeholder="Code postal"
                className="w-full p-3 border rounded-lg"
              />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Téléphone"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };
  
  
  return (
    <div className="relative md:min-h-[calc(100vh-105px)] flex flex-col">
      {/* Progress Bar - Positioned right below the header */}
      <div className="sticky top-0 w-full z-20">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        
        <div className="flex-grow flex items-center justify-center p-6 relative">
          {/* Background Image */}
          <div className="md:block hidden absolute inset-0 z-0">
            <Image
              src="/background/simulateur.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Form Content */}
          <div className="flex flex-col items-center relative z-10 p-8 max-w-2xl w-full">
            {currentStep === 1 && (
              <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-xs text-blue-600 mb-2">
                En 2 minutes !
              </div>
            )}
            <AnimatePresence mode="wait">
              <motion.h2 
                key={`title-${currentStep}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl sm:text-4xl font-bold mb-4 text-center"
              >
                {currentStep === 1 ? (
                  <>Découvrez vos primes et estimez le <span className="text-blue-600">coût de vos travaux</span></>
                ) : currentStep === 2 ? (
                  <>Âge du <span className="text-blue-600">bien</span></>
                ) : currentStep === 3 ? (
                  <>Travaux <span className="text-blue-600">souhaités</span></>
                ) : currentStep === 4 ? (
                  <>Surface <span className="text-blue-600">à isoler</span></>
                ) : (
                  <>Vos <span className="text-blue-600">coordonnées</span></>
                )}
              </motion.h2>
            </AnimatePresence>
            
            <div className="mt-6 w-full">
              <AnimatePresence mode="wait" custom={direction}>
                {renderStepContent()}
              </AnimatePresence>
            </div>
            
            {currentStep === 1 && (
              <div className="mt-6 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-4 flex flex-col items-center md:text-start text-center">
                    <p>J'ai déjà un compte Idf Environnement:</p>
                    <button className="text-blue-600 text-xs font-medium flex items-center">
                      Me connecter <ChevronRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Message d'erreur */}
            {submitError && currentStep === totalSteps && (
              <div className="w-full mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                <p className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {submitError}
                </p>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="w-full z-10 flex justify-center md:flex-row flex-col mt-10 gap-4">
              {currentStep > 1 && (
                <Button 
                  onClick={prevStep}
                  className="hover:bg-gray-50/50 bg-transparent shadow-none text-gray-800 md:flex items-center hidden py-6 rounded-lg text-lg font-medium"
                >
                  <ChevronLeft className="h-6 w-6 mr-1" />
                  Retour
                </Button>
              )}
              
              <Button 
                onClick={currentStep < totalSteps ? nextStep : handleSubmit}
                disabled={isNextButtonDisabled() || isSubmitting}
                className="bg-yellow-300 hover:shadow-lg hover:bg-yellow-300 text-gray-800 py-6 rounded-lg text-lg font-medium"
              >
                {currentStep < totalSteps ? (
                  <>
                    Continuer
                    <ChevronRight className="h-6 w-6 ml-1" />
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="animate-pulse">Envoi en cours...</span>
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
              {currentStep > 1 && (
                <Button 
                  onClick={prevStep}
                  className="hover:bg-gray-50/50 bg-transparent shadow-none text-gray-800 flex md:hidden items-center py-6 rounded-lg text-lg font-medium"
                >
                  <ChevronLeft className="h-6 w-6 mr-1" />
                  Retour
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorForm;
