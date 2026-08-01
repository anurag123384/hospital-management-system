import Bill from "../models/Bill.js";

// ==========================================
// Create Bill
// ==========================================
export const createBill = async (req, res) => {
  try {
    const {
      patient,
      doctor,
      consultationFee,
      medicineCharges,
      testCharges,
      roomCharges,
      otherCharges,
      paymentStatus,
      gst,
    } = req.body;

    if (!patient || !doctor) {
      return res.status(400).json({
        success: false,
        message: "Patient and Doctor are required",
      });
    }

    const totalAmount =
      Number(consultationFee || 0) +
      Number(medicineCharges || 0) +
      Number(testCharges || 0) +
      Number(roomCharges || 0) +
      Number(otherCharges || 0) +
      Number(gst || 0);

    const bill = await Bill.create({
      billNumber: "BILL-" + Date.now(),

      patient,
      doctor,

      consultationFee: Number(consultationFee || 0),
      medicineCharges: Number(medicineCharges || 0),
      testCharges: Number(testCharges || 0),
      roomCharges: Number(roomCharges || 0),
      otherCharges: Number(otherCharges || 0),
      gst: Number(gst || 0),

      totalAmount,

      paymentStatus:
        paymentStatus === "Paid" ? "Paid" : "Unpaid",
    });

    res.status(201).json({
      success: true,
      message: "Bill generated successfully",
      bill,
    });
  } catch (error) {
    console.error("Create Bill Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get All Bills
// ==========================================
export const getBills = async (req, res) => {
  try {
    const bills = await Bill.find()
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bills,
    });
  } catch (error) {
    console.error("Get Bills Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get Single Bill
// ==========================================
export const getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id)
      .populate("patient")
      .populate("doctor");

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found",
      });
    }

    res.status(200).json({
      success: true,
      bill,
    });
  } catch (error) {
    console.error("Get Bill Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Update Bill
// ==========================================
export const updateBill = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Bill updated successfully",
      bill,
    });
  } catch (error) {
    console.error("Update Bill Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete Bill
// ==========================================
export const deleteBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found",
      });
    }

    await bill.deleteOne();

    res.status(200).json({
      success: true,
      message: "Bill deleted successfully",
    });
  } catch (error) {
    console.error("Delete Bill Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};