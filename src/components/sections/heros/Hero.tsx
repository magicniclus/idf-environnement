"use client";

import HeroQuoteForm from "@/components/forms/HeroQuoteForm";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prestationsMenuOpen, setPrestationsMenuOpen] = useState(false);
  const [aidesMenuOpen, setAidesMenuOpen] = useState(false);
  const prestationsMenuRef = useRef<HTMLDivElement>(null);
  const aidesMenuRef = useRef<HTMLDivElement>(null);

  // Navigation effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle clicks outside of menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (prestationsMenuRef.current && !prestationsMenuRef.current.contains(event.target as Node)) {
        setPrestationsMenuOpen(false);
      }
      if (aidesMenuRef.current && !aidesMenuRef.current.contains(event.target as Node)) {
        setAidesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="relative min-h-screen h-min w-full" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background/hero2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full" style={{ display: 'block', height: '150px' }} preserveAspectRatio="none">
            <path 
              fill="#FFDE59" 
              fillOpacity="1" 
              d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 right-0 left-0 bg-white shadow-lg"
            : "relative"
        }`}
      >
        <header
          className={`w-full px-5 py-4 transition-all duration-300 ${
            isScrolled
              ? "mx-auto max-w-[1250px]"
              : "relative mx-auto max-w-[1250px] lg:px-20 lg:py-8"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-50 relative">
              <div className="flex items-center space-x-2">
                <Image
                  src={isScrolled ? "/logo/logo-black.png" : "/logo/logo.png"}
                  alt="IDF Environnement"
                  width={isScrolled ? 120 : 120}
                  height={isScrolled ? 120 : 120}
                  className="transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-${isScrolled ? "slate-900" : "white"} hover:text-yellow-500 transition-colors`}
              >
                Accueil
              </Link>
              
              {/* Prestations Dropdown */}
              <div className="relative" ref={prestationsMenuRef}>
                <button
                  onClick={() => {
                    setPrestationsMenuOpen(!prestationsMenuOpen);
                    setAidesMenuOpen(false);
                  }}
                  className={`flex items-center font-medium transition-colors hover:text-yellow-500 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white hover:text-slate-200"}`}
                >
                  Nos prestations
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {prestationsMenuOpen && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-[125px] w-full max-w-6xl bg-white rounded-xl shadow-xl py-6 px-6 z-50">
                    <div className="flex">
                      <div className="w-1/2 pr-6">
                        <h3 className="text-xl font-bold mb-4 text-slate-800 border-b pb-2">Nos prestations</h3>
                        <div className="space-y-4">
                          <Link
                            href="/#prestations"
                            className="block hover:bg-slate-50 transition-colors p-3 rounded-lg"
                            onClick={() => setPrestationsMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="text-yellow-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-slate-800 block">Toutes nos prestations</span>
                                <span className="text-sm text-slate-500">Découvrez l'ensemble de nos services</span>
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/isolation-murs-exterieurs"
                            className="block hover:bg-slate-50 transition-colors p-3 rounded-lg"
                            onClick={() => setPrestationsMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="text-yellow-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-slate-800 block">Isolation extérieure</span>
                                <span className="text-sm text-slate-500">Améliorez l'efficacité énergétique</span>
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/isolation-combles"
                            className="block hover:bg-slate-50 transition-colors p-3 rounded-lg"
                            onClick={() => setPrestationsMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="text-yellow-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-slate-800 block">Isolation des combles</span>
                                <span className="text-sm text-slate-500">Réduisez vos pertes de chaleur</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="w-1/2 flex items-center justify-center">
                        <div className="relative w-full h-64">
                          <Image 
                            src="/illustrations/chantier.png" 
                            alt="Nos prestations" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Aides Dropdown */}
              <div className="relative" ref={aidesMenuRef}>
                <button
                  onClick={() => {
                    setAidesMenuOpen(!aidesMenuOpen);
                    setPrestationsMenuOpen(false);
                  }}
                  className={`flex items-center font-medium transition-colors hover:text-yellow-500 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white hover:text-slate-200"}`}
                >
                  Aides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {aidesMenuOpen && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-[125px] w-full max-w-6xl bg-white rounded-xl shadow-xl py-6 px-6 z-50">
                    <div className="flex">
                      <div className="w-1/2 pr-6">
                        <h3 className="text-xl font-bold mb-4 text-slate-800 border-b pb-2">Aides financières</h3>
                        <div className="space-y-4">
                          <Link
                            href="/simuler-mes-aides"
                            className="block hover:bg-slate-50 transition-colors p-3 rounded-lg"
                            onClick={() => setAidesMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="text-yellow-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-slate-800 block">Simuler mes aides</span>
                                <span className="text-sm text-slate-500">Calculez vos économies potentielles</span>
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/maprimerenovexpliquee"
                            className="block hover:bg-slate-50 transition-colors p-3 rounded-lg"
                            onClick={() => setAidesMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="text-yellow-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-slate-800 block">MaPrimeRénov'</span>
                                <span className="text-sm text-slate-500">Tout savoir sur cette aide de l'État</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="w-1/2 flex items-center justify-center">
                        <div className="relative w-full h-64">
                          <Image 
                            src="/illustrations/aides.png" 
                            alt="Aides financières" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled 
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white hover:text-slate-200"
                }`}
              >
                Contact
              </Link>
              
              <Link
                href="/simuler-mes-aides"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Simuler mes aides
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className={`h-8 w-8 text-${isScrolled ? "slate-900" : "white"}`} />
              ) : (
                <Bars3Icon className={`h-8 w-8 text-${isScrolled ? "slate-900" : "white"}`} />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-slate-900 z-40 pt-24 px-6 overflow-y-auto md:hidden">
            <nav className="flex flex-col space-y-6 text-lg">
              <Link
                href="/"
                className="text-white hover:text-yellow-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              
              <div className="space-y-2">
                <h3 className="text-yellow-500 font-medium">Nos prestations</h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/#prestations"
                    className="block text-white hover:text-yellow-500 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Toutes nos prestations
                  </Link>
                  <Link
                    href="/isolation-murs-exterieurs"
                    className="block text-white hover:text-yellow-500 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Isolation extérieure
                  </Link>
                  <Link
                    href="/isolation-combles"
                    className="block text-white hover:text-yellow-500 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Isolation des combles
                  </Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-yellow-500 font-medium">Aides financières</h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/simuler-mes-aides"
                    className="block text-white hover:text-yellow-500 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Simuler mes aides
                  </Link>
                  <Link
                    href="/maprimerenovexpliquee"
                    className="block text-white hover:text-yellow-500 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MaPrimeRénov'
                  </Link>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="text-white hover:text-yellow-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                href="tel:0185090367
"
                className="bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Appeler : 01 85 09 03 67

              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-400px)] px-4 flex flex-col justify-center items-center text-white p-4 md:mt-0 max-w-5xl mx-auto">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:items-start items-center space-y-2 mb-8 mt-2"
          >
            <div className="bg-white/30 px-3 py-1 rounded-full">
              <div className="flex items-center space-x-2">
                <span className="md:text-lg text-sm font-semibold">
                  Excellent
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-7xl font-bold mb-6 max-w-4xl"
          >
            On s'occupe de tout
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="md:text-xl text-sm md:text-2xl mb-6 max-w-2xl"
          >
            ITE (Isolation des murs exterieurs) | Isolation des combles | Service de livraison
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-10 mb-16"
          >
            <Link 
              href="/simuler-mes-aides"
              className="px-6 py-4 bg-yellow-500 text-white rounded-md md:text-xl text-sm font-medium hover:bg-white hover:text-[#FFDE59] border border-[#FFDE59] transition-colors duration-300"
            >
              🏠  Je démarre un projet d&apos;isolation
            </Link>
          </motion.div>
          
          {/* Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-3xl mt-10"
          >
            {/* Isolation Card */}
            <Link href="/isolation-murs-exterieurs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="relative w-32 h-32 mb-4">
                  <Image 
                    src="/illustrations/house.png" 
                    alt="Isolation" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Isolation</h3>
                <div className="flex items-center justify-center mt-2 group-hover:translate-x-2 transition-transform duration-300 text-slate-900">
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              </div>
            </Link>
            
            {/* Aides Card */}
            <Link href="/simuler-mes-aides" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="relative w-32 h-32 mb-4">
                  <Image 
                    src="/illustrations/aides.png" 
                    alt="Aides" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Aides</h3>
                <div className="flex items-center justify-center mt-2 group-hover:translate-x-2 transition-transform duration-300 text-slate-900">
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDownIcon
          className="w-8 h-8 text-white animate-bounce opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        />
      </motion.div>
    </section>
  );
};

export default Hero;
