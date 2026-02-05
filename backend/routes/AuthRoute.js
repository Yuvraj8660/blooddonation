const express = require("express");
const router = express.Router();
const Signup = require("../controllers/SignupController.js");
const VerifyAccount = require("../controllers/VerifyAccountController.js");
const Login = require("../controllers/LoginController.js");
const sendOTP = require("../controllers/SendOtpForPasswordChange.js");
const ResetPassword = require("../controllers/ResetPasswordController.js");
const AllUserInfo = require("../controllers/AllUserInfo.js");
const isLogin = require("../middlewares/IsLogin.js");
// const NormalEdit = require("../controllers/EditInfo.js");
const editInfo = require("../controllers/EditInfo.js");
const Logout = require("../controllers/Logout.js");
const isDoctor = require("../middlewares/isDoctor.js");
const isDonar = require("../middlewares/isDonar.js");


const ResenOtpForAccountVerification = require("../controllers/ResenOtpForAccountVerification.js");
router.post("/register", Signup);
router.put("/edituser", isLogin, isDoctor, editInfo);
router.put("/verify-account", VerifyAccount);
router.post("/login", Login);
router.post("/send-otp/password-change", sendOTP);
router.post("/resend-otp", ResenOtpForAccountVerification);
router.post("/change-password", ResetPassword);
router.get("/all-user", isLogin, AllUserInfo);
router.post("/logout", Logout);
module.exports = router;