import {
  FaCalendarCheck,
  FaUserDoctor,
  FaLaptopMedical,
  FaShieldHeart,
  FaNotesMedical,
  FaClock,
} from "react-icons/fa6";


const features = [

{
icon:<FaCalendarCheck />,
title:"Easy Appointment",
description:
"Book appointments with your preferred doctor in just a few clicks."
},

{
icon:<FaUserDoctor />,
title:"Expert Doctors",
description:
"Consult highly qualified specialists across multiple departments."
},

{
icon:<FaLaptopMedical />,
title:"Online Consultation",
description:
"Meet doctors remotely through secure online video consultations."
},

{
icon:<FaShieldHeart />,
title:"Secure Records",
description:
"Patient information is protected with modern security standards."
},

{
icon:<FaNotesMedical />,
title:"Digital Prescriptions",
description:
"Receive prescriptions and reports digitally anytime."
},

{
icon:<FaClock />,
title:"24×7 Support",
description:
"Round-the-clock healthcare assistance and emergency support."
}

];





function Features(){

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
right-0
top-0
h-96
w-96
rounded-full
bg-cyan-400/10
blur-[180px]
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
">

Features

</span>





<h2 className="
mt-6
text-4xl
font-extrabold
text-white
sm:text-5xl
">

Everything You Need For Better Healthcare

</h2>






<p className="
mx-auto
mt-5
max-w-3xl
text-lg
leading-8
text-blue-100
">

Our hospital management system combines modern technology
with quality healthcare to deliver the best experience
for every patient.

</p>


</div>









{/* Feature Cards */}


<div className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
">


{

features.map((feature,index)=>(


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
hover:border-cyan-400/40
"


>



<div className="
mb-6
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-4xl
text-cyan-300
transition
duration-500
group-hover:scale-110
group-hover:bg-cyan-400/20
">

{feature.icon}

</div>







<h3 className="
mb-4
text-2xl
font-bold
text-white
">

{feature.title}

</h3>






<p className="
leading-8
text-blue-100
">

{feature.description}

</p>




</div>


))


}



</div>






</div>


</section>


);


}


export default Features;