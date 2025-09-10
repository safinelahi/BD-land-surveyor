import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    role,
    name,
    email,
    password,
    mobile,
    address,
    companyName,
    companyAddress,
    licenseNumber,
    experience,
    price,
  } = req.body;

  const normalizedEmail = email.toLowerCase();
  const userExists = await User.findOne({ email: normalizedEmail });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Save only relative URL
  let profileImageURL = null;
  if (req.file) {
    profileImageURL = `/uploads/${req.file.filename}`;
  }

  const user = await User.create({
    role,
    name,
    email: normalizedEmail,
    password,
    mobile,
    ...(role === "user" && { address }),
    ...(role === "surveyor" && { companyName, companyAddress, licenseNumber, experience, price }),
    ...(profileImageURL && { profileImage: profileImageURL }),
  });

  res.status(201).json({
    _id: user._id,
    role: user.role,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    profileImage: user.profileImage,
    message: "Registration successful",
  });
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const normalizedEmail = email.toLowerCase();
  const user = await User.findOne({ email: normalizedEmail, role });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      profileImage: user.profileImage, // send path
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get all surveyors
// @route   GET /api/users/surveyors
// @access  Public
const getSurveyors = asyncHandler(async (req, res) => {
  const surveyors = await User.find({ role: "surveyor" }).select(
    "name experience profileImage price"
  );

  // Just send the path, do NOT convert to base64
  const surveyorsWithPath = surveyors.map((s) => ({
    ...s._doc,
    profileImage: s.profileImage || null,
  }));

  res.json(surveyorsWithPath);
});

// @desc    Get all users (role = "user")
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ role: "user" }).select(
    "name email mobile address profileImage"
  );

  const usersWithPath = users.map((u) => ({
    ...u._doc,
    profileImage: u.profileImage || null, // just path
  }));

  res.json(usersWithPath);
});

export { registerUser, loginUser, getSurveyors, getUsers };
