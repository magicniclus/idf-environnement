import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Composants
import Hero from '@/components/sections/heros/HeroPage';

export const metadata = {
  title: 'Comment ça marche - MaPrimeRénov\' | IDF Environnement',
  description: 'Découvrez le fonctionnement de MaPrimeRénov\', les conditions d\'éligibilité et les étapes pour bénéficier de cette aide pour vos travaux d\'isolation.',
};

export default function CommentCaMarche() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="MaPrimeRénov' - Comment ça marche ?"
        description="Tout comprendre sur l'aide financière pour vos travaux de rénovation énergétique"
        imagePath="/background/maprimerenov-hero.jpg"
      />

      {/* Section Présentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div 
            className="flex flex-col md:flex-row gap-8 items-center opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Qu'est-ce que MaPrimeRénov' ?</h2>
              <p className="text-slate-700 mb-4">
                MaPrimeRénov' est une aide financière de l'État destinée à encourager les travaux de rénovation énergétique dans les logements. Elle remplace le crédit d'impôt pour la transition énergétique (CITE) et les aides de l'Anah "Habiter mieux agilité".
              </p>
              <p className="text-slate-700 mb-4">
                Cette prime est calculée en fonction des revenus du foyer et des économies d'énergie permises par les travaux. Elle est versée directement par l'Agence nationale de l'habitat (Anah).
              </p>
              <p className="text-slate-700">
                Chez IDF Environnement, nous vous accompagnons dans toutes les démarches pour obtenir cette aide et réaliser vos travaux d'isolation dans les meilleures conditions.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/illustrations/maprimerenov-illustration.jpg" 
                alt="MaPrimeRénov'" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Conditions d'éligibilité */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Conditions d'éligibilité</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Pour les propriétaires</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Être propriétaire occupant ou bailleur d'un logement construit depuis au moins 15 ans</li>
                  <li>Le logement doit être votre résidence principale (occupé au moins 8 mois par an)</li>
                  <li>Vous devez vous engager à occuper votre logement pendant au moins 3 ans après les travaux</li>
                  <li>Les travaux doivent être réalisés par une entreprise RGE (Reconnue Garante de l'Environnement)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Pour les travaux</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Les travaux doivent contribuer à une amélioration de la performance énergétique</li>
                  <li>Les équipements et matériaux doivent respecter des critères techniques précis</li>
                  <li>Les travaux ne doivent pas avoir commencé avant le dépôt de la demande</li>
                  <li>Le montant des travaux doit être d'au moins 1000€</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Montants */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Montants de MaPrimeRénov'</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-8">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100 text-left text-slate-900 font-semibold border-b">Type de travaux</th>
                    <th className="py-3 px-4 bg-slate-100 text-center text-slate-900 font-semibold border-b">Bleu<br /><span className="font-normal text-sm">(Très modestes)</span></th>
                    <th className="py-3 px-4 bg-slate-100 text-center text-slate-900 font-semibold border-b">Jaune<br /><span className="font-normal text-sm">(Modestes)</span></th>
                    <th className="py-3 px-4 bg-slate-100 text-center text-slate-900 font-semibold border-b">Violet<br /><span className="font-normal text-sm">(Intermédiaires)</span></th>
                    <th className="py-3 px-4 bg-slate-100 text-center text-slate-900 font-semibold border-b">Rose<br /><span className="font-normal text-sm">(Supérieurs)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-900">Isolation des combles aménagés et aménageables</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">25€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">20€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">15€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">7€/m²</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-900">Isolation des murs par l'extérieur</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">75€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">60€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">40€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">15€/m²</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-900">Isolation des murs par l'intérieur</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">25€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">20€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">15€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">7€/m²</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-900">Isolation des planchers bas</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">25€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">20€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">15€/m²</td>
                    <td className="py-3 px-4 border-b text-center text-slate-900">7€/m²</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-8">
              <p className="text-sm text-slate-700">
                <strong>Note :</strong> Les montants indiqués sont donnés à titre indicatif et peuvent varier. Le montant de l'aide est plafonné à 20 000€ par logement sur 5 ans.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                href="/simuler-mes-aides"
                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 border border-yellow-500 transition-colors duration-300"
              >
                Simuler mon aide MaPrimeRénov'
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Étapes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les étapes pour obtenir MaPrimeRénov'</h2>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              <div className="flex flex-col space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Créer un compte sur maprimerenov.gouv.fr</h3>
                    <p className="text-slate-700">
                      La première étape consiste à créer votre compte sur le site officiel de MaPrimeRénov' et à vérifier votre éligibilité en fonction de vos revenus et de votre situation.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">1</div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Demander des devis</h3>
                    <p className="text-slate-700">
                      Contactez des professionnels RGE pour obtenir des devis détaillés pour vos travaux d'isolation. Chez IDF Environnement, nous vous proposons des devis gratuits et adaptés à vos besoins.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Déposer votre demande</h3>
                    <p className="text-slate-700">
                      Une fois votre devis sélectionné, déposez votre demande d'aide sur le site de MaPrimeRénov' en joignant les documents nécessaires (devis, justificatifs de revenus, etc.).
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">3</div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Confirmation de l'Anah</h3>
                    <p className="text-slate-700">
                      Attendez la confirmation de l'Anah qui vous indiquera le montant de l'aide accordée. Ne commencez pas les travaux avant cette confirmation.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Réalisation des travaux</h3>
                    <p className="text-slate-700">
                      Une fois l'accord obtenu, faites réaliser vos travaux par l'entreprise RGE sélectionnée. Nos équipes qualifiées d'IDF Environnement interviennent dans le respect des normes en vigueur.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">5</div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold relative z-10">6</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">Demande de paiement</h3>
                    <p className="text-slate-700">
                      Une fois les travaux terminés, transmettez votre facture sur votre espace personnel MaPrimeRénov' pour demander le versement de l'aide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre accompagnement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Notre accompagnement MaPrimeRénov'</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Évaluation gratuite</h3>
                <p className="text-slate-700">
                  Nous réalisons une évaluation complète de votre logement pour déterminer les travaux éligibles à MaPrimeRénov' et vous proposer les solutions les plus adaptées.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Assistance administrative</h3>
                <p className="text-slate-700">
                  Nous vous aidons à constituer votre dossier MaPrimeRénov' et à rassembler tous les documents nécessaires pour faciliter vos démarches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Suivi personnalisé</h3>
                <p className="text-slate-700">
                  Un conseiller dédié vous accompagne tout au long de votre projet, de la demande d'aide jusqu'au versement de MaPrimeRénov'.
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
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à bénéficier de MaPrimeRénov' ?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour évaluer votre éligibilité et obtenir un accompagnement personnalisé pour vos travaux d'isolation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/simulation"
                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-white hover:text-yellow-500 transition-colors duration-300"
              >
                Simuler mes aides
              </Link>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-800 hover:text-white transition-colors duration-300"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
