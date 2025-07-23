"use client";

import { useState } from "react";
import SimulatorHeader from "@/components/sections/simulator/SimulatorHeader";
import SimulatorTestimonial from "@/components/sections/simulator/SimulatorTestimonial";
import SimulatorForm from "@/components/sections/simulator/SimulatorForm";

export default function SimulerMesAides() {
  // État partagé pour suivre l'étape actuelle
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Header Component */}
      <SimulatorHeader />
      
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Testimonial */}
            <div className="w-full md:w-1/4 md:min-w-[200px]">
              <SimulatorTestimonial currentStep={currentStep} />
            </div>
            
            {/* Right Side - Form */}
            <div className="w-full md:w-3/4">
              <SimulatorForm 
                currentStep={currentStep} 
                setCurrentStep={setCurrentStep} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}