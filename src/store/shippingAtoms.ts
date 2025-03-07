import { atom } from "recoil";



export const ShippingChargeAtom = atom<number>({
    key : "ShippingChargeAtom",
    default : 0
})