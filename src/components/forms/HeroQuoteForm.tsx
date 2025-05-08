"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

const prestations = [
  "Isolation des murs exterieurs",
  "Isolation des murs interieurs",
] as const;

export default function HeroQuoteForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    codePostal: "",
    prestation: "",
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
          source: "Formulaire Hero",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      setFormData({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        codePostal: "",
        prestation: "",
        message: "",
      });
      router.push("/merci");
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      console.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstname" className="text-white">
            Prénom
          </Label>
          <Input
            id="firstname"
            placeholder="Votre prénom"
            value={formData.prenom}
            onChange={(e) =>
              setFormData({ ...formData, prenom: e.target.value })
            }
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastname" className="text-white">
            Nom
          </Label>
          <Input
            id="lastname"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">
          Téléphone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={formData.telephone}
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="postal" className="text-white">
          Code Postal
        </Label>
        <Input
          id="postal"
          placeholder="75000"
          value={formData.codePostal}
          onChange={(e) =>
            setFormData({ ...formData, codePostal: e.target.value })
          }
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="prestation" className="text-white">
          Prestation souhaitée
        </Label>
        <Select
          defaultValue={formData.prestation}
          onValueChange={(value) => {
            setFormData({ ...formData, prestation: value });
          }}
        >
          <SelectTrigger className="bg-white/5 border-white/20 text-white font-medium w-full hover:bg-white/10 [&_span]:!text-white">
            <SelectValue
              placeholder="Sélectionnez une prestation"
              className="[&_*]:!text-white [&_span]:!text-white [&_div]:!text-white"
            />
          </SelectTrigger>
          <SelectContent className="bg-white border-white/20 shadow-lg">
            {prestations.map((prestation) => (
              <SelectItem
                key={prestation}
                value={prestation}
                className="text-gray-900"
              >
                {prestation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        variant="yellow"
        className="w-full"
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
          "Envoyer ma demande"
        )}
      </Button>
    </form>
  );
}
