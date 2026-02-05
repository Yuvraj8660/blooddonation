
async function Logout(req, res) {

    try {

        res.clearCookie("Token")

        return res.status(200).json({
            success: true,
            message: `Logout suceesfully`,
           
        })



    }
    catch (error) {
        console.log("Logout controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "sendOTP controller  me error aa gya hai"
        })
    }

}
module.exports = Logout;   
