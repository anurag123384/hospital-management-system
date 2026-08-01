import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";
import Prescription from "../models/Prescription.js";



// =====================================
// Doctor Dashboard
// =====================================

export const getDoctorDashboard = async (req, res) => {

  try {


    const doctor = await Doctor.findOne({

      user: req.user._id

    });



    if (!doctor) {

      return res.status(404).json({

        success:false,

        message:"Doctor profile not found"

      });

    }




    const appointments = await Appointment.find({

      doctor: doctor._id

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

        .filter(
          item => item.patient
        )

        .map(
          item => item.patient._id.toString()
        )

      )

    ];





    const totalPrescriptions =
      await Prescription.countDocuments({

        doctor: doctor._id

      });






    // Today's Appointment Count

    const start = new Date();

    start.setHours(
      0,
      0,
      0,
      0
    );


    const end = new Date(start);

    end.setDate(
      end.getDate()+1
    );



    const todayAppointments =
      await Appointment.countDocuments({

        doctor: doctor._id,

        appointmentDate:{

          $gte:start,

          $lt:end

        }

      });







    res.status(200).json({

      success:true,


      data:{


        doctor,


        appointments,


        totalPatients:
          patients.length,


        todayAppointments,



        completedAppointments:

          appointments.filter(

            item =>
              item.status === "Completed"

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
// Doctor Profile
// =====================================


export const getDoctorProfile = async(req,res)=>{


  try{


    const doctor =
      await Doctor.findOne({

        user:req.user._id

      });



    if(!doctor){

      return res.status(404).json({

        success:false,

        message:"Doctor not found"

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
// Doctor Appointments
// =====================================


export const getDoctorAppointments = async(req,res)=>{


  try{


    const doctor =
      await Doctor.findOne({

        user:req.user._id

      });



    const appointments =
      await Appointment.find({

        doctor:doctor._id

      })
      .populate(
        "patient",
        "name email phone age gender"
      )
      .sort({

        createdAt:-1

      });




    res.status(200).json({

      success:true,

      appointments

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};







// =====================================
// Update Appointment Status
// =====================================


export const updateAppointmentStatus =
async(req,res)=>{


try{


const {
  status
}=req.body;



const appointment =
await Appointment.findByIdAndUpdate(

req.params.id,

{
 status
},

{
 new:true
}

);




if(!appointment){

return res.status(404).json({

success:false,

message:"Appointment not found"

});

}




res.status(200).json({

success:true,

message:"Appointment status updated",

appointment

});





}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};