"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface NavigationNewProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  forceBlackLogo?: boolean;
  textColor?: string;
  isContactPage?: boolean;
}

export default function NavigationNew({
  logoSrc = "/logo/logo.png",
  logoAlt = "IDF Environnement",
  logoWidth = 80,
  logoHeight = 80,
  forceBlackLogo = false,
  textColor,
  isContactPage = false
}: NavigationNewProps = {}) {
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
            {/* Logo */}
            <Link href="/" className="z-50 relative">
              <div className="flex items-center space-x-2">
                <Image
                  src={forceBlackLogo ? "/logo/logo-black.png" : (isScrolled ? "/logo/logo-black.png" : logoSrc)}
                  alt={logoAlt}
                  width={isScrolled ? (logoWidth * 0.75) : logoWidth}
                  height={isScrolled ? (logoHeight * 0.75) : logoHeight}
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
                  className={`flex items-center font-medium transition-colors hover:text-yellow-500 ${isScrolled || (isContactPage && !isMenuOpen)
                    ? textColor ? textColor : "text-slate-600 hover:text-slate-900"
                    : "text-white hover:text-slate-200"
                  }`}
                >
                  <span>Nos prestations</span>
                  <ChevronDownIcon
                    className={`ml-1 h-4 w-4 transition-transform ${prestationsMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                {prestationsMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      href="/#prestations"
                      className="block px-4 py-2 text-slate-900 hover:bg-yellow-50 hover:text-yellow-500"
                      onClick={() => setPrestationsMenuOpen(false)}
                    >
                      Toutes nos prestations
                    </Link>
                    <Link
                      href="/isolation-exterieure"
                      className="block px-4 py-2 text-slate-900 hover:bg-yellow-50 hover:text-yellow-500"
                      onClick={() => setPrestationsMenuOpen(false)}
                    >
                      Isolation extérieure
                    </Link>
                    <Link
                      href="/isolation-combles"
                      className="block px-4 py-2 text-slate-900 hover:bg-yellow-50 hover:text-yellow-500"
                      onClick={() => setPrestationsMenuOpen(false)}
                    >
                      Isolation des combles
                    </Link>
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
                  className={`flex items-center font-medium transition-colors hover:text-yellow-500 ${isScrolled || (isContactPage && !isMenuOpen)
                    ? textColor ? textColor : "text-slate-600 hover:text-slate-900"
                    : "text-white hover:text-slate-200"
                  }`}
                >
                  <span>Aides financières</span>
                  <ChevronDownIcon
                    className={`ml-1 h-4 w-4 transition-transform ${aidesMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                {aidesMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      href="/simuler-mes-aides"
                      className="block px-4 py-2 text-slate-900 hover:bg-yellow-50 hover:text-yellow-500"
                      onClick={() => setAidesMenuOpen(false)}
                    >
                      Simuler mes aides
                    </Link>
                    <Link
                      href="/maprimerenovexpliquee"
                      className="block px-4 py-2 text-slate-900 hover:bg-yellow-50 hover:text-yellow-500"
                      onClick={() => setAidesMenuOpen(false)}
                    >
                      MaPrimeRénov'
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/#what"
                className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled || (isContactPage && !isMenuOpen)
                  ? textColor ? textColor : "text-slate-600 hover:text-slate-900"
                  : "text-white hover:text-slate-200"
                }`}
              >
                Comment ça marche
              </Link>
              
              <Link
                href="/contact"
                className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled || (isContactPage && !isMenuOpen)
                  ? textColor ? textColor : "text-slate-600 hover:text-slate-900"
                  : "text-white hover:text-slate-200"
                }`}
              >
                Contact
              </Link>
              
              <Link
                href="tel:0185090367
"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                01 85 09 03 67

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
                    href="/isolation-exterieure"
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
                href="/#what"
                className="text-white hover:text-yellow-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              
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
    </>
  );
}
