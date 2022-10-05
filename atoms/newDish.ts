import { useAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";

export const newDishAtom = atomWithImmer<NewDish>({
  name: "",
  description: "",
  price: "",
  size: "",
  type: "",
  imageLink: "",
});

export const useNewDish = () => useAtom(newDishAtom);
