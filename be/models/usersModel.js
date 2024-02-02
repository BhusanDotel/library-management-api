const { DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const User = sequelize.define("User", {
  UserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  MembershipDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
