"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <section className="relative min-h-screen w-full">
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
      </div>

      {/* Navigation */}
      <div
        className={`relative w-full z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 right-0 left-0 bg-gray-900 shadow-lg" : ""
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
            <Link
              className={`text-2xl font-semibold transition-colors ${
                isScrolled ? "text-white" : "text-slate-700"
              }`}
              href="/"
            >
              <Image src="/logo/logo.png" alt="Logo" width={130} height={130} />
            </Link>

            {/* Hamburger button */}
            <button
              type="button"
              className="md:hidden z-50 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-white" : "bg-slate-700"
                  } ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 mt-1 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-white" : "bg-slate-700"
                  } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 mt-1 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-white" : "bg-slate-700"
                  } ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
                ></span>
              </div>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              <Link href="/connexion">
                <Button
                  value="OBTENIR UN DEVIS"
                  variant="yellow"
                  className={
                    isScrolled
                      ? "text-white border-white hover:bg-white hover:text-white"
                      : ""
                  }
                >
                  OBTENIR UN DEVIS
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile navigation overlay */}
          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center space-y-8 p-8">
              <Link
                className="text-white text-2xl font-medium hover:text-primary transition-colors duration-300"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                className="text-white text-2xl font-medium hover:text-primary transition-colors duration-300"
                href="/entreprise"
                onClick={() => setIsMenuOpen(false)}
              >
                Professionnels
              </Link>
              <Link
                className="text-white text-2xl font-medium hover:text-primary transition-colors duration-300"
                href="/simulateur/v3"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulateur
              </Link>
              <Link href={"/connexion"}>
                <Button
                  value="MON ESPACE"
                  className="text-white border-white hover:bg-white hover:text-gray-900 mt-4"
                >
                  OBTENIR UN DEVIS
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-200px)] px-4 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
          Rénovez votre maison avec <br />
          Île De France Environnement
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Isolation des murs exterieurs | des murs interieurs | de la toiture |
          des sols sur toute la france
        </p>
      </div>

      {/* Floating arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <ChevronDownIcon
          className="w-8 h-8 text-white animate-bounce opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
};

export default Hero;
