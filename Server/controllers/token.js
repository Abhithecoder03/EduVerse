const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id },"Abhishek", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;