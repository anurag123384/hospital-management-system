import mongoose from "mongoose";


const patientSchema = new mongoose.Schema(
{

  user:{

    type:mongoose.Schema.Types.ObjectId,

    ref:"User",

    required:true

  },


  name:{

    type:String,

    required:true

  },


  gender:{

    type:String,

    required:true

  },


  phone:{

    type:String,

    required:true

  },


  email:{

    type:String

  },


  disease:{

    type:String,

    required:true

  },


  address:{

    type:String,

    required:true

  }

},
{
  timestamps:true
}
);



export default mongoose.model(
  "Patient",
  patientSchema
);