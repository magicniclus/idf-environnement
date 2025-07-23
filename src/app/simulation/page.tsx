import React from 'react';
import Link from 'next/link';

// Composants
import Hero from '@/components/sections/heros/HeroPage';

export const metadata = {
  title: 'Simulation des aides financières | IDF Environnement',
  description: 'Simulez les aides financières disponibles pour vos travaux d\'isolation et de rénovation énergétique avec notre outil simple et rapide.',
};

export default function SimulationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Simulateur d'aides financières"
        description="Estimez rapidement les aides auxquelles vous pouvez prétendre pour vos travaux d'isolation"
        imagePath="/background/simulation-hero.jpg"
      />

      {/* Section Formulaire de Simulation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Estimez vos aides en quelques clics</h2>
              <p className="text-slate-700 mb-8 text-center">
                Remplissez ce formulaire pour obtenir une estimation des aides financières disponibles pour vos travaux d'isolation.
              </p>
              
              <form className="space-y-6">
                {/* Type de logement */}
                <div>
                  <label htmlFor="housing-type" className="block text-sm font-medium text-slate-700 mb-1">Type de logement</label>
                  <select 
                    id="housing-type" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="house">Maison individuelle</option>
                    <option value="apartment">Appartement</option>
                  </select>
                </div>
                
                {/* Année de construction */}
                <div>
                  <label htmlFor="construction-year" className="block text-sm font-medium text-slate-700 mb-1">Année de construction</label>
                  <select 
                    id="construction-year" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="before-1948">Avant 1948</option>
                    <option value="1948-1974">1948 - 1974</option>
                    <option value="1975-1990">1975 - 1990</option>
                    <option value="1991-2005">1991 - 2005</option>
                    <option value="after-2005">Après 2005</option>
                  </select>
                </div>
                
                {/* Surface */}
                <div>
                  <label htmlFor="surface" className="block text-sm font-medium text-slate-700 mb-1">Surface habitable (m²)</label>
                  <input 
                    type="number" 
                    id="surface" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: 100"
                  />
                </div>
                
                {/* Type de chauffage */}
                <div>
                  <label htmlFor="heating-type" className="block text-sm font-medium text-slate-700 mb-1">Type de chauffage actuel</label>
                  <select 
                    id="heating-type" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="electric">Électrique</option>
                    <option value="gas">Gaz</option>
                    <option value="fuel">Fioul</option>
                    <option value="wood">Bois</option>
                    <option value="heat-pump">Pompe à chaleur</option>
                  </select>
                </div>
                
                {/* Type de travaux */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Travaux envisagés</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="work-combles" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="work-combles" className="ml-2 text-sm text-slate-700">Isolation des combles</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="work-walls" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="work-walls" className="ml-2 text-sm text-slate-700">Isolation des murs</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="work-floor" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="work-floor" className="ml-2 text-sm text-slate-700">Isolation des planchers</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="work-windows" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="work-windows" className="ml-2 text-sm text-slate-700">Remplacement des fenêtres</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="work-heating" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="work-heating" className="ml-2 text-sm text-slate-700">Changement du système de chauffage</label>
                    </div>
                  </div>
                </div>
                
                {/* Revenus */}
                <div>
                  <label htmlFor="income" className="block text-sm font-medium text-slate-700 mb-1">Revenus annuels du foyer</label>
                  <select 
                    id="income" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="very-modest">Moins de 21 123 € (1 personne)</option>
                    <option value="modest">Entre 21 123 € et 25 714 € (1 personne)</option>
                    <option value="intermediate">Entre 25 714 € et 38 184 € (1 personne)</option>
                    <option value="higher">Plus de 38 184 € (1 personne)</option>
                  </select>
                  <p className="text-xs text-slate-500 mt-1">
                    Pour un foyer de plusieurs personnes, consultez les barèmes complets sur notre page dédiée aux aides.
                  </p>
                </div>
                
                {/* Département */}
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-1">Département</label>
                  <input 
                    type="text" 
                    id="department" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: 75"
                    maxLength={3}
                  />
                </div>
                
                {/* Coordonnées */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Vos coordonnées</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstname" className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                      <input 
                        type="text" 
                        id="firstname" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastname" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                      <input 
                        type="text" 
                        id="lastname" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="consent" className="ml-2 text-sm text-slate-700">
                        J'accepte de recevoir les résultats de ma simulation et d'être contacté par IDF Environnement pour discuter de mon projet.
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Obtenir ma simulation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Pourquoi utiliser notre simulateur ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Rapide et simple</h3>
                <p className="text-slate-700">
                  En moins de 2 minutes, obtenez une estimation personnalisée des aides auxquelles vous pouvez prétendre pour vos travaux d'isolation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Précis et à jour</h3>
                <p className="text-slate-700">
                  Notre simulateur prend en compte les derniers barèmes et conditions d'éligibilité des différentes aides financières disponibles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Conseils personnalisés</h3>
                <p className="text-slate-700">
                  Suite à votre simulation, un expert IDF Environnement vous contacte pour vous proposer des solutions adaptées à votre situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Aides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les aides financières disponibles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">MaPrimeRénov'</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Aide principale de l'État pour la rénovation énergétique, accessible à tous les propriétaires selon leurs revenus.
                </p>
                <Link 
                  href="/comment-ca-marche"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Primes CEE</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Les Certificats d'Économies d'Énergie permettent d'obtenir des primes pour vos travaux d'isolation et de chauffage.
                </p>
                <Link 
                  href="/primes-cee"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Éco-PTZ</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Prêt à taux zéro pour financer vos travaux de rénovation énergétique, sans conditions de ressources.
                </p>
                <Link 
                  href="/eco-ptz"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">La simulation est-elle gratuite ?</h3>
                <p className="text-slate-700">
                  Oui, notre simulateur d'aides financières est totalement gratuit et sans engagement. Vous pouvez l'utiliser autant de fois que vous le souhaitez pour estimer les aides disponibles pour différents types de travaux.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Les résultats sont-ils fiables ?</h3>
                <p className="text-slate-700">
                  Notre simulateur utilise les barèmes officiels des différentes aides et prend en compte les critères d'éligibilité actuels. Cependant, les montants indiqués sont des estimations et peuvent varier en fonction de l'étude approfondie de votre dossier et des éventuelles évolutions réglementaires.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Puis-je cumuler plusieurs aides ?</h3>
                <p className="text-slate-700">
                  Oui, dans de nombreux cas, il est possible de cumuler différentes aides pour financer vos travaux de rénovation énergétique. Notre simulateur prend en compte ces possibilités de cumul et vous indique les combinaisons optimales pour maximiser vos aides.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Comment obtenir ces aides après la simulation ?</h3>
                <p className="text-slate-700">
                  Après la simulation, un conseiller IDF Environnement vous contacte pour vous expliquer les démarches à suivre pour obtenir ces aides. Nous pouvons vous accompagner dans la constitution de vos dossiers de demande d'aide et la réalisation de vos travaux par nos équipes qualifiées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à connaître vos aides ?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Utilisez notre simulateur dès maintenant ou contactez-nous directement pour un accompagnement personnalisé dans votre projet de rénovation énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 transition-colors duration-300"
              >
                Nous contacter
              </Link>
              <Link 
                href="/rendez-vous"
                className="inline-block px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-800 hover:text-white transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
