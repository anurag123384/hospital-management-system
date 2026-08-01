import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/User.js";
import Doctor from "./models/Doctor.js";
import Patient from "./models/Patient.js";
import Appointment from "./models/Appointment.js";


dotenv.config();



const seedData = async()=>{

try{


await mongoose.connect(
process.env.MONGODB_URI
);


console.log("✅ MongoDB Connected");



// CLEAR DATABASE

await User.deleteMany({});
await Doctor.deleteMany({});
await Patient.deleteMany({});
await Appointment.deleteMany({});


console.log("🗑 Old Data Removed");





// =====================
// USERS
// =====================


// Admin

const admin = await User.create({

name:"Admin",

email:"admin@gmail.com",

password:"admin123",

role:"admin"

});





// Doctors Users

const doctorUsers = await User.create([


{
name:"Dr. Amit Sharma",
email:"amit@gmail.com",
password:"doctor123",
role:"doctor"
},


{
name:"Dr. Priya Singh",
email:"priya@gmail.com",
password:"doctor123",
role:"doctor"
},


{
name:"Dr. Rahul Verma",
email:"rahuldoctor@gmail.com",
password:"doctor123",
role:"doctor"
}


]);






// Patient Users

const patientUsers = await User.create([


{
name:"Pinki",
email:"pinki@gmail.com",
password:"patient123",
role:"patient"
},


{
name:"Rahul Kumar",
email:"rahulpatient@gmail.com",
password:"patient123",
role:"patient"
},


{
name:"Ankit Singh",
email:"ankit@gmail.com",
password:"patient123",
role:"patient"
}


]);



console.log("✅ Users Created");









// =====================
// DOCTORS
// =====================


const doctors = await Doctor.create([



{

user:doctorUsers[0]._id,

name:"Dr. Amit Sharma",

email:"amit@gmail.com",

phone:"9876543210",

specialization:"Cardiologist",

qualification:"MBBS MD",

experience:10,

consultationFee:500,

gender:"Male",

address:"Delhi"

},



{

user:doctorUsers[1]._id,

name:"Dr. Priya Singh",

email:"priya@gmail.com",

phone:"9876543211",

specialization:"Neurologist",

qualification:"MBBS MD",

experience:8,

consultationFee:600,

gender:"Female",

address:"Lucknow"

},



{

user:doctorUsers[2]._id,

name:"Dr. Rahul Verma",

email:"rahuldoctor@gmail.com",

phone:"9876543212",

specialization:"Radiologist",

qualification:"MBBS MD",

experience:7,

consultationFee:700,

gender:"Male",

address:"Noida"

}


]);




console.log("✅ Doctors Created");









// =====================
// PATIENTS
// =====================


const patients = await Patient.create([



{

user:patientUsers[0]._id,

name:"Pinki",

gender:"Male",

phone:"9170708999",

email:"pinki@gmail.com",

disease:"Neuro",

address:"New Delhi"

},




{

user:patientUsers[1]._id,

name:"Rahul Kumar",

gender:"Male",

phone:"9000000002",

email:"rahulpatient@gmail.com",

disease:"Fever",

address:"Delhi"

},




{

user:patientUsers[2]._id,

name:"Ankit Singh",

gender:"Male",

phone:"9000000003",

email:"ankit@gmail.com",

disease:"Cold",

address:"Kanpur"

}



]);




console.log("✅ Patients Created");









// =====================
// APPOINTMENTS
// =====================


await Appointment.create([



{

patient:patients[0]._id,

doctor:doctors[0]._id,

appointmentDate:new Date(),

appointmentTime:"10:30",

reason:"Heart Checkup",

status:"Confirmed"

},




{

patient:patients[1]._id,

doctor:doctors[1]._id,

appointmentDate:new Date(),

appointmentTime:"11:30",

reason:"Headache",

status:"Pending"

},




{

patient:patients[2]._id,

doctor:doctors[2]._id,

appointmentDate:new Date(),

appointmentTime:"12:30",

reason:"Bone Pain",

status:"Completed"

}



]);





console.log("✅ Appointments Created");

console.log("🎉 Seed Completed Successfully");


process.exit();



}catch(error){


console.log(
"❌ Seed Error:",
error.message
);


process.exit(1);


}


};



seedData();