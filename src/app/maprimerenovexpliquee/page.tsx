import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroContact from "@/components/sections/heros/HeroContact";
import Footer from "@/components/sections/footer/Footer";

export const metadata = {
  title: "MaPrimeRénov' expliquée | IDF Environnement",
  description: "Tout savoir sur MaPrimeRénov', l'aide financière pour vos travaux de rénovation énergétique. Conditions d'éligibilité, montants, démarches et conseils.",
  keywords: "MaPrimeRénov, aide rénovation énergétique, prime rénovation, travaux isolation, chauffage écologique, économies d'énergie, rénovation maison",
};

export default function MaPrimeRenovExpliquee() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroContact />
      
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src="/background/maprimerenov.png" 
          alt="MaPrimeRénov' expliquée" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">MaPrimeRénov' expliquée</h1>
            <p className="text-white text-lg max-w-2xl mx-auto px-4">
              Tout ce que vous devez savoir sur l'aide financière pour vos travaux de rénovation énergétique
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
                  <a href="#quest-ce-que" className="block text-blue-600 hover:text-blue-800 hover:underline">
                    Qu'est-ce que MaPrimeRénov' ?
                  </a>
                  <a href="#qui-est-eligible" className="block text-blue-600 hover:text-blue-800 hover:underline">
                    Qui est éligible à cette prime ?
                  </a>
                  <a href="#comment-fonctionne" className="block text-blue-600 hover:text-blue-800 hover:underline">
                    Comment fonctionne MaPrimeRénov' ?
                  </a>
                  <div className="pl-4 space-y-1 border-l-2 border-slate-200">
                    <a href="#parcours-par-geste" className="block text-slate-600 hover:text-blue-800 hover:underline text-sm">
                      Parcours par geste
                    </a>
                    <a href="#parcours-accompagne" className="block text-slate-600 hover:text-blue-800 hover:underline text-sm">
                      Parcours accompagné
                    </a>
                    <a href="#copropriete" className="block text-slate-600 hover:text-blue-800 hover:underline text-sm">
                      MaPrimeRénov' Copropriété
                    </a>
                  </div>
                  <a href="#cumulable-autres-aides" className="block text-blue-600 hover:text-blue-800 hover:underline">
                    Cumulable avec d'autres aides ?
                  </a>
                  <a href="#demarches" className="block text-blue-600 hover:text-blue-800 hover:underline">
                    Démarches pour bénéficier de l'aide
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
                  MaPrimeRénov' est l'aide principale de l'État pour la rénovation énergétique des logements. Lancée le 1er janvier 2020, elle a pour objectif de financer les travaux d'isolation, de chauffage, de ventilation ou d'audit énergétique d'une maison individuelle ou d'un appartement en habitat collectif.
                </p>
                
                <p className="mb-6">
                  Cette aide s'adresse à tous les propriétaires, qu'ils occupent leur logement ou qu'ils le mettent en location. Elle est calculée en fonction des revenus du foyer et du gain écologique permis par les travaux.
                </p>
                
                <ul className="list-disc pl-5 mb-8 space-y-2">
                  <li>MaPrimeRénov' remplace le crédit d'impôt pour la transition énergétique (CITE) et les aides de l'Anah "Habiter mieux agilité".</li>
                  <li>Elle est versée directement après la fin des travaux, ce qui représente une avancée par rapport au crédit d'impôt qui n'était perçu que l'année suivant la réalisation des travaux.</li>
                  <li>Le montant de la prime est forfaitaire et varie selon les revenus du foyer, la localisation du logement et la nature des travaux.</li>
                </ul>
                
                {/* Qu'est-ce que MaPrimeRénov' ? */}
                <section id="quest-ce-que" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Qu'est-ce que MaPrimeRénov' ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    MaPrimeRénov' est une aide financière destinée à encourager les travaux de rénovation énergétique dans les logements. Elle est issue de la fusion du Crédit d'Impôt pour la Transition Énergétique (CITE) et des aides de l'Agence Nationale de l'Habitat (Anah) "Habiter Mieux Agilité".
                  </p>
                  
                  <p className="mb-4">
                    Cette aide est versée par l'Anah (Agence nationale de l'habitat) et vise à soutenir financièrement les propriétaires qui souhaitent réaliser des travaux de rénovation énergétique dans leur logement, qu'il s'agisse de leur résidence principale ou d'un bien mis en location.
                  </p>
                  
                  <p className="mb-4">
                    En 2025, MaPrimeRénov' a évolué pour encourager davantage les rénovations d'ampleur, tout en maintenant un soutien pour les travaux ponctuels. L'objectif est de favoriser une approche globale de la rénovation énergétique, plus efficace pour réduire la consommation d'énergie et les émissions de gaz à effet de serre.
                  </p>
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
                      <Image 
                        src="/houses/maison-2.png" 
                        alt="Rénovation énergétique avec MaPrimeRénov'" 
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <p className="text-white text-lg font-medium">
                          Améliorez la performance énergétique de votre logement avec MaPrimeRénov'
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Qui est éligible à cette prime ? */}
                <section id="qui-est-eligible" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Qui est éligible à cette prime ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    MaPrimeRénov' s'adresse à une large gamme de bénéficiaires pour englober presque toutes les situations de propriété résidentielle en France. Que vous soyez propriétaire occupant, bailleur, ou même membre d'une copropriété, cette aide est potentiellement accessible, à condition de répondre à certains critères pour favoriser une amélioration de la performance énergétique des logements. La nature de votre projet et du montant de vos ressources détermineront le montant de l'aide auquel vous aurez droit.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                    <h3 className="font-bold text-slate-800 mb-3">Êtes-vous éligible ?</h3>
                    <p className="mb-4">
                      Afin de savoir à quelles aides et pour quel montant vous êtes éligible, vous pouvez utiliser notre simulateur ou consulter le tableau de synthèse Ma Prime Renov' 2025.
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
                
                {/* Comment fonctionne MaPrimeRénov' ? */}
                <section id="comment-fonctionne" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Comment fonctionne MaPrimeRénov' ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-6">
                    En 2025, le fonctionnement de MaPrimeRénov' a évolué et été repensé autour de trois volets :
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-slate-800">MaPrimeRénov'</h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Parcours par geste, pour les rénovations avec un ou plusieurs gestes de travaux (isolation, chauffage, etc.)
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-slate-800">Parcours accompagné</h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Pour les rénovations d'ampleur avec un gain minimal de deux étiquettes énergétiques (DPE)
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-slate-800">MaPrimeRénov' Copropriété</h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Spécifiquement destinée à la rénovation énergétique des copropriétés
                      </p>
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
                          <strong>Important !</strong> Pour être éligible à l'aide MaPrimeRénov', votre logement doit être construit depuis au moins 15 ans ou 2 ans en Outre-mer. Les travaux doivent être réalisés avec des artisans labellisés RGE (Reconnu Garant de l'Environnement).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8">
                    <p className="text-sm text-slate-600 italic">
                      <strong>À savoir :</strong> Pour les logements situés en Outre-mer, les conditions ne sont pas les mêmes qu'en métropole. Il n'est pas obligatoire d'installer un système de chauffage ou d'eau chaude sanitaire décarboné pour bénéficier de l'aide.
                    </p>
                  </div>
                  
                  {/* MaPrimeRénov' Parcours par geste */}
                  <section id="parcours-par-geste" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">MaPrimeRénov', pour un ou plusieurs gestes de travaux</h3>
                    
                    <p className="mb-4">
                      L'aide MaPrimeRénov' Parcours par geste s'adresse aux propriétaires occupants et aux bailleurs, ainsi qu'aux propriétaires en indivision et usufruitiers. Elle concerne les projets avec un seul geste ou plusieurs gestes de travaux mais ne permettant pas un gain de deux classes de DPE pour le logement.
                    </p>
                    
                    <p className="mb-4">
                      Dans ce parcours, MaPrimeRénov' n'est ouverte qu'aux ménages aux revenus très modestes, modestes et intermédiaires, tels que définis par l'Agence Nationale de l'Habitat (Anah). Les ménages aux revenus supérieurs sont donc non éligibles à cette aide, mais le sont pour les projets de rénovation d'ampleur.
                    </p>
                    
                    <div className="bg-slate-100 p-4 rounded-lg mb-4">
                      <p className="text-slate-700">
                        Les logements F ou G, également appelés « passoires énergétiques », restent éligibles à cette aide par geste en 2025. Toutefois, à partir de 2026, ces mêmes logements devront obligatoirement passer par le dispositif MaPrimeRénov' Parcours accompagné pour être éligibles.
                      </p>
                    </div>
                    
                    <p className="mb-4">
                      Les principaux travaux éligibles au parcours MaPrimeRénov' par geste sont les travaux d'isolation, le changement de système de chauffage et de chauffe-eau.
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                      <p className="font-medium text-slate-800">En résumé</p>
                      <p className="text-slate-600 text-sm">
                        Le montant de l'aide dépend de vos ressources et de la nature du ou des travaux envisagés. À titre d'exemple, il peut atteindre plusieurs milliers d'euros pour l'installation d'une pompe à chaleur ou reposer sur un montant forfaitaire par m² dans le cas d'une pose d'isolant.
                      </p>
                    </div>
                  </section>
                  
                  {/* MaPrimeRénov' Parcours accompagné */}
                  <section id="parcours-accompagne" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">MaPrimeRénov' Parcours accompagné, pour une rénovation d'ampleur</h3>
                    
                    <p className="mb-4">
                      Le parcours accompagné concerne les rénovations d'ampleur, c'est-à-dire qu'à l'issue des travaux le bilan énergétique du logement gagne au moins deux classes de DPE.
                    </p>
                    
                    <p className="mb-4">
                      Si le montant des travaux pour un tel projet est plus important que pour le parcours MaPrimeRénov' par geste, le montant des aides est aussi beaucoup plus élevé. Il peut représenter entre 10% et 80% du coût du chantier, avec un plafond fixé par l'Anah.
                    </p>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                      <p className="font-medium text-slate-800">Le saviez-vous ?</p>
                      <p className="text-slate-700 text-sm">
                        Si votre bien dispose d'un DPE F ou G, vous pouvez bénéficier d'une prime complémentaire de 10% pour la sortie du statut de passoire énergétique. Selon vos revenus, le montant des aides peut de fait atteindre 90% du coût de vos travaux.
                      </p>
                    </div>
                    
                    <p className="mb-4">
                      Tous les ménages sont éligibles à MaPrimeRénov' Parcours accompagné. Et c'est même la seule aide MaPrimeRénov' accessible aux ménages avec des revenus supérieurs au sens de l'Anah.
                    </p>
                    
                    <p className="mb-4">
                      Les travaux d'isolation doivent inclure deux gestes d'isolation et dans le cadre de travaux de chauffage, celui-ci ne doit pas fonctionner majoritairement aux énergies fossiles. L'aide Ma Prime Renov' par geste est en revanche incompatible avec le maintien d'un système de chauffage au fioul.
                    </p>
                    
                    <p className="mb-4">
                      Enfin, vous devez être accompagné dans votre projet par un expert Mon Accompagnateur Rénov' pour être éligible à l'aide MaPrimeRénov' Parcours accompagné. Véritable tiers de confiance, il est en mesure de vous apporter une évaluation personnalisée de votre logement. Il peut notamment réaliser un audit énergétique de votre logement et vous proposer différents scenarios de travaux. Il est également à vos côtés pour vous conseiller et vous aider dans le choix et la réalisation des travaux ou encore l'identification des aides à percevoir.
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                      <p className="font-medium text-slate-800">Bon à savoir</p>
                      <p className="text-slate-600 text-sm">
                        L'accompagnement Mon Accompagnateur Rénov' fait aussi l'objet d'une aide, en complément de MaPrimeRénov'. Avec un plafond à 2000€, elle dépend du montant de vos revenus.
                      </p>
                    </div>
                    
                    <div className="bg-slate-100 p-6 rounded-lg mb-4">
                      <h4 className="font-bold text-slate-800 mb-2">Les raisons ne manquent pas de lancer une rénovation globale de votre logement</h4>
                      <p className="text-slate-700 mb-4">
                        Aides plus élevées, économies sur vos factures d'énergie, logement plus confortable et plus sain, bien valorisé.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Quelle que soit la nature de votre projet, IDF Environnement et ses partenaires sont à vos côtés pour vous accompagner dans sa réalisation et son financement.
                      </p>
                      <Link 
                        href="/contact" 
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                      >
                        Contactez-nous
                      </Link>
                    </div>
                  </section>
                  
                  {/* MaPrimeRénov' Copropriété */}
                  <section id="copropriete" className="mb-8 ml-4 pl-4 border-l-2 border-yellow-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">MaPrimeRénov' Copropriété</h3>
                    
                    <p className="mb-4">
                      Cette aide finance 30% ou 45% du montant des travaux selon l'ambition du projet de rénovation énergétique, dans un plafond de 25 000 € par logement.
                    </p>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                      <li>30% pour une rénovation permettant un gain énergétique d'au moins 35%,</li>
                      <li>45% pour une rénovation énergétique permettant un gain énergétique d'au moins 50%.</li>
                    </ul>
                    
                    <p className="mb-2 font-medium">Pour en bénéficier :</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                      <li>La copropriété doit être construite depuis plus de 15 ans.</li>
                      <li>Elle est composée de 65% de résidences principales pour une copropriété de 20 lots ou moins, ou d'au moins 75% de résidences principales pour une copropriété de plus de 20 lots.</li>
                      <li>Les travaux doivent porter sur les parties communes ou les équipements communs.</li>
                      <li>La copropriété doit être immatriculée au registre national des copropriétés.</li>
                      <li>La demande doit être faite par le syndic de copropriétaires et non pas par l'un des copropriétaires concernés. Votre syndic de copropriété est l'interlocuteur clé. Il pilotera la préparation du projet de travaux, avec le plus souvent une Assistance à Maîtrise d'Ouvrage (AMO).</li>
                    </ul>
                  </section>
                </section>
                
                {/* MaPrimeRénov' est-elle cumulable avec d'autres aides ? */}
                <section id="cumulable-autres-aides" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">MaPrimeRénov' est-elle cumulable avec d'autres aides ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    Bonne nouvelle, MaPrimeRénov' est cumulable avec plusieurs autres dispositifs d'aide à la rénovation énergétique. Cela vous permet de réduire significativement le reste à charge de vos travaux.
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
                      <h3 className="font-bold text-slate-800 mb-3">La TVA à taux réduit</h3>
                      <p className="text-slate-600">
                        Pour les travaux de rénovation énergétique, vous bénéficiez d'une TVA à 5,5% au lieu de 20%. Cette réduction s'applique aussi bien sur le matériel que sur la main d'œuvre.
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-slate-800 mb-3">Les aides locales</h3>
                      <p className="text-slate-600">
                        Certaines collectivités territoriales (régions, départements, communes) proposent des aides complémentaires pour la rénovation énergétique. Renseignez-vous auprès de votre mairie ou de votre conseil départemental.
                      </p>
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
                          <strong>Important :</strong> Le cumul de ces aides peut couvrir une part significative du coût de vos travaux, mais attention à ne pas dépasser 100% du montant total. Dans ce cas, le montant de MaPrimeRénov' serait réduit pour respecter cette limite.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 p-6 rounded-lg mb-8">
                    <h3 className="font-bold text-slate-800 mb-3">Besoin d'aide pour optimiser vos financements ?</h3>
                    <p className="text-slate-700 mb-4">
                      Chez IDF Environnement, nous vous accompagnons dans l'identification et l'obtention de toutes les aides auxquelles vous êtes éligible. Notre expertise vous permet de maximiser vos financements et de réduire votre reste à charge.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        href="/simuler-mes-aides" 
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                      >
                        Simuler mes aides
                      </Link>
                      <Link 
                        href="/contact" 
                        className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors text-center font-medium inline-block"
                      >
                        Demander conseil
                      </Link>
                    </div>
                  </div>
                </section>
                
                {/* Quelles démarches pour bénéficier de MaPrimeRénov' ? */}
                <section id="demarches" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Quelles démarches pour bénéficier de MaPrimeRénov' ?</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-6">
                    Pour bénéficier de MaPrimeRénov', vous devez suivre un processus bien défini. Voici les étapes clés à respecter :
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Simulez vos aides MaPrimeRénov'</h3>
                        <p className="text-slate-600">
                          Rendez-vous sur <a href="/simuler-mes-aides" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">notre simulateur</a> pour valider vos aides.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Demander des devis à des professionnels RGE</h3>
                        <p className="text-slate-600">
                          Nous réalisons votre devis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Déposer votre demande d'aide</h3>
                        <p className="text-slate-600">
                          Nous nous connectons à votre espace personnel sur le site de MaPrimeRénov' et déposons votre demande en joignant les pièces justificatives nécessaires (devis, avis d'imposition, etc.).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Attendre la confirmation</h3>
                        <p className="text-slate-600">
                          Après analyse de votre dossier, vous recevrez une confirmation du montant de l'aide à laquelle vous avez droit. <strong>Important :</strong> ne commencez pas les travaux avant d'avoir reçu cette confirmation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Réaliser les travaux</h3>
                        <p className="text-slate-600">
                          Une fois votre demande acceptée, vous pouvez faire réaliser les travaux par le professionnel RGE que vous avez choisi. Conservez toutes les factures et documents relatifs aux travaux.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold mr-4">
                        6
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-2">Demander le versement de l'aide</h3>
                        <p className="text-slate-600">
                          Une fois les travaux terminés, connectez-vous à votre espace personnel et demandez le versement de l'aide en téléchargeant la facture des travaux. L'aide sera versée directement sur votre compte bancaire.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                    <h3 className="font-bold text-slate-800 mb-3">Délais à prévoir</h3>
                    <p className="text-slate-600 mb-4">
                      Le traitement de votre demande d'aide peut prendre entre 15 jours et 2 mois selon la période et la complexité de votre dossier. Le versement de l'aide intervient généralement dans les 2 à 3 semaines après la validation de votre demande de paiement.
                    </p>
                    <p className="text-slate-600">
                      <strong>Bon à savoir :</strong> Vous avez 2 ans à compter de la confirmation de l'attribution de l'aide pour réaliser vos travaux et demander le paiement.
                    </p>
                  </div>
                  
                  <div className="bg-slate-100 p-6 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                          <Image 
                            src="/houses/maison-2.png" 
                            alt="IDF Environnement vous accompagne dans vos démarches" 
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <h3 className="font-bold text-slate-800 mb-3">Besoin d'aide pour vos démarches ?</h3>
                        <p className="text-slate-700 mb-4">
                          Chez IDF Environnement, nous vous accompagnons à chaque étape de votre projet de rénovation énergétique. De la constitution de votre dossier de demande d'aide jusqu'au suivi des travaux, nos experts sont à vos côtés pour simplifier vos démarches.
                        </p>
                        <Link 
                          href="/contact" 
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                        >
                          Nous contacter
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Conclusion */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">En résumé</h2>
                  <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                  
                  <p className="mb-4">
                    MaPrimeRénov' est une aide financière essentielle pour tous ceux qui souhaitent améliorer la performance énergétique de leur logement. Que vous envisagiez des travaux ponctuels ou une rénovation globale, ce dispositif peut vous permettre de réduire significativement votre reste à charge.
                  </p>
                  
                  <p className="mb-4">
                    Pour maximiser vos chances d'obtenir cette aide et optimiser le montant de votre financement, il est recommandé de vous faire accompagner par des professionnels expérimentés. Chez IDF Environnement, nous mettons notre expertise à votre service pour vous guider à chaque étape de votre projet.
                  </p>
                  
                  <p className="mb-6">
                    N'hésitez pas à nous contacter pour bénéficier d'un accompagnement personnalisé et réussir votre projet de rénovation énergétique.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/simuler-mes-aides" 
                      className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors text-center font-medium inline-block"
                    >
                      Simuler mes aides
                    </Link>
                    <Link 
                      href="/contact" 
                      className="bg-slate-700 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors text-center font-medium inline-block"
                    >
                      Demander un devis gratuit
                    </Link>
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
