import { useEffect, useState } from "react";

import toast from "react-hot-toast";


import api from "../../services/api";


import ViewPatientModal from "../../components/doctor/ViewPatientModal";

import AddPrescriptionModal from "../../components/doctor/AddPrescriptionModal";



import {

FaUserDoctor,

FaCalendarCheck,

FaUsers,

FaFilePrescription,

} from "react-icons/fa6";







function DoctorDashboard(){





const [dashboard,setDashboard] = useState({

doctor:{},

totalPatients:0,

todayAppointments:0,

completedAppointments:0,

totalPrescriptions:0,

appointments:[]

});






const [appointments,setAppointments] = useState([]);



const [selectedPatient,setSelectedPatient] = useState(null);



const [showPatient,setShowPatient] = useState(false);



const [showPrescription,setShowPrescription] = useState(false);



const [loading,setLoading] = useState(true);









const fetchDashboard = async()=>{


try{


setLoading(true);



const res = await api.get(
"/doctor/dashboard"
);





if(res.data.success){


const data = res.data.data || {};



setDashboard(data);



setAppointments(
data.appointments || []
);



}



}


catch(error){


console.log(error);



toast.error(

error.response?.data?.message ||

"Dashboard load failed"

);


}


finally{


setLoading(false);


}



};









const updateAppointmentStatus = async(

id,

status

)=>{


try{


await api.put(

`/doctor/appointments/${id}`,

{
status
}

);




toast.success(
"Appointment Updated"
);




fetchDashboard();



}


catch(error){


console.log(error);



toast.error(
"Status update failed"
);


}



};









useEffect(()=>{


fetchDashboard();



},[]);









const cards=[


{

title:"Total Patients",

value:dashboard.totalPatients,

icon:<FaUsers/>

},



{

title:"Today's Appointments",

value:dashboard.todayAppointments,

icon:<FaCalendarCheck/>

},




{

title:"Completed Visits",

value:dashboard.completedAppointments,

icon:<FaUserDoctor/>

},




{

title:"Prescriptions",

value:dashboard.totalPrescriptions,

icon:<FaFilePrescription/>

}



];








if(loading){


return(


<div className="
flex
min-h-screen
items-center
justify-center
bg-slate-100
">


<h1 className="
text-3xl
font-bold
text-blue-600
">

Loading Doctor Dashboard...

</h1>


</div>


);


}








return(


<div className="
min-h-screen
bg-slate-100
p-6
text-slate-900
">





{/* Header */}



<div className="
mb-6
">


<h1 className="
text-4xl
font-bold
">

👨‍⚕️ Doctor Dashboard

</h1>




<p className="
mt-2
text-slate-600
">

Welcome {dashboard.doctor?.name || "Doctor"}

</p>



</div>







{/* Cards */}

<div className="
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
">



{

cards.map((card,index)=>(


<div

key={index}

className="
rounded-2xl
bg-white
p-6
shadow
"


>


<div className="
text-3xl
text-blue-600
">

{card.icon}

</div>



<p className="
mt-4
text-slate-600
">

{card.title}

</p>



<h2 className="
text-4xl
font-bold
">

{card.value || 0}

</h2>



</div>


))


}



</div>
id="doctor-dashboard-part2"





{/* Appointments */}



<div className="
mt-10
rounded-2xl
bg-white
p-6
shadow
">



<h2 className="
mb-5
text-2xl
font-bold
">

Patient Appointments

</h2>







{

appointments.length===0 ?



<p className="
py-10
text-center
text-slate-500
">

No Appointments Found

</p>




:





<div className="
overflow-x-auto
">



<table className="
w-full
">



<thead className="
bg-slate-200
">


<tr>


<th className="p-3 text-left">

Patient

</th>


<th className="p-3 text-left">

Date

</th>


<th className="p-3 text-left">

Time

</th>


<th className="p-3 text-left">

Status

</th>


<th className="p-3 text-left">

Action

</th>


</tr>


</thead>






<tbody>



{

appointments.map((item)=>(


<tr

key={item._id}

className="
border-b
border-slate-200
"


>


<td className="p-3">

{item.patient?.name || "Patient"}

</td>






<td className="p-3">


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







<td className="p-3">

{item.appointmentTime || "-"}

</td>







<td className="p-3">


<select


value={item.status}



onChange={(e)=>

updateAppointmentStatus(

item._id,

e.target.value

)

}



className="
rounded
border
p-2
"


>


<option>
Pending
</option>


<option>
Confirmed
</option>


<option>
Completed
</option>


<option>
Cancelled
</option>



</select>



</td>







<td className="
flex
gap-2
p-3
">





<button


onClick={()=>{


setSelectedPatient(item.patient);


setShowPatient(true);


}}



className="
rounded
bg-blue-600
px-4
py-2
text-white
"


>


View


</button>








<button


onClick={()=>{


setSelectedPatient(item.patient);


setShowPrescription(true);


}}



className="
rounded
bg-green-600
px-4
py-2
text-white
"


>


Prescription


</button>





</td>






</tr>



))


}



</tbody>


</table>


</div>



}



</div>












{

showPatient && selectedPatient &&



<ViewPatientModal


patient={selectedPatient}



onClose={()=>{


setShowPatient(false);


setSelectedPatient(null);



}}


/>



}









{

showPrescription && selectedPatient &&



<AddPrescriptionModal


patient={selectedPatient}



onClose={()=>{


setShowPrescription(false);


setSelectedPatient(null);



}}



refreshPrescriptions={fetchDashboard}


/>



}







</div>


);


}



export default DoctorDashboard;