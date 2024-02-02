const Book = require("../models/bookModel");
const BookDetail = require("../models/booksDetailModel");

//POST
//http://localhost:3000/api/addbook
//{
//  "title":"Grammer Book",
//  "isbn":"234-45-33-7-8-4",
// "publishDate":"2074/04/45",
//  "genre":"English grammer"
//}
const addBook = async (req, res) => {
  if (req) {
    const { title, isbn, publishDate, genre } = req.body;
    try {
      if (title && isbn && publishDate && genre) {
        const book = {
          Title: title,
          ISBN: isbn,
          PublishDate: publishDate,
          Genre: genre,
        };

        const createdBook = await Book.create(book);
        if (createdBook) {
          const bookDetail = {
            BookId: createdBook.BookId,
            NumberOfPages: 0,
            Publisher: "",
            Language: "",
          };
          await BookDetail.create(bookDetail);
          res.json("Book registered successfully");
        }
      }
    } catch (error) {
      res.json(error);
    }
  }
};

//GET
//http://localhost:3000/api/fetchbooks
const fetchBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.json("something went wrong");
  }
};

//GET
//http://localhost:3000/api/fetchbook?id=1
//http://localhost:3000/api/fetchbook?id=2
const fetchBook = async (req, res) => {
  if (req) {
    if (req.query.id) {
      const _id = req.query.id;
      const id = parseInt(_id);
      if (id) {
        try {
          const book = await Book.findOne({
            where: {
              BookId: id,
            },
          });
          if (book) {
            res.json(book);
          } else {
            res.json("no book found");
          }
        } catch (error) {
          res.json("something went wrong");
        }
      }
    }
  }
};

//POST
//http://localhost:3000/api/updatebookdetail
//{
//  "book_id":"3",
// "page_number":256,
// "publisher":"Aaratipublication",
// "language":"Nepali"
//}
const updateBookDetail = async (req, res) => {
  if (req) {
    if (req.body) {
      const _book_id = req.body.book_id;
      const _page_number = req.body.page_number;
      const page_number = parseInt(_page_number);
      const book_id = parseInt(_book_id);
      const { publisher, language } = req.body;
      if (book_id && page_number && publisher && language) {
        try {
          const bookdetail = await BookDetail.findOne({
            where: {
              BookId: book_id,
            },
          });
          if (bookdetail) {
            bookdetail.NumberOfPages = page_number;
            bookdetail.Publisher = publisher;
            bookdetail.Language = language;
            const updateResult = await bookdetail.save();
            if (updateResult) {
              res.json("Book details updated successfully");
            }
          } else {
            res.json("no book found");
          }
        } catch (error) {
          res.json("something went wrong");
        }
      }
    }
  }
};

module.exports = {
  addBook,
  fetchBooks,
  fetchBook,
  updateBookDetail,
};
