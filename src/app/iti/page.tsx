import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Composants
import Hero from '@/components/sections/heros/HeroPage';

export const metadata = {
  title: 'ITI - Isolation Thermique par l\'Intérieur | IDF Environnement',
  description: 'Découvrez nos services d\'Isolation Thermique par l\'Intérieur (ITI). Solutions performantes pour améliorer l\'efficacité énergétique de votre logement.',
};

export default function ITIPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Isolation Thermique par l'Intérieur (ITI)"
        description="Améliorez le confort et l'efficacité énergétique de votre logement"
        imagePath="/background/iti-hero.jpg"
      />

      {/* Section Présentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Qu'est-ce que l'Isolation Thermique par l'Intérieur ?</h2>
              <p className="text-slate-700 mb-4">
                L'Isolation Thermique par l'Intérieur (ITI) est une technique qui consiste à ajouter une couche isolante sur les murs intérieurs de votre habitation. Cette solution est particulièrement adaptée lorsque l'isolation par l'extérieur n'est pas possible ou souhaitée.
              </p>
              <p className="text-slate-700 mb-4">
                Chez IDF Environnement, nous utilisons des matériaux isolants de haute qualité pour garantir une isolation optimale et durable, tout en respectant les normes environnementales en vigueur.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 border border-yellow-500 transition-colors duration-300"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/illustrations/iti-illustration.jpg" 
                alt="Isolation Thermique par l'Intérieur" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les avantages de l'ITI</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Économies d'énergie</h3>
                <p className="text-slate-700">
                  Réduisez significativement vos factures de chauffage grâce à une meilleure rétention de la chaleur dans votre logement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Confort thermique</h3>
                <p className="text-slate-700">
                  Profitez d'une température intérieure stable et agréable, été comme hiver, pour un confort optimal.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Aides financières</h3>
                <p className="text-slate-700">
                  Bénéficiez des différentes aides de l'État comme MaPrimeRénov' et les primes CEE pour financer vos travaux d'isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Processus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Notre processus d'installation</h2>
            
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">1</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Diagnostic initial</h3>
                  <p className="text-slate-700">
                    Nos experts réalisent une évaluation complète de votre logement pour déterminer les besoins spécifiques en isolation et vous proposer les solutions les plus adaptées.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">2</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Devis détaillé</h3>
                  <p className="text-slate-700">
                    Nous vous fournissons un devis transparent et détaillé, incluant les matériaux, la main-d'œuvre et les délais d'exécution, ainsi que les aides financières auxquelles vous pouvez prétendre.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">3</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Installation professionnelle</h3>
                  <p className="text-slate-700">
                    Nos équipes qualifiées procèdent à l'installation de l'isolation intérieure avec soin et précision, en respectant les normes en vigueur et en minimisant les désagréments.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">4</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Suivi et garantie</h3>
                  <p className="text-slate-700">
                    Nous assurons un suivi après l'installation et offrons une garantie sur nos travaux pour vous garantir une tranquillité d'esprit totale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 border border-yellow-500 transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à améliorer l'isolation de votre logement ?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour bénéficier d'un diagnostic gratuit et découvrir comment l'ITI peut transformer votre habitat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 transition-colors duration-300"
              >
                Demander un devis
              </Link>
              <Link 
                href="/simuler-mes-aides"
                className="inline-block px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-800 hover:text-white transition-colors duration-300"
              >
                Simuler mes aides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
