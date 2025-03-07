import { useSetRecoilState } from "recoil"
import { ShippingChargeAtom } from "../../store/shippingAtoms"
import { useEffect } from "react"





export const useChangeShippingCharge = () => {



    const setShippingCharge = useSetRecoilState(ShippingChargeAtom)


    const setSHippingchargeFn = (shipcharge : number) => {
        setShippingCharge(shipcharge)
    }


    useEffect(() => {

    }, [])


    return  {setSHippingchargeFn}
}