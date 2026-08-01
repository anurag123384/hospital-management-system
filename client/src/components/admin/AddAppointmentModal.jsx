import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function AddAppointmentModal({ onClose, refreshAppointments }) {
  const [loading, setLoading] = useState(false);

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    status: "Pending",
    notes: "",
  });

  useEffect(() => {
    fetchPatients();
    fetchDoctors();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await api.get("/patients");

      if (res.data.success) {
        setPatients(res.data.patients);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/appointments", formData);

      toast.success("Appointment Booked Successfully");

      refreshAppointments();
      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to book appointment"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-slate-900 p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <select
            name="patient"
            value={formData.patient}
            onChange={handleChange}
            className="rounded-lg bg-slate-800 p-3 text-white"
            required
          >
            <option value="">Select Patient</option>

            {patients.map((patient) => (
              <option key={patient._id} value={patient._id}>
                {patient.name}
              </option>
            ))}
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="rounded-lg bg-slate-800 p-3 text-white"
            required
          >
            <option value="">Select Doctor</option>

            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name} ({doctor.specialization})
              </option>
            ))}
          </select>

          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            className="rounded-lg bg-slate-800 p-3 text-white"
            required
          />

          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            className="rounded-lg bg-slate-800 p-3 text-white"
            required
          />

          <input
            name="reason"
            placeholder="Reason"
            value={formData.reason}
            onChange={handleChange}
            className="col-span-2 rounded-lg bg-slate-800 p-3 text-white"
            required
          />

          <textarea
            rows="3"
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
            className="col-span-2 rounded-lg bg-slate-800 p-3 text-white"
          />

          <button
            disabled={loading}
            className="rounded-lg bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400"
          >
            {loading ? "Saving..." : "Book Appointment"}
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

export default AddAppointmentModal;