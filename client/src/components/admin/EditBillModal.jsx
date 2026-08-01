import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function EditBillModal({
  bill,
  onClose,
  refreshBills
}) {


const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

consultationFee:0,

medicineCharges:0,

testCharges:0,

roomCharges:0,

otherCharges:0,

paymentStatus:"Unpaid",

totalAmount:0

});







useEffect(()=>{


if(!bill) return;



setFormData({

consultationFee: bill.consultationFee || 0,

medicineCharges: bill.medicineCharges || 0,

testCharges: bill.testCharges || 0,

roomCharges: bill.roomCharges || 0,

otherCharges: bill.otherCharges || 0,

paymentStatus: bill.paymentStatus || "Unpaid",

totalAmount: bill.totalAmount || 0


});


},[bill]);









useEffect(()=>{


const total =

Number(formData.consultationFee) +

Number(formData.medicineCharges) +

Number(formData.testCharges) +

Number(formData.roomCharges) +

Number(formData.otherCharges);




setFormData(prev=>({

...prev,

totalAmount:total

}));



},[

formData.consultationFee,

formData.medicineCharges,

formData.testCharges,

formData.roomCharges,

formData.otherCharges

]);









const handleChange=(e)=>{


setFormData(prev=>({

...prev,

[e.target.name]:e.target.value

}));


};









const handleSubmit=async(e)=>{


e.preventDefault();



try{


setLoading(true);



await api.put(

`/bills/${bill._id}`,

formData

);



toast.success(

"Bill Updated Successfully"

);



refreshBills();


onClose();



}

catch(error){


console.log(

"Update Bill Error:",

error.response?.data || error

);



toast.error(

error.response?.data?.message ||

"Failed to update bill"

);



}

finally{


setLoading(false);


}



};






if(!bill) return null;







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
max-w-2xl
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

Edit Bill

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





<input

type="number"

name="consultationFee"

placeholder="Consultation Fee"

value={formData.consultationFee}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>







<input

type="number"

name="medicineCharges"

placeholder="Medicine Charges"

value={formData.medicineCharges}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>








<input

type="number"

name="testCharges"

placeholder="Test Charges"

value={formData.testCharges}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>








<input

type="number"

name="roomCharges"

placeholder="Room Charges"

value={formData.roomCharges}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>








<input

type="number"

name="otherCharges"

placeholder="Other Charges"

value={formData.otherCharges}

onChange={handleChange}

className="
rounded-lg
bg-slate-800
p-3
text-white
"

/>








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
md:col-span-2
rounded-lg
bg-slate-800
p-4
">


<h3 className="
text-xl
font-bold
text-cyan-400
">

Total : ₹ {formData.totalAmount}

</h3>


</div>







<button

disabled={loading}

className="
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

"Updating..."

:

"Update Bill"

}



</button>







<button

type="button"

onClick={onClose}

className="
rounded-lg
bg-red-500
py-3
font-bold
text-white
"

>

Cancel

</button>







</form>




</div>



</div>


);


}


export default EditBillModal;