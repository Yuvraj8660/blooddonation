
import { toast } from "react-toastify";
import { Connector } from "../Connector";
import { AuthRoute } from "../EndPoints";
export const resetPasswordService = async (
  formData,
  setLoading,
  navigate
) => {
  try {
    setLoading(true);
    const response = await Connector("POST", AuthRoute.FORGOT_PASSWORD_API, formData)
    toast.success(response.data.message)
    navigate("/login")
  } catch (error) {
    console.error("Reset password service error:", error);
    toast.warning(error.response?.data?.message)

  } finally {
    setLoading(false);
  }
};