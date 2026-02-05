const User = require("../model/UserModel.js");
const bcrypt = require("bcrypt");
const TriggerEmail = require("../utils/TriggerEmail.js");

async function ResetPassword(req, res) {

    try {

        // data ko nakal lao 
        const { email, password, confirm_password, otp } = req.body;

        if ((email === undefined &&
            password === undefined &&
            confirm_password === undefined
            && otp === undefined)) {
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
        if (password === "") {
            return res.status(403).json({
                success: false,
                message: "password cant be empty during the acc verfication"
            })
        }


        if (confirm_password === "") {
            return res.status(403).json({
                success: false,
                message: "confirm_password cant be empty during the acc verfication"
            })
        }




        if (otp === "") {
            return res.status(403).json({
                success: false,
                message: "confirm_password cant be empty during the acc verfication"
            })
        }




        if (confirm_password !== password) {
            return res.status(403).json({
                success: false,
                message: "password and confirm_password values are mismatch"
            })
        }


        // account check karo es email se bna to nhi
        const userExist = await User.findOne({ email });

        if (userExist.otp !== otp) {
            return res.status(403).json({
                success: false,
                message: "Otp missmtach"
            })
        }


        if (!userExist) {
            return res.status(403).json({
                success: false,
                message: `No account found with this emil id please signup`
            })
        }

        if (userExist.isVerifiedAccount === false) {
            return res.status(403).json({
                success: false,
                message: `Plaese verify your account you got an email where is otp so verify then come!!!!`
            })
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const id = userExist._id
        // change kar do password ko 

        userExist.otp = null;
        await User.findByIdAndUpdate({ _id: id }, { password: encryptedPassword });



        // email ko trigger karo ki password change successsfully
        TriggerEmail(email, undefined, userExist.name, "Password changed Successfully!!!!", "password-changed")


        // kar deaya 
        return res.status(201).json({
            success: true,
            message: `Password changed successfully`
        })


    }
    catch (error) {
        console.log("Verify controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Reset password   me error aa gya hai"
        })
    }

}
module.exports = ResetPassword;  
