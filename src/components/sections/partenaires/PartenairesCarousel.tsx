"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const certificates = [
  {
    src: "/logo/partenaires/bouygues.png",
    alt: "Bouygues",
  },
  {
    src: "/logo/partenaires/vinci.avif",
    alt: "Vinci",
  },
  {
    src: "/logo/partenaires/3f.png",
    alt: "3F",
  },
  {
    src: "/logo/partenaires/seqens.png",
    alt: "Seqens",
  },
  {
    src: "/logo/partenaires/action-logement.png",
    alt: "Action Logement",
  },
];

export default function PartenairesCarousel() {
  return (
    <section className="w-full bg-white md:hidden overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 py-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[200px] mx-auto relative"
        >
          <CarouselContent>
            {certificates.map((cert) => (
              <CarouselItem key={cert.alt}>
                <div className="w-auto h-20 relative mx-auto">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 h-8 w-8 border-black"
            variant="default"
          />
          <CarouselNext
            className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 h-8 w-8 border-black"
            variant="default"
          />
        </Carousel>
      </div>
    </section>
  );
}
