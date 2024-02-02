const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const Login = async (req, res) => {
  //expiration after 1 minute
  // const expirationTime = Math.floor(Date.now() / 1000) + 60;

  //expiration after 5 minutes
  // const expirationTime = Math.floor(Date.now() / 1000) + 5 * 60;

  //expiration after 1 day
  const expirationTime = Math.floor(Date.now() / 1000) + 24 * 60 * 60;

  const playLoad = {
    // id: user._id,
    // fullName: user.fullName,
    // email: user.email,
    exp: expirationTime,
  };
  const token = jwt.sign(playLoad, secretKey);
  return res.json({ authToken: token });
};

// headers: {
//  authToken: actualtoken,
// },

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
