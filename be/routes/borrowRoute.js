const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const borrowController = require("../controller/borrowedController");

router.post(
  "/registerborrow",
  authController.authenticateToken,
  borrowController.registerBorrow
);
router.post(
  "/returnborrow",
  authController.authenticateToken,
  borrowController.returnBorrow
);
router.get(
  "/fetchborrowbooks",
  authController.authenticateToken,
  borrowController.fetchBorrowedBooks
);

module.exports = router;
