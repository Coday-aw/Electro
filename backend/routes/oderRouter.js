import express from "express";
import { newOrder, getOders } from "../controllers/oderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, newOrder);
router.get("/", verifyToken, getOders);

export default router;
