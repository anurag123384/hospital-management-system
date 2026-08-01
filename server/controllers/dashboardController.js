import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import Appointment from "../models/Appointment.js";



export const getDashboardStats = async (req, res) => {


  try {


    const totalDoctors = await Doctor.countDocuments();


    const totalPatients = await Patient.countDocuments();


    const totalAppointments =
      await Appointment.countDocuments();



    const confirmedAppointments =
      await Appointment.countDocuments({
        status: "Confirmed"
      });



    const pendingAppointments =
      await Appointment.countDocuments({
        status: "Pending"
      });



    const completedAppointments =
      await Appointment.countDocuments({
        status: "Completed"
      });



    const cancelledAppointments =
      await Appointment.countDocuments({
        status: "Cancelled"
      });





    const recentAppointments =
      await Appointment.find()

        .populate(
          "doctor",
          "name specialization"
        )

        .populate(
          "patient",
          "name email"
        )

        .sort({
          createdAt: -1
        })

        .limit(5);






    const recentPatients =
      await Patient.find()

        .sort({
          createdAt: -1
        })

        .limit(5);







    // Chart data

    const monthlyAppointments = Array(12).fill(0);


    const appointments =
      await Appointment.find();



    appointments.forEach((item) => {


      const month =
        new Date(item.createdAt).getMonth();


      monthlyAppointments[month]++;


    });







    const monthlyRevenue = Array(12).fill(0);






    res.status(200).json({


      success: true,



      stats: {


        totalDoctors,

        totalPatients,

        totalAppointments,

        totalPrescriptions: 0,

        totalBills: 0,

        totalRevenue: 0,


        confirmedAppointments,

        pendingAppointments,

        completedAppointments,

        cancelledAppointments


      },




      charts: {


        monthlyAppointments,

        monthlyRevenue


      },




      recentAppointments,

      recentPatients



    });





  }
  catch (error) {


    console.log(
      "Dashboard Error:",
      error
    );



    res.status(500).json({

      success: false,

      message: error.message

    });


  }



};