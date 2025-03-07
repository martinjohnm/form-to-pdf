import { atom } from "recoil";
import { BankInfoType } from "../types";



export const BankInfoAtom = atom<BankInfoType>({
    key : "BankInfoAtom",
    default : {
        bank_ac_name : "Austrasia traders pty ltd",
        bank_bsb : "067873",
        bank_ac_number : "14304826"
    }
})