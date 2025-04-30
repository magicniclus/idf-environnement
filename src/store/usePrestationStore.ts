import { create } from "zustand";

export const prestations = [
  "Isolation des murs exterieurs",
  "Isolation des murs interieurs",
  "Isolation de la toiture",
  "Isolation des sols",
  "Pompe à chaleur Air/air",
  "Pompe à chaleur Air/eau",
  "Ballon thermodynamique",
] as const;

export type Prestation = typeof prestations[number];

interface PrestationStore {
  selectedPrestation: Prestation | null;
  setSelectedPrestation: (prestation: Prestation | null) => void;
}

export const usePrestationStore = create<PrestationStore>((set) => ({
  selectedPrestation: null,
  setSelectedPrestation: (prestation) => set({ selectedPrestation: prestation }),
}));
