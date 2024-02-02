const { DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const Book = sequelize.define("Book", {
  BookId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ISBN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PublishDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Book;
