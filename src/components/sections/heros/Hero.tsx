"use client";

import QuoteForm from "@/components/forms/QuoteForm";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
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
    <section className="relative min-h-screen h-min w-full">
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
            <Link
              className={`text-2xl font-semibold transition-colors ${
                isScrolled ? "text-slate-900" : "text-slate-700"
              }`}
              href="/"
            >
              <Image
                src={isScrolled ? "/logo/logo-black.png" : "/logo/logo.png"}
                alt="Logo"
                width={isScrolled ? 100 : 130}
                height={isScrolled ? 100 : 130}
                className="transition-all duration-300"
              />
            </Link>

            {/* Hamburger button */}
            <button
              type="button"
              className="md:hidden z-50 relative flex items-center justify-center p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-slate-900" : "bg-white"
                  } ${isMenuOpen ? "rotate-45" : "translate-y-[-6px]"}`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-slate-900" : "bg-white"
                  } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-slate-900" : "bg-white"
                  } ${isMenuOpen ? "-rotate-45" : "translate-y-[6px]"}`}
                ></span>
              </div>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
              <QuoteForm
                buttonClassName={`flex items-center justify-center gap-2 ${
                  isScrolled
                    ? ""
                    : "text-white border-white hover:bg-white hover:text-slate-900"
                }`}
              />
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
              <QuoteForm buttonClassName="text-white border-white hover:bg-white hover:text-gray-900 mt-4" />
            </div>
          </div>
        </header>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-200px)] px-4 flex flex-col items-center justify-center text-center text-white p-4 md:mt-0 mt-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-2 mb-8 mt-2"
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
          className="text-3xl md:text-5xl md:text-6xl font-bold mb-6 max-w-4xl"
        >
          <span className="md:block hidden">Rénovez votre maison avec</span> IDF
          Environnement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="md:text-xl text-sm md:text-2xl mb-4 max-w-2xl"
        >
          Isolation des murs exterieurs | des murs interieurs | de la toiture |
          des sols | pompe à chaleur Air/air | pompe à chaleur Air/eau | ballon
          thermodynamique sur toute la france
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <QuoteForm
            withArrow
            buttonClassName="flex items-center justify-center gap-2 mt-4"
          />
        </motion.div>
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
