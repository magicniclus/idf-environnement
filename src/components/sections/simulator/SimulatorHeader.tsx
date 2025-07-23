"use client";

import Image from "next/image";
import Link from "next/link";

const SimulatorHeader = () => {
  return (
    <header className="bg-white py-3 px-4 md:px-12 w-full">
      <div className="max-screen mx-auto flex items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-20">
            <Image 
              src="/logo/logo-black.png" 
              alt="Effy" 
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="ml-4 text-sm md:text-base font-medium text-gray-700">
          Votre simulation en 2 minutes
        </div>
      </div>
    </header>
  );
};

export default SimulatorHeader;
