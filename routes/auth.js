const express = require("express");
const router = express.Router();
const authService = require("../routes/index");

/* User Registration. */
router.post("/register", authService.register);


/* User Login. */
router.post("/login", authService.login);
router.put("/forgetpassword", authService.forgetpassword);


module.exports = router;
