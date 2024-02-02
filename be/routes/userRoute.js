const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const userController = require("../controller/userController");

router.post(
  "/registeruser",
  authController.authenticateToken,
  userController.registerUser
);
router.get(
  "/fetchusers",
  authController.authenticateToken,
  userController.fetchUsers
);
router.get(
  "/fetchuser",
  authController.authenticateToken,
  userController.fetchUser
);

module.exports = router;
