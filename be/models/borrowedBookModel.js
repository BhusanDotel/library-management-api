const { DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");
const Book = require("./bookModel");
const User = require("./usersModel");

const BorrowedBook = sequelize.define("BorrowedBook", {
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      //defining foreign key
      model: User,
      key: "UserId",
    },
  },
  BookID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      //defining foreign key
      model: Book,
      key: "BookId",
    },
  },
  BorrowDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ReturnDate: {
    type: DataTypes.STRING,
    allowNull: true, //true beacuse when borrowed return date is not present
  },
});

module.exports = BorrowedBook;
