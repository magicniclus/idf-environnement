import Certifications from "@/components/sections/certifications/Certifications";
import Faq from "@/components/sections/faq/Faq";
import Footer from "@/components/sections/footer/Footer";
import Fonctionnement from "@/components/sections/fonctionnement/Fonctionnement";
import Hero from "@/components/sections/heros/Hero";
import Prestation from "@/components/sections/prestation/Prestation";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Certifications />
      <Fonctionnement />
      <Prestation />
      <Faq />
      <Footer />
    </div>
  );
}
