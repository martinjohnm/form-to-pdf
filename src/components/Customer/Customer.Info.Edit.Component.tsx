import { useRecoilValue, useSetRecoilState } from "recoil"
import { CustomerInfoType, CustomerInfoTypeToEdit } from "../../types"
import { CustomerInfoAtom } from "../../store/CustomerAtoms"




export const CustomerInfoEditComponent = () => {
    const customerInfo = useRecoilValue<CustomerInfoType>(CustomerInfoAtom)
        return <div className="">
            <p className="text-xl font-semibold underline py-2">{"Customer Info"}</p>
            <Field title={"Name"} type={"customer_name"} value={customerInfo.customer_name}/>
            <Field title={"Address"} type={"customer_address"} value={customerInfo.customer_address}/>
            <Field title={"Phone"} type={"customer_phone"} value={customerInfo.customer_phone}/>
            <Field title={"ABN"} type={"customer_abn"} value={customerInfo.customer_abn}/>
        </div>
    }

const Field = ({title, value, type } : {title : string, value : string, type : CustomerInfoTypeToEdit}) => {

    const setcustomerInfo = useSetRecoilState<CustomerInfoType>(CustomerInfoAtom)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
        if (type == "customer_abn") {
                setcustomerInfo((prevcustomer) => ({
                  ...prevcustomer,
                  customer_abn: String(e.target.value)
                }));
        } else if (type=='customer_address') {
                setcustomerInfo((prevcustomer) => ({
                  ...prevcustomer,
                  customer_address: String(e.target.value)
                }));
        } else if (type == "customer_name") {
            setcustomerInfo((prevcustomer) => ({
              ...prevcustomer,
              customer_name: String(e.target.value)
            }));
        } else if (type == "customer_phone") {
            setcustomerInfo((prevcustomer) => ({
              ...prevcustomer,
              customer_phone: String(e.target.value)
            }));
        }
    }
 
  
    return (
    <div className="grid grid-cols-12 w-3/4 p-1 text-xl">
        <div className="col-span-3">
            {`${title} :`}
        </div>
        <input defaultValue={value} onChange={handleChange} className="col-span-9 bg-slate-100 gap-1 outline-none p-1">
            
        </input>
    </div>)
}