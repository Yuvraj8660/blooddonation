import { Connector } from "../Connector.js";
import {  BloodRoute } from "../EndPoints.js"
import { toast } from "react-toastify";

export async function AllInfoOfDonor() {
    try {
        console.log("view all donor blood")
        const response = await Connector("GET","http://localhost:3300/api/v1/blood/view-all-donors");
        console.log(response?.data)
        toast.success(response.data.message);
        return response?.data?.data
    }

    catch (err) {
        toast.warning(err.response.data.message)
    }
}