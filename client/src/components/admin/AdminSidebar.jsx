import { NavLink } from "react-router-dom";

import {
  FaChartLine,
  FaUserDoctor,
  FaUsers,
  FaCalendarCheck,
  FaHospital,
  FaGear,
  FaFilePrescription,
  FaFileInvoiceDollar,
} from "react-icons/fa6";



const menu=[


{
title:"Dashboard",
path:"/admin",
icon:<FaChartLine/>
},


{
title:"Doctors",
path:"/admin/doctors",
icon:<FaUserDoctor/>
},


{
title:"Patients",
path:"/admin/patients",
icon:<FaUsers/>
},


{
title:"Appointments",
path:"/admin/appointments",
icon:<FaCalendarCheck/>
},


{
title:"Departments",
path:"/admin/departments",
icon:<FaHospital/>
},


{
title:"Prescriptions",
path:"/admin/prescriptions",
icon:<FaFilePrescription/>
},


{
title:"Billing",
path:"/admin/billing",
icon:<FaFileInvoiceDollar/>
},


{
title:"Settings",
path:"/admin/settings",
icon:<FaGear/>
},


];






function AdminSidebar(){


return(


<aside className="
flex
min-h-screen
w-72
flex-col
bg-slate-950
border-r
border-white/10
">






<div className="
border-b
border-white/10
p-8
">


<h2 className="
text-3xl
font-bold
text-cyan-300
">

MediCare

</h2>


<p className="
mt-2
text-blue-200
">

Admin Panel

</p>


</div>








<nav className="
mt-8
flex-1
space-y-3
px-4
">


{

menu.map((item)=>(


<NavLink

key={item.title}

to={item.path}

end={item.path==="/admin"}

className={({isActive})=>

`
flex
items-center
gap-4
rounded-2xl
px-5
py-4
text-lg
font-medium
transition

${
isActive

?

"bg-cyan-400 text-slate-900"

:

"text-blue-100 hover:bg-slate-800 hover:text-white"

}

`

}


>


<span className="text-2xl">

{item.icon}

</span>


<span>

{item.title}

</span>


</NavLink>


))


}


</nav>





</aside>


);


}


export default AdminSidebar;