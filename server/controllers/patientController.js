import Patient from "../models/Patient.js";
import User from "../models/User.js";



// =====================================
// Add Patient
// =====================================

export const addPatient = async (req,res)=>{

try{


const {
  name,
  email,
  phone,
  gender,
  disease,
  address
}=req.body;



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




const user =
await User.create({

name,

email,

password:"patient123",

role:"patient"

});







const patient =
await Patient.create({

user:user._id,

name,

email,

phone,

gender,

disease,

address

});






res.status(201).json({

success:true,

message:"Patient Added Successfully. Login Password: patient123",

patient

});






}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};







// =====================================
// Get All Patients
// =====================================

export const getPatients = async(req,res)=>{

try{


const patients =
await Patient.find()

.populate(
"user",
"name email role"
)

.sort({

createdAt:-1

});





res.status(200).json({

success:true,

patients

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};








// =====================================
// Get Patient By ID
// =====================================

export const getPatientById =
async(req,res)=>{


try{


const patient =
await Patient.findById(

req.params.id

)

.populate(

"user",

"name email role"

);





if(!patient){

return res.status(404).json({

success:false,

message:"Patient not found"

});

}





res.status(200).json({

success:true,

patient

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// =====================================
// Get Logged In Patient Profile
// =====================================

export const getMyProfile = async(req,res)=>{

try{


const patient =
await Patient.findOne({

user:req.user._id

})

.populate(

"user",

"name email role"

);





if(!patient){

return res.status(404).json({

success:false,

message:"Patient profile not found for this user"

});

}





res.status(200).json({

success:true,

patient

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Update Patient
// =====================================

export const updatePatient =
async(req,res)=>{


try{


const patient =
await Patient.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true,

runValidators:true

}

);





if(!patient){

return res.status(404).json({

success:false,

message:"Patient not found"

});

}





res.status(200).json({

success:true,

message:"Patient Updated Successfully",

patient

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// =====================================
// Delete Patient
// =====================================

export const deletePatient =
async(req,res)=>{


try{


const patient =
await Patient.findById(

req.params.id

);





if(!patient){

return res.status(404).json({

success:false,

message:"Patient not found"

});

}





if(patient.user){

await User.findByIdAndDelete(

patient.user

);

}





await patient.deleteOne();






res.status(200).json({

success:true,

message:"Patient Deleted Successfully"

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};