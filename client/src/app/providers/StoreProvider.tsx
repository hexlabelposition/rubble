import { create } from 'zustand'

type Menu = {
  isOpenMenu: boolean
  toogleMenu: () => void
}

export const useMenu = create<Menu>((set, get) => ({
  isOpenMenu: false,
  toogleMenu: () => set({ isOpenMenu: !get().isOpenMenu }),
}))
