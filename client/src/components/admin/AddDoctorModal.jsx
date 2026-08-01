import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";


function AddDoctorModal({ onClose, refreshDoctors }) {


  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    specialization: "",
    qualification: "",
    experience: "",
    consultationFee: "",
    gender: "",
    address: "",

  });




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      await api.post(
        "/doctors",
        formData
      );


      toast.success(
        "Doctor Added Successfully"
      );


      refreshDoctors();

      onClose();



    } catch (error) {


      toast.error(
        error.response?.data?.message ||
        "Doctor Add Failed"
      );


    } finally {

      setLoading(false);

    }

  };





  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">


      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">


        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Add New Doctor
        </h2>




        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >



          <input
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />



          <input
            name="consultationFee"
            placeholder="Consultation Fee"
            value={formData.consultationFee}
            onChange={handleChange}
            className="rounded-xl border p-3 text-black placeholder:text-gray-500"
          />





          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="rounded-xl border p-3 text-black"
          >

            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

          </select>





          <textarea

            name="address"

            placeholder="Address"

            value={formData.address}

            onChange={handleChange}

            className="md:col-span-2 rounded-xl border p-3 text-black placeholder:text-gray-500"

          />






          <div className="md:col-span-2 flex gap-4 mt-4">


            <button

              type="submit"

              disabled={loading}

              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"

            >

              {
                loading
                ?
                "Adding..."
                :
                "Add Doctor"
              }

            </button>





            <button

              type="button"

              onClick={onClose}

              className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white hover:bg-red-600"

            >

              Cancel

            </button>


          </div>



        </form>


      </div>


    </div>

  );

}


export default AddDoctorModal;