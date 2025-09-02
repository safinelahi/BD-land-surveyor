import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Create new user
// @route   POST /api/users
// @access  Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  const createdUser = await user.save();
  res.status(201).json(createdUser);
});

export { getUsers, createUser };
