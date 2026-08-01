import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";


function EditPatientModal({
  patient,
  onClose,
  refreshPatients,
}) {


  const [loading,setLoading] = useState(false);


  const [formData,setFormData] = useState({

    name:"",
    email:"",
    phone:"",
    age:"",
    gender:"Male",
    bloodGroup:"",
    address:"",
    disease:"",

  });




  useEffect(()=>{

    if(patient){

      setFormData({

        name: patient.name || "",
        email: patient.email || "",
        phone: patient.phone || "",
        age: patient.age || "",
        gender: patient.gender || "Male",
        bloodGroup: patient.bloodGroup || "",
        address: patient.address || "",
        disease: patient.disease || "",

      });

    }

  },[patient]);






  const handleChange=(e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value,

    });

  };







  const handleSubmit=async(e)=>{

    e.preventDefault();


    try{


      setLoading(true);


      const res = await api.put(

        `/patients/${patient._id}`,

        formData

      );



      if(res.data.success){


        toast.success(
          "Patient updated successfully"
        );


        await refreshPatients();


        onClose();


      }



    }catch(error){


      console.log(error);


      toast.error(

        error.response?.data?.message ||
        "Failed to update patient"

      );


    }finally{


      setLoading(false);


    }


  };






  return(

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">


      <div className="w-full max-w-2xl rounded-2xl bg-white p-6">


        <div className="mb-6 flex justify-between">


          <h2 className="text-2xl font-bold">

            Edit Patient

          </h2>


          <button

            onClick={onClose}

            className="text-3xl text-red-500"

          >

            ×

          </button>


        </div>





        <form

          onSubmit={handleSubmit}

          className="grid grid-cols-2 gap-4"

        >


          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded border p-3"
            required
          />



          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded border p-3"
          />



          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="rounded border p-3"
            required
          />



          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="rounded border p-3"
            required
          />



          <select

            name="gender"

            value={formData.gender}

            onChange={handleChange}

            className="rounded border p-3"

          >

            <option>Male</option>
            <option>Female</option>
            <option>Other</option>


          </select>




          <input

            name="bloodGroup"

            value={formData.bloodGroup}

            onChange={handleChange}

            placeholder="Blood Group"

            className="rounded border p-3"

          />




          <input

            name="disease"

            value={formData.disease}

            onChange={handleChange}

            placeholder="Disease"

            className="rounded border p-3"

          />





          <textarea

            name="address"

            value={formData.address}

            onChange={handleChange}

            placeholder="Address"

            className="col-span-2 rounded border p-3"

          />





          <div className="col-span-2 flex justify-end gap-3">


            <button

              type="button"

              onClick={onClose}

              className="rounded bg-gray-500 px-5 py-2 text-white"

            >

              Cancel

            </button>




            <button

              disabled={loading}

              className="rounded bg-blue-600 px-5 py-2 text-white"

            >

              {loading ? "Updating..." : "Update Patient"}

            </button>


          </div>


        </form>


      </div>


    </div>


  );

}


export default EditPatientModal;