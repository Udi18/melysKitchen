import { useAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";

export const newDishResetObject: NewDish = {
  name: "",
  description: "",
  price: "",
  size: "",
  type: "",
  imageLink: "",
};

export const newDishAtom = atomWithImmer<NewDish>(newDishResetObject);

export const useNewDish = () => useAtom(newDishAtom);
