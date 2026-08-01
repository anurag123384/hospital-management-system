import Appointment from "../models/Appointment.js";
import Patient from "../models/Patient.js";



// =======================================
// Create Appointment
// =======================================

export const createAppointment = async (req, res) => {

  try {


    let patient = await Patient.findOne({

      user: req.user._id

    });



    // Create patient profile if not exists

    if (!patient) {


      patient = await Patient.create({

        user: req.user._id,

        name: req.user.name || "New Patient",

        gender: "Other",

        phone: "0000000000",

        email: req.user.email || "",

        disease: "General Checkup",

        address: "Not Provided"

      });


    }




    const appointment = await Appointment.create({

      patient: patient._id,

      doctor: req.body.doctor,

      appointmentDate: req.body.appointmentDate,

      appointmentTime: req.body.appointmentTime,

      reason: req.body.reason

    });






    const populatedAppointment = await Appointment.findById(

      appointment._id

    )

    .populate(

      "patient",

      "name phone email"

    )

    .populate(

      "doctor",

      "name specialization"

    );







    res.status(201).json({

      success:true,

      message:"Appointment booked successfully",

      appointment: populatedAppointment

    });



  } catch(error) {


    console.log(
      "CREATE APPOINTMENT ERROR:",
      error
    );


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};









// =======================================
// Get All Appointments
// =======================================

export const getAppointments = async(req,res)=>{


  try{


    const appointments = await Appointment.find()

    .populate(
      "patient",
      "name phone email"
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

      appointments

    });



  }
  catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};









// =======================================
// Get Appointment By ID
// =======================================

export const getAppointmentById = async(req,res)=>{


  try{


    const appointment = await Appointment.findById(

      req.params.id

    )

    .populate("patient")

    .populate("doctor");





    if(!appointment){


      return res.status(404).json({

        success:false,

        message:"Appointment not found"

      });


    }





    res.status(200).json({

      success:true,

      appointment

    });



  }
  catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};









// =======================================
// Update Appointment
// =======================================

export const updateAppointment = async(req,res)=>{


  try{


    const appointment = await Appointment.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new:true,
        runValidators:true
      }

    )

    .populate("patient")

    .populate("doctor");





    if(!appointment){


      return res.status(404).json({

        success:false,

        message:"Appointment not found"

      });


    }





    res.status(200).json({

      success:true,

      message:"Appointment updated successfully",

      appointment

    });



  }
  catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};









// =======================================
// Update Status
// =======================================

export const updateAppointmentStatus = async(req,res)=>{


  try{


    const appointment = await Appointment.findById(

      req.params.id

    );





    if(!appointment){


      return res.status(404).json({

        success:false,

        message:"Appointment not found"

      });


    }





    appointment.status = req.body.status;


    await appointment.save();





    res.status(200).json({

      success:true,

      message:"Appointment status updated",

      appointment

    });



  }
  catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};









// =======================================
// Delete Appointment
// =======================================

export const deleteAppointment = async(req,res)=>{


  try{


    const appointment = await Appointment.findById(

      req.params.id

    );





    if(!appointment){


      return res.status(404).json({

        success:false,

        message:"Appointment not found"

      });


    }





    await appointment.deleteOne();





    res.status(200).json({

      success:true,

      message:"Appointment deleted successfully"

    });



  }
  catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};