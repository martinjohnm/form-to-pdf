import { useRecoilValue } from "recoil"
import { BankInfoType } from "../../types"
import { BankInfoAtom } from "../../store/BankAtoms"




export const BankInfoComponent = () => {
    const bankInfo = useRecoilValue<BankInfoType>(BankInfoAtom)

    return <div className="">
        <p className="text-xl font-semibold underline py-2">{"Bank Details"}</p>
        <Field title={"Bank Name"} value={bankInfo.bank_ac_name}/>
        <Field title={"A/c Number"} value={bankInfo.bank_ac_number}/>
        <Field title={"BSB"} value={bankInfo.bank_bsb}/>
    </div>
}



const Field = ({title, value} : {title : string, value : string}) => {

    return (
    <div className="grid grid-cols-12 p-1">
        <div className="col-span-2">
            {`${title} :`}
        </div>
        <div className="col-span-10">
            {value}
        </div>
    </div>)
}