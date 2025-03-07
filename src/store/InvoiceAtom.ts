import { atom } from "recoil";
import { InvoiceType } from "../types";



export const InvoiceAtom = atom<InvoiceType>({
    key : "InvoiceAtom",
    default : {
        invoiceDate : "",
        poNumber : "",
        invoiceNumber : ""
    }
})