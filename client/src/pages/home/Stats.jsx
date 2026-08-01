import {
  FaUserDoctor,
  FaUsers,
  FaHospital,
  FaAward,
} from "react-icons/fa6";


const stats = [

{
icon:<FaUserDoctor />,
number:"50+",
title:"Expert Doctors"
},

{
icon:<FaUsers />,
number:"10K+",
title:"Happy Patients"
},

{
icon:<FaHospital />,
number:"25+",
title:"Medical Departments"
},

{
icon:<FaAward />,
number:"15+",
title:"Awards Won"
}

];



function Stats(){

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
h-96
w-96
rounded-full
bg-cyan-500/10
blur-[180px]
">
</div>


<div className="
absolute
bottom-0
right-0
h-96
w-96
rounded-full
bg-blue-600/20
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
backdrop-blur-xl
">

Our Achievements

</span>




<h2 className="
mt-6
text-4xl
font-extrabold
text-white
sm:text-5xl
">

Trusted By Thousands

</h2>




<p className="
mx-auto
mt-5
max-w-3xl
text-lg
leading-8
text-blue-100
">

We continuously provide quality healthcare with
experienced doctors, advanced technology and
patient-focused treatment.

</p>


</div>








{/* Cards */}

<div className="
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
">


{

stats.map((item,index)=>(


<div

key={index}

className="
group
rounded-3xl
border
border-white/10
bg-white/10
p-8
text-center
backdrop-blur-xl
shadow-xl
transition
duration-500
hover:-translate-y-3
hover:border-cyan-400/40
"

>



<div className="
mx-auto
mb-6
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

{item.icon}

</div>





<h3 className="
text-5xl
font-extrabold
text-white
">

{item.number}

</h3>





<p className="
mt-3
text-lg
text-blue-100
">

{item.title}

</p>




</div>


))


}



</div>





</div>


</section>

);


}


export default Stats;