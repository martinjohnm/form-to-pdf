import { useSetRecoilState } from "recoil";
import { tableState } from "../../store/TableAtoms";
import { TableRowType } from "../../types";
import { useState } from "react";





export const TableSingleRowEdit = () => {

    const setTableData = useSetRecoilState(tableState);


    const [tableRow, setTableRow] = useState<TableRowType>(
        {
            id : Date.now(),
            description : "",
            item : "",
            price : 0,
            quantity : 0,
            unit : "",
            subtotal : 0
        }
    )

  
    // Function to add a new row
    const addRow = () => {
      setTableData((prev : TableRowType[]) => [
        ...prev, 
        {
            id : tableRow.id,
            description : tableRow.description,
            item : tableRow.item,
            price : tableRow.price,
            quantity : tableRow.quantity,
            unit : tableRow.unit,
            subtotal : tableRow.price * tableRow.quantity
        }
      ]);
    };

    // const updateRow = (id: number, field: keyof TableRowType, value: string | number) => {
    //     setTableData((prev) =>
    //       prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    //     );
    //   };
    
    //   // Function to delete a row
    //   const deleteRow = (id: number) => {
    //     setTableData((prev) => prev.filter((row) => row.id !== id));
    //   };

 
    return <div>
      <div className="grid grid-cols-12 border justify-center items-center">
                  <div className="text-black col-span-3 p-1">
                    <input type="text" value={tableRow.item } onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                        setTableRow((tableRow) => ({
                            ...tableRow,
                            item : String(e.target.value)
                        }))
                    }} className="w-full outline-none bg-slate-200 p-2" placeholder="Description" ></input>
                  </div>
      
                  <div className="text-black col-span-2 p-1">
                    <input type="text" value={tableRow.description} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                        setTableRow((tableRow) => ({
                            ...tableRow,
                            description : String(e.target.value)
                        }))
                    }} className="w-full outline-none bg-slate-200 p-2" placeholder="HSN" ></input>
                  </div>
                  <div className="text-black col-span-2 p-1">
                    <input type="number" value={tableRow.price} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                        setTableRow((tablerow) => ({
                            ...tablerow,
                            price : Number(e.target.value)
                        }))
                    }} className="w-full outline-none bg-slate-200 p-2" placeholder="Price" ></input>
                  </div>
      
                  <div className="text-black col-span-1 p-1">
                    <input type="number" value={tableRow.quantity} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                        setTableRow((row) => ({
                            ...row,
                            quantity : Number(e.target.value)
                        }))
                    }} className="w-full outline-none bg-slate-200 p-2" placeholder="Quantity" ></input>
                  </div>
                  <div className="text-black col-span-2 p-1">
                    <input type="text" defaultValue={tableRow.unit} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                        setTableRow((tableRow) => ({
                            ...tableRow,
                            unit : String(e.target.value)
                        }))
                    }} className="w-full outline-none bg-slate-200 p-2" placeholder="Unit" ></input>
                  </div>
      
                  <div className="text-black col-span-2 p-1">
                    <input type="number" value={tableRow.quantity * tableRow.price} 
                     className="w-full outline-none bg-slate-200 p-2" placeholder="SUbtotal" ></input>
                  </div>
                          
        </div>
        <div className="justify-center items-center w-full flex-col">

        <button className="bg-green-700 text-white p-2 rounded-md " onClick={addRow}>Add a record</button>
      </div>
      </div>
      }