import { useRecoilValue } from "recoil"
import { InfoType } from "../../types"
import { OurInfoComponentAtom } from "../../store/InfoAtoms"



export const OurInfoComponent = () => {

    const ourInfo = useRecoilValue<InfoType>(OurInfoComponentAtom)
    return <div className="">
        <p className="text-xl font-semibold underline py-2">{"Our Address"}</p>
        <Field title={"Name"} value={ourInfo.seller_name}/>
        <Field title={"Address"} value={ourInfo.seller_address}/>
        <Field title={"Phone"} value={ourInfo.seller_phone}/>
        <Field title={"ABN"} value={ourInfo.seller_abn}/>
    </div>
}

const Field = ({title, value} : {title : string, value : string}) => {

    //const setOurInfo = useSetRecoilState<InfoType>(OurInfoComponentAtom)

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