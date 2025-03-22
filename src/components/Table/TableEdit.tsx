import { useRecoilValue } from "recoil"
import { tableState } from "../../store/TableAtoms"
import { TableSingleRow } from "./TableSingleRow"






export const TableEdit = () => {

    const tableData= useRecoilValue(tableState)



    return <div>
        {tableData.map(row => (
            <TableSingleRow subtotal={row.subtotal} description={row.description} item={row.item} id={row.id} price={row.price} quantity={row.quantity} unit={row.unit}/>
        ))}
    </div>
}