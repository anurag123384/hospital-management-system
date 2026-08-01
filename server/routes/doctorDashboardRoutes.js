import express from "express";

import {
  getDoctorDashboard,
  getDoctorProfile,
  getDoctorAppointments,
  updateAppointmentStatus,
} from "../controllers/doctorDashboardController.js";


import {
  protect,
  doctorOnly,
} from "../middleware/authMiddleware.js";


const router = express.Router();



// Dashboard

router.get(
  "/dashboard",
  protect,
  doctorOnly,
  getDoctorDashboard
);



// Profile

router.get(
  "/profile",
  protect,
  doctorOnly,
  getDoctorProfile
);



// Appointments

router.get(
  "/appointments",
  protect,
  doctorOnly,
  getDoctorAppointments
);



// Update Appointment Status

router.put(
  "/appointments/:id",
  protect,
  doctorOnly,
  updateAppointmentStatus
);



export default router;