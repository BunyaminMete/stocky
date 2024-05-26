// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/user/goruntule", userController.getAllUsers); // Yeni eklenen rotayı tanımla
router.get(
  "/user/current",
  userController.isLoggedIn,
  userController.getCurrentUserInfo
);
router.post("/user/register", userController.register);
router.post("/user/login", userController.login);

module.exports = router;
