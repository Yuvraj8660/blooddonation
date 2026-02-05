const User = require("../model/UserModel.js")
async function AllUserInfo(req, res) {
    try {

        const allUser = await User.find();

        if (allUser.length === 0) {
            return res.status(404).json({

                success: false,
                message: "No user found"
            })
        }
        return res.status(404).json({
            success: true,
            message: "All user",
            data: allUser
        })

    }

    catch (error) {
        console.log("got error in All User controller");
        return res.status(423).json({
            message: "Internal server error",
            error: error.message,
            success: false
        })
    }
}

module.exports = AllUserInfo;