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
  console.log(registerUser)

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    role,
    name,
    email,
    password,
    mobile,
    ...(role === "student" && { address }),
    ...(role === "recruiter" && {
      companyName,
      companyAddress,
      licenseNumber,
      experience,
    }),
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { registerUser };
