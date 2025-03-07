import { useRecoilState } from "recoil"
import { ShippingChargeAtom } from "../../store/shippingAtoms"




export const ShippingchargeEditComponent = () => {
    const [shipcharge, setShipcharge] = useRecoilState(ShippingChargeAtom)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
        setShipcharge(Number(e.target.value));
        
    }
    return <input type="number" defaultValue={shipcharge} onChange={handleChange} className="bg-slate-100 outline-none">
        
    </input>
}