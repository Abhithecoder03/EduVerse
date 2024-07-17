const jwt = require("jsonwebtoken");
const Student = require("../models/StudentModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //split bearr from token
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token,"Abhishek");

      //returning user info excluding password of the user

      req.user = await Student.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };