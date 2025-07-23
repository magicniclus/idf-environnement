"use client";

import { useState, FormEvent } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeroContact from "@/components/sections/heros/HeroContact";
import Footer from "@/components/sections/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Types pour le formulaire
type FormData = {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});


  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nom || formData.nom.length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Adresse email invalide";
    }
    
    if (!formData.telephone || formData.telephone.length < 10) {
      newErrors.telephone = "Numéro de téléphone invalide";
    }
    
    if (!formData.sujet || formData.sujet.length < 2) {
      newErrors.sujet = "Veuillez indiquer un sujet";
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // Simulation d'envoi du formulaire (à remplacer par votre API réelle)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(formData);
      setIsSuccess(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });
    } catch (error) {
      setIsError(true);
      console.error("Erreur lors de l'envoi du formulaire:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeroContact />
      
      {/* Hero section */}
      <div className="relative h-64 md:h-80 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-sky-900 opacity-90 z-10"></div>
        <Image 
          src="/houses/contact.png" 
          alt="Contact IDF Environnement" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contactez-nous</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all h-max hover:scale-[1.01]">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-slate-700">Nom complet</Label>
                      <Input 
                        id="nom" 
                        name="nom" 
                        placeholder="Votre nom" 
                        value={formData.nom} 
                        onChange={handleChange} 
                        className="border-slate-300" 
                      />
                      {errors.nom && <p className="text-sm font-medium text-red-500">{errors.nom}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="border-slate-300" 
                      />
                      {errors.email && <p className="text-sm font-medium text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="text-slate-700">Téléphone</Label>
                      <Input 
                        id="telephone" 
                        name="telephone" 
                        placeholder="06 XX XX XX XX" 
                        value={formData.telephone} 
                        onChange={handleChange} 
                        className="border-slate-300" 
                      />
                      {errors.telephone && <p className="text-sm font-medium text-red-500">{errors.telephone}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sujet" className="text-slate-700">Sujet</Label>
                      <Input 
                        id="sujet" 
                        name="sujet" 
                        placeholder="Sujet de votre message" 
                        value={formData.sujet} 
                        onChange={handleChange} 
                        className="border-slate-300" 
                      />
                      {errors.sujet && <p className="text-sm font-medium text-red-500">{errors.sujet}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Détaillez votre demande ici..." 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="border-slate-300 min-h-[150px]" 
                    />
                    {errors.message && <p className="text-sm font-medium text-red-500">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                  
                  {isSuccess && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-700">
                      Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                    </div>
                  )}
                  
                  {isError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                      Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
                    </div>
                  )}
                </form>
            </div>
            
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-[1.01]">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <PhoneIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Téléphone</h3>
                      <a href="tel:0644646953" className="text-lg font-bold text-slate-600 hover:underline">
                        06 44 64 69 53
                      </a>
                      <p className="text-sm text-slate-500">Du lundi au vendredi de 8h30 à 19h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <EnvelopeIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Email</h3>
                      <a href="mailto:contact@idf-environnement.fr" className="text-slate-600 hover:underline">
                        contact@idf-environnement.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <MapPinIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Adresse</h3>
                      <address className="not-italic text-slate-600">
                        Grigny, France
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <BuildingOfficeIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Bureaux</h3>
                      <p className="text-slate-600">
                        Nos bureaux sont ouverts du lundi au vendredi<br />
                        de 9h à 18h
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <ClockIcon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700">Horaires</h3>
                      <p className="text-slate-600">
                        Lundi - Vendredi: 8h30 - 19h00<br />
                        Samedi - Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carte */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-[1.01]">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Nous localiser</h2>
                <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410133!2d2.2769948739924316!3d48.85894658138276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1658407601107!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
