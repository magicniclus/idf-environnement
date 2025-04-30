import * as z from "zod";

export const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  codePostal: z.string().length(5, "Code postal invalide"),
  prestation: z.string().min(1, "Veuillez sélectionner une prestation"),
  message: z.string().optional(),
});
