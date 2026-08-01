import express from "express";

import { getDashboardStats } from "../controllers/dashboardController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// ======================================
// Admin Dashboard
// ======================================

router.get(
  "/",
  protect,
  adminOnly,
  getDashboardStats
);

export default router;