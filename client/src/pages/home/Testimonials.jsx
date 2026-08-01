import { FaStar } from "react-icons/fa";


const testimonials = [

{
id:1,
name:"Rahul Sharma",
image:"/patient1.jpg",
rating:5,
review:
"The doctors were highly professional and the online appointment process was smooth. I received excellent treatment and support."
},

{
id:2,
name:"Priya Verma",
image:"/patient2.jpg",
rating:5,
review:
"Modern facilities, friendly staff and experienced specialists. Highly recommended for quality healthcare services."
},

{
id:3,
name:"Amit Singh",
image:"/patient3.jpg",
rating:5,
review:
"Outstanding patient care with quick response and excellent medical facilities. Thank you for the amazing service."
}

];





function Testimonials(){

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
top-10
h-80
w-80
rounded-full
bg-cyan-400/10
blur-[150px]
">
</div>



<div className="
absolute
bottom-0
right-0
h-96
w-96
rounded-full
bg-blue-500/10
blur-[170px]
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

Testimonials

</span>






<h2 className="
mt-6
text-4xl
font-extrabold
text-white
sm:text-5xl
">

What Our Patients Say

</h2>






<p className="
mx-auto
mt-5
max-w-3xl
text-lg
leading-8
text-blue-100
">

Thousands of patients trust our hospital for quality treatment,
experienced doctors and compassionate healthcare services.

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

testimonials.map((item)=>(


<div

key={item.id}

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





{/* Image */}

<div className="
flex
justify-center
">


<img

src={item.image}

alt={item.name}

className="
h-24
w-24
rounded-full
border-4
border-cyan-300
object-cover
shadow-lg
transition
duration-500
group-hover:scale-110
"

/>


</div>








{/* Stars */}


<div className="
mt-6
flex
justify-center
gap-1
">


{

Array.from({length:item.rating}).map((_,index)=>(


<FaStar

key={index}

className="
text-yellow-400
"

/>


))


}


</div>








{/* Review */}


<p className="
mt-6
leading-8
text-blue-100
italic
">

"{item.review}"

</p>







{/* Name */}


<h3 className="
mt-8
text-2xl
font-bold
text-white
">

{item.name}

</h3>





<p className="
mt-2
text-cyan-300
">

Happy Patient

</p>





</div>


))


}



</div>





</div>


</section>


);


}


export default Testimonials;