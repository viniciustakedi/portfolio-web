import { atom } from "jotai";

export const isLoadingAtom = atom<boolean>(false);

export const locationAtom = atom<{country: string, state: string} | null>(null);