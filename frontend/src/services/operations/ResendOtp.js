import { Connector } from "../Connector";
import { AuthRoute } from "../EndPoints.js"
import { toast } from "react-toastify";


export async function ResendOtp(data, setLoading) {
    try {
        setLoading(true)
        const response = await Connector("POST", AuthRoute.RESEND_OTP, data)
        console.log("OTP SEND",response);
        
       
        setLoading(false)
        toast.success(response.data.message);
    }

    catch (err) {
        setLoading(false)
        toast.warning(err.response.data.message)
    }
}