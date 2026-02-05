import { Connector } from "../Connector";
import {  BloodRoute } from "../EndPoints.js"
import { toast } from "react-toastify";

export async function DonateBlood(data) {
    try {
        console.log("donate blood",data)
        const response = await Connector("POST", BloodRoute.DONATE_BLOOD, data)
        console.log(response);
        
     
        toast.success(response.data.message);
    }

    catch (err) {
        toast.warning(err.response.data.message)
    }
}