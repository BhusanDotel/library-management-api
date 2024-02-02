const BorrowedBook = require("../models/borrowedBookModel");

//POST
//http://localhost:3000/api/registerborrow
//{
//  "user_id":1,
//  "book_id":1
//}
const registerBorrow = async (req, res) => {
  if (req.body) {
    const _user_id = req.body.user_id;
    const _book_id = req.body.book_id;
    const userId = parseInt(_user_id);
    const bookId = parseInt(_book_id);
    if (userId && bookId) {
      try {
        const _date = new Date();
        const date = _date.toString();
        const borrowBook = {
          UserId: userId,
          BookID: bookId,
          BorrowDate: date,
          ReturnDate: "",
        };
        const borrowEntry = await BorrowedBook.create(borrowBook);
        if (borrowEntry) {
          res.json("Borrow register success");
        }
      } catch (error) {
        res.json("something went wrong");
      }
    }
  }
};

//POST
//http://localhost:3000/api/returnborrow
//{
//  "user_id":1,
//  "book_id":1
//}
const returnBorrow = async (req, res) => {
  if (req.body) {
    const _user_id = req.body.user_id;
    const _book_id = req.body.book_id;
    const userId = parseInt(_user_id);
    const bookId = parseInt(_book_id);
    if (userId && bookId) {
      try {
        const _date = new Date();
        const date = _date.toString();
        const borrowBook = await BorrowedBook.findOne({
          where: {
            UserId: userId,
            BookID: bookId,
          },
        });
        if (borrowBook) {
          borrowBook.ReturnDate = date;
          const updateResult = await borrowBook.save();
          if (updateResult) {
            res.json("Borrowed book return success");
          }
        }
      } catch (error) {
        res.json("Something went wrong");
      }
    }
  }
};

//GET
// http://localhost:3000/api/fetchborrowbooks
const fetchBorrowedBooks = async (req, res) => {
  try {
    const allBorrowedBooks = await BorrowedBook.findAll();
    const genuineBorrowedBooks = [];
    allBorrowedBooks.forEach((book) => {
      if (book.ReturnDate === "") {
        genuineBorrowedBooks.push(book);
      }
    });
    if (genuineBorrowedBooks.length === 0) {
      res.json("No borrowed books available");
    } else {
      res.json(genuineBorrowedBooks);
    }
  } catch (error) {
    res.json("something went wrong");
  }
};

module.exports = {
  registerBorrow,
  returnBorrow,
  fetchBorrowedBooks,
};
