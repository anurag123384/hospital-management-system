import express from "express";

import {
  createPrescription,
  getPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} from "../controllers/prescriptionController.js";


import {
  protect,
  adminOnly,
  doctorOnly,
} from "../middleware/authMiddleware.js";


const router = express.Router();


// Get All Prescriptions

router.get(
  "/",
  protect,
  getPrescriptions
);



// Get Single Prescription

router.get(
  "/:id",
  protect,
  getPrescriptionById
);



// Create Prescription
// Doctor Only

router.post(
  "/",
  protect,
  doctorOnly,
  createPrescription
);



// Update Prescription
// Doctor Only

router.put(
  "/:id",
  protect,
  doctorOnly,
  updatePrescription
);



// Delete Prescription
// Admin Only

router.delete(
  "/:id",
  protect,
  adminOnly,
  deletePrescription
);



export default router;