import { create } from 'zustand';

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxState = {
  items: LightboxItem[];
  index: number;
  isOpen: boolean;
  open: (items: LightboxItem[], index?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
};

export const useLightbox = create<LightboxState>((set, get) => ({
  items: [],
  index: 0,
  isOpen: false,

  open: (items, index = 0) => set({ items, index, isOpen: true }),
  close: () => set({ isOpen: false }),

  next: () => {
    const { items, index } = get();
    if (!items.length) return;
    set({ index: (index + 1) % items.length });
  },

  prev: () => {
    const { items, index } = get();
    if (!items.length) return;
    set({ index: (index - 1 + items.length) % items.length });
  },

  goTo: (index) => set({ index }),
}));
