import {
  FaUserDoctor,
  FaCalendarCheck,
  FaTruckMedical,
  FaFlask,
  FaPills,
  FaHospital,
} from "react-icons/fa6";


const services = [

{
icon:<FaUserDoctor />,
title:"Expert Doctors",
description:
"Highly qualified specialists providing world-class healthcare with compassion and excellence."
},

{
icon:<FaCalendarCheck />,
title:"Online Appointment",
description:
"Book appointments anytime with a simple, secure and fast online booking system."
},

{
icon:<FaTruckMedical />,
title:"Emergency Care",
description:
"24/7 emergency services with rapid response and advanced medical support."
},

{
icon:<FaFlask />,
title:"Laboratory",
description:
"Modern diagnostic laboratory delivering accurate and reliable medical reports."
},

{
icon:<FaPills />,
title:"Pharmacy",
description:
"Quality medicines available round the clock through our in-house pharmacy."
},

{
icon:<FaHospital />,
title:"ICU Support",
description:
"State-of-the-art ICU with continuous monitoring and experienced specialists."
}

];





function Services(){

return(


<section className="
relative
overflow-hidden
bg-slate-950
py-24
">



{/* Glow */}

<div className="
absolute
left-0
top-20
h-72
w-72
rounded-full
bg-cyan-500/10
blur-[120px]
">
</div>


<div className="
absolute
bottom-0
right-0
h-80
w-80
rounded-full
bg-blue-600/20
blur-[150px]
">
</div>





<div className="
relative
z-10
mx-auto
max-w-7xl
px-6
">






{/* Heading */}

<div className="
mb-16
text-center
">


<span className="
rounded-full
border
border-cyan-400/30
bg-white/10
px-5
py-2
text-cyan-300
backdrop-blur-xl
">

Our Services

</span>





<h2 className="
mt-6
text-4xl
font-extrabold
text-white
sm:text-5xl
">

Best Medical Services

</h2>




<p className="
mx-auto
mt-5
max-w-3xl
text-lg
leading-8
text-blue-100
">

We combine experienced doctors, advanced technology and
compassionate care to provide outstanding healthcare services
for every patient.

</p>


</div>









{/* Cards */}


<div className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
">


{

services.map((service,index)=>(


<div

key={index}

className="
group
rounded-3xl
border
border-white/10
bg-white/10
p-8
backdrop-blur-xl
shadow-xl
transition
duration-500
hover:-translate-y-3
hover:border-cyan-300/40
"

>



{/* Icon */}

<div className="
mb-7
flex
h-20
w-20
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-5xl
text-cyan-300
transition
duration-500
group-hover:scale-110
group-hover:bg-cyan-400/20
">


{service.icon}


</div>







<h3 className="
mb-4
text-2xl
font-bold
text-white
">

{service.title}

</h3>






<p className="
leading-8
text-blue-100
">

{service.description}

</p>







<button

className="
mt-8
rounded-xl
border
border-cyan-300/40
px-6
py-3
font-semibold
text-cyan-300
transition
hover:bg-cyan-400
hover:text-slate-900
"

>

Learn More →

</button>





</div>


))


}



</div>






</div>


</section>


);


}


export default Services;