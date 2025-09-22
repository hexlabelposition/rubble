import { create } from 'zustand'

interface State {
  isOpen: boolean
}

interface Actions {
  openMenu: () => void
  closeMenu: () => void
  reset: () => void
}

type MobileMenuStore = State & Actions

const initialState: State = {
  isOpen: false,
}

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  ...initialState,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  reset: () => set(initialState),
}))
