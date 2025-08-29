"use client";

export default function CGVPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Conditions Générales de Vente</h1>

      <section className="max-w-4xl mx-auto space-y-12 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">1. Objet et champ d'application</h2>
          <p className="mb-4 text-slate-300">
            Les présentes conditions générales de vente (CGV) s'appliquent à toutes les ventes de matériaux 
            d'isolation thermique, de rénovation énergétique et produits associés réalisées par ILE DE FRANCE ENVIRONNEMENT.
          </p>
          <p className="text-slate-300">
            Toute commande implique l'acceptation sans réserve des présentes conditions générales de vente.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">2. Produits</h2>
          <p className="mb-4 text-slate-300">
            Nos produits comprennent notamment :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Matériaux d'isolation thermique (laine de verre, laine de roche, polystyrène, etc.)</li>
            <li>Matériaux d'isolation phonique</li>
            <li>Produits d'étanchéité et pare-vapeur</li>
            <li>Matériaux de bardage et façade</li>
            <li>Accessoires de pose et fixations</li>
            <li>Équipements de ventilation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">3. Commandes</h2>
          <p className="mb-4 text-slate-300">
            Les commandes peuvent être passées :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Par téléphone au 01 85 09 03 67</li>
            <li>Par email</li>
            <li>Directement sur notre site internet</li>
            <li>En agence</li>
          </ul>
          <p className="text-slate-300">
            Toute commande doit faire l'objet d'une confirmation écrite. Les commandes ne sont définitives 
            qu'après acceptation par IDF Environnement et versement d'un acompte si requis.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">4. Prix</h2>
          <p className="mb-4 text-slate-300">
            Les prix sont exprimés en euros TTC. Ils incluent la TVA au taux en vigueur au jour de la commande.
          </p>
          <p className="mb-4 text-slate-300">
            Les prix peuvent être révisés à tout moment mais les produits seront facturés sur la base 
            des tarifs en vigueur au moment de la prise de commande.
          </p>
          <p className="text-slate-300">
            Les frais de transport et de livraison sont en sus et seront précisés lors de la commande.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">5. Modalités de paiement</h2>
          <p className="mb-4 text-slate-300">
            Le règlement s'effectue :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Comptant à la commande pour les particuliers</li>
            <li>À 30 jours nets pour les professionnels après acceptation du dossier de crédit</li>
            <li>Par virement bancaire, chèque ou carte bancaire</li>
          </ul>
          <p className="mb-4 text-slate-300">
            <strong>Délai de paiement :</strong> 30 jours nets à compter de la date de facture pour les clients professionnels.
          </p>
          <p className="text-slate-300">
            En cas de retard de paiement, des pénalités de retard au taux de 3 fois le taux de l'intérêt légal 
            seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">6. Livraison</h2>
          <p className="mb-4 text-slate-300">
            <strong>Délais de livraison :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Produits en stock : 2 à 5 jours ouvrés</li>
            <li>Produits sur commande : 10 à 15 jours ouvrés</li>
            <li>Produits spéciaux : délai à convenir selon disponibilité</li>
          </ul>
          <p className="mb-4 text-slate-300">
            <strong>Modalités de livraison :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Livraison sur chantier ou à l'adresse indiquée</li>
            <li>Déchargement à pied d'œuvre inclus selon accessibilité</li>
            <li>Livraison du lundi au vendredi de 8h à 17h</li>
            <li>Présence obligatoire du client ou de son représentant</li>
          </ul>
          <p className="text-slate-300">
            Les délais de livraison sont donnés à titre indicatif. Un retard de livraison ne peut donner lieu 
            à l'annulation de la commande ou au versement de dommages et intérêts.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">7. Réception et réclamations</h2>
          <p className="mb-4 text-slate-300">
            Le client doit vérifier la conformité des produits livrés et signaler toute anomalie :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Défauts apparents : dans les 48h suivant la livraison</li>
            <li>Défauts cachés : dans les 8 jours suivant leur découverte</li>
            <li>Manquants : immédiatement à la livraison</li>
          </ul>
          <p className="text-slate-300">
            Toute réclamation doit être formulée par écrit avec photos à l'appui si nécessaire.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">8. Garanties</h2>
          <p className="mb-4 text-slate-300">
            Nos produits bénéficient :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>De la garantie légale de conformité (2 ans)</li>
            <li>De la garantie des vices cachés</li>
            <li>Des garanties constructeur selon les produits</li>
          </ul>
          <p className="text-slate-300">
            La garantie ne couvre pas l'usure normale, les dommages dus à un mauvais usage, 
            une mauvaise conservation ou une mise en œuvre non conforme.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">9. Retours et échanges</h2>
          <p className="mb-4 text-slate-300">
            Les retours sont acceptés sous conditions :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300">
            <li>Produits dans leur emballage d'origine</li>
            <li>Produits non entamés et en parfait état</li>
            <li>Accord préalable de notre service commercial</li>
            <li>Retour dans les 15 jours suivant la livraison</li>
          </ul>
          <p className="text-slate-300">
            Les frais de retour sont à la charge du client sauf en cas de défaut de notre part.
            Une pénalité de 15% peut être appliquée pour frais de remise en stock.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">10. Réserve de propriété</h2>
          <p className="text-slate-300">
            Les produits demeurent la propriété d'IDF Environnement jusqu'au complet paiement du prix. 
            En cas de non-paiement, nous nous réservons le droit de reprendre possession des marchandises.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">11. Force majeure</h2>
          <p className="text-slate-300">
            IDF Environnement ne pourra être tenue responsable de tout retard ou inexécution 
            consécutif à la survenance d'un cas de force majeure habituellement reconnu par la jurisprudence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">12. Données personnelles</h2>
          <p className="text-slate-300">
            Les données personnelles collectées sont nécessaires au traitement de votre commande et 
            à la gestion de la relation commerciale. Elles sont traitées conformément à notre politique 
            de confidentialité et au RGPD.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">13. Litiges</h2>
          <p className="mb-4 text-slate-300">
            En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
          </p>
          <p className="text-slate-300">
            À défaut, les tribunaux de Paris seront seuls compétents, même en cas de pluralité de défendeurs 
            ou d'appel en garantie. Le droit français est seul applicable.
          </p>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Contact</h2>
          <p className="mb-2 text-slate-300">
            <strong>ILE DE FRANCE ENVIRONNEMENT</strong>
          </p>
          <p className="mb-2 text-slate-300">
            8 Avenue Emile Aillaud, 91350 Grigny
          </p>
          <p className="mb-2 text-slate-300">
            Téléphone : 01 85 09 03 67
          </p>
          <p className="text-slate-300">
            RCS Evry : 808 268 718
          </p>
        </div>

        <div className="text-center text-sm text-slate-400 pt-8 border-t border-slate-700">
          <p>Conditions générales de vente en vigueur au {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </section>
    </div>
  );
}
