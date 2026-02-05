const jwt = require("jsonwebtoken")
function isLogin(req, res, next) {
    try {
        console.log("middlwware me ",req.cookies)
        const token  = req.cookies.Token;
        console.log("token value is ", token);

        if (token === '' || token === undefined) {
            return res.status(404).json({
                message: "You did not login ",
                success: false
            })
        }


        // token ko verify karo 
        try {
            const verifyToken = jwt.verify(token, process.env.JWTSECRETKEY);

            //------- important case-------
            req.id = verifyToken.id
            req.role=verifyToken.role
            console.log("payload vala data", verifyToken)
        }
        catch (error) {
            return res.status(400).json({
                message: "Token is invalid",
                error: error.message,
                success: false
            })
        }

        // token valid hai to aap next controller me chale jao

        next();


    }

    catch (error) {
        console.log("got error in islogin middleware");
        return res.status(423).json({
            message: "You are not a login person please login before access the page",
            error: error.message,
            success: false
        })
    }
}

module.exports = isLogin;