"use client";

import { useState } from "react";
import ImageComparison from "@/components/ImageComparaison";
import Certifications from "@/components/sections/certifications/Certifications";
import Etapes from "@/components/sections/etapes/Etapes";
import Faq from "@/components/sections/faq/Faq";
import Fonctionnement from "@/components/sections/fonctionnement/Fonctionnement";
import Footer from "@/components/sections/footer/Footer";
import Hero from "@/components/sections/heros/Hero";
import Partenaires from "@/components/sections/partenaires/Partenaires";
import Prestation from "@/components/sections/prestation/Prestation";

export default function Home() {
  const [showOldVersion, setShowOldVersion] = useState(false);

  if (showOldVersion) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center space-y-8">
              <div className="inline-block p-4 bg-yellow-500/20 rounded-full mb-4">
                <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Site temporairement suspendu
              </h1>
              
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  L'ensemble des collaborateurs attendent d'être payé par monsieur <span className="font-bold text-yellow-400">Tunay SAGLAM</span>, <span className="font-bold text-yellow-400">Orhan KAHRAMAN</span> et <span className="font-bold text-yellow-400">Céline SAGLAM</span> pour relancer le site.
                </p>
              </div>

              {/* <button
                onClick={() => setShowOldVersion(false)}
                className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Revenir à la version normale
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowOldVersion(true)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg shadow-lg transition-all duration-300 border border-slate-600"
      >
        Version alternative
      </button>
      
      <Hero />
      <Certifications />
      <Fonctionnement />
      <Prestation />
      <div className="mb-10 px-4">
        <ImageComparison beforeImage="/prestations/four-reno.jpeg" afterImage="/prestations/four.jpeg" />
      </div>
      <Etapes />
      <Partenaires />
      <Faq />
      <Footer />
    </div>
  );
}
