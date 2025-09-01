import {create} from "zustand";
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import { defaultCards } from "./useDefaultCardStore.js";

export const useCardStore = create(immer(persist((set) => ({
    cards: defaultCards,
    addCard: () => {
        
    }
}))))