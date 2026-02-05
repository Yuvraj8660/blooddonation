function isDoner(req, res, next) {
    try {
        console.log("Donor middlerawaere")
        const role = req.role;
        console.log(req.role)
        if (role !== 'Donor') {
            return res.json({
                message: "You are not a authorize person for donating blood",
                error: error.message,
                success: false
            })
        }
        next()
    }
    catch (error) {
        console.log("got error in NORMAL middleware");
        return res.status(423).json({
            message: "You are not a authorize person",
            error: error.message,
            success: false
        })
    }
}

module.exports = isDoner;
