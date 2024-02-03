const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const borrowRoute = require("./routes/borrowRoute");
const authRoute = require("./routes/authRoute");

const sequelize = require("./Sequelize");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Synchronize the model with the database
(async () => {
  await sequelize.sync();
  console.log("PSQL Database synchronized");
})();

app.use("/api", userRoute);
app.use("/api", bookRoute);
app.use("/api", borrowRoute);
app.use("/api", authRoute);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
