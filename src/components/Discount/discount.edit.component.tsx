import { useRecoilState } from "recoil"
import { discountAtom } from "../../store/discoutAtom"




export const DiscountEditComponent = () => {
    const [discount, setDiscount] = useRecoilState(discountAtom)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
        setDiscount(Number(e.target.value));
        
    }
    return <input type="number" defaultValue={discount} onChange={handleChange} className="bg-slate-100 outline-none">
        
    </input>
}