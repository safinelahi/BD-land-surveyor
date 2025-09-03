import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Register new user
// @route   POST /api/users
// @access  Public
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
  } = req.body;

  const normalizedEmail = email.toLowerCase();

  const userExists = await User.findOne({ email: normalizedEmail });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  let profileImageBuffer = null;
  if (req.file) {
    profileImageBuffer = req.file.buffer;
  }

  const user = await User.create({
    role,
    name,
    email: normalizedEmail,
    password,
    mobile,
    ...(role === "user" && { address }),
    ...(role === "surveyor" && { companyName, companyAddress, licenseNumber, experience }),
    ...(profileImageBuffer && { profileImage: profileImageBuffer }),
  });

  res.status(201).json({
    _id: user._id,
    role: user.role,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    message: "Registration successful",
  });
});


// @desc    Get all surveyors
// @route   GET /api/users/surveyors
// @access  Public
const getSurveyors = asyncHandler(async (req, res) => {
  const surveyors = await User.find({ role: "surveyor" }).select(
    "name experience profileImage"
  );

  const surveyorsWithImage = surveyors.map((s) => ({
    ...s._doc,
    profileImage: s.profileImage ? s.profileImage.toString("base64") : null,
  }));

  res.json(surveyorsWithImage);
});

export {registerUser, getSurveyors}
