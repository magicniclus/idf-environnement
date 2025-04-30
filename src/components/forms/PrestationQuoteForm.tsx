"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalStore } from "@/store/useModalStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const prestations = [
  "Isolation des murs exterieurs",
  "Isolation des murs interieurs",
  "Isolation de la toiture",
  "Isolation des sols",
  "Pompe à chaleur Air/air",
  "Pompe à chaleur Air/eau",
  "Ballon thermodynamique",
] as const;

interface PrestationQuoteFormProps {
  buttonClassName?: string;
  withArrow?: boolean;
}

export default function PrestationQuoteForm({
  buttonClassName,
  withArrow,
}: PrestationQuoteFormProps) {
  const { isOpen, prestationType, closeModal } = useModalStore();
  const arrowIcon = withArrow ? (
    <ArrowRightIcon className="w-4 h-4 ml-2" />
  ) : null;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    codePostal: "",
    prestation: prestationType || "",
    message: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Formulaire de Prestation",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      alert("Message envoyé avec succès");
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        codePostal: "",
        prestation: "",
        message: "",
      });
      closeModal();
      router.push("/merci");
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Demande de devis - {prestationType}</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour obtenir votre devis
            personnalisé.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                id="firstname"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={(e) =>
                  setFormData({ ...formData, prenom: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Nom</Label>
              <Input
                id="lastname"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.telephone}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postal">Code Postal</Label>
            <Input
              id="postal"
              placeholder="75000"
              value={formData.codePostal}
              onChange={(e) =>
                setFormData({ ...formData, codePostal: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="prestation">Prestation souhaitée</Label>
            <Select
              defaultValue={formData.prestation}
              onValueChange={(value) => {
                setFormData({ ...formData, prestation: value });
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez une prestation" />
              </SelectTrigger>
              <SelectContent>
                {prestations.map((prestation) => (
                  <SelectItem key={prestation} value={prestation}>
                    {prestation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="yellow"
            className={buttonClassName}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              <>Envoyer ma demande {arrowIcon}</>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
