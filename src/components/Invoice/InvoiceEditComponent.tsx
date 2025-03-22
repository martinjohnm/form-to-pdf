import { useRecoilValue, useSetRecoilState } from "recoil"
import { InvoiceAtom } from "../../store/InvoiceAtom"
import { InvoiceType, InvoiceTypeToChange } from "../../types"



export const InvoiceEditComponent = ( ) => {

    const invoice = useRecoilValue(InvoiceAtom)
    
    return <div className="justify-between gap-2">
        <Field title={"Invoice Number"} type={"invoiceNumber"} value={invoice.invoiceNumber}/>
        <Field title={"Invoice Date"} type={"invoiceDate"} value={invoice.invoiceDate}/>
        <Field title={"PO Number"} type={"poNumber"} value={invoice.poNumber}/>

  </div>
}

const Field = ({title, value, type } : {title : string, value : string, type : InvoiceTypeToChange}) => {

    const setInvoice = useSetRecoilState<InvoiceType>(InvoiceAtom)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
        if (type == "invoiceDate") {
                setInvoice((prevcustomer) => ({
                  ...prevcustomer,
                  invoiceDate: String(e.target.value)
                }));
        } else if (type=="invoiceNumber") {
                setInvoice((prevcustomer) => ({
                  ...prevcustomer,
                  invoiceNumber: String(e.target.value)
                }));
        } else if (type == "poNumber") {
            setInvoice((prevcustomer) => ({
              ...prevcustomer,
              poNumber: String(e.target.value)
            }));
        }
    }
 
  
    return (
    <div className="grid grid-cols-3 p-1">
        <div className="col-span-1">
            {`${title} :`}
        </div>
        <input defaultValue={value} onChange={handleChange} className="col-span-2 gap-1 outline-none p-1 bg-slate-100">
            
        </input>
    </div>)
}