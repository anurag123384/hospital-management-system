import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { Link } from "react-router-dom";



function Footer() {


const links = [

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
name:"Contact",
path:"/contact"
}

];



return(


<footer className="
relative
overflow-hidden
border-t
border-white/10
bg-gradient-to-br
from-[#020617]
via-[#061B45]
to-[#0B5ED7]
">





{/* Glow */}

<div className="
absolute
left-0
top-0
h-72
w-72
rounded-full
bg-cyan-400/10
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
bg-blue-500/10
blur-[150px]
">
</div>







<div className="
relative
z-10
mx-auto
max-w-7xl
px-6
py-20
">





<div className="
grid
gap-10
md:grid-cols-2
lg:grid-cols-4
">






{/* Logo */}

<div>


<h2 className="
text-4xl
font-bold
text-cyan-300
">

🏥 MediCare

</h2>




<p className="
mt-6
leading-8
text-blue-100
">

Providing world-class healthcare with experienced doctors,
advanced technology and compassionate patient care.

</p>



</div>








{/* Links */}

<div>


<h3 className="
mb-6
text-2xl
font-bold
text-white
">

Quick Links

</h3>




<div className="
space-y-4
">


{

links.map((link)=>(


<Link

key={link.name}

to={link.path}

className="
block
text-blue-100
transition
hover:translate-x-2
hover:text-cyan-300
"

>

{link.name}

</Link>


))


}



</div>


</div>










{/* Contact */}

<div>


<h3 className="
mb-6
text-2xl
font-bold
text-white
">

Contact

</h3>





<div className="
space-y-5
text-blue-100
">


<div className="
flex
gap-3
">

<FaPhone className="
mt-1
text-cyan-300
"/>

+91 9876543210

</div>




<div className="
flex
gap-3
">

<FaEnvelope className="
mt-1
text-cyan-300
"/>

info@medicare.com

</div>





<div className="
flex
gap-3
">

<FaLocationDot className="
mt-1
text-cyan-300
"/>

New Delhi, India

</div>



</div>



</div>










{/* Social */}

<div>


<h3 className="
mb-6
text-2xl
font-bold
text-white
">

Follow Us

</h3>




<div className="
flex
gap-4
">


{

[

FaFacebookF,

FaTwitter,

FaInstagram,

FaLinkedinIn

].map((Icon,index)=>(


<button

key={index}

className="
rounded-full
bg-white/10
p-4
text-cyan-300
backdrop-blur-xl
transition
duration-300
hover:-translate-y-2
hover:bg-cyan-400
hover:text-slate-900
"

>


<Icon />

</button>


))


}



</div>



</div>





</div>







{/* Bottom */}


<div className="
mt-16
border-t
border-white/10
pt-8
text-center
text-blue-100
">


© {new Date().getFullYear()} MediCare Hospital Management System.
All Rights Reserved.


</div>







</div>


</footer>


);


}


export default Footer;