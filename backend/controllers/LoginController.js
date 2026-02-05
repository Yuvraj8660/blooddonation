const User = require("../model/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function Login(req, res) {

    try {

        // data ko nakal lao 
        const { email, password } = req.body;
        console.log(email, password);

        if ((email === undefined && password === undefined)) {
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

        // account check karo es email se bna to nhi
        const userExist = await User.findOne({ email });
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


        // agar mere sare validation ho gaye honge to me yha aaya hounga 

        // mera password or email shi means db ke andar entry dali so-:
        if (await bcrypt.compare(password, userExist?.password)) {

            // token ko gemerate karo
            const payload = {
                id: userExist._id,
                email: userExist.email,
                role: userExist.role,
            }
            // secret key le aao 
            const jwtSecret = process.env.JWTSECRETKEY;


            // generate kar do jwt token 

            // token ko generate karne ke leaye aap sign method ka use karte hai jo jwt object deta hai
            const token = jwt.sign(payload, jwtSecret);
            console.log("my created token is", token);


            // bad practice -1
            // me token ko db ke andar daal rha hu 
            //    userExist.token = token;
            //    await userExist.save();



            // bad practice no. two send token from bpody


            // best practice
            // send token in the cookie

            return res.cookie("Token", token, {
                httpOnly: true,
                secure: false, // must be false on localhost without HTTPS
                sameSite: "Lax", // Lax works for localhost
                maxAge: 24 * 60 * 60 * 1000
            }).status(200).json({
                success: true,
                message: "Login Successfully",
                token: token,
                user: userExist
            })



        }
        else {
            // user ke response ko return karao taki aap json formate me reqponse dekh sake



            return res.status(403).json({
                success: false,
                message: `password missmatch please enter valid password`
            })
        }



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
module.exports = Login;   // validation
