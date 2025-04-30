"use client";

import Footer from "@/components/sections/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
