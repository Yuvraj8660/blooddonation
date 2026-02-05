function isDoctor(req, res, next) {
    try {
        console.log("Doctor middlerawaere")
        const role = req.role;
        console.log(req.role)
        if (role !== 'Doctor') {
            return res.json({
                message: "You are not a authorize person",
                error: error.message,
                success: false
            })
        }
        next()
    }
    catch (error) {
        console.log("got error in Owner middleware");
        return res.status(423).json({
            message: "You are not a authorize person",
            error: error.message,
            success: false
        })
    }
}

module.exports = isDoctor;
