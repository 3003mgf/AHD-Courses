import { create } from "zustand";
import { AI, DarkMode, HeaderMenu } from "./zustand.model";


export const useHeaderMenu = create<HeaderMenu>((set)=> ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));


export const useDarkMode = create<DarkMode>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode })
}));



export const useAI = create<AI>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen })
}));