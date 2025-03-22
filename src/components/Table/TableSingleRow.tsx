import { TableRowType } from "../../types"



export const TableSingleRow = ( {description, item, id, quantity, price, unit,subtotal} :  TableRowType) => {



    return <div className="grid grid-cols-12 border justify-center items-center text-xl" key={id}>
    <div className="text-black col-span-3 w-full h-full border-r p-4">
      <p className="break-words">{item}</p>
    </div>

    <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
      <p>{description}</p>
    </div>
    <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
      <p>{price}</p>
    </div>

    <div className="text-black col-span-1 w-full break-words h-full border-r p-4">
      <p>{quantity}</p>
    </div>
    <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
      <p>{unit}</p>
    </div>

    <div className="text-black col-span-2 w-full break-words h-full border-r p-4">
      <p>{subtotal}</p>
    </div>
            
</div>
}