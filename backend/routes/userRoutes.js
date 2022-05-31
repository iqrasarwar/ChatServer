const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controller/userController");
// const connectDB = require("../config/db");
// const dotenv = require("dotenv");
// dotenv.config();
// connectDB();
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
