const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { userSchema } = require("../validations/postValidation");
const User = require("../models/userModal");

const createUser = async (req, res) => {
  const validation = userSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      error: "Validation error",
      details: validation.error.errors,
    });
  }

  const { username, password } = validation.data;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already taken" });
  }

  const newUser = new User({ username, password });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
