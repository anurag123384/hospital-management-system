import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

import AddPatientModal from "../../components/admin/AddPatientModal";



function AdminPatients(){


const [patients,setPatients] = useState([]);

const [loading,setLoading] = useState(true);

const [showAdd,setShowAdd] = useState(false);







const fetchPatients = async()=>{


try{


setLoading(true);



const res = await api.get(
"/patients"
);



if(res.data.success){


setPatients(
res.data.patients || []
);


}



}catch(error){


console.log(error);


toast.error(
"Unable to load patients"
);


}
finally{


setLoading(false);


}


};







useEffect(()=>{


fetchPatients();


},[]);








if(loading){


return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
">


<h1 className="
text-3xl
font-bold
text-blue-600
">

Loading Patients...

</h1>


</div>

);


}








return(

<div className="
min-h-screen
bg-slate-100
p-8
text-slate-900
">






{
showAdd &&

<AddPatientModal

onClose={()=>setShowAdd(false)}

refreshPatients={()=>{

fetchPatients();

setShowAdd(false);

}}

/>

}







<div className="
mb-8
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
">



<h1 className="
text-4xl
font-bold
">

Patient Management

</h1>






<button

onClick={()=>setShowAdd(true)}

className="
rounded-xl
bg-blue-600
px-6
py-3
font-bold
text-white
hover:bg-blue-700
"

>

+ Add Patient

</button>



</div>









<div className="
overflow-x-auto
rounded-2xl
bg-white
shadow
">



<table className="
w-full
text-slate-900
">



<thead className="
bg-blue-600
text-white
">


<tr>


<th className="
p-4
text-left
">

Name

</th>



<th className="
p-4
text-left
">

Email

</th>



<th className="
p-4
text-left
">

Phone

</th>



<th className="
p-4
text-left
">

Gender

</th>


</tr>


</thead>







<tbody>


{

patients.length===0 ?


<tr>

<td

colSpan="4"

className="
p-10
text-center
text-slate-500
"

>

No Patients Found

</td>

</tr>




:



patients.map((patient)=>(


<tr

key={patient._id}

className="
border-b
hover:bg-slate-50
"

>



<td className="
p-4
font-medium
">

{patient.name}

</td>




<td className="
p-4
">

{patient.email}

</td>




<td className="
p-4
">

{patient.phone}

</td>




<td className="
p-4
">

{patient.gender}

</td>




</tr>


))


}



</tbody>



</table>



</div>






</div>


);


}



export default AdminPatients;