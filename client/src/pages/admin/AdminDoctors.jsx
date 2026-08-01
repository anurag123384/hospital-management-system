import { useEffect, useState } from "react";
import axios from "axios";

import AddDoctorModal from "../../components/admin/AddDoctorModal";
import EditDoctorModal from "../../components/admin/EditDoctorModal";
import ViewDoctorModal from "../../components/admin/ViewDoctorModal";


const API_URL = "http://localhost:5000/api/doctors";


const AdminDoctors = () => {


  const [doctors,setDoctors] = useState([]);
  const [filteredDoctors,setFilteredDoctors] = useState([]);

  const [loading,setLoading] = useState(true);

  const [search,setSearch] = useState("");

  const [selectedDoctor,setSelectedDoctor] = useState(null);


  const [showAddModal,setShowAddModal] = useState(false);
  const [showEditModal,setShowEditModal] = useState(false);
  const [showViewModal,setShowViewModal] = useState(false);


  const [currentPage,setCurrentPage] = useState(1);


  const doctorsPerPage = 8;


  const token = localStorage.getItem("token");


  const config = {

    headers:{
      Authorization:`Bearer ${token}`,
    },

  };



  const fetchDoctors = async()=>{

    try{

      setLoading(true);


      const {data} = await axios.get(
        API_URL,
        config
      );


      const doctorList =
        data.doctors ||
        data.data ||
        data ||
        [];


      setDoctors(doctorList);

      setFilteredDoctors(doctorList);


    }catch(error){

      console.log(error);

      alert(
        "Unable to fetch doctors"
      );

    }
    finally{

      setLoading(false);

    }

  };




  useEffect(()=>{

    fetchDoctors();

  },[]);





  useEffect(()=>{


    const value =
      search.toLowerCase();


    const result =
      doctors.filter((doctor)=>{


        return(

          doctor.name
          ?.toLowerCase()
          .includes(value)

          ||

          doctor.email
          ?.toLowerCase()
          .includes(value)

          ||

          doctor.specialization
          ?.toLowerCase()
          .includes(value)

        );


      });



    setFilteredDoctors(result);

    setCurrentPage(1);



  },[search,doctors]);







  const deleteDoctor = async(id)=>{


    const confirmDelete =
      window.confirm(
        "Delete this doctor?"
      );


    if(!confirmDelete)
      return;



    try{


      await axios.delete(
        `${API_URL}/${id}`,
        config
      );


      fetchDoctors();


    }catch(error){


      console.log(error);

      alert(
        "Delete failed"
      );


    }


  };







  const indexOfLastDoctor =
    currentPage * doctorsPerPage;


  const indexOfFirstDoctor =
    indexOfLastDoctor - doctorsPerPage;



  const currentDoctors =
    filteredDoctors.slice(
      indexOfFirstDoctor,
      indexOfLastDoctor
    );



  const totalPages =
    Math.ceil(
      filteredDoctors.length /
      doctorsPerPage
    );





  if(loading){

    return(

      <div className="
        flex 
        min-h-screen 
        items-center 
        justify-center
        text-3xl
        font-bold
        text-slate-900
      ">

        Loading Doctors...

      </div>

    );

  }






return(

<div className="
min-h-screen 
bg-slate-100 
p-6
text-slate-900
">



<div className="
mb-8 
flex 
flex-col 
gap-5 
md:flex-row 
md:items-center 
md:justify-between
">


<h1 className="
text-4xl 
font-bold 
text-slate-900
">

Doctors Management

</h1>



<button

onClick={()=>
setShowAddModal(true)
}

className="
rounded-lg 
bg-blue-600 
px-6 
py-3 
font-semibold 
text-white
hover:bg-blue-700
"

>

+ Add Doctor

</button>



</div>





<input

type="text"

placeholder="Search doctor..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="
mb-6
w-full
rounded-lg
border
border-slate-300
bg-white
p-3
text-slate-900
placeholder:text-slate-500
"

/>







<div className="
overflow-x-auto
rounded-xl
bg-white
shadow
">



<table className="
min-w-full
text-slate-900
">



<thead className="
bg-blue-600
text-white
">


<tr>


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Specialization
</th>


<th className="p-4 text-left">
Experience
</th>


<th className="p-4 text-left">
Fee
</th>


<th className="p-4 text-center">
Actions
</th>



</tr>


</thead>





<tbody>



{
currentDoctors.length===0 ?


<tr>

<td

colSpan="6"

className="
p-8
text-center
text-slate-600
"

>

No Doctors Found

</td>

</tr>



:


currentDoctors.map((doctor)=>(


<tr

key={doctor._id}

className="
border-b
border-slate-200
text-slate-900
hover:bg-slate-50
"

>



<td className="p-4">

{doctor.name}

</td>




<td className="p-4">

{doctor.email}

</td>




<td className="p-4">

{doctor.specialization}

</td>





<td className="p-4">

{doctor.experience} Years

</td>





<td className="p-4">

₹ {doctor.consultationFee}

</td>






<td className="
p-4
text-center
space-x-2
">



<button

onClick={()=>{

setSelectedDoctor(doctor);

setShowViewModal(true);

}}

className="
rounded
bg-green-600
px-3
py-1
text-white
"

>

View

</button>




<button

onClick={()=>{

setSelectedDoctor(doctor);

setShowEditModal(true);

}}

className="
rounded
bg-yellow-500
px-3
py-1
font-semibold
text-black
"

>

Edit

</button>





<button

onClick={()=>
deleteDoctor(
doctor._id
)
}

className="
rounded
bg-red-600
px-3
py-1
text-white
"

>

Delete

</button>




</td>



</tr>


))


}



</tbody>



</table>


</div>









{
totalPages>1 &&

<div className="
mt-6
flex
justify-center
gap-2
">


<button

disabled={currentPage===1}

onClick={()=>
setCurrentPage(
currentPage-1
)
}

className="
rounded
bg-gray-200
px-4
py-2
"

>

Previous

</button>



{

Array.from(
{length:totalPages},
(_,index)=>(


<button

key={index}

onClick={()=>
setCurrentPage(
index+1
)
}

className={`
rounded
px-4
py-2
${
currentPage===index+1
?
"bg-blue-600 text-white"
:
"bg-gray-200"
}
`}

>

{index+1}

</button>


)

)

}




<button

disabled={
currentPage===totalPages
}

onClick={()=>
setCurrentPage(
currentPage+1
)
}

className="
rounded
bg-gray-200
px-4
py-2
"

>

Next

</button>


</div>


}








{
showAddModal &&

<AddDoctorModal

onClose={()=>
setShowAddModal(false)
}

refreshDoctors={()=>{

fetchDoctors();

setShowAddModal(false);

}}

/>

}







{
showEditModal &&
selectedDoctor &&


<EditDoctorModal

doctor={selectedDoctor}

onClose={()=>{

setSelectedDoctor(null);

setShowEditModal(false);

}}

refreshDoctors={()=>{

fetchDoctors();

setSelectedDoctor(null);

setShowEditModal(false);

}}

/>

}







{
showViewModal &&
selectedDoctor &&


<ViewDoctorModal

doctor={selectedDoctor}

onClose={()=>{

setSelectedDoctor(null);

setShowViewModal(false);

}}

/>

}



</div>


);


};


export default AdminDoctors;