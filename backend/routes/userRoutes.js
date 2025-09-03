import express from "express";
import multer from "multer";
import { registerUser, getSurveyors } from "../controllers/userController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("profileImage"), registerUser);
router.get("/surveyors", getSurveyors);


export default router;
