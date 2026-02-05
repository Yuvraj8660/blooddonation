
import { toast } from "react-toastify";
import { Connector } from "../Connector";
import { AuthRoute } from "../EndPoints";
export const SendOtpPassword = async (email, setLoading, navigate) => {
  try {
    setLoading(true);


    const response = await Connector("POST", AuthRoute.RESEND_OTP_FOR_PASSWORD_CHANGE, { email })
    toast.success(response.data.message)
    navigate("/change-password");
  } catch (error) {
    console.error(error);
    toast.warning(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};