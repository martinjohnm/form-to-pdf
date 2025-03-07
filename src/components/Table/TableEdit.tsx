import { useRecoilState } from "recoil"
import { tableState } from "../../store/TableAtoms"
import { TableSingleRow } from "./TableSingleRow"






export const TableEdit = () => {

    const [tableData,_setTableData]= useRecoilState(tableState)



    return <div>
        {tableData.map(row => (
            <TableSingleRow subtotal={row.subtotal} description={row.description} hsn={row.hsn} id={row.id} price={row.price} quantity={row.quantity} unit={row.unit}/>
        ))}
    </div>
}