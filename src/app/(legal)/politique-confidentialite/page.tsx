"use client";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Politique de confidentialité</h1>

      <section className="max-w-3xl mx-auto space-y-12 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">1. Collecte des données personnelles</h2>
          <p className="mb-4 text-slate-300">
            ILE DE FRANCE ENVIRONNEMENT collecte les données personnelles suivantes via les formulaires de contact :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Code postal</li>
            <li>Type de prestation souhaitée</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">2. Utilisation des données</h2>
          <p className="mb-4 text-slate-300">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>Répondre à vos demandes de devis</li>
            <li>Vous contacter concernant nos services</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">3. Protection des données</h2>
          <p>
            ILE DE FRANCE ENVIRONNEMENT s&apos;engage à protéger vos données personnelles
            et à ne pas les partager avec des tiers sans votre consentement
            explicite, sauf obligation légale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">4. Cookies</h2>
          <p>
            Notre site utilise des cookies essentiels pour assurer son bon
            fonctionnement. Vous pouvez contrôler l&apos;utilisation des cookies via
            les paramètres de votre navigateur.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">5. Vos droits</h2>
          <p className="mb-4 text-slate-300">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-yellow-400">6. Contact</h2>
          <p>
            Pour toute question concernant notre politique de confidentialité ou
            pour exercer vos droits, vous pouvez contacter notre responsable de la
            protection des données : Nicolas CASTERA à [email de contact].
          </p>
        </div>
      </section>
    </div>
  );
}
