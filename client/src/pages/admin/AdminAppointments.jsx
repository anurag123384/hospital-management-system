import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  FaPlus,
  FaTrash,
  FaPen,
} from "react-icons/fa6";


import api from "../../services/api";


import AddAppointmentModal from "../../components/admin/AddAppointmentModal";
import EditAppointmentModal from "../../components/admin/EditAppointmentModal";



function AdminAppointments(){



const [appointments,setAppointments] = useState([]);

const [loading,setLoading] = useState(true);

const [showAdd,setShowAdd] = useState(false);

const [showEdit,setShowEdit] = useState(false);

const [selectedAppointment,setSelectedAppointment] = useState(null);







const fetchAppointments = async()=>{


try{


setLoading(true);


const res = await api.get(
"/appointments"
);



if(res.data.success){


setAppointments(
res.data.appointments || []
);


}



}catch(error){


console.log(error);


toast.error(
"Unable to load appointments"
);


}
finally{


setLoading(false);


}


};








useEffect(()=>{


fetchAppointments();


},[]);









const deleteAppointment = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this appointment?"
);


if(!confirmDelete)
return;



try{


const res = await api.delete(
`/appointments/${id}`
);



if(res.data.success){


toast.success(
"Appointment deleted"
);


fetchAppointments();


}


}catch(error){


console.log(error);


toast.error(
"Delete failed"
);


}


};








const updateStatus = async(id,status)=>{


try{


const res = await api.patch(

`/appointments/${id}/status`,

{
status
}

);





if(res.data.success){


toast.success(
"Status Updated"
);


fetchAppointments();


}



}catch(error){


console.log(error);


toast.error(
"Status update failed"
);


}


};








return(

<div className="
min-h-screen
bg-slate-100
p-8
text-slate-900
">





{
showAdd &&

<AddAppointmentModal

refreshAppointments={fetchAppointments}

onClose={()=>setShowAdd(false)}

/>

}







{
showEdit && selectedAppointment &&


<EditAppointmentModal

appointment={selectedAppointment}

refreshAppointments={fetchAppointments}

onClose={()=>{

setShowEdit(false);

setSelectedAppointment(null);

}}


/>

}







<div className="
mb-8
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
">



<div>


<h1 className="
text-4xl
font-bold
">

Appointment Management

</h1>



<p className="
mt-2
text-gray-600
">

Manage hospital appointments

</p>


</div>







<button

onClick={()=>setShowAdd(true)}

className="
flex
items-center
gap-2
rounded-xl
bg-blue-600
px-5
py-3
font-bold
text-white
hover:bg-blue-700
"

>

<FaPlus/>

Add Appointment

</button>




</div>
<div className="
overflow-x-auto
rounded-2xl
bg-white
shadow
">





{

loading ?


<div className="
p-10
text-center
text-xl
font-semibold
">

Loading Appointments...

</div>




:


<table className="
w-full
">


<thead className="
bg-blue-600
text-white
">


<tr>


<th className="
p-4
text-left
">

Patient

</th>



<th className="
p-4
text-left
">

Doctor

</th>



<th className="
p-4
text-left
">

Date

</th>



<th className="
p-4
text-left
">

Time

</th>



<th className="
p-4
text-left
">

Status

</th>



<th className="
p-4
text-center
">

Action

</th>


</tr>


</thead>







<tbody>


{

appointments.length===0 ?



<tr>

<td

colSpan="6"

className="
p-10
text-center
text-gray-500
"

>

No Appointments Found

</td>

</tr>





:


appointments.map((item)=>(


<tr

key={item._id}

className="
border-b
hover:bg-slate-50
"

>



<td className="
p-4
font-medium
">

{item.patient?.name || "N/A"}

</td>





<td className="
p-4
font-medium
">

{item.doctor?.name || "N/A"}

</td>







<td className="
p-4
">


{

item.appointmentDate

?

new Date(
item.appointmentDate
).toLocaleDateString()

:

"-"

}


</td>






<td className="
p-4
">

{item.appointmentTime || "-"}

</td>







<td className="
p-4
">


<select


value={item.status}


onChange={(e)=>

updateStatus(
item._id,
e.target.value
)

}


className="
rounded-lg
border
p-2
bg-white
"


>


<option value="Pending">

Pending

</option>


<option value="Confirmed">

Confirmed

</option>


<option value="Completed">

Completed

</option>


<option value="Cancelled">

Cancelled

</option>


</select>


</td>








<td className="
p-4
">


<div className="
flex
justify-center
gap-3
">





<button


onClick={()=>{


setSelectedAppointment(item);

setShowEdit(true);


}}


className="
rounded-lg
bg-blue-600
p-3
text-white
hover:bg-blue-700
"

>

<FaPen/>

</button>







<button


onClick={()=>deleteAppointment(item._id)}


className="
rounded-lg
bg-red-600
p-3
text-white
hover:bg-red-700
"

>

<FaTrash/>

</button>







</div>


</td>






</tr>


))


}



</tbody>



</table>



}



</div>






</div>


);


}


export default AdminAppointments;