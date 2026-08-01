import { Outlet, NavLink } from "react-router-dom";



function AdminLayout(){


return(


<div className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-blue-950
to-blue-700
">






{/* Admin Header */}



<header className="
flex
flex-wrap
items-center
justify-between
gap-5
bg-slate-900
px-8
py-5
shadow-xl
">





<h1 className="
text-3xl
font-bold
text-cyan-400
">

🏥 MediCare Admin

</h1>







<nav className="
flex
flex-wrap
items-center
gap-5
text-white
font-semibold
">






<NavLink

to="/admin"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Dashboard

</NavLink>







<NavLink

to="/admin/doctors"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Doctors

</NavLink>







<NavLink

to="/admin/patients"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Patients

</NavLink>







<NavLink

to="/admin/appointments"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Appointments

</NavLink>







<NavLink

to="/admin/billing"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Billing

</NavLink>







<NavLink

to="/admin/settings"

className={({isActive})=>

isActive
?
"text-cyan-300"
:
"hover:text-cyan-300"

}

>

Settings

</NavLink>





</nav>






</header>








<main className="
p-8
">


<Outlet />


</main>






</div>


);


}


export default AdminLayout;