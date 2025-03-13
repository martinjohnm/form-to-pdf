import { atom } from "recoil";


export const discountAtom = atom<number>({
    key : 'discountAtom',
    default : 0
})