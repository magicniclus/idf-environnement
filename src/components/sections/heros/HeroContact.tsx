"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContact = () => {
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
    <>
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
            {/* Logo - Toujours noir sur la page contact */}
            <Link href="/" className="z-50 relative">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo/logo-black.png"
                  alt="IDF Environnement"
                  width={isScrolled ? 60 : 80}
                  height={isScrolled ? 60 : 80}
                  className="transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-slate-900 transition-colors"
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
                  className="flex items-center font-medium transition-colors hover:text-yellow-500 text-slate-700 hover:text-slate-900"
                >
                  Nos prestations
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {prestationsMenuOpen && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-[100px] w-full max-w-6xl bg-white rounded-xl shadow-xl py-6 px-6 z-50">
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
                  className="flex items-center font-medium transition-colors hover:text-yellow-500 text-slate-700 hover:text-slate-900"
                >
                  Aides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {aidesMenuOpen && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-[100px] w-full max-w-6xl bg-white rounded-xl shadow-xl py-6 px-6 z-50">
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
                className="font-medium transition-colors hover:text-yellow-500 text-slate-700 hover:text-slate-900"
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
                <XMarkIcon className="h-8 w-8 text-slate-900" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-slate-900" />
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
                href="tel:0644646953"
                className="bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Appeler : 06 44 64 69 53
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroContact;
