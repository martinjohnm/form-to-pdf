import { atom, selector } from "recoil";
import { SinglTableRowType, TableRowType } from "../types";
import { ShippingChargeAtom } from "./shippingAtoms";




export const tableState = atom<TableRowType[]>({
    key : "tableState",
    default : []
})

export const SingleRow = atom<SinglTableRowType>({
    key : "SingleRow",
    default : {
        id: Date.now(),
        description : "",
        hsn : 0,
        price: 0,
        quantity : 0,
        unit : 0,
        subtotal : 0
    }
})

// selector to calculate the total amount 

export const totalAmountState = selector({
    key: "totalAmountState",
    get: ({ get }) => {
        const rows = get(tableState)
        const shipppingCharge = get(ShippingChargeAtom)

        return rows.reduce((acc, row) => (
            acc + row.subtotal
        ), shipppingCharge)
    }
  });




