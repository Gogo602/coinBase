import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import Bitcoin from "../../assets/Bitcoin.svg";
import Ethereum from "../../assets/Ethereum.svg";

export const useBitCoinAndEthereumStore = create(
  immer(
    persist(
      (set) => ({
        coins: [
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

        addCoin: (newCoin) =>
          set((state) => {
            state.coins.push({ id: state.coins.length + 1, ...newCoin });
          }),

        removeCoin: (id) =>
          set((state) => {
            state.coins = state.coins.filter((coin) => coin.id !== id);
          }),
      }),

      {
        name: "cryptoCard-storage",
        storage: localStorage,
        partialize: (state) => ({
          coins: state.coins,
        }),
      }
    )
  )
);
