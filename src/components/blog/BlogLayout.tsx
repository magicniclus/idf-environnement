import HeroContact from "@/components/sections/heros/HeroContact";
import Footer from "@/components/sections/footer/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50">
      <HeroContact />
      <main className="flex-1 pb-16">{children}</main>
      <Footer />
    </div>
  );
}
