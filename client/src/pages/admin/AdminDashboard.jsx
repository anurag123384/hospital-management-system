import { useEffect, useState } from "react";

import {
  FaUserDoctor,
  FaUsers,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa6";

import api from "../../services/api";

import DashboardCharts from "../../components/admin/DashboardCharts";
import AppointmentCalendar from "../../components/admin/AppointmentCalendar";



function AdminDashboard(){


const [stats,setStats] = useState({

totalDoctors:0,

totalPatients:0,

totalAppointments:0,

pendingAppointments:0,

confirmedAppointments:0,

completedAppointments:0,

cancelledAppointments:0

});



const [recentAppointments,setRecentAppointments] = useState([]);

const [loading,setLoading] = useState(true);







const fetchDashboard = async()=>{


try{


setLoading(true);



const res = await api.get(
"/dashboard"
);



if(res.data.success){


setStats(
res.data.stats
);


setRecentAppointments(
res.data.recentAppointments || []
);


}



}catch(error){


console.log(error);


}
finally{


setLoading(false);


}


};







useEffect(()=>{


fetchDashboard();


},[]);








const cards=[


{

title:"Doctors",

value:stats.totalDoctors,

icon:<FaUserDoctor size={28}/>,

color:"bg-blue-600"

},



{

title:"Patients",

value:stats.totalPatients,

icon:<FaUsers size={28}/>,

color:"bg-green-600"

},



{

title:"Appointments",

value:stats.totalAppointments,

icon:<FaCalendarCheck size={28}/>,

color:"bg-purple-600"

},



{

title:"Pending",

value:stats.pendingAppointments,

icon:<FaClock size={28}/>,

color:"bg-yellow-500"

}


];








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

Loading Dashboard...

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



<h1 className="
mb-8
text-4xl
font-bold
">

Admin Dashboard

</h1>






<div className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-4
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
flex
items-center
justify-between
">



<div>


<p className="
text-gray-600
">

{card.title}

</p>



<h2 className="
mt-2
text-4xl
font-bold
">

{card.value}

</h2>



</div>




<div className={`
rounded-xl
p-4
text-white
${card.color}
`}>

{card.icon}

</div>



</div>



</div>


))


}



</div>








{/* Appointment Status + Recent Appointments */}


<div className="
mt-10
grid
gap-6
lg:grid-cols-2
">
  {/* Appointment Status */}


<div className="
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
mb-6
text-2xl
font-bold
">

Appointment Status

</h2>




<div className="space-y-4">


<div className="
flex
justify-between
rounded-xl
bg-green-50
p-4
">

<span className="
font-semibold
text-green-700
">

Confirmed

</span>


<span className="font-bold">

{stats.confirmedAppointments}

</span>


</div>





<div className="
flex
justify-between
rounded-xl
bg-yellow-50
p-4
">

<span className="
font-semibold
text-yellow-700
">

Pending

</span>


<span className="font-bold">

{stats.pendingAppointments}

</span>


</div>





<div className="
flex
justify-between
rounded-xl
bg-blue-50
p-4
">

<span className="
font-semibold
text-blue-700
">

Completed

</span>


<span className="font-bold">

{stats.completedAppointments}

</span>


</div>





<div className="
flex
justify-between
rounded-xl
bg-red-50
p-4
">

<span className="
font-semibold
text-red-700
">

Cancelled

</span>


<span className="font-bold">

{stats.cancelledAppointments}

</span>


</div>


</div>


</div>








{/* Recent Appointments */}


<div className="
rounded-2xl
bg-white
p-6
shadow
">


<h2 className="
mb-6
text-2xl
font-bold
">

Recent Appointments

</h2>





{

recentAppointments.length === 0 ?


<p className="
py-8
text-center
text-gray-500
">

No Recent Appointments

</p>



:


<div className="space-y-4">


{

recentAppointments.map((appointment)=>(


<div

key={appointment._id}

className="
rounded-xl
bg-slate-100
p-4
"


>


<div className="
flex
items-center
justify-between
">



<div>


<h3 className="font-bold">

{appointment.patient?.name || "Patient"}

</h3>



<p className="text-gray-600">

Dr. {appointment.doctor?.name || "Doctor"}

</p>



<p className="
text-sm
text-gray-500
">

{appointment.doctor?.specialization}

</p>



</div>







<span className={`

rounded-full
px-3
py-1
text-sm
font-semibold

${
appointment.status==="Confirmed"

?

"bg-green-100 text-green-700"

:

appointment.status==="Pending"

?

"bg-yellow-100 text-yellow-700"

:

appointment.status==="Completed"

?

"bg-blue-100 text-blue-700"

:

"bg-red-100 text-red-700"

}

`}>

{appointment.status}

</span>



</div>


</div>


))


}



</div>


}



</div>




</div>








<DashboardCharts

stats={stats}

/>







<div className="mt-10">


<AppointmentCalendar

appointments={recentAppointments}

/>


</div>






</div>


);


}



export default AdminDashboard;