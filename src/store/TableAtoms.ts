import { atom, selector } from "recoil";
import { SinglTableRowType, TableRowType } from "../types";
import { ShippingChargeAtom } from "./shippingAtoms";
import { discountAtom } from "./discoutAtom";




export const tableState = atom<TableRowType[]>({
    key : "tableState",
    default : []
})

export const SingleRow = atom<SinglTableRowType>({
    key : "SingleRow",
    default : {
        id: Date.now(),
        description : "",
        item : "",
        price: 0,
        quantity : 0,
        unit : "",
        subtotal : 0
    }
})

// selector to calculate the total amount 

export const totalAmountState = selector({
    key: "totalAmountState",
    get: ({ get }) => {
        const rows = get(tableState)
    
        return rows.reduce((acc, row) => (
            acc + row.subtotal
        ), 0)
    }
  });

  export const grandTotalAmountState = selector({
    key: "grandTotalAmountState",
    get: ({ get }) => {
        const rows = get(tableState)
        const shipppingCharge = get(ShippingChargeAtom)
        const discount = get(discountAtom)

        return rows.reduce((acc, row) => (
            acc + row.subtotal
        ), (shipppingCharge-discount))
    }
  });




