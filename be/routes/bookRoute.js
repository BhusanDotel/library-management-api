const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const bookController = require("../controller/bookController");

router.post(
  "/addbook",
  authController.authenticateToken,
  bookController.addBook
);
router.get(
  "/fetchbooks",
  authController.authenticateToken,
  bookController.fetchBooks
);
router.get(
  "/fetchbook",
  authController.authenticateToken,
  bookController.fetchBook
);
router.post(
  "/updatebookdetail",
  authController.authenticateToken,
  bookController.updateBookDetail
);

module.exports = router;
