const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

//        headers: {
//          authToken: actualtoken,
//        },

const authenticateToken = (req, res, next) => {
  if (req.headers) {
    const { authtoken } = req.headers;
    if (authtoken) {
      try {
        const decoded = jwt.verify(authtoken, secretKey);
        if (decoded) {
          next();
        }
      } catch (error) {
        if (error.name === "TokenExpiredError") {
          return res.json("JWT has expired");
        } else {
          return res.json("JWT is invalid");
        }
      }
    }
  }
};

module.exports = {
  authenticateToken,
};
