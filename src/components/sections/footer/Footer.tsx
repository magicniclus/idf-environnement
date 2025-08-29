import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  {
    title: "Liens utiles",
    links: [
      { name: "Accueil", href: "/" },
      { name: "Nos prestations", href: "#prestations" },
      { name: "Comment ça marche", href: "#fonctionnement" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Informations",
    links: [
      { name: "Mentions légales", href: "/mentions-legales" },
      {
        name: "Politique de confidentialité",
        href: "/politique-confidentialite",
      },
      {
        name: "Conditions générales de vente",
        href: "/conditions-generales-vente",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Logo and Contact */}
          <div className="space-y-6">
            <Image
              src="/logo/logo.png"
              alt="IDF Environnement"
              width={200}
              height={80}
              className="w-24 md:w-48"
            />
            <div className="space-y-2">
              <p className="text-slate-300">
                du lundi au vendredi de 8h30 à 19h
              </p>
              <a
                href="tel:0185090367
"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors group"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="text-2xl font-bold">01 85 09 03 67
</span>
              </a>
              <p className="text-sm text-slate-400">Service Gratuit</p>
            </div>
          </div>

          {/* Right Column - Useful Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usefulLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-yellow-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-400">
            © {new Date().getFullYear()} IDF Environnement. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
