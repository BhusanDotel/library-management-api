const { Sequelize } = require("sequelize");
require("dotenv").config();
const password = process.env.PSQL_PASSWORD;

const sequelize = new Sequelize({
  database: "LIBRARY_DB",
  username: "postgres",
  password: password,
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
