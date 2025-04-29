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
import { useState } from "react";

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
  const arrowIcon = withArrow ? (
    <ArrowRightIcon className="w-4 h-4 ml-2" />
  ) : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setOpen(false);
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
