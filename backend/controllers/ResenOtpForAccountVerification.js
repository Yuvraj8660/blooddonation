const User = require("../model/UserModel.js");
const genereateOtp = require("../utils/GenerateOtp.js");
const TriggerEmail = require("../utils/TriggerEmail.js");
async function ResenOtpForAccountVerification(req, res) {
console.log("send")
    try {

        // data ko nakal lao 
        const { email } = req.body;
        console.log("!!!!!!!!!!!")

        if (email === undefined) {
            return res.status(403).json({
                success: false,
                message: "email  getting undefied"
            })
        }

        if (email === "") {
            return res.status(403).json({
                success: false,
                message: "email can not be empty"
            })
        }



        // account check karo es email se bna to nhi
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(403).json({
                success: false,
                message: `No account found with this emil id please signup`
            })
        }
        const otp =await genereateOtp();


        userExist.otp = otp;
        userExist.save()

        TriggerEmail(email, otp, userExist.name, "Reset Password Otp", "resetPassword")

        return res.status(200).json({
            success: true,
            message: `Otp send successfully`,
            otp: otp
        })



    }
    catch (error) {
        console.log("Verify controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "sendOTP controller  me error aa gya hai"
        })
    }

}
module.exports = ResenOtpForAccountVerification;   // validation
