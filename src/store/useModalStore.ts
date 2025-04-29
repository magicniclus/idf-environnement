import { create } from "zustand";

type State = {
  isOpen: boolean;
  prestationType: string | null;
};

type Actions = {
  openModal: (prestationType: string) => void;
  closeModal: () => void;
};

type ModalState = State & Actions;

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  prestationType: null,
  openModal: (prestationType: string) => set({ isOpen: true, prestationType }),
  closeModal: () => set({ isOpen: false, prestationType: null }),
}));
