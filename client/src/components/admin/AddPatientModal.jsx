import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function AddPatientModal({ onClose, refreshPatients }) {


  const [loading,setLoading] = useState(false);

  const [doctors,setDoctors] = useState([]);



  const [formData,setFormData] = useState({

    name:"",
    phone:"",
    email:"",
    gender:"Male",
    disease:"",
    address:"",
    doctor:""

  });





  useEffect(()=>{

    fetchDoctors();

  },[]);





  const fetchDoctors = async()=>{

    try{

      const res = await api.get("/doctors");


      if(res.data.success){

        setDoctors(
          res.data.doctors
        );

      }


    }catch(error){

      console.log(error);

    }

  };







  const handleChange=(e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };








  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      setLoading(true);



      const res = await api.post(

        "/patients",

        formData

      );




      if(res.data.success){


        toast.success(
          "Patient Added Successfully"
        );


        refreshPatients();

        onClose();


      }



    }catch(error){


      toast.error(

        error.response?.data?.message ||

        "Failed to add patient"

      );


    }finally{


      setLoading(false);


    }


  };









return (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">


<div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl">



<h2 className="mb-6 text-3xl font-bold text-slate-900">

Add Patient

</h2>





<form

onSubmit={handleSubmit}

className="grid grid-cols-2 gap-5"

>





<input

className="rounded-lg border p-3 text-slate-900 placeholder:text-slate-600"

placeholder="Patient Name"

name="name"

value={formData.name}

onChange={handleChange}

required

/>






<input

className="rounded-lg border p-3 text-slate-900 placeholder:text-slate-600"

placeholder="Phone"

name="phone"

value={formData.phone}

onChange={handleChange}

required

/>







<input

className="rounded-lg border p-3 text-slate-900 placeholder:text-slate-600"

placeholder="Email"

name="email"

value={formData.email}

onChange={handleChange}

/>







<select

className="rounded-lg border p-3 text-slate-900"

name="gender"

value={formData.gender}

onChange={handleChange}

>


<option value="Male">
Male
</option>


<option value="Female">
Female
</option>


<option value="Other">
Other
</option>


</select>








<input

className="rounded-lg border p-3 text-slate-900 placeholder:text-slate-600"

placeholder="Disease"

name="disease"

value={formData.disease}

onChange={handleChange}

required

/>








<select

className="rounded-lg border p-3 text-slate-900"

name="doctor"

value={formData.doctor}

onChange={handleChange}

>


<option value="">

Select Doctor (Optional)

</option>




{

doctors.map((doctor)=>(


<option

key={doctor._id}

value={doctor._id}

>


Dr. {doctor.name}

({doctor.specialization})


</option>


))

}



</select>








<textarea

className="col-span-2 rounded-lg border p-3 text-slate-900 placeholder:text-slate-600"

rows="4"

placeholder="Address"

name="address"

value={formData.address}

onChange={handleChange}

required

/>








<div className="col-span-2 flex justify-end gap-4">


<button

type="button"

onClick={onClose}

className="rounded-lg bg-gray-300 px-6 py-3 text-slate-900"

>

Cancel

</button>







<button

disabled={loading}

className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"

>

{

loading ?

"Saving..."

:

"Add Patient"

}


</button>



</div>





</form>



</div>


</div>


);


}



export default AddPatientModal;