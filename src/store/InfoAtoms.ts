import { atom } from "recoil";
import { InfoType } from "../types";



export const OurInfoComponentAtom = atom<InfoType>({
    key : "OurInfoComponentAtom",
    default : {
        seller_phone : "+610402067014",
        seller_address : "4 Savory Way Treeby WA 6164",
        seller_name : "AUSTRASIA TRADERS PTY LTD",
        seller_abn : "69682452259"
    }
})