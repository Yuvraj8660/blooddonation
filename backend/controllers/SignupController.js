const User = require("../model/UserModel.js");
const TriggerEmail = require("../utils/TriggerEmail.js");
const genereateOtp = require("../utils/GenerateOtp.js")
const bcrypt = require("bcrypt")
async function Signup(req, res) {

    try {
        console.log("signing up")
        // data ko nakal lao 
        const {
            name, email, password, role
        } = req.body;
        console.log("given role is", role)
        // validation
        if (name === "" && email === "" && password === "") {
            return res.status(403).json({
                success: false,
                message: "name,email and possword value cannot be empty or undefined"
            })
        }
        // account check karo es email se bna to nhi
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(403).json({
                success: false,
                message: `This email id is already registered ${email} use other email id`
            })
        }
        // generate otp kar lo 
        const otp = await genereateOtp();

        // send email to get otp which is used for account verification
        await TriggerEmail(email, otp, name, `Verifiying Your Account using ${otp}`, "SignMailOtp");

        // information ko hide karo like password 
        const encryptedPassword = await bcrypt.hash(password, 10);


        // jab sab thik hai to account db me bna do 
        const user = await User.create({ name, email, password: encryptedPassword, otp,role })



        // user ke response ko return karao taki aap json formate me reqponse dekh sake
        return res.status(201).json({
            success: true,
            data: user,
            message: "User Registered successfully"
        })
    }
    catch (error) {
        console.log("signup controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Sign up me error aa gya hai"
        })
    }

}
module.exports = Signup;