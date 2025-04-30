"use client";

import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <CheckCircleIcon className="h-24 w-24 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Merci pour votre demande !
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Nous avons bien reçu votre demande de devis. Notre équipe vous contactera
          dans les plus brefs délais.
        </p>
        <div className="mt-5">
          <Button
            onClick={() => router.push("/")}
            variant="yellow"
            className="w-full"
          >
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
