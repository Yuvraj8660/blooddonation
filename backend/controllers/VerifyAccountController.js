const User = require("../model/UserModel.js");
const TriggerEmail = require("../utils/TriggerEmail.js")
async function VerifyAccount(req, res) {

    try {

        // data ko nakal lao 
        const { email, otp } = req.body;
        console.log(email, otp)
        if ((email === undefined && otp === undefined)) {
            return res.status(403).json({
                success: false,
                message: "email and otp getting undefied"
            })
        }

        if (email === "") {
            return res.status(403).json({
                success: false,
                message: "email can not be empty"
            })
        }


        // validate the data
        if (otp === "") {
            return res.status(403).json({
                success: false,
                message: "otp cant be empty during the acc verfication"
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

        if (userExist.isVerifiedAccount) {
            return res.status(403).json({
                success: false,
                message: `You are already a verified user you can login`
            })
        }
        if (userExist.otp !== otp) {
            return res.status(403).json({
                success: false,
                message: `Otp missmatch please enter valid otp`
            })
        }
        await TriggerEmail(userExist.email, undefined, userExist.name, `Account Created Successfully`, "Congratutions");
        userExist.isVerifiedAccount = true;
        userExist.otp = undefined;
        userExist.save()

        // user ke response ko return karao taki aap json formate me reqponse dekh sake
        return res.status(201).json({
            success: true,
            message: "User verified successfully, please login"
        })
    }
    catch (error) {
        console.log("Verify controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Verify  me error aa gya hai"
        })
    }

}
module.exports = VerifyAccount;   // validation
