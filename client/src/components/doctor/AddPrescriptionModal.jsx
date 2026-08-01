import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function AddPrescriptionModal({
  patient,
  onClose,
  refreshPrescriptions,
}) {


const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

patient: patient?._id || "",

diagnosis:"",

medicines:[

{
medicineName:"",
dosage:"",
frequency:"",
duration:""
}

],

advice:"",

nextVisit:null

});





const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};







const handleMedicineChange=(index,field,value)=>{


const medicines=[
...formData.medicines
];


medicines[index][field]=value;



setFormData({

...formData,

medicines

});


};







const addMedicine=()=>{


setFormData({

...formData,

medicines:[

...formData.medicines,

{

medicineName:"",
dosage:"",
frequency:"",
duration:""

}

]

});


};








const removeMedicine=(index)=>{


if(formData.medicines.length===1){

return;

}


const medicines =
formData.medicines.filter(
(_,i)=>i!==index
);



setFormData({

...formData,

medicines

});


};








const handleSubmit=async(e)=>{


e.preventDefault();



try{


setLoading(true);



await api.post(

"/prescriptions",

formData

);



toast.success(
"Prescription Added Successfully"
);



refreshPrescriptions();


onClose();



}catch(error){


console.log(error);


toast.error(

error.response?.data?.message ||

"Prescription failed"

);



}finally{


setLoading(false);


}


};








return(


<div className="
fixed inset-0
z-50
flex
items-center
justify-center
bg-black/60
p-5
">



<div className="
max-h-[90vh]
w-full
max-w-3xl
overflow-y-auto
rounded-2xl
bg-white
p-8
text-slate-900
">





<h2 className="
mb-6
text-3xl
font-bold
text-slate-900
">

Add Prescription

</h2>







<form

onSubmit={handleSubmit}

className="space-y-5"

>






<input

value={patient?.name || ""}

disabled

className="
w-full
rounded-lg
bg-slate-100
p-3
text-slate-900
"

/>






<input

name="diagnosis"

placeholder="Diagnosis"

value={formData.diagnosis}

onChange={handleChange}

required

className="
w-full
rounded-lg
border
p-3
text-slate-900
"

/>







<h3 className="
text-xl
font-bold
text-slate-900
">

Medicines

</h3>









{
formData.medicines.map(
(medicine,index)=>(



<div

key={index}

className="
rounded-xl
bg-slate-100
p-4
space-y-3
"



>




<input

placeholder="Medicine Name"

value={medicine.medicineName}

onChange={(e)=>

handleMedicineChange(

index,

"medicineName",

e.target.value

)

}

className="
w-full
rounded
border
p-2
text-slate-900
"

/>





<input

placeholder="Dosage"

value={medicine.dosage}

onChange={(e)=>

handleMedicineChange(

index,

"dosage",

e.target.value

)

}

className="
w-full
rounded
border
p-2
text-slate-900
"

/>






<input

placeholder="Frequency"

value={medicine.frequency}

onChange={(e)=>

handleMedicineChange(

index,

"frequency",

e.target.value

)

}

className="
w-full
rounded
border
p-2
text-slate-900
"

/>






<input

placeholder="Duration"

value={medicine.duration}

onChange={(e)=>

handleMedicineChange(

index,

"duration",

e.target.value

)

}

className="
w-full
rounded
border
p-2
text-slate-900
"

/>






<button

type="button"

onClick={()=>removeMedicine(index)}

className="
rounded
bg-red-600
px-4
py-2
text-white
"

>

Remove

</button>





</div>


)

)

}








<button

type="button"

onClick={addMedicine}

className="
rounded
bg-blue-600
px-4
py-2
text-white
"

>

+ Add Medicine

</button>








<textarea

name="advice"

placeholder="Advice"

value={formData.advice}

onChange={handleChange}

className="
w-full
rounded
border
p-3
text-slate-900
"

/>








<input

type="date"

name="nextVisit"

value={formData.nextVisit || ""}

onChange={handleChange}

className="
w-full
rounded
border
p-3
text-slate-900
"

/>








<div className="
flex
gap-4
">



<button

disabled={loading}

className="
flex-1
rounded
bg-green-600
py-3
text-white
"

>

{

loading
?
"Saving..."
:
"Save Prescription"

}


</button>






<button

type="button"

onClick={onClose}

className="
flex-1
rounded
bg-red-600
py-3
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


export default AddPrescriptionModal;