import { useAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";

export const newDishAtom = atomWithImmer<NewDish>({
  name: "",
  description: "",
  price: "",
  size: "",
  type: "",
});

export const useNewDish = () => useAtom(newDishAtom);
