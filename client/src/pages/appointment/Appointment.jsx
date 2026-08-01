import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import Footer from "../../components/Footer";


function Appointment() {


const [doctors,setDoctors] = useState([]);

const [loading,setLoading] = useState(false);

const [doctorLoading,setDoctorLoading] = useState(true);

const [booked,setBooked] = useState(false);

const [appointmentData,setAppointmentData] = useState(null);



const [formData,setFormData] = useState({

doctor:"",
appointmentDate:"",
appointmentTime:"",
reason:""

});




// Load Doctors

const fetchDoctors = async()=>{


try{


setDoctorLoading(true);


const res = await api.get("/doctors");


setDoctors(
res.data.doctors || []
);


}
catch(error){


console.log(error);

toast.error("Doctors load failed");


}

finally{

setDoctorLoading(false);

}


};





useEffect(()=>{

fetchDoctors();

},[]);






const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};








const handleSubmit=async(e)=>{


e.preventDefault();


try{


setLoading(true);



const res = await api.post(

"/appointments",

formData

);



console.log(
"Appointment Response:",
res.data
);



toast.success(
"Appointment Booked Successfully"
);



setBooked(true);



setAppointmentData(
res.data.appointment
);



setFormData({

doctor:"",
appointmentDate:"",
appointmentTime:"",
reason:""

});




}
catch(error){


console.log(
"Appointment Error:",
error.response?.data
);



toast.error(

error.response?.data?.message ||

"Appointment Failed"

);



}
finally{


setLoading(false);


}



};








return (

<>


<section className="
min-h-screen
bg-gradient-to-br
from-[#021024]
via-[#0B2447]
to-[#0F4C81]
py-20
">


<div className="
mx-auto
max-w-xl
px-6
">



<div className="
rounded-3xl
bg-white
p-8
shadow-xl
">



<h1 className="
mb-8
text-center
text-4xl
font-bold
text-blue-700
">

Book Appointment

</h1>






<form

onSubmit={handleSubmit}

className="space-y-5"

>



<select

name="doctor"

value={formData.doctor}

onChange={handleChange}

required

className="
w-full
rounded-xl
border
p-3
text-black
"

>


<option value="">

{

doctorLoading

?

"Loading Doctors..."

:

"Select Doctor"

}

</option>



{

doctors.map((doctor)=>(


<option

key={doctor._id}

value={doctor._id}

>

Dr. {doctor.name} - {doctor.specialization}

</option>


))


}



</select>







<input

type="date"

name="appointmentDate"

value={formData.appointmentDate}

onChange={handleChange}

required

className="
w-full
rounded-xl
border
p-3
text-black
"

/>







<input

type="time"

name="appointmentTime"

value={formData.appointmentTime}

onChange={handleChange}

required

className="
w-full
rounded-xl
border
p-3
text-black
"

/>







<textarea

name="reason"

value={formData.reason}

onChange={handleChange}

placeholder="Reason for appointment"

required

className="
h-32
w-full
rounded-xl
border
p-3
text-black
"

/>







<button

disabled={loading}

className="
w-full
rounded-xl
bg-cyan-500
py-3
font-bold
text-white
hover:bg-cyan-600
"

>


{

loading

?

"Booking..."

:

"Book Appointment"

}



</button>




</form>







{
booked && (

<div className="
mt-6
rounded-xl
bg-green-100
p-5
text-center
text-green-700
">


<h2 className="
text-2xl
font-bold
">

✅ Appointment Booked

</h2>


<p className="mt-2">

Your appointment has been successfully booked.

</p>



{

appointmentData && (

<p className="mt-2 font-semibold">

Status: {appointmentData.status}

</p>

)

}



</div>

)

}





</div>


</div>


</section>



<Footer />

</>

);


}


export default Appointment;