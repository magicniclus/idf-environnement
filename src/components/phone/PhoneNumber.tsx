"use client";

import { PhoneIcon } from "@heroicons/react/24/outline";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PhoneNumber() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80; // Hauteur approximative de la nav
      setIsScrolled(window.scrollY > navHeight);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <a
        href="tel:0644646953"
        className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    );
  }

  if (!isScrolled) return null;

  return (
    <div className="fixed top-[110px] right-20 z-40 bg-slate-100 text-slate-900 py-2 px-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-end">
        <Link
          href="tel:0644646953"
          className="text-lg font-bold hover:underline flex items-center space-x-2 text-green-500"
        >
          <PhoneCallIcon className="w-5 h-5 mr-2 text-green-500" /> 06 44 64 69
          53
        </Link>
        <p className="text-xs">Service d&apos;un appel gratuit</p>
        <p className="text-[8px]">Du lundi au vendredi de 8h30 à 19h</p>
      </div>
    </div>
  );
}
