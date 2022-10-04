import { useAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";

export const userAtom = atomWithImmer({
  userName: "",
  firstName: "",
  lastName: "",
  _id: "",
});

export const useUser = () => useAtom(userAtom);
