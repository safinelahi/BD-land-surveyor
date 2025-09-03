import express from "express";
import multer from "multer";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("profileImage"), registerUser);

export default router;
