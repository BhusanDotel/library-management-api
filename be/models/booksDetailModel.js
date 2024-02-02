const { DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");
const Book = require("./bookModel");

const BookDetail = sequelize.define("BookDetail", {
  DetailId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  BookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      //defining foreign key
      model: Book,
      key: "BookId",
    },
  },
  NumberOfPages: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Publisher: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Language: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = BookDetail;
