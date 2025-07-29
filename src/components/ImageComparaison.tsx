"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageComparaisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  className = '',
}: ImageComparaisonProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    
    // Limiter la position entre 0 et la largeur du conteneur
    x = Math.max(0, Math.min(x, rect.width));
    
    // Convertir en pourcentage
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  // Gestion des événements souris
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  // Gestion des événements tactiles
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.touches[0].clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Gestion des événements de souris globaux
  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging]);

  // Gestion des événements tactiles globaux
  const handleGlobalTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.touches[0].clientX);
  }, [isDragging]);

  // Nettoyage des événements
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleGlobalMouseMove, handleGlobalTouchMove]);

  return (
    <div 
      className={`relative w-full h-[500px] max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg select-none ${className}`}
      ref={containerRef}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* Image d'après (en arrière-plan) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt="Après"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Image d'avant qui prend toute la largeur mais est masquée par le conteneur */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{
          width: '100%',
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <div className="w-full h-full">
          <Image
            src={beforeImage}
            alt="Avant"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Contrôle de glissement */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg flex flex-col items-center justify-center z-10"
        style={{
          left: `calc(${position}% - 1px)`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
          <div className="flex justify-center items-center ">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Étiquettes */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
        {afterLabel}
      </div>
    </div>
  );
}
