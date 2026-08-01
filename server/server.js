import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";


// Routes

import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import doctorDashboardRoutes from "./routes/doctorDashboardRoutes.js";



dotenv.config();


// MongoDB Connection

connectDB();



const app = express();



// =============================
// Middlewares
// =============================


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use(express.json());


app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(cookieParser());




// =============================
// API Routes
// =============================


app.use(
  "/api/auth",
  authRoutes
);


app.use(
  "/api/doctors",
  doctorRoutes
);


app.use(
  "/api/patients",
  patientRoutes
);


app.use(
  "/api/appointments",
  appointmentRoutes
);


app.use(
  "/api/billing",
  billRoutes
);


app.use(
  "/api/prescriptions",
  prescriptionRoutes
);


app.use(
  "/api/dashboard",
  dashboardRoutes
);


app.use(
  "/api/doctor",
  doctorDashboardRoutes
);





// =============================
// Test Route
// =============================


app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message: "Hospital Management API Running 🚀"

  });

});






// =============================
// Server Start
// =============================


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});