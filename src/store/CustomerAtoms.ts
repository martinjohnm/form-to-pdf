import { atom } from "recoil";
import { CustomerInfoType } from "../types";



export const CustomerInfoAtom = atom<CustomerInfoType>({
    key : "CustomerInfoAtom",
    default : {
        customer_name : "",
        customer_abn : "",
        customer_address : "",
        customer_phone : ""
    }
})