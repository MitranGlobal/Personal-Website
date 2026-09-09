import { create } from 'zustand';

export type LightboxItem = {
  src: string;
  caption: string;
  place: string;
};

type LightboxState = {
  items: LightboxItem[];
  index: number;
  isOpen: boolean;
  open: (items: LightboxItem[], index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

export const useLightbox = create<LightboxState>((set) => ({
  items: [],
  index: 0,
  isOpen: false,
  open: (items, index) => set({ items, index, isOpen: true }),
  close: () => set({ isOpen: false }),
  next: () => set((s) => ({ index: (s.index + 1) % Math.max(s.items.length, 1) })),
  prev: () =>
    set((s) => ({
      index: (s.index - 1 + Math.max(s.items.length, 1)) % Math.max(s.items.length, 1),
    })),
}));

/* Mobile menu lives in the same store file — it is the only other piece of
   cross-component UI state on the site. */
type MenuState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

export const useMenu = create<MenuState>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  close: () => set({ isOpen: false }),
}));
