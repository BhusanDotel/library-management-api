const User = require("../models/usersModel");

//POST
//http://localhost:3000/api/registeruser
//{
//  "name":"John cena",
//  "email":"john1@gmail.com"
//}
const registerUser = async (req, res) => {
  if (req) {
    const { name, email } = req.body;
    try {
      const _date = new Date();
      const date = _date.toString();
      if (name && email) {
        const user = {
          Name: name,
          Email: email,
          MembershipDate: date,
        };
        await User.create(user);
        res.json("Data entered successfully");
      }
    } catch (error) {
      res.json("something went wrong");
    }
  }
};

//GET
//http://localhost:3000/api/fetchusers
const fetchUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json("something went wrong");
  }
};

//GET
//http://localhost:3000/api/fetchuser?id=1
//http://localhost:3000/api/fetchuser?id=2
const fetchUser = async (req, res) => {
  if (req) {
    if (req.query.id) {
      const _id = req.query.id;
      const id = parseInt(_id);
      if (id) {
        try {
          const user = await User.findOne({
            where: {
              UserId: id,
            },
          });
          if (user) {
            res.json(user);
          } else {
            res.json("no user found");
          }
        } catch (error) {
          res.json("something went wrong");
        }
      }
    }
  }
};

module.exports = {
  registerUser,
  fetchUsers,
  fetchUser,
};
