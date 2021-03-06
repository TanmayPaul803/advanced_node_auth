const express = require("express");
const router = express.Router();
const app = express();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

// app.post("/register", (request, response) => {
//   response.send("register");
// });

module.exports = router;
