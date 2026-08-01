import { useEffect, useMemo, useState } from "react";

import toast from "react-hot-toast";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";


import api from "../../services/api";


import AddPrescriptionModal from "../../components/prescription/AddPrescriptionModal";
import EditPrescriptionModal from "../../components/prescription/EditPrescriptionModal";
import ViewPrescriptionModal from "../../components/prescription/ViewPrescriptionModal";



function AdminPrescription(){



const [prescriptions,setPrescriptions] = useState([]);

const [loading,setLoading] = useState(true);

const [search,setSearch] = useState("");



const [showAddModal,setShowAddModal] = useState(false);

const [showEditModal,setShowEditModal] = useState(false);

const [showViewModal,setShowViewModal] = useState(false);



const [selectedPrescription,setSelectedPrescription] = useState(null);

const [viewPrescription,setViewPrescription] = useState(null);









const fetchPrescriptions = async()=>{


try{


setLoading(true);


const res = await api.get(
"/prescriptions"
);



setPrescriptions(
res.data.prescriptions || []
);



}catch(error){


console.log(error);


toast.error(
"Failed to fetch prescriptions"
);


}
finally{


setLoading(false);


}


};







useEffect(()=>{


fetchPrescriptions();


},[]);








const handleDelete = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this prescription?"
);



if(!confirmDelete)
return;





try{


await api.delete(
`/prescriptions/${id}`
);



toast.success(
"Prescription deleted"
);



fetchPrescriptions();



}catch(error){


console.log(error);


toast.error(
"Delete failed"
);


}


};









const filteredPrescriptions = useMemo(()=>{


const keyword =
search.toLowerCase();



return prescriptions.filter((item)=>{


const patient =
item.patient?.name?.toLowerCase() || "";

const doctor =
item.doctor?.name?.toLowerCase() || "";

const diagnosis =
item.diagnosis?.toLowerCase() || "";



return(

patient.includes(keyword)

||

doctor.includes(keyword)

||

diagnosis.includes(keyword)

);


});


},[prescriptions,search]);








return(

<div className="
min-h-screen
bg-slate-100
p-8
text-slate-900
">






<div className="
mb-8
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
">



<div>


<h1 className="
text-4xl
font-bold
">

Prescription Management

</h1>



<p className="
mt-2
text-gray-600
">

Create and manage patient prescriptions

</p>



</div>







<button

onClick={()=>setShowAddModal(true)}

className="
flex
items-center
gap-2
rounded-xl
bg-cyan-600
px-6
py-3
font-bold
text-white
hover:bg-cyan-700
"

>

<FaPlus/>

Add Prescription

</button>



</div>







<div className="
mb-8
flex
items-center
rounded-xl
bg-white
px-4
shadow
">


<FaSearch className="
text-gray-400
"/>



<input

type="text"

placeholder="Search patient, doctor or diagnosis..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
p-4
outline-none
"

 />


</div>
<div className="
overflow-x-auto
rounded-2xl
bg-white
shadow
">


<table className="
w-full
">


<thead className="
bg-cyan-600
text-white
">


<tr>


<th className="
p-4
text-left
">

Patient

</th>



<th className="
p-4
text-left
">

Doctor

</th>



<th className="
p-4
text-left
">

Diagnosis

</th>



<th className="
p-4
text-left
">

Next Visit

</th>



<th className="
p-4
text-center
">

Actions

</th>


</tr>


</thead>








<tbody>


{

loading ?


<tr>

<td

colSpan="5"

className="
p-10
text-center
font-semibold
"

>

Loading Prescriptions...

</td>

</tr>





:


filteredPrescriptions.length===0 ?


<tr>

<td

colSpan="5"

className="
p-10
text-center
text-gray-500
"

>

No Prescription Found

</td>

</tr>





:


filteredPrescriptions.map((item)=>(


<tr

key={item._id}

className="
border-b
hover:bg-slate-50
"

>



<td className="
p-4
font-medium
">

{item.patient?.name || "-"}

</td>





<td className="
p-4
">

{item.doctor?.name || "-"}

</td>





<td className="
p-4
">

{item.diagnosis || "-"}

</td>





<td className="
p-4
">

{

item.nextVisit

?

new Date(
item.nextVisit
).toLocaleDateString()

:

"-"

}


</td>







<td className="
p-4
">


<div className="
flex
justify-center
gap-3
">





<button

onClick={()=>{

setViewPrescription(item);

setShowViewModal(true);

}}

className="
rounded-lg
bg-cyan-500
p-3
text-white
hover:bg-cyan-600
"

>

<FaEye/>

</button>







<button

onClick={()=>{

setSelectedPrescription(item);

setShowEditModal(true);

}}

className="
rounded-lg
bg-yellow-500
p-3
text-white
hover:bg-yellow-600
"

>

<FaEdit/>

</button>







<button

onClick={()=>handleDelete(item._id)}

className="
rounded-lg
bg-red-500
p-3
text-white
hover:bg-red-600
"

>

<FaTrash/>

</button>





</div>


</td>






</tr>


))


}



</tbody>


</table>



</div>








<AddPrescriptionModal

open={showAddModal}

onClose={()=>setShowAddModal(false)}

refreshData={fetchPrescriptions}

/>







<EditPrescriptionModal

open={showEditModal}

prescription={selectedPrescription}

onClose={()=>{

setShowEditModal(false);

setSelectedPrescription(null);

}}

refreshData={fetchPrescriptions}

/>








<ViewPrescriptionModal

open={showViewModal}

prescription={viewPrescription}

onClose={()=>{

setShowViewModal(false);

setViewPrescription(null);

}}


/>







</div>


);


}



export default AdminPrescription;