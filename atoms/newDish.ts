import { useAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";

export type DishType = "entree" | "dessert" | "side" | "drink" | "";
export interface NewDish {
  name: string;
  description: string;
  price: number | null;
  size: string;
  type: DishType;
}

export const newDishAtom = atomWithImmer<NewDish>({
  name: "",
  description: "",
  price: null,
  size: "",
  type: "",
});

export const useNewDish = () => useAtom(newDishAtom);
