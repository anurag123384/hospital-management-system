import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";


function Hero(){


const navigate = useNavigate();


const { user, logout } = useAuth();





const handleLogout = ()=>{


logout();


toast.success(
"Logout Successfully"
);


navigate("/login");


};





const goDashboard = ()=>{


if(user?.role==="admin"){

navigate("/admin");

}

else if(user?.role==="doctor"){

navigate("/doctor");

}

else if(user?.role==="patient"){

navigate("/patient");

}


};





return (

<section
className="
relative
overflow-hidden
bg-gradient-to-br
from-[#020617]
via-[#071A3D]
to-[#0B5ED7]
pt-20
pb-32
lg:min-h-screen
lg:pt-24
"
>


<div
className="
absolute
-top-32
-left-32
h-[450px]
w-[450px]
rounded-full
bg-blue-600/20
blur-[160px]
"
/>



<div
className="
absolute
bottom-0
right-0
h-[400px]
w-[400px]
rounded-full
bg-cyan-400/20
blur-[150px]
"
/>




<div className="mx-auto max-w-7xl px-5 sm:px-6">


<div className="grid items-center gap-10 lg:grid-cols-2">



{/* LEFT CONTENT */}


<div>


<span
className="
inline-flex
rounded-full
border
border-cyan-300/30
bg-white/10
px-4
py-2
text-sm
text-cyan-300
backdrop-blur-xl
"
>

🏥 Welcome To MediCare Hospital

</span>




<h1
className="
mt-7
text-4xl
font-extrabold
leading-tight
text-white
sm:text-5xl
lg:text-6xl
"
>

Your Health,

<br/>

<span className="text-cyan-300">

Our Priority

</span>

</h1>





<p
className="
mt-6
max-w-xl
text-base
leading-7
text-blue-100
sm:text-lg
"
>

Experience world-class healthcare with highly qualified doctors,
secure online appointments and modern medical facilities.
We are committed to providing compassionate care for every patient.

</p>






<div className="mt-8 flex flex-wrap gap-4">


{

user ?


<>


<button

onClick={goDashboard}

className="
rounded-xl
bg-cyan-400
px-7
py-3
font-bold
text-slate-900
hover:bg-cyan-300
"

>

Go Dashboard

</button>





<button

onClick={handleLogout}

className="
rounded-xl
bg-red-600
px-7
py-3
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

to="/appointments"

className="
rounded-xl
bg-cyan-400
px-7
py-3
font-bold
text-slate-900
hover:bg-cyan-300
"

>

Book Appointment

</Link>




<Link

to="/doctors"

className="
rounded-xl
border
border-white
px-7
py-3
font-bold
text-white
hover:bg-white
hover:text-blue-900
"

>

Find Doctor

</Link>


</>


}


</div>
{/* Stats */}

<div
className="
mt-10
grid
grid-cols-2
gap-4
md:grid-cols-4
"
>


{

[
["50+","Doctors"],
["10K+","Patients"],
["24/7","Emergency"],
["100%","Care"]

].map((item,index)=>(


<div

key={index}

className="
rounded-2xl
border
border-white/10
bg-white/10
p-4
text-center
backdrop-blur-xl
"

>


<h2 className="
text-3xl
font-bold
text-cyan-300
">

{item[0]}

</h2>



<p className="
text-sm
text-blue-100
">

{item[1]}

</p>


</div>


))


}


</div>





</div>









{/* RIGHT IMAGE */}



<div
className="
relative
flex
justify-center
mt-4
lg:mt-0
"
>


<div
className="
absolute
h-[350px]
w-[350px]
rounded-full
bg-cyan-400/20
blur-[130px]
"
/>





<img

src="/hero-doctor.png"

alt="Doctor"

className="
relative
z-10
h-[330px]
w-auto
object-contain
drop-shadow-2xl
sm:h-[450px]
lg:h-[560px]
"

/>








{/* Experience */}


<div

className="
absolute
left-0
top-16
rounded-xl
border
border-white/20
bg-white/10
px-4
py-3
backdrop-blur-xl
"

>


<h3 className="
text-2xl
font-bold
text-white
">

10+

</h3>


<p className="
text-xs
text-blue-100
">

Years Experience

</p>


</div>









{/* Rating */}



<div

className="
absolute
bottom-10
right-0
rounded-xl
border
border-white/20
bg-white/10
px-5
py-3
backdrop-blur-xl
"

>


<h3 className="
text-2xl
font-bold
text-cyan-300
">

⭐ 4.9

</h3>


<p className="
text-xs
text-blue-100
">

Patient Rating

</p>


</div>






</div>





</div>





</div>


</section>


);


}


export default Hero;