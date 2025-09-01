import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import Bitcoin from "../../assets/Bitcoin.svg";
import Ethereum from "../../assets/Ethereum.svg";

export const useBitCoinAndEthereumStore = create(
  immer(
    persist(
      (set) => ({
        cards: [
          {
            id: 1,
            title: "Bitcoin",
            icon: Bitcoin,
            bg: "bg-[linear-gradient(144deg,#FC58B3_11.61%,#FEAE68_100%)]",
            textColor: "text-white",
          },

          {
            id: 2,
            title: "Ethereum",
            icon: Ethereum,
            bg: "bg-[linear-gradient(146deg,#00E0FF_9.67%,#0047FF_107.49%)]",
            textColor: "text-white",
          },
        ],

        addCard: (newCard) =>
          set((state) => {
            state.cards.push({ id: state.cards.length + 1, ...newCard });
          }),

        removeCard: (id) =>
          set((state) => {
            state.cards = state.cards.filter((card) => card.id !== id);
          }),
      }),

      {
        name: "cryptoCard-storage",
        storage: localStorage,
        partialize: (state) => ({
          cards: state.cards,
        }),
      }
    )
  )
);
