const transporter = require("../configuration/Email.js");
const SignUpEmailTemplate = require("../templates/SignUpEmailTemplate.js");
const VeriyAccountTemplate = require("../templates/VeriyAccountTemplate.js");
const SendOtpForPasswordChange=require("../templates/SendOtpEmailForPaaswordChange.js")
const PasswordChangeSuccess=require("../templates/PasswordChangeSuccess.js")
async function TriggerEmail(email, otp, name, subject, typeOfEmail) {


    try {
        // check karo type of mail
        let htmlCode;
        if (typeOfEmail === "SignMailOtp") {
            htmlCode = SignUpEmailTemplate(name, otp);
        }
        if (typeOfEmail === "Congratutions") {
            htmlCode = VeriyAccountTemplate(name);
        }                          

        if (typeOfEmail === "resetPassword") {
            htmlCode = SendOtpForPasswordChange(name,otp);
        }

         if (typeOfEmail === "password-changed") {
            htmlCode = PasswordChangeSuccess(name);
        }

        // actual me template ka use karke email ko send kar do
        await transporter.sendMail({
            to: email,
            subject: subject,
            html: `${htmlCode}`

        })

    }

    catch (err) {
        console.log("Got error while triggering an email", err.message)
    }
}

module.exports = TriggerEmail;