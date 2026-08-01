import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHospital, FaBars } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";


function Navbar(){


const [open,setOpen] = useState(false);


const navigate = useNavigate();


const {
user,
logout,
loading
} = useAuth();





const menu = [

{
name:"Home",
path:"/"
},

{
name:"Doctors",
path:"/doctors"
},

{
name:"Appointments",
path:"/appointments"
},

{
name:"About",
path:"/about"
},

{
name:"Contact",
path:"/contact"
}

];







const handleLogout = ()=>{


logout();


toast.success(
"Logout Successfully"
);


navigate("/login");


setOpen(false);


};






if(loading){

return null;

}







return(


<header

className="
sticky
top-0
z-50
bg-slate-950/95
backdrop-blur
px-6
py-4
shadow-xl
"

>



<div className="
flex
items-center
justify-between
">






{/* Logo */}


<Link

to="/"

className="
flex
items-center
gap-3
"

>


<div className="
rounded-2xl
bg-cyan-400
p-3
text-slate-900
shadow-lg
">


<FaHospital className="text-2xl"/>


</div>




<div>


<h1 className="
text-2xl
font-bold
text-white
">

MediCare

</h1>


<p className="
text-xs
text-cyan-300
">

Hospital Management System

</p>


</div>



</Link>










{/* Desktop Menu */}



<nav

className="
hidden
items-center
gap-8
md:flex
"

>


{

menu.map((item)=>(


<NavLink

key={item.name}

to={item.path}

className={({isActive})=>

`

text-lg
font-medium
transition

${
isActive
?
"text-cyan-400"
:
"text-white hover:text-cyan-300"
}

`

}

>


{item.name}


</NavLink>


))


}



</nav>












{/* Login / Logout */}



<div

className="
hidden
items-center
gap-4
md:flex
"

>



{

user ?


<>


<span className="
font-semibold
text-white
">

Hi, {user.name}

</span>



<button

onClick={handleLogout}

className="
rounded-full
bg-red-600
px-5
py-2
font-bold
text-white
hover:bg-red-700
"

>

Logout

</button>


</>


:


<>


<Link

to="/login"

className="
rounded-full
border
border-cyan-400
px-5
py-2
font-semibold
text-white
hover:bg-cyan-400
hover:text-slate-900
"

>

Login

</Link>





<Link

to="/register"

className="
rounded-full
bg-cyan-400
px-5
py-2
font-semibold
text-slate-900
hover:bg-cyan-300
"

>

Register

</Link>


</>


}



</div>








{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
text-2xl
text-white
md:hidden
"

>

<FaBars/>

</button>



</div>









{/* Mobile Menu */}



{

open &&


<div

className="
mt-5
space-y-4
rounded-2xl
bg-slate-900
p-5
md:hidden
"

>



{

menu.map((item)=>(


<NavLink

key={item.name}

to={item.path}

onClick={()=>setOpen(false)}

className="
block
text-lg
font-medium
text-white
hover:text-cyan-300
"

>

{item.name}

</NavLink>


))


}





{

user ?


<button

onClick={handleLogout}

className="
w-full
rounded-full
bg-red-600
px-4
py-2
font-bold
text-white
"

>

Logout

</button>


:


<div className="
flex
gap-3
">


<Link

to="/login"

className="
rounded-full
border
border-cyan-400
px-4
py-2
text-white
"

>

Login

</Link>



<Link

to="/register"

className="
rounded-full
bg-cyan-400
px-4
py-2
text-slate-900
"

>

Register

</Link>


</div>


}



</div>


}



</header>


);


}


export default Navbar;