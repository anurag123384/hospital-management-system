import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";



function PatientDashboard(){



const [patient,setPatient] = useState(null);

const [appointments,setAppointments] = useState([]);

const [prescriptions,setPrescriptions] = useState([]);

const [loading,setLoading] = useState(true);








const fetchProfile = async()=>{


try{


const res = await api.get(
"/patients/profile"
);



setPatient(
res.data.patient
);



}

catch(error){


console.log(error);


toast.error(
"Profile load failed"
);


}


};









const fetchAppointments = async()=>{


try{


const res = await api.get(
"/appointments"
);



setAppointments(
res.data.appointments || []
);



}

catch(error){


console.log(error);


toast.error(
"Appointments load failed"
);


}


};









const fetchPrescriptions = async()=>{


try{


const res = await api.get(
"/prescriptions"
);



setPrescriptions(
res.data.prescriptions || []
);



}

catch(error){


console.log(error);


toast.error(
"Prescription load failed"
);


}


};









useEffect(()=>{


const loadData = async()=>{


await Promise.all([

fetchProfile(),

fetchAppointments(),

fetchPrescriptions()

]);


setLoading(false);


};



loadData();



},[]);








if(loading){


return(


<div className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
">


<h1 className="
text-3xl
font-bold
text-blue-600
">

Loading Patient Dashboard...

</h1>


</div>


);


}








return(


<div className="
min-h-screen
bg-slate-100
p-8
text-slate-900
">






<div className="
mb-6
">


<h1 className="
text-4xl
font-bold
">

👤 Patient Dashboard

</h1>


<p className="
mt-2
text-slate-700
font-medium
">

Manage your appointments and health records

</p>


</div>







<Link

to="/appointments"

className="
inline-block
rounded-xl
bg-blue-600
px-6
py-3
font-bold
text-white
"

>

+ Book New Appointment

</Link>







{
patient &&

<div className="
mt-8
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
text-2xl
font-bold
">

👤 My Profile

</h2>




<div className="
mt-5
grid
gap-4
md:grid-cols-2
">


<p className="font-semibold">

Name:

<span className="ml-2 font-normal">

{patient.name}

</span>

</p>



<p className="font-semibold">

Email:

<span className="ml-2 font-normal">

{patient.email}

</span>

</p>




<p className="font-semibold">

Phone:

<span className="ml-2 font-normal">

{patient.phone}

</span>

</p>




<p className="font-semibold">

Gender:

<span className="ml-2 font-normal">

{patient.gender}

</span>

</p>




<p className="font-semibold">

Disease:

<span className="ml-2 font-normal">

{patient.disease}

</span>

</p>




<p className="font-semibold">

Address:

<span className="ml-2 font-normal">

{patient.address}

</span>

</p>



</div>


</div>


}
{/* Dashboard Cards */}


<div className="
mt-8
grid
gap-6
md:grid-cols-3
">



<div className="
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
font-semibold
text-slate-700
">

Total Appointments

</h2>


<p className="
mt-3
text-4xl
font-bold
text-blue-600
">

{appointments.length}

</p>


</div>






<div className="
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
font-semibold
text-slate-700
">

Pending

</h2>


<p className="
mt-3
text-4xl
font-bold
text-yellow-500
">


{

appointments.filter(

(item)=>

item.status==="Pending"

).length


}


</p>


</div>







<div className="
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
font-semibold
text-slate-700
">

Completed

</h2>


<p className="
mt-3
text-4xl
font-bold
text-green-600
">


{

appointments.filter(

(item)=>

item.status==="Completed"

).length


}


</p>


</div>


</div>









{/* Prescriptions */}



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

💊 My Prescriptions

</h2>







{

prescriptions.length===0 ?


<p className="
py-8
text-center
text-slate-600
">

No Prescription Found

</p>



:


<div className="
space-y-5
">


{

prescriptions.map((item)=>(


<div

key={item._id}

className="
rounded-xl
bg-slate-100
p-5
"

>


<h3 className="
text-xl
font-bold
">

Dr. {item.doctor?.name || "Doctor"}

</h3>




<p className="
mt-2
font-semibold
">

Diagnosis:

<span className="
ml-2
font-normal
">

{item.diagnosis}

</span>

</p>






<h4 className="
mt-4
font-bold
">

Medicines

</h4>







{

item.medicines?.map((med,index)=>(


<div

key={index}

className="
mt-2
rounded-lg
bg-white
p-3
"

>


<p>
💊 {med.medicineName}
</p>


<p>
Dosage: {med.dosage}
</p>


<p>
Frequency: {med.frequency}
</p>


<p>
Duration: {med.duration}
</p>



</div>


))


}







<p className="mt-4">

Advice:

{item.advice || "No advice"}

</p>





<p className="mt-2">

Next Visit:

{

item.nextVisit

?

new Date(
item.nextVisit
).toLocaleDateString()

:

"Not Scheduled"

}


</p>



</div>


))


}



</div>


}



</div>









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

My Appointments

</h2>







{

appointments.length===0 ?


<p className="
py-10
text-center
text-slate-600
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
bg-blue-100
">


<tr>


<th className="p-3 text-left">
Doctor
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


</tr>


</thead>






<tbody>


{

appointments.map((item)=>(


<tr

key={item._id}

className="
border-b
hover:bg-slate-50
"

>


<td className="p-3 font-medium">

Dr. {item.doctor?.name || "Doctor"}

</td>





<td className="p-3 font-medium">


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





<td className="p-3 font-medium">

{item.appointmentTime}

</td>






<td className="p-3">


<span className="
rounded-full
bg-blue-100
px-3
py-1
font-semibold
text-blue-700
">

{item.status}

</span>


</td>




</tr>


))


}



</tbody>


</table>


</div>


}



</div>







</div>


);


}


export default PatientDashboard;