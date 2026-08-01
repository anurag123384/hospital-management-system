import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";


const months = [
  "Jan","Feb","Mar","Apr",
  "May","Jun","Jul","Aug",
  "Sep","Oct","Nov","Dec"
];



function AdminHome(){


const [loading,setLoading] = useState(true);



const [stats,setStats] = useState({

totalDoctors:0,
totalPatients:0,
totalAppointments:0,
totalPrescriptions:0,
totalBills:0,
totalRevenue:0

});



const [revenueChart,setRevenueChart]=useState([]);

const [appointmentChart,setAppointmentChart]=useState([]);

const [recentAppointments,setRecentAppointments]=useState([]);

const [recentPatients,setRecentPatients]=useState([]);





const fetchDashboard = async()=>{


try{


const token = localStorage.getItem("token");



const res = await axios.get(

"http://localhost:5000/api/dashboard",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



console.log(
"DASHBOARD:",
res.data
);



setStats({

...stats,

...res.data.stats

});



setRecentAppointments(

res.data.recentAppointments || []

);



setRecentPatients(

res.data.recentPatients || []

);






const revenue = months.map((month,index)=>({

month,

revenue:
res.data.charts?.monthlyRevenue?.[index] || 0


}));


setRevenueChart(revenue);






const appointments = months.map((month,index)=>(


{

month,

appointments:

res.data.charts?.monthlyAppointments?.[index] || 0

}


));


setAppointmentChart(appointments);



}
catch(error){


console.log(
"Dashboard Error:",
error.response?.data || error.message
);


}
finally{

setLoading(false);

}


};





useEffect(()=>{


fetchDashboard();


},[]);







if(loading){

return(

<div className="
flex
h-screen
items-center
justify-center
text-3xl
font-bold
text-slate-900
">

Loading Dashboard...

</div>

)

}







return(


<div className="
min-h-screen
bg-gray-100
p-6
">



<h1 className="
mb-8
text-4xl
font-bold
text-slate-900
">

Admin Dashboard

</h1>







<div className="
grid
grid-cols-1
gap-6
md:grid-cols-2
lg:grid-cols-3
">





{
[
["Total Doctors",stats.totalDoctors,"text-blue-600"],
["Total Patients",stats.totalPatients,"text-green-600"],
["Appointments",stats.totalAppointments,"text-purple-600"],
["Prescriptions",stats.totalPrescriptions,"text-orange-500"],
["Bills",stats.totalBills,"text-pink-600"],
["Revenue",`₹ ${stats.totalRevenue}`,"text-emerald-600"]

].map((item,index)=>(


<div
key={index}
className="
rounded-xl
bg-white
p-6
shadow-lg
border
border-gray-200
"
>


<p className="
font-semibold
text-slate-700
">

{item[0]}

</p>


<h2 className={`
mt-3
text-4xl
font-bold
${item[2]}
`}>

{item[1]}

</h2>


</div>


))

}



</div>










<div className="
mt-10
grid
gap-8
lg:grid-cols-2
">



<div className="
rounded-xl
bg-white
p-5
shadow-lg
">


<h2 className="
mb-5
text-xl
font-bold
text-slate-900
">

Monthly Revenue

</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<BarChart data={revenueChart}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Bar

dataKey="revenue"

fill="#2563eb"

/>


</BarChart>


</ResponsiveContainer>



</div>








<div className="
rounded-xl
bg-white
p-5
shadow-lg
">


<h2 className="
mb-5
text-xl
font-bold
text-slate-900
">

Monthly Appointments

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<LineChart data={appointmentChart}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="appointments"

stroke="#16a34a"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>




</div>









<div className="
mt-10
rounded-xl
bg-white
p-6
shadow-lg
">


<h2 className="
mb-5
text-2xl
font-bold
text-slate-900
">

Recent Appointments

</h2>




<table className="
w-full
border
">


<thead className="bg-blue-600 text-white">

<tr>

<th className="p-3">
Patient
</th>

<th className="p-3">
Doctor
</th>

<th className="p-3">
Date
</th>

</tr>

</thead>



<tbody>


{

recentAppointments.length===0 ?


<tr>

<td
colSpan="3"
className="
p-5
text-center
text-slate-700
">

No Appointment Found

</td>

</tr>


:


recentAppointments.map((a)=>(


<tr
key={a._id}
className="border-b"
>


<td className="p-3 text-slate-800">

{a.patient?.name || "N/A"}

</td>


<td className="p-3 text-slate-800">

{a.doctor?.name || "N/A"}

</td>


<td className="p-3 text-slate-800">

{
new Date(
a.createdAt
).toLocaleDateString()
}

</td>


</tr>


))


}



</tbody>


</table>



</div>






</div>


);


}


export default AdminHome;