import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import Appointment from "../models/Appointment.js";
import Bill from "../models/Bill.js";

export const getDashboardStats = async (req, res) => {
  try {
    // ==========================
    // Basic Counts
    // ==========================
    const totalDoctors = await Doctor.countDocuments();

    const totalPatients = await Patient.countDocuments();

    const totalAppointments = await Appointment.countDocuments();

    const totalBills = await Bill.countDocuments();

    // ==========================
    // Appointment Status
    // ==========================
    const confirmedAppointments = await Appointment.countDocuments({
      status: "Confirmed",
    });

    const pendingAppointments = await Appointment.countDocuments({
      status: "Pending",
    });

    const completedAppointments = await Appointment.countDocuments({
      status: "Completed",
    });

    const cancelledAppointments = await Appointment.countDocuments({
      status: "Cancelled",
    });

    // ==========================
    // Recent Appointments
    // ==========================
    const recentAppointments = await Appointment.find()
      .populate("doctor", "name specialization")
      .populate("patient", "name email")
      .sort({ createdAt: -1 })
      .limit(5);

    // ==========================
    // Recent Patients
    // ==========================
    const recentPatients = await Patient.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // ==========================
    // Monthly Appointment Chart
    // ==========================
    const monthlyAppointments = Array(12).fill(0);

    const appointments = await Appointment.find();

    appointments.forEach((appointment) => {
      const month = new Date(appointment.createdAt).getMonth();
      monthlyAppointments[month]++;
    });

    // ==========================
    // Revenue
    // ==========================
    const bills = await Bill.find();

    const monthlyRevenue = Array(12).fill(0);

    let totalRevenue = 0;

    bills.forEach((bill) => {
      const amount = Number(bill.totalAmount || 0);

      totalRevenue += amount;

      const month = new Date(bill.createdAt).getMonth();

      monthlyRevenue[month] += amount;
    });

    // ==========================
    // Response
    // ==========================
    res.status(200).json({
      success: true,

      stats: {
        totalDoctors,
        totalPatients,
        totalAppointments,
        totalBills,
        totalRevenue,

        totalPrescriptions: 0,

        confirmedAppointments,
        pendingAppointments,
        completedAppointments,
        cancelledAppointments,
      },

      charts: {
        monthlyAppointments,
        monthlyRevenue,
      },

      recentAppointments,
      recentPatients,
    });
  } catch (error) {
    console.log("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};