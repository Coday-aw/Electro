import express from "express";
import { createMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", createMessage);

export default router;
