import { Connector } from "../Connector";
import { AuthRoute } from "../EndPoints.js"
import { toast } from "react-toastify";
import { loginSuccess } from "../../redux/slices/authSlice.js";

export async function login(data, setLoading, navigate, dispatch) {
    try {
        setLoading(true)
        const response = await Connector("POST", AuthRoute.LOGIN_API, data)
        console.log(response);
        
        localStorage.setItem("token", response.data.token)
        dispatch(loginSuccess(response.data.user))
        setLoading(false)
        toast.success(response.data.message);
        navigate("/")
    }

    catch (err) {
        setLoading(false)
        toast.warning(err.response.data.message)
    }
}