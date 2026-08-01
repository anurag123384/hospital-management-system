import express from "express";

import {
  addPatient,
  getPatients,
  getPatientById,
  getMyProfile,
  updatePatient,
  deletePatient
} from "../controllers/patientController.js";


import {
  protect,
  adminOnly
} from "../middleware/authMiddleware.js";



const router = express.Router();




// Get all patients

router.get(
  "/",
  protect,
  adminOnly,
  getPatients
);




// Get logged in patient profile

router.get(
  "/profile",
  protect,
  getMyProfile
);




// Get patient by id

router.get(
  "/:id",
  protect,
  getPatientById
);




// Add patient

router.post(
  "/",
  protect,
  adminOnly,
  addPatient
);




// Update patient

router.put(
  "/:id",
  protect,
  adminOnly,
  updatePatient
);




// Delete patient

router.delete(
  "/:id",
  protect,
  adminOnly,
  deletePatient
);



export default router;