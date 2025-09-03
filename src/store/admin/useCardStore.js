import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { defaultCards } from "./useDefaultCardStore.js";

export const useCardStore = create(
  immer(
    persist(
      (set) => ({
        cards: defaultCards,

        addCard: (newCard) =>
          set((state) => {
            state.cards.push({id: state.cards.length + 1, ...newCard});
          }),

        removeCard: (id) =>
          set((state) => {
            state.cards = state.cards.filter((card) => card.id !== id);
          }),
      }),

      {
        name: "cards-storage",
        storage: localStorage,
        partialize: (state) => ({
          cards: state.cards,
        }),
      }
    )
  )
);
