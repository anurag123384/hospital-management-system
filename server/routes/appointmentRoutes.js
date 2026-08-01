import express from "express";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();



// Get all appointments

router.get(
  "/",
  protect,
  getAppointments
);



// Get single appointment

router.get(
  "/:id",
  protect,
  getAppointmentById
);



// Create appointment

router.post(
  "/",
  protect,
  createAppointment
);



// Update appointment

router.put(
  "/:id",
  protect,
  updateAppointment
);



// Update status

router.patch(
  "/:id/status",
  protect,
  updateAppointmentStatus
);



// Delete appointment

router.delete(
  "/:id",
  protect,
  deleteAppointment
);



export default router;