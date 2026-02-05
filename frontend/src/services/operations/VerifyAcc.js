import { useContext } from "react";
import { Connector } from "../Connector";
import { AuthRoute } from "../EndPoints.js"
import { toast } from "react-toastify";

export async function verifyAcc(data, setLoading, navigate) {
    // console.log("Signing up", data)
    try {

        setLoading(true)
        const response = await Connector("PUT", AuthRoute.VERIFY_ACCOUNT, data)
        console.log("api resoponse is ", response);
        // setEmail(data.email)
        setLoading(false)
        toast.success(response.data.message);
        navigate("/login")



    }

    catch (err) {

        console.log("got error while signing up", err.response.data.message);
        setLoading(false)
        toast.warning(err.response.data.message)
    }
}
