const express = require("express");
const router = express.Router();

const {
    createDonationKhoonRequest,
    getAllDonorsInfo
} = require("../controllers/DonateKhoonController.js");
const isLogin = require("../middlewares/IsLogin.js");
const isDoner = require("../middlewares/isDonar.js");
const isDoctor = require("../middlewares/isDoctor.js");

// Donate blood
router.post("/donate", isLogin, isDoner, createDonationKhoonRequest);

// Get all donors (doctor/admin)
router.get("/view-all-donors", isLogin, isDoctor, getAllDonorsInfo);

module.exports = router;
