import Fonctionnement from "@/components/sections/fonctionnement/Fonctionnement";
import Hero from "@/components/sections/heros/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Fonctionnement />
    </div>
  );
}
