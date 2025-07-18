const { Signup, Login } = require("./AuthController");
const router = require("express").Router();
const { userVerification } = require("./AuthMiddleware");
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
module.exports = router;
