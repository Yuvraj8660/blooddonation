const crypto = require("crypto");

async function genereateOtp() {
    try {
        const otp = await crypto.randomInt(1111, 9999);
        return otp;
    }

    catch (err) {
        console.log("got error while generating otp",err)
    }
}

module.exports=genereateOtp;