import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroContact from "@/components/sections/heros/HeroContact";
import Footer from "@/components/sections/footer/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Isolation des Combles Perdus et Aménageables | IDF Environnement",
  description: "Découvrez nos solutions d'isolation des combles perdus et aménageables : techniques, matériaux, aides financières et accompagnement personnalisé pour réduire vos factures d'énergie.",
  keywords: "isolation combles, combles perdus, combles aménageables, économies d'énergie, rénovation énergétique, confort thermique, réduction facture chauffage, aide isolation combles, laine de verre, ouate de cellulose",
};

export default function IsolationCombles() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroContact />
      
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src="/houses/maison-2.png" 
          alt="Isolation des Combles Perdus et Aménageables" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Isolation des Combles</h1>
            <p className="text-white text-lg max-w-2xl mx-auto px-4">
              Optimisez votre confort thermique et réduisez vos factures avec une isolation de combles performante
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
                  <a href="#quest-ce-que-combles" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Qu'est-ce que l'isolation des combles ?
                  </a>
                  <a href="#avantages-combles" className="block text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Les avantages de l'isolation des combles
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
                    Comment démarrer votre projet d'isolation
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
                  L'isolation des combles est l'une des solutions de rénovation énergétique les plus efficaces et rentables. Qu'il s'agisse de combles perdus ou aménageables, cette intervention permet de réduire considérablement les déperditions thermiques de votre logement, sachant que jusqu'à 30% de la chaleur s'échappe par le toit d'une maison mal isolée.
                </p>
                
                <p className="mb-6">
                  Avec un excellent rapport coût-efficacité, l'isolation des combles vous permet de réaliser des économies significatives sur vos factures de chauffage tout en améliorant votre confort été comme hiver et en valorisant votre patrimoine immobilier.
                </p>
                
                <ul className="list-disc pl-5 mb-8 space-y-2">
                  <li>Économies d'énergie importantes pouvant atteindre jusqu'à 30% sur vos factures de chauffage</li>
                  <li>Amélioration du confort thermique en hiver comme en été</li>
                  <li>Valorisation de votre bien immobilier et création d'espace habitable supplémentaire (combles aménageables)</li>
                  <li>Travaux rapides et éligibles à plusieurs aides financières dont MaPrimeRénov'</li>
                </ul>
                
                {/* Qu'est-ce que l'isolation des combles ? */}
                <section id="quest-ce-que-combles" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Qu'est-ce que l'isolation des combles ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    L'isolation des combles est une technique qui consiste à installer des matériaux isolants dans l'espace situé sous la toiture de votre maison. Cette intervention permet de créer une barrière thermique efficace qui limite les échanges de chaleur entre l'intérieur et l'extérieur de votre habitation.
                  </p>
                  
                  <p className="mb-4">
                    On distingue deux types principaux d'isolation des combles, selon la configuration et l'usage prévu pour cet espace :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Isolation des combles perdus</h3>
                      <p>Lorsque les combles ne sont pas destinés à être habités, on opte généralement pour une isolation par soufflage ou par déroulage de matériaux isolants directement sur le plancher des combles. Cette solution est rapide à mettre en œuvre et très économique.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Isolation des combles aménageables</h3>
                      <p>Si vous souhaitez transformer vos combles en espace habitable, l'isolation se fait sous les rampants de la toiture, généralement entre les chevrons ou en dessous de ceux-ci, préservant ainsi tout l'espace intérieur pour l'aménagement.</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    L'isolation des combles est considérée comme l'un des investissements les plus rentables en matière de rénovation énergétique, avec un retour sur investissement souvent inférieur à 5 ans grâce aux économies de chauffage générées et aux différentes aides financières disponibles.
                  </p>
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
                      <Image 
                        src="/houses/maison-4.png" 
                        alt="Isolation des combles d'une maison" 
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <p className="text-white text-lg font-medium">
                          L'isolation des combles, une solution efficace et rentable pour améliorer la performance énergétique de votre logement
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Les avantages de l'isolation des combles */}
                <section id="avantages-combles" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Les avantages de l'isolation des combles</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    L'isolation des combles offre de nombreux avantages qui en font l'une des interventions les plus rentables en matière de rénovation énergétique. Voici les principaux bénéfices que vous pouvez en attendre :
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Retour sur investissement rapide</h3>
                      <p>L'isolation des combles est l'intervention qui offre le meilleur rapport coût-efficacité en rénovation énergétique, avec un retour sur investissement souvent inférieur à 5 ans grâce aux économies de chauffage réalisées.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Économies d'énergie substantielles</h3>
                      <p>Une isolation de combles performante peut réduire votre consommation énergétique de 25 à 30%, sachant que jusqu'à un tiers des déperditions thermiques d'une maison se font par le toit.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Confort thermique amélioré</h3>
                      <p>L'isolation des combles limite les variations de température, maintenant votre logement frais en été et chaud en hiver, pour un confort optimal tout au long de l'année.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Valorisation immobilière</h3>
                      <p>Une bonne isolation des combles améliore le DPE (Diagnostic de Performance Énergétique) de votre logement, augmentant sa valeur sur le marché immobilier et facilitant sa vente ou sa location.</p>
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
                {/* <section id="techniques-materiaux" className="mb-12 scroll-mt-24"> */}
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Techniques et matériaux d'isolation des combles</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-6">
                    L'isolation des combles peut être réalisée selon différentes techniques, chacune adaptée à la configuration de vos combles et à l'usage que vous souhaitez en faire. Le choix de la technique et des matériaux dépend de plusieurs facteurs : combles perdus ou aménageables, votre budget, vos objectifs de performance énergétique et les contraintes techniques de votre logement.
                  </p>
                  
                  <p className="mb-6">
                    Voici les principales techniques d'isolation des combles :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-slate-700 text-white p-4">
                        <h3 className="font-bold text-xl">Isolation des combles perdus</h3>
                      </div>
                      <div className="p-5">
                        <p className="mb-4">
                          Pour les combles non aménageables, deux techniques principales sont utilisées :
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-sm">
                          <li>
                            <strong>Isolation par soufflage</strong> : Consiste à projeter mécaniquement un isolant en vrac (laine de verre, ouate de cellulose) sur le plancher des combles. Idéal pour les surfaces irrégulières et difficiles d'accès.
                          </li>
                          <li>
                            <strong>Isolation par déroulage</strong> : Installation de rouleaux ou panneaux d'isolant directement sur le plancher des combles. Solution économique et facile à mettre en œuvre pour les combles accessibles.
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-slate-700 text-white p-4">
                        <h3 className="font-bold text-xl">Isolation des combles aménageables</h3>
                      </div>
                      <div className="p-5">
                        <p className="mb-4">
                          Pour les combles destinés à être transformés en espace habitable :
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-sm">
                          <li>
                            <strong>Isolation entre chevrons</strong> : L'isolant est placé entre les chevrons de la charpente, puis recouvert d'un parement. Optimise l'espace mais nécessite une épaisseur de chevrons suffisante.
                          </li>
                          <li>
                            <strong>Isolation sous chevrons</strong> : Une couche d'isolant supplémentaire est posée sous les chevrons. Améliore la performance thermique mais réduit légèrement la hauteur sous plafond.
                          </li>
                          <li>
                            <strong>Isolation par sarking</strong> : L'isolant est placé sur la toiture, par l'extérieur. Solution idéale lors d'une rénovation de toiture, permettant de préserver tout l'espace intérieur.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Les matériaux isolants pour les combles</h3>
                  
                  <p className="mb-6">
                    Le choix du matériau isolant est déterminant pour garantir la performance et la durabilité de votre isolation de combles. Chaque matériau présente des caractéristiques spécifiques en termes de performance thermique, d'impact environnemental et de coût.
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
                          <td className="py-3 px-4 border-b font-medium">Laine de verre</td>
                          <td className="py-3 px-4 border-b">Bonne (λ = 0,030 à 0,040 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Excellent rapport qualité/prix</li>
                              <li>Légère et facile à manipuler</li>
                              <li>Disponible en rouleaux, panneaux ou vrac</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Peut irriter la peau lors de la pose</li>
                              <li>Performance réduite si compressée ou humide</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Ouate de cellulose</td>
                          <td className="py-3 px-4 border-b">Bonne (λ = 0,038 à 0,042 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Écologique (papier recyclé)</li>
                              <li>Excellentes performances acoustiques</li>
                              <li>Régulation naturelle de l'humidité</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Nécessite un équipement spécifique pour le soufflage</li>
                              <li>Sensible à l'humidité excessive</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b font-medium">Laine de roche</td>
                          <td className="py-3 px-4 border-b">Bonne (λ = 0,035 à 0,045 W/m.K)</td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Excellente résistance au feu</li>
                              <li>Très bonnes performances acoustiques</li>
                              <li>Résistante à la compression</li>
                            </ul>
                          </td>
                          <td className="py-3 px-4 border-b">
                            <ul className="list-disc pl-4 text-sm">
                              <li>Plus lourde que la laine de verre</li>
                              <li>Légèrement plus coûteuse</li>
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
                          Pour une isolation des combles optimale, l'épaisseur d'isolant est un facteur clé. Nous recommandons généralement une épaisseur de 30 à 40 cm pour atteindre une résistance thermique (R) d'au moins 7 m².K/W, conforme aux standards actuels et aux exigences des aides financières. Nos experts vous conseillent sur la solution la plus adaptée à votre configuration spécifique.
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
                          <strong>Important !</strong> Avant d'isoler vos combles, assurez-vous que la charpente et la toiture sont en bon état et que les problèmes d'humidité éventuels sont traités. Pour bénéficier des aides financières, les travaux doivent impérativement être réalisés par des professionnels certifiés RGE (Reconnu Garant de l'Environnement) et atteindre les performances thermiques minimales exigées.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8">
                    <p className="text-sm text-slate-600 italic">
                      <strong>À savoir :</strong> L'isolation des combles peut être combinée avec d'autres travaux de rénovation énergétique (installation d'une VMC, remplacement des fenêtres de toit, changement du système de chauffage) pour maximiser les économies d'énergie et bénéficier de packages d'aides financières plus avantageux dans le cadre d'une rénovation globale.
                    </p>
                  </div>
                  
                  {/* Aides financières disponibles */}
                  <section id="aides-financieres" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Aides financières pour l'isolation des combles</h3>
                    
                    <p className="mb-4">
                      L'isolation des combles est l'un des travaux de rénovation énergétique les plus soutenus par les dispositifs d'aides financières, ce qui permet de réduire considérablement votre investissement initial. Dans certains cas, pour les ménages aux revenus modérés, le reste à charge peut être quasi nul.
                    </p>
                    
                    <p className="mb-4">
                      Voici les principales aides auxquelles vous pourriez prétendre pour financer votre projet d'isolation des combles :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">MaPrimeRénov'</h3>
                        <p className="text-slate-600">
                          Cette aide de l'État peut financer une partie importante de vos travaux d'isolation des combles. Le montant varie selon votre catégorie de revenus (bleu, jaune, violet ou rose) et peut atteindre 25€/m² pour les combles perdus et 75€/m² pour les rampants de toiture (combles aménageables).
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">Les CEE (Certificats d'Économie d'Énergie)</h3>
                        <p className="text-slate-600">
                          Les CEE offrent des primes particulièrement avantageuses pour l'isolation des combles. Le montant dépend de la surface à isoler, de votre zone géographique et de vos revenus. Pour les ménages modérés, cette prime peut couvrir une grande partie du coût des travaux.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">TVA à taux réduit</h3>
                        <p className="text-slate-600">
                          Les travaux d'isolation des combles bénéficient d'une TVA à 5,5% au lieu de 20%, ce qui représente une économie substantielle sur le montant total de votre projet. Cette réduction s'applique aussi bien aux matériaux qu'à la main-d'œuvre.
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-slate-800 mb-3">L'éco-prêt à taux zéro</h3>
                        <p className="text-slate-600">
                          Ce prêt sans intérêts peut financer jusqu'à 50 000 € de travaux de rénovation énergétique, dont l'isolation des combles. Sa durée de remboursement peut aller jusqu'à 20 ans et il est accessible sans condition de ressources.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                      <p className="font-medium text-slate-800">En résumé</p>
                      <p className="text-slate-600 text-sm">
                        L'isolation des combles est l'un des travaux de rénovation énergétique les plus rentables, avec un retour sur investissement rapide grâce aux économies d'énergie et aux nombreuses aides disponibles. IDF Environnement vous accompagne dans toutes les démarches administratives pour obtenir ces aides et optimiser votre plan de financement.
                      </p>
                    </div>
                  </section>
                  
                  {/* Pourquoi choisir IDF Environnement */}
                  <section id="pourquoi-idf" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Pourquoi choisir IDF Environnement pour l'isolation de vos combles ?</h2>
                    <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                    
                    <p className="mb-6">
                      IDF Environnement est votre spécialiste de confiance pour tous vos projets d'isolation de combles en Île-de-France. Notre expertise technique et notre engagement envers l'excellence nous permettent de vous proposer des solutions d'isolation performantes, durables et parfaitement adaptées à la configuration de vos combles.
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Entreprise certifiée RGE</h3>
                        </div>
                        <p className="text-slate-600">
                          Notre certification RGE (Reconnu Garant de l'Environnement) vous garantit l'accès à toutes les aides financières disponibles pour vos travaux d'isolation de combles, pouvant couvrir une grande partie de votre investissement.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Matériaux performants</h3>
                        </div>
                        <p className="text-slate-600">
                          Nous utilisons exclusivement des isolants de haute qualité, offrant d'excellentes performances thermiques et acoustiques, adaptés aux spécificités des combles perdus ou aménageables.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Techniciens spécialisés</h3>
                        </div>
                        <p className="text-slate-600">
                          Nos équipes sont spécifiquement formées aux techniques d'isolation des combles et maîtrisent parfaitement les spécificités de ce type d'intervention, garantissant un travail soigné et durable.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Accompagnement complet</h3>
                        </div>
                        <p className="text-slate-600">
                          Nous gérons pour vous toutes les démarches administratives liées aux aides financières (MaPrimeRénov', CEE), vous permettant de bénéficier d'un reste à charge minimal pour vos travaux.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Garanties solides</h3>
                        </div>
                        <p className="text-slate-600">
                          Tous nos travaux d'isolation de combles sont couverts par notre garantie décennale, et nous vous fournissons également les attestations nécessaires pour valoriser votre bien immobilier (attestation thermique).
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">Intervention rapide</h3>
                        </div>
                        <p className="text-slate-600">
                          L'isolation des combles est l'une des interventions les plus rapides en rénovation énergétique. Nous réalisons la plupart des chantiers en 1 à 2 jours seulement, limitant au maximum les désagréments.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Notre méthode d'intervention</h3>
                      <p className="mb-4">
                        Pour garantir une isolation de combles parfaitement adaptée à votre logement, nous suivons un processus rigoureux :
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Visite technique et diagnostic thermique complet de vos combles</li>
                        <li>Recommandation personnalisée sur la technique d'isolation et les matériaux les plus adaptés</li>
                        <li>Devis détaillé avec estimation précise des aides financières disponibles</li>
                        <li>Préparation minutieuse des combles avant isolation (traitement préventif, électricité, etc.)</li>
                        <li>Mise en œuvre soignée de l'isolation avec respect des normes en vigueur</li>
                        <li>Contrôle qualité et remise des attestations de fin de travaux</li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center">
                      <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors">
                        Demander un devis gratuit
                        <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </section>
                  
                  {/* Comment démarrer votre projet d'isolation des combles */}
                  <section id="comment-demarrer" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Comment démarrer votre projet d'isolation des combles ?</h2>
                    <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                    
                    <p className="mb-6">
                      Vous êtes convaincu des avantages de l'isolation des combles et souhaitez vous lancer ? Voici les étapes clés pour mener à bien votre projet avec IDF Environnement :
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Diagnostic initial gratuit</h4>
                          <p className="text-slate-600">
                            Prenez contact avec nos équipes pour bénéficier d'un diagnostic thermique gratuit de vos combles. Ce diagnostic nous permettra d'évaluer précisément la configuration de vos combles, leur accessibilité et les solutions d'isolation les plus adaptées.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Devis personnalisé</h4>
                          <p className="text-slate-600">
                            Suite au diagnostic, nous vous établissons un devis détaillé et transparent, incluant le coût des matériaux, de la main-d'œuvre et une estimation précise des aides financières auxquelles vous pouvez prétendre pour réduire votre investissement.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Démarches administratives</h4>
                          <p className="text-slate-600">
                            Nous prenons en charge toutes les démarches administratives pour l'obtention des aides financières (MaPrimeRénov', CEE, etc.). Notre équipe constitue les dossiers et s'assure que vous bénéficiez de toutes les aides auxquelles vous avez droit.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Réalisation des travaux</h4>
                          <p className="text-slate-600">
                            Nos techniciens spécialisés réalisent l'isolation de vos combles dans le respect des normes et des délais convenus. Pour les combles perdus, l'intervention peut souvent être réalisée en une seule journée, minimisant ainsi les désagréments.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                          5
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">Réception et garanties</h4>
                          <p className="text-slate-600">
                            À la fin des travaux, nous effectuons avec vous une visite de réception pour vérifier la qualité de l'isolation. Nous vous remettons toutes les garanties et attestations nécessaires, notamment l'attestation thermique valorisant votre bien immobilier.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                      <h4 className="font-bold text-slate-800 mb-2">Prêt à améliorer le confort de votre logement ?</h4>
                      <p className="text-slate-700 mb-4">
                        L'isolation des combles est l'investissement le plus rentable en rénovation énergétique, avec un retour sur investissement rapide et des économies immédiates sur vos factures de chauffage.
                      </p>
                      <p className="text-slate-700 mb-4">
                        IDF Environnement vous accompagne à chaque étape de votre projet pour une isolation performante, durable et réalisée dans les règles de l'art.
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
