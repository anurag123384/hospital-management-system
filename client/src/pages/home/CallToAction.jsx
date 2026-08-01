import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function CallToAction() {


const points = [
  "50+ Experienced Specialist Doctors",
  "24×7 Emergency & Ambulance Service",
  "Advanced ICU & Modern Equipment",
  "Online Consultation & Appointment Booking",
];


return (

<section className="
relative
overflow-hidden
bg-slate-950
py-24
">


<div className="
absolute
left-0
top-0
h-80
w-80
rounded-full
bg-cyan-400/10
blur-[150px]
">
</div>


<div className="
absolute
right-0
bottom-0
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


<div className="
grid
items-center
gap-10
rounded-[40px]
border
border-white/10
bg-white/10
p-8
backdrop-blur-xl
lg:grid-cols-2
lg:p-12
">





<div>


<span className="
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
px-5
py-2
text-cyan-300
">

Book Appointment

</span>




<h2 className="
mt-6
text-4xl
font-extrabold
leading-tight
text-white
sm:text-5xl
">

Your Health Deserves

<br />

<span className="text-cyan-300">
The Best Care
</span>

</h2>




<p className="
mt-6
text-lg
leading-8
text-blue-100
">

Book your appointment today with our experienced doctors
and receive world-class medical care.

</p>





<div className="
mt-10
flex
flex-wrap
gap-5
">


<Link

to="/appointments"

className="
flex
items-center
gap-3
rounded-xl
bg-cyan-400
px-8
py-4
font-semibold
text-slate-900
hover:bg-cyan-300
"

>

Book Appointment

<FaArrowRight />

</Link>





<Link

to="/doctors"

className="
rounded-xl
border
border-white
px-8
py-4
font-semibold
text-white
hover:bg-white
hover:text-slate-900
"

>

Find Doctors

</Link>


</div>


</div>







<div className="
rounded-3xl
border
border-cyan-300/20
bg-cyan-400/10
p-8
">


<h3 className="
text-3xl
font-bold
text-white
">

Why Choose MediCare?

</h3>





<div className="
mt-8
space-y-5
">


{

points.map((point,index)=>(


<div

key={index}

className="
flex
items-center
gap-4
"

>


<div className="
h-3
w-3
rounded-full
bg-cyan-300
">
</div>


<p className="
text-blue-100
">

{point}

</p>


</div>


))


}


</div>






<div className="
mt-10
grid
grid-cols-2
gap-5
">


<div className="
rounded-2xl
bg-white/10
p-5
text-center
">


<h2 className="
text-3xl
font-bold
text-cyan-300
">

10K+

</h2>


<p className="
text-blue-100
">

Happy Patients

</p>


</div>





<div className="
rounded-2xl
bg-white/10
p-5
text-center
">


<h2 className="
text-3xl
font-bold
text-cyan-300
">

4.9★

</h2>


<p className="
text-blue-100
">

Patient Rating

</p>


</div>



</div>


</div>





</div>


</div>


</section>

);


}


export default CallToAction;