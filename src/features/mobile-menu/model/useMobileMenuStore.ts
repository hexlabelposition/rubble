import { create } from "zustand";

interface State {
  isOpen: boolean;
}

interface Actions {
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

type MobileMenuStore = State & Actions;

const initialState: State = {
  isOpen: false,
};

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  ...initialState,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  toggleMenu: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
