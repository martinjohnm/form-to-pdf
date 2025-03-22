import { useRecoilValue } from "recoil"
import { InvoiceAtom } from "../../store/InvoiceAtom"



export const InvoiceComponent = ( ) => {

    const invoice = useRecoilValue(InvoiceAtom)
    return <div className="justify-between gap-2">
    <Field title={"Invoice Number"} value={invoice.invoiceNumber}/>
    <Field title={"Invoice Date"} value={invoice.invoiceDate}/>
    <Field title={"PO Number"} value={invoice.poNumber}/>

  </div>
}


const Field = ({title, value } : {title : string, value : string}) => {

    
  
    return (
      <div className="grid grid-cols-4 p-1 text-2xl justify-center items-center">
        <div className="col-span-2">
            {`${title} :`}
        </div>
        <div className="col-span-2 gap-1 outline-none p-1">
            <p>{value}</p>
        </div>
      </div>
    )
}