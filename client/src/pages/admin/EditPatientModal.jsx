import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function EditPatientModal({ patient, onClose, refreshPatients }) {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    address: "",
    bloodGroup: "",
    disease: "",
    doctor: "",
    admitted: true,
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name || "",
        age: patient.age || "",
        gender: patient.gender || "Male",
        phone: patient.phone || "",
        email: patient.email || "",
        address: patient.address || "",
        bloodGroup: patient.bloodGroup || "",
        disease: patient.disease || "",
        doctor: patient.doctor?._id || patient.doctor || "",
        admitted: patient.admitted ?? true,
      });
    }

    fetchDoctors();
  }, [patient]);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");

      if (res.data.success) {
        setDoctors(res.data.doctors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.put(`/patients/${patient._id}`, formData);

      toast.success("Patient Updated Successfully");

      refreshPatients();
      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update patient"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-slate-900 p-8">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Edit Patient
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >
          <input
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
          />

          <input
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="disease"
            placeholder="Disease"
            value={formData.disease}
            onChange={handleChange}
            required
          />

          <select
            className="rounded-lg bg-slate-800 p-3 text-white"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>

            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} ({doctor.specialization})
              </option>
            ))}
          </select>

          <textarea
            className="col-span-2 rounded-lg bg-slate-800 p-3 text-white"
            rows="3"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label className="col-span-2 flex items-center gap-2 text-white">
            <input
              type="checkbox"
              name="admitted"
              checked={formData.admitted}
              onChange={handleChange}
            />
            Admitted
          </label>

          <button
            disabled={loading}
            className="rounded-lg bg-green-500 py-3 font-bold text-white hover:bg-green-600"
          >
            {loading ? "Updating..." : "Update Patient"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-red-500 py-3 font-bold text-white hover:bg-red-600"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPatientModal;