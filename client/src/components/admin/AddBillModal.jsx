import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function AddBillModal({
  onClose,
  refreshBills,
  patients = [],
  doctors = [],
}) {



const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

patient:"",
doctor:"",

consultationFee:"",

medicineCharges:"",

testCharges:"",

roomCharges:"",

otherCharges:"",

paymentStatus:"Unpaid"

});






const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};







const handleSubmit=async(e)=>{


e.preventDefault();


try{


setLoading(true);



const res = await api.post(

"/billing",

formData

);



if(res.data.success){


toast.success(
"Bill Generated Successfully"
);


refreshBills();


onClose();


}


}
catch(error){


console.log(
"Bill Error:",
error.response?.data || error
);



toast.error(

error.response?.data?.message ||

"Failed to generate bill"

);


}
finally{


setLoading(false);


}


};








return(


<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/60
p-4
">


<div className="
w-full
max-w-3xl
rounded-2xl
bg-slate-900
p-8
">


<h2 className="
mb-6
text-3xl
font-bold
text-white
">

Generate Bill

</h2>





<form

onSubmit={handleSubmit}

className="
grid
grid-cols-1
gap-4
md:grid-cols-2
"

>



<select

name="patient"

value={formData.patient}

onChange={handleChange}

required

className="
rounded-lg
bg-slate-800
p-3
text-white
"

>

<option value="">
Select Patient
</option>


{

patients.map((patient)=>(


<option

key={patient._id}

value={patient._id}

>

{patient.name}

</option>


))

}


</select>








<select

name="doctor"

value={formData.doctor}

onChange={handleChange}

required

className="
rounded-lg
bg-slate-800
p-3
text-white
"

>

<option value="">
Select Doctor
</option>


{

doctors.map((doctor)=>(


<option

key={doctor._id}

value={doctor._id}

>

Dr. {doctor.name}

</option>


))

}


</select>








{

[

["consultationFee","Consultation Fee"],

["medicineCharges","Medicine Charges"],

["testCharges","Test Charges"],

["roomCharges","Room Charges"],

["otherCharges","Other Charges"]

].map((item)=>(


<input

key={item[0]}

type="number"

name={item[0]}

placeholder={item[1]}

value={formData[item[0]]}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>


))


}







<select

name="paymentStatus"

value={formData.paymentStatus}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

>


<option value="Unpaid">
Unpaid
</option>


<option value="Paid">
Paid
</option>


</select>








<div className="
flex
gap-3
md:col-span-2
">


<button

disabled={loading}

className="
flex-1
rounded-lg
bg-cyan-500
py-3
font-bold
text-black
"

>

{

loading

?

"Generating..."

:

"Generate Bill"

}


</button>




<button

type="button"

onClick={onClose}

className="
flex-1
rounded-lg
bg-red-500
py-3
font-bold
text-white
"

>

Cancel

</button>



</div>



</form>



</div>


</div>


);


}


export default AddBillModal;