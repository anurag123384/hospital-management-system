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

      medicineCharge,

      labCharge,

      roomCharge,

      otherCharge,

      paymentStatus


    } = req.body;





    const totalAmount =

      Number(consultationFee || 0) +

      Number(medicineCharge || 0) +

      Number(labCharge || 0) +

      Number(roomCharge || 0) +

      Number(otherCharge || 0);







    const bill = await Bill.create({

      billNumber:
        "BILL-" + Date.now(),


      patient,


      doctor,


      consultationFee:


        Number(consultationFee || 0),



      medicineCharges:


        Number(medicineCharge || 0),



      testCharges:


        Number(labCharge || 0),



      roomCharges:


        Number(roomCharge || 0),



      otherCharges:


        Number(otherCharge || 0),



      totalAmount,



      paymentStatus:

        paymentStatus === "Paid"

          ? "Paid"

          : "Unpaid"


    });







    res.status(201).json({

      success:true,

      message:"Bill generated successfully",

      bill

    });





  } catch(error) {


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};









// ==========================================
// Get All Bills
// ==========================================

export const getBills = async (req,res)=>{


  try{


    const bills = await Bill.find()

      .populate("patient","name email")

      .populate(
        "doctor",
        "name specialization"
      )

      .sort({
        createdAt:-1
      });




    res.status(200).json({

      success:true,

      bills

    });




  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};









// ==========================================
// Get Single Bill
// ==========================================

export const getBillById = async(req,res)=>{


try{


const bill = await Bill.findById(

req.params.id

)

.populate("patient")

.populate("doctor");





if(!bill){


return res.status(404).json({

success:false,

message:"Bill not found"

});


}





res.status(200).json({

success:true,

bill

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// ==========================================
// Update Bill
// ==========================================

export const updateBill = async(req,res)=>{


try{


const bill = await Bill.findByIdAndUpdate(


req.params.id,


req.body,


{

new:true,

runValidators:true

}


);





if(!bill){


return res.status(404).json({

success:false,

message:"Bill not found"

});


}





res.status(200).json({

success:true,

message:"Bill updated successfully",

bill

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// ==========================================
// Delete Bill
// ==========================================

export const deleteBill = async(req,res)=>{


try{


const bill = await Bill.findById(

req.params.id

);





if(!bill){


return res.status(404).json({

success:false,

message:"Bill not found"

});


}





await bill.deleteOne();





res.status(200).json({

success:true,

message:"Bill deleted successfully"

});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};