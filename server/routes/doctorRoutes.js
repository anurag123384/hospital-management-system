import express from "express";

import {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();


// Add Doctor
router.post(
  "/",
  protect,
  adminOnly,
  addDoctor
);


// Get All Doctors
router.get(
  "/",
  getDoctors
);


// Get Doctor By ID
router.get(
  "/:id",
  getDoctorById
);


// Update Doctor
router.put(
  "/:id",
  protect,
  adminOnly,
  updateDoctor
);


// Delete Doctor
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteDoctor
);


export default router;