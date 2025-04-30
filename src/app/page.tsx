import Certifications from "@/components/sections/certifications/Certifications";
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
      <Partenaires />
      <Faq />
      <Footer />
    </div>
  );
}
