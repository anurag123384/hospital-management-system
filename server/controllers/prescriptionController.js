import Prescription from "../models/Prescription.js";
import Doctor from "../models/Doctor.js";


// =====================================
// Create Prescription
// =====================================

export const createPrescription = async (req,res)=>{

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




const prescription = await Prescription.create({

...req.body,

doctor:doctor._id

});




res.status(201).json({

success:true,

message:"Prescription created successfully",

prescription

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};







// =====================================
// Get All Prescriptions
// =====================================

export const getPrescriptions = async(req,res)=>{


try{


let query={};



if(req.user.role==="doctor"){


const doctor = await Doctor.findOne({

user:req.user._id

});


if(doctor){

query.doctor = doctor._id;

}


}




const prescriptions = await Prescription.find(query)


.populate(
"patient",
"name gender phone disease"
)


.populate(
"doctor",
"name specialization"
)


.sort({

createdAt:-1

});




res.status(200).json({

success:true,

prescriptions

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Get Single Prescription
// =====================================

export const getPrescriptionById = async(req,res)=>{


try{


const prescription = await Prescription.findById(

req.params.id

)

.populate(
"patient"
)

.populate(
"doctor"
);




if(!prescription){

return res.status(404).json({

success:false,

message:"Prescription not found"

});

}




res.status(200).json({

success:true,

prescription

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};









// =====================================
// Update Prescription
// =====================================

export const updatePrescription = async(req,res)=>{


try{


const prescription = await Prescription.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true,

runValidators:true

}

);




if(!prescription){

return res.status(404).json({

success:false,

message:"Prescription not found"

});

}





res.status(200).json({

success:true,

message:"Prescription updated successfully",

prescription

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// =====================================
// Delete Prescription
// =====================================

export const deletePrescription = async(req,res)=>{


try{


const prescription = await Prescription.findById(

req.params.id

);



if(!prescription){

return res.status(404).json({

success:false,

message:"Prescription not found"

});

}



await prescription.deleteOne();




res.status(200).json({

success:true,

message:"Prescription deleted successfully"

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};