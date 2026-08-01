import dotenv from "dotenv";
import mongoose from "mongoose";

import Doctor from "./models/Doctor.js";


dotenv.config();


const doctors = [

{
    name:"Dr Amit Sharma",
    email:"amit.sharma@gmail.com",
    phone:"9876543210",
    gender:"Male",
    address:"New Delhi",
    qualification:"MBBS, MD Cardiology",
    specialization:"Cardiologist",
    experience:10,
    consultationFee:800
},


{
    name:"Dr Neha Singh",
    email:"neha.singh@gmail.com",
    phone:"9876543211",
    gender:"Female",
    address:"Noida",
    qualification:"MBBS, MD Neurology",
    specialization:"Neurologist",
    experience:8,
    consultationFee:700
},


{
    name:"Dr Rahul Verma",
    email:"rahul.verma@gmail.com",
    phone:"9876543212",
    gender:"Male",
    address:"Gurgaon",
    qualification:"MBBS, MD Dermatology",
    specialization:"Dermatologist",
    experience:6,
    consultationFee:600
}

];



const seedDoctors = async()=>{

try{

await mongoose.connect(process.env.MONGODB_URI);

console.log("MongoDB Connected");


await Doctor.deleteMany();


await Doctor.insertMany(doctors);


console.log("✅ Doctors Added Successfully");


process.exit();


}
catch(error){

console.log("❌ Error:",error.message);

process.exit(1);

}

};



seedDoctors();