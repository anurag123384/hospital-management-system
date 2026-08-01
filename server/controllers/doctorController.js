import Doctor from "../models/Doctor.js";
import User from "../models/User.js";

import Appointment from "../models/Appointment.js";
import Prescription from "../models/Prescription.js";



// =====================================
// Add Doctor
// =====================================

export const addDoctor = async (req,res)=>{

try{


const {

name,

email,

phone,

specialization,

qualification,

experience,

consultationFee,

gender,

address

}=req.body;





const existingDoctor =
await Doctor.findOne({
email
});



if(existingDoctor){

return res.status(400).json({

success:false,

message:"Doctor already exists"

});

}





const existingUser =
await User.findOne({
email
});



if(existingUser){

return res.status(400).json({

success:false,

message:"User with this email already exists"

});

}







const user = await User.create({

name,

email,

password:"doctor123",

role:"doctor"

});







const doctor = await Doctor.create({

user:user._id,

name,

email,

phone,

specialization,

qualification,

experience,

consultationFee,

gender,

address

});






res.status(201).json({

success:true,

message:"Doctor Added Successfully",

doctor

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Get All Doctors
// =====================================

export const getDoctors = async(req,res)=>{

try{


const doctors = await Doctor.find()

.populate(
"user",
"name email role"
)

.sort({

createdAt:-1

});





res.status(200).json({

success:true,

doctors

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Get Doctor By ID
// =====================================

export const getDoctorById = async(req,res)=>{

try{


const doctor = await Doctor.findById(

req.params.id

)

.populate(
"user",
"name email role"
);





if(!doctor){

return res.status(404).json({

success:false,

message:"Doctor Not Found"

});

}





res.status(200).json({

success:true,

doctor

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Doctor Dashboard
// =====================================

export const getDoctorDashboard = async(req,res)=>{

try{


const doctor = await Doctor.findOne({

user:req.user._id

});





if(!doctor){

return res.status(404).json({

success:false,

message:"Doctor profile not found"

});

}





const appointments = await Appointment.find({

doctor:doctor._id

})

.populate(

"patient",

"name email phone age gender"

)

.sort({

createdAt:-1

});







const patients = [

...new Set(

appointments

.filter(item=>item.patient)

.map(

item=>item.patient._id.toString()

)

)

];






const totalPrescriptions =

await Prescription.countDocuments({

doctor:doctor._id

});







res.status(200).json({

success:true,

data:{


doctor,


appointments,


totalPatients:

patients.length,



todayAppointments:

appointments.length,



completedAppointments:

appointments.filter(

item=>item.status==="Completed"

).length,



totalPrescriptions


}


});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Update Doctor
// =====================================

export const updateDoctor = async(req,res)=>{

try{


const doctor = await Doctor.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true,

runValidators:true

}

);





if(!doctor){

return res.status(404).json({

success:false,

message:"Doctor Not Found"

});

}





res.status(200).json({

success:true,

message:"Doctor Updated Successfully",

doctor

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Delete Doctor
// =====================================

export const deleteDoctor = async(req,res)=>{

try{


const doctor = await Doctor.findById(

req.params.id

);





if(!doctor){

return res.status(404).json({

success:false,

message:"Doctor Not Found"

});

}





if(doctor.user){

await User.findByIdAndDelete(

doctor.user

);

}





await Doctor.findByIdAndDelete(

req.params.id

);





res.status(200).json({

success:true,

message:"Doctor Deleted Successfully"

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};