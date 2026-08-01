import { useEffect, useState } from "react";
import axios from "axios";

const EditDoctorModal = ({
  doctor,
  onClose,
  refreshDoctors,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    specialization: "",
    qualification: "",
    experience: "",
    fees: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (doctor) {
      setFormData({
        name: doctor.name || "",
        email: doctor.email || "",
        phone: doctor.phone || "",
        gender: doctor.gender || "Male",
        specialization:
          doctor.specialization || "",
        qualification:
          doctor.qualification || "",
        experience: doctor.experience || "",
        fees: doctor.fees || "",
        address: doctor.address || "",
      });
    }
  }, [doctor]);

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

      await axios.put(
        `http://localhost:5000/api/doctors/${doctor._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      refreshDoctors();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Unable to update doctor."
      );
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Edit Doctor
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
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
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />
                    <input
            type="number"
            name="fees"
            placeholder="Consultation Fee"
            value={formData.fees}
            onChange={handleChange}
            className="rounded border p-3"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            className="rounded border p-3 md:col-span-2"
            required
          />

          <div className="mt-4 flex justify-end gap-4 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-gray-500 px-6 py-3 text-white hover:bg-gray-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Doctor"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditDoctorModal;