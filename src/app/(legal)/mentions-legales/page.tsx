"use client";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Mentions légales</h1>

      <section className="max-w-3xl mx-auto space-y-12 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">1. Informations légales</h2>
          <p className="mb-4 text-slate-300">
            Le site idf-environnement.fr est édité par :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>ILE DE FRANCE ENVIRONNEMENT</li>
            <li>Société à responsabilité limitée (SARL)</li>
            <li>Capital social : 50 000,00 Euros</li>
            <li>RCS : 808 268 718 R.C.S. Evry</li>
            <li>Siège social : 8 Avenue Emile Aillaud 91350 Grigny</li>
            <li>Téléphone : [Numéro de téléphone]</li>
            <li>Email : [Email de contact]</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">2. Direction de la publication</h2>
          <p>
            Directeur de la publication : Nicolas CASTERA
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">3. Activité</h2>
          <p>
            Travaux d&apos;isolation thermique, traitements de façade couverte, traitements de
            charpente, assèchements des murs et rénovation de l&apos;habitat
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">4. Hébergement</h2>
          <p>
            Le site idf-environnement.fr est hébergé par :
            [Informations de l&apos;hébergeur]
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">5. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (structure, textes, images, logos,
            fichiers) est la propriété exclusive de ILE DE FRANCE ENVIRONNEMENT ou
            de ses partenaires. Toute reproduction, totale ou partielle, de ce
            contenu est strictement interdite sans autorisation préalable.
          </p>
        </div>
      </section>
    </div>
  );
}
