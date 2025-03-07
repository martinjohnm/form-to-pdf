import { useRecoilValue } from "recoil"
import { CustomerInfoType } from "../../types"
import { CustomerInfoAtom } from "../../store/CustomerAtoms"




export const CustomerInfoComponent = () => {
    const customerInfo = useRecoilValue<CustomerInfoType>(CustomerInfoAtom)
        return <div className="">
            <p className="text-xl font-semibold underline py-2">{"Customer Info"}</p>

            <Field title={"Name"} value={customerInfo.customer_name}/>
            <Field title={"Address"} value={customerInfo.customer_address}/>
            <Field title={"Phone"} value={customerInfo.customer_phone}/>
            <Field title={"ABN"} value={customerInfo.customer_abn}/>
        </div>
    }

const Field = ({title, value} : {title : string, value : string}) => {

    //const setcustomerInfo = useSetRecoilState<InfoType>(customerInfoComponentAtom)

    return (
        <div className="grid grid-cols-12 p-1 text-xl">
        <div className="col-span-3">
            {`${title} :`}
        </div>
        <div className="col-span-9">
            {value}
        </div>
    </div>)
}