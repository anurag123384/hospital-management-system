import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const faqs = [

{
question:"How can I book an appointment?",
answer:
"You can easily book an appointment online by selecting your preferred doctor and available time slot."
},

{
question:"Do you provide emergency services?",
answer:
"Yes, our hospital provides 24×7 emergency care with experienced doctors and ambulance support."
},

{
question:"Can I consult doctors online?",
answer:
"Yes, online consultation is available for many departments through our secure platform."
},

{
question:"What insurance plans do you accept?",
answer:
"We accept most major health insurance providers. Please contact our support team for details."
}

];





function FAQ(){


const [openIndex,setOpenIndex] = useState(null);



const toggleFAQ=(index)=>{

setOpenIndex(
openIndex === index ? null : index
);

};



return(


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
blur-[140px]
">
</div>





<div className="
relative
z-10
mx-auto
max-w-5xl
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

FAQ

</span>






<h2 className="
mt-6
text-4xl
font-extrabold
text-white
sm:text-5xl
">

Frequently Asked Questions

</h2>





<p className="
mx-auto
mt-5
max-w-2xl
text-lg
leading-8
text-blue-100
">

Find answers to common questions about appointments,
consultations and healthcare services.

</p>



</div>








{/* FAQ Cards */}


<div className="
space-y-5
">


{

faqs.map((faq,index)=>(


<div

key={index}

className="
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/10
backdrop-blur-xl
transition
hover:border-cyan-400/40
"

>


<button

onClick={()=>toggleFAQ(index)}

className="
flex
w-full
items-center
justify-between
px-6
py-5
text-left
"

>


<span className="
text-lg
font-semibold
text-white
">

{faq.question}

</span>




<FaChevronDown

className={`
text-cyan-300
transition-transform
duration-300

${
openIndex === index
?
"rotate-180"
:
""
}

`}

/>


</button>







<div

className={`
grid
transition-all
duration-300

${
openIndex === index
?
"grid-rows-[1fr]"
:
"grid-rows-[0fr]"
}

`}

>


<div className="
overflow-hidden
">


<div className="
border-t
border-white/10
px-6
py-5
">


<p className="
leading-8
text-blue-100
">

{faq.answer}

</p>


</div>


</div>


</div>





</div>


))


}



</div>







</div>


</section>


);


}


export default FAQ;