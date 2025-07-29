import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroContact from "@/components/sections/heros/HeroContact";
import Footer from "@/components/sections/footer/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ImageComparison from "@/components/ImageComparaison";

export const metadata = {
  title: "Isolation Thermique par l'Extérieur (ITE) | IDF Environnement",
  description: "Tout savoir sur l'isolation thermique par l'extérieur (ITE) : avantages, techniques, matériaux, aides financières et pourquoi choisir IDF Environnement pour vos travaux.",
  keywords: "isolation thermique extérieure, ITE, isolation murs extérieurs, économies d'énergie, rénovation énergétique, confort thermique, réduction facture chauffage, aide isolation",
};

export default function IsolationMursExterieurs() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroContact />
      
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src="/houses/maison-3.png" 
          alt="Isolation Thermique par l'Extérieur (ITE)" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Isolation Thermique par l'Extérieur</h1>
            <p className="text-white text-lg max-w-2xl mx-auto px-4">
              Améliorez le confort et la performance énergétique de votre logement avec l'ITE
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar with Table of Contents */}
            <div className="w-full lg:w-3/12 mb-8 lg:mb-0">
              <div className="lg:sticky lg:top-24 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Sommaire</h2>
                <nav className="space-y-2">
                  <a href="#quest-ce-que-ite" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Qu'est-ce que l'isolation thermique par l'extérieur ?
                  </a>
                  <a href="#avantages-ite" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Les avantages de l'ITE
                  </a>
                  <a href="#techniques-materiaux" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Techniques et matériaux d'isolation
                  </a>
                  <a href="#aides-financieres" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Aides financières disponibles
                  </a>
                  <a href="#pourquoi-idf" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Pourquoi choisir IDF Environnement ?
                  </a>
                  <a href="#comment-demarrer" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Comment démarrer votre projet d'ITE
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full lg:w-9/12 lg:pl-12">
              <div className="prose max-w-none">
                {/* Alerte d'information importante */}
                {/* <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">
                        <strong>Information importante :</strong> L'aide MaPrimeRénov' est temporairement suspendue pour la rénovation globale individuelle à partir du 23 juin 2025. Les dossiers déposés avant cette date seront traités normalement.
                      </p>
                    </div>
                  </div>
                </div> */}
                
                {/* Introduction */}
                <p className="mb-6">
                  L'isolation thermique par l'extérieur (ITE) est une solution de rénovation énergétique performante qui consiste à envelopper votre maison d'un manteau isolant. Cette technique permet d'améliorer significativement le confort thermique de votre logement tout en réduisant vos factures d'énergie et votre impact environnemental.
                </p>
                
                <p className="mb-6">
                  En plus de ses performances thermiques exceptionnelles, l'ITE offre l'avantage de ne pas réduire votre surface habitable et permet de rénover l'aspect extérieur de votre façade, donnant ainsi un coup de jeune à votre habitation.
                </p>
                
                <ul className="list-disc pl-5 mb-8 space-y-2">
                  <li>Économies d'énergie importantes pouvant atteindre jusqu'à 30% sur vos factures de chauffage</li>
                  <li>Élimination des ponts thermiques responsables des déperditions de chaleur</li>
                  <li>Protection de vos murs contre les agressions climatiques et augmentation de la durée de vie de votre bâtiment</li>
                  <li>Travaux éligibles à plusieurs aides financières dont MaPrimeRénov'</li>
                </ul>
                
                {/* Qu'est-ce que l'isolation thermique par l'extérieur ? */}
                <section id="quest-ce-que-ite" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Qu'est-ce que l'isolation thermique par l'extérieur ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    L'isolation thermique par l'extérieur (ITE) est une technique qui consiste à appliquer un matériau isolant sur les murs extérieurs d'un bâtiment, puis à le recouvrir d'un revêtement de protection et de finition. Cette méthode permet d'envelopper complètement la structure du bâtiment dans une couche isolante continue.
                  </p>
                  
                  <p className="mb-4">
                    Contrairement à l'isolation par l'intérieur, l'ITE préserve l'inertie thermique des murs et traite efficacement les ponts thermiques au niveau des planchers, des balcons et des murs de refend. Elle constitue une solution idéale pour les rénovations énergétiques globales, permettant d'atteindre des performances thermiques optimales.
                  </p>
                  
                  <p className="mb-4">
                    Cette technique est particulièrement adaptée aux bâtiments anciens dont les murs présentent des déperditions thermiques importantes, mais également aux constructions plus récentes nécessitant une amélioration de leur performance énergétique pour répondre aux exigences actuelles en matière d'économies d'énergie et de confort.
                  </p>
                  
                 
                       <div className="my-10">
                       <ImageComparison beforeImage="/prestations/four-reno.jpeg" afterImage="/prestations/four.jpeg" />
                       </div>
                </section>
                
                {/* Les avantages de l'ITE */}
                <section id="avantages-ite" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Les avantages de l'isolation thermique par l'extérieur</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    L'isolation thermique par l'extérieur présente de nombreux avantages qui en font une solution privilégiée pour la rénovation énergétique des bâtiments. Voici les principaux bénéfices que vous pouvez en attendre :
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Performance thermique optimale</h3>
                      <p>L'ITE supprime efficacement les ponts thermiques et assure une enveloppe isolante continue autour du bâtiment, réduisant considérablement les déperditions de chaleur et améliorant le confort thermique été comme hiver.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Économies d'énergie substantielles</h3>
                      <p>Grâce à une meilleure isolation, vous pouvez réduire votre consommation énergétique de 20 à 30%, se traduisant par des économies significatives sur vos factures de chauffage et de climatisation.</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                    <h3 className="font-bold text-slate-800 mb-3">Êtes-vous éligible ?</h3>
                    <p className="mb-4">
                      Afin de savoir à quelles aides et pour quel montant vous êtes éligible, vous pouvez utiliser notre simulateur ou consulter le tableau de synthèse Ma Prime Renov' 2024.
                    </p>
                    <Link 
                      href="/simuler-mes-aides" 
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                    >
                      Je simule mon projet
                    </Link>
                  </div>
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
                      <Image 
                        src="/houses/maison-3.png" 
                        alt="Rénovation énergétique avec MaPrimeRénov'" 
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <p className="text-white text-lg font-medium">
                          IDF Environnement vous accompagne dans vos projets de rénovation énergétique
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Techniques et matériaux d'isolation */}
                <section id="techniques-materiaux" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Techniques et matériaux d'isolation par l'extérieur</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-6">
                    L'isolation thermique par l'extérieur peut être réalisée selon différentes techniques, chacune adaptée à des types de bâtiments spécifiques et offrant des avantages particuliers. Le choix de la technique et des matériaux dépend de plusieurs facteurs : l'architecture de votre maison, votre budget, vos objectifs de performance énergétique et vos préférences esthétiques.
                  </p>
                  
                  <p className="mb-6">
                    Voici les principales techniques d'isolation thermique par l'extérieur :
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-slate-700 text-white p-4">
                        <h3 className="font-bold text-xl">Système sous enduit</h3>
                      </div>
                      <div className="p-5">
                        <p className="mb-4">
                          La technique la plus répandue, consistant à fixer des panneaux isolants sur la façade puis à les recouvrir d'un enduit de finition.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Excellent rapport qualité/prix</li>
                          <li>Large choix de finitions et de couleurs</li>
                          <li>Adapté à la plupart des constructions</li>
                          <li>Finition lisse et homogène</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-slate-700 text-white p-4">
                        <h3 className="font-bold text-xl">Bardage rapporté</h3>
                      </div>
                      <div className="p-5">
                        <p className="mb-4">
                          Technique consistant à installer une ossature sur la façade, puis à y fixer l'isolant et un revêtement de protection (bois, PVC, composite, métal...).
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Aspect esthétique moderne et personnalisable</li>
                          <li>Création d'une lame d'air ventilée</li>
                          <li>Excellente résistance aux intempéries</li>
                          <li>Possibilité de dissimuler des réseaux</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-slate-700 text-white p-4">
                        <h3 className="font-bold text-xl">Vêture et vêtage</h3>
                      </div>
                      <div className="p-5">
                        <p className="mb-4">
                          Systèmes préfabriqués associant l'isolant et le parement dans un même élément, permettant une pose rapide et simplifiée.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Installation rapide et simplifiée</li>
                          <li>Réduction des ponts thermiques</li>
                          <li>Bonne résistance aux chocs</li>
                          <li>Solution idéale pour les rénovations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Les matériaux isolants pour l'ITE</h3>
                  
                  <p className="mb-6">
                    Le choix du matériau isolant est crucial pour garantir la performance et la durabilité de votre isolation thermique par l'extérieur. Chaque matériau présente des caractéristiques spécifiques en termes de performance thermique, d'impact environnemental et de coût.
                  </p>
                  
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="py-3 px-4 text-left border-b">Matériau</th>
                          <th className="py-3 px-4 text-left border-b">Performance thermique</th>
                          <th className="py-3 px-4 text-left border-b">Avantages</th>
                          <th className="py-3 px-4 text-left border-b">Inconvénients</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Polystyrène expansé (PSE)</td>
                          <td className="py-3 px-4 border-b">Bonne (λ = 0,030 à 0,038 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Excellent rapport qualité/prix</li>
                              <li>Léger et facile à poser</li>
                              <li>Résistant à l'humidité</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Impact environnemental modéré</li>
                              <li>Sensible aux UV</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Laine de roche</td>
                          <td className="py-3 px-4 border-b">Bonne (λ = 0,035 à 0,040 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Excellente résistance au feu</li>
                              <li>Bonnes performances acoustiques</li>
                              <li>Perméable à la vapeur d'eau</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Sensible à l'humidité</li>
                              <li>Plus coûteuse que le PSE</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Fibre de bois</td>
                          <td className="py-3 px-4 border-b">Moyenne (λ = 0,038 à 0,050 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Écologique et renouvelable</li>
                              <li>Excellent déphasage thermique</li>
                              <li>Régulation naturelle de l'humidité</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Prix plus élevé</li>
                              <li>Nécessite une protection contre l'humidité</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-blue-800">Conseil d'expert IDF Environnement</h3>
                        <p className="text-blue-700 text-sm">
                          Le choix du matériau isolant doit tenir compte de nombreux facteurs : votre budget, le type de bâtiment, l'exposition de votre façade, vos objectifs de performance énergétique et vos préférences environnementales. Nos experts vous accompagnent dans ce choix pour trouver la solution la plus adaptée à votre situation spécifique.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-800">
                          <strong>Important !</strong> L'isolation thermique par l'extérieur nécessite souvent une autorisation administrative (déclaration préalable de travaux ou permis de construire) et doit respecter les règles d'urbanisme locales. Pour bénéficier des aides financières, les travaux doivent impérativement être réalisés par des professionnels certifiés RGE (Reconnu Garant de l'Environnement).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8">
                    <p className="text-sm text-slate-600 italic">
                      <strong>À savoir :</strong> L'isolation thermique par l'extérieur peut être combinée avec d'autres travaux de rénovation énergétique (remplacement des fenêtres, installation d'une ventilation, changement du système de chauffage) pour maximiser les économies d'énergie et bénéficier de packages d'aides financières plus avantageux.
                    </p>
                  </div>
                  
                  {/* Aides financières disponibles */}
                  <section id="aides-financieres" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Aides financières pour l'isolation thermique par l'extérieur</h3>
                    
                    <p className="mb-4">
                      L'isolation thermique par l'extérieur représente un investissement important, mais plusieurs dispositifs d'aides financières peuvent réduire considérablement votre reste à charge. Ces aides sont cumulables sous certaines conditions.
                    </p>
                    
                    <p className="mb-4">
                      Voici les principales aides auxquelles vous pourriez prétendre pour financer votre projet d'isolation thermique par l'extérieur :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">Les CEE (Certificats d'Économie d'Énergie)</h3>
                        <p className="text-slate-600">
                          Les CEE sont des primes versées par les fournisseurs d'énergie (électricité, gaz, fioul...) pour financer vos travaux de rénovation énergétique. Le montant de cette aide dépend de la nature des travaux, de la zone géographique et de vos revenus.
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">L'éco-prêt à taux zéro</h3>
                        <p className="text-slate-600">
                          Ce prêt sans intérêts peut financer jusqu'à 50 000 € de travaux de rénovation énergétique. Sa durée de remboursement peut aller jusqu'à 20 ans. Il est accessible sans condition de ressources.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">MaPrimeRénov'</h3>
                        <p className="text-slate-600">
                          Cette aide de l'État finance jusqu'à 90% du coût des travaux d'isolation thermique par l'extérieur selon vos revenus. Le montant varie en fonction de votre catégorie de revenus (bleu, jaune, violet ou rose) et peut atteindre 75€/m² pour les ménages aux revenus modérés.
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">TVA à taux réduit</h3>
                        <p className="text-slate-600">
                          Pour les travaux d'isolation thermique par l'extérieur, vous bénéficiez d'une TVA à 5,5% au lieu de 20%, ce qui représente une économie substantielle sur le montant total de votre projet.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                      <p className="font-medium text-slate-800">En résumé</p>
                      <p className="text-slate-600 text-sm">
                        En cumulant ces différentes aides, vous pouvez réduire considérablement le coût de votre projet d'isolation thermique par l'extérieur. IDF Environnement vous accompagne dans toutes les démarches administratives pour obtenir ces aides et optimiser votre plan de financement.
                      </p>
                    </div>
                  </section>
                  
                  {/* Pourquoi choisir IDF Environnement */}
                  <section id="pourquoi-idf" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Pourquoi choisir IDF Environnement pour vos travaux d'isolation thermique par l'extérieur ?</h3>
                    
                    <p className="mb-4">
                      IDF Environnement est votre partenaire de confiance pour tous vos projets d'isolation thermique par l'extérieur en Île-de-France. Notre expertise et notre engagement pour la qualité font de nous le choix privilégié des propriétaires souhaitant améliorer la performance énergétique de leur logement.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-slate-800">Expertise et savoir-faire</h4>
                        </div>
                        <p className="text-slate-600">
                          Avec plus de 15 ans d'expérience dans la rénovation énergétique, nos équipes maîtrisent parfaitement les techniques d'isolation thermique par l'extérieur. Nos artisans sont formés aux dernières innovations et respectent scrupuleusement les normes en vigueur.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-slate-800">Matériaux de qualité</h4>
                        </div>
                        <p className="text-slate-600">
                          Nous sélectionnons uniquement des matériaux de haute qualité, certifiés et performants pour garantir une isolation optimale et durable. Nos partenariats avec les meilleurs fabricants nous permettent de vous proposer un large choix de solutions adaptées à vos besoins.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-slate-800">Accompagnement financier</h4>
                        </div>
                        <p className="text-slate-600">
                          Notre équipe vous accompagne dans toutes les démarches administratives pour obtenir les aides financières auxquelles vous avez droit. Nous vous proposons également des solutions de financement adaptées à votre budget.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">Garanties et certifications</h4>
                        </div>
                        <p className="text-slate-600">
                          IDF Environnement est certifié RGE (Reconnu Garant de l'Environnement), une garantie de qualité et de sérieux. Nous offrons également une garantie décennale sur nos travaux d'isolation thermique par l'extérieur pour votre tranquillité.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-blue-800 text-lg">Notre engagement qualité</h4>
                          <p className="text-blue-700">
                            Chaque projet est suivi de A à Z par un chef de projet dédié qui s'assure de la qualité des travaux et du respect des délais. Nous réalisons systématiquement une visite de contrôle après la fin des travaux pour garantir votre entière satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  {/* Comment démarrer votre projet d'ITE */}
                  <section id="comment-demarrer" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Comment démarrer votre projet d'isolation thermique par l'extérieur ?</h3>
                    
                    <p className="mb-4">
                      Vous êtes convaincu des avantages de l'isolation thermique par l'extérieur et souhaitez vous lancer ? Voici les étapes clés pour mener à bien votre projet avec IDF Environnement :
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Diagnostic initial gratuit</h4>
                          <p className="text-slate-600">
                            Prenez contact avec nos équipes pour bénéficier d'un diagnostic thermique gratuit de votre logement. Ce diagnostic nous permettra d'évaluer précisément vos besoins et de vous proposer les solutions les plus adaptées.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Devis personnalisé</h4>
                          <p className="text-slate-600">
                            Suite au diagnostic, nous vous établissons un devis détaillé et transparent, incluant le coût des matériaux, de la main-d'œuvre et les éventuelles aides financières auxquelles vous pouvez prétendre.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Démarches administratives</h4>
                          <p className="text-slate-600">
                            Nous vous accompagnons dans toutes les démarches administratives : déclaration préalable de travaux, demandes d'aides financières, etc. Notre équipe se charge de constituer les dossiers pour vous simplifier la vie.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Réalisation des travaux</h4>
                          <p className="text-slate-600">
                            Nos équipes d'artisans qualifiés réalisent les travaux dans le respect des normes et des délais convenus. Un chef de projet dédié suit l'avancement du chantier et reste votre interlocuteur privilégié.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4">
                          5
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Réception et garanties</h4>
                          <p className="text-slate-600">
                            À la fin des travaux, nous effectuons avec vous une visite de réception pour vérifier la conformité des travaux. Nous vous remettons toutes les garanties et les documents nécessaires pour justifier de vos travaux d'isolation.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-100 p-6 rounded-lg mb-8">
                      <h4 className="font-bold text-slate-800 mb-2">Prêt à transformer votre logement ?</h4>
                      <p className="text-slate-700 mb-4">
                        L'isolation thermique par l'extérieur est un investissement durable qui améliore considérablement le confort et la valeur de votre logement tout en réduisant vos factures d'énergie.
                      </p>
                      <p className="text-slate-700 mb-4">
                        IDF Environnement vous accompagne à chaque étape de votre projet pour une rénovation réussie et sans stress.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href="/contact" 
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                        >
                          Demander un diagnostic gratuit
                        </Link>
                        <Link 
                          href="/simuler-mes-aides" 
                          className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors text-center font-medium inline-block"
                        >
                          Simuler mes aides financières
                        </Link>
                      </div>
                    </div>
                  </section>
                </section>
                
                {/* Date de mise à jour */}
                <div className="text-sm text-slate-500 italic mb-12">
                  Dernière mise à jour : 23 juillet 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
