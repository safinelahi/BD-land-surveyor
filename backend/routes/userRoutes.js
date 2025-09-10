import express from "express";
import multer from "multer";
import { registerUser, loginUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

// Multer setup for uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("profileImage"), registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);

export default router;
