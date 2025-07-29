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
  return (
    <div className="relative">
      <Hero />
      <Certifications />
      <Fonctionnement />
      <Prestation />
      <div className="mb-10">
      <ImageComparison beforeImage="/prestations/four-reno.jpeg" afterImage="/prestations/four.jpeg" />
      </div>
      <Etapes />
      <Partenaires />
      <Faq />
      <Footer />
    </div>
  );
}
