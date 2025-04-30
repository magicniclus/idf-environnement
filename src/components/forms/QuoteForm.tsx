"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

type Prestation = typeof prestations[number];

interface QuoteFormProps {
  buttonClassName?: string;
  withArrow?: boolean;
}

export default function QuoteForm({
  buttonClassName,
  withArrow,
}: QuoteFormProps) {
  const [open, setOpen] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [selectedPrestation, setSelectedPrestation] = useState<Prestation | null>(null);
  const router = useRouter();
  const arrowIcon = withArrow ? (
    <ArrowRightIcon className="w-4 h-4 ml-2" />
  ) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with prestation:", selectedPrestation);
    setOpen(false);
    router.push("/merci");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="yellow" className={buttonClassName}>
          OBTENIR UN DEVIS {arrowIcon}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Demande de devis</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour obtenir votre devis
            personnalisé.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input id="firstname" placeholder="Votre prénom" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Nom</Label>
              <Input id="lastname" placeholder="Votre nom" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postal">Code Postal</Label>
            <Input id="postal" placeholder="75000" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prestation">Prestation souhaitée</Label>
            <Select
              defaultValue="Sélectionnez une prestation"
              value={selectedPrestation || "Sélectionnez une prestation"}
              onValueChange={(value: string) => setSelectedPrestation(value as Prestation)}
            >
              <SelectTrigger className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-700">
                <SelectValue placeholder="Prestation souhaitée" />
              </SelectTrigger>
              <SelectContent>
                {prestations.map((prestation) => (
                  <SelectItem 
                    key={prestation} 
                    value={prestation}
                    className="py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {prestation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="policy"
              checked={acceptPolicy}
              onCheckedChange={(checked) => setAcceptPolicy(checked as boolean)}
              required
            />
            <label
              htmlFor="policy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              J&apos;accepte la politique de confidentialité
            </label>
          </div>
          <Button type="submit" variant="yellow" className="w-full">
            Envoyer ma demande
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
