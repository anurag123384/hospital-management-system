import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";


// Routes
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import billRoutes from "./routes/billRoutes.js";


// Load env
dotenv.config();


const app = express();


// Connect Database
console.log("🔗 Connecting to MongoDB...");

connectDB();



// Middleware

app.use(
  cors({

    origin:[
      "http://localhost:5173",
      "https://your-vercel-app.vercel.app"
    ],

    credentials:true,

  })
);



app.use(express.json());

app.use(express.urlencoded({
  extended:true
}));

app.use(cookieParser());




// Test Route

app.get("/",(req,res)=>{

res.json({

success:true,

message:"Hospital Management API Running 🚀"

});

});





// API Routes

app.use("/api/auth",authRoutes);

app.use("/api/doctors",doctorRoutes);

app.use("/api/patients",patientRoutes);

app.use("/api/appointments",appointmentRoutes);

app.use("/api/prescriptions",prescriptionRoutes);

app.use("/api/bills",billRoutes);





// Error Handler

app.use((err,req,res,next)=>{


console.log(err);


res.status(
err.statusCode || 500
)
.json({

success:false,

message:
err.message || "Server Error"

});


});





const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`🚀 Server running on port ${PORT}`
);


});