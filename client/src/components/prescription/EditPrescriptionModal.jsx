import { useEffect, useState } from "react";
import api from "../../services/api";

function EditPrescriptionModal({
  open,
  onClose,
  prescription,
  refreshData,
}) {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    diagnosis: "",
    advice: "",
    nextVisit: "",
    medicines: [],
  });

  useEffect(() => {
    if (open) {
      fetchPatients();
      fetchDoctors();
    }
  }, [open]);

  useEffect(() => {
    if (prescription) {
      setFormData({
        patient: prescription.patient?._id || "",
        doctor: prescription.doctor?._id || "",
        diagnosis: prescription.diagnosis || "",
        advice: prescription.advice || "",
        nextVisit: prescription.nextVisit
          ? prescription.nextVisit.substring(0, 10)
          : "",
        medicines:
          prescription.medicines?.length > 0
            ? prescription.medicines
            : [
                {
                  medicineName: "",
                  dosage: "",
                  frequency: "",
                  duration: "",
                },
              ],
      });
    }
  }, [prescription]);

  const fetchPatients = async () => {
    try {
      const { data } = await api.get("/patients");
      setPatients(data.patients || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const { data } = await api.get("/doctors");
      setDoctors(data.doctors || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMedicineChange = (index, field, value) => {
    const updated = [...formData.medicines];
    updated[index][field] = value;

    setFormData({
      ...formData,
      medicines: updated,
    });
  };

  const addMedicine = () => {
    setFormData({
      ...formData,
      medicines: [
        ...formData.medicines,
        {
          medicineName: "",
          dosage: "",
          frequency: "",
          duration: "",
        },
      ],
    });
  };

  const removeMedicine = (index) => {
    const updated = [...formData.medicines];

    updated.splice(index, 1);

    setFormData({
      ...formData,
      medicines: updated,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Edit Prescription
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Close
          </button>

        </div>
                <form
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              await api.put(
                `/prescriptions/${prescription._id}`,
                formData
              );

              alert("Prescription updated successfully");

              refreshData();

              onClose();
            } catch (error) {
              console.error(error);

              alert("Failed to update prescription");
            }
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <select
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              className="rounded-lg border p-3"
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
              className="rounded-lg border p-3"
              required
            >
              <option value="">Select Doctor</option>

              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Diagnosis"
              className="rounded-lg border p-3 md:col-span-2"
              required
            />

          </div>

          <h3 className="mt-8 mb-4 text-xl font-bold">
            Medicines
          </h3>

          {formData.medicines.map((medicine, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-1 gap-3 rounded-lg border p-4 md:grid-cols-5"
            >
              <input
                type="text"
                placeholder="Medicine"
                value={medicine.medicineName}
                onChange={(e) =>
                  handleMedicineChange(
                    index,
                    "medicineName",
                    e.target.value
                  )
                }
                className="rounded-lg border p-2"
              />

              <input
                type="text"
                placeholder="Dosage"
                value={medicine.dosage}
                onChange={(e) =>
                  handleMedicineChange(
                    index,
                    "dosage",
                    e.target.value
                  )
                }
                className="rounded-lg border p-2"
              />

              <input
                type="text"
                placeholder="Frequency"
                value={medicine.frequency}
                onChange={(e) =>
                  handleMedicineChange(
                    index,
                    "frequency",
                    e.target.value
                  )
                }
                className="rounded-lg border p-2"
              />

              <input
                type="text"
                placeholder="Duration"
                value={medicine.duration}
                onChange={(e) =>
                  handleMedicineChange(
                    index,
                    "duration",
                    e.target.value
                  )
                }
                className="rounded-lg border p-2"
              />

              <button
                type="button"
                onClick={() => removeMedicine(index)}
                className="rounded-lg bg-red-500 p-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addMedicine}
            className="mb-6 rounded-lg bg-cyan-600 px-4 py-2 text-white"
          >
            + Add Medicine
          </button>

          <textarea
            name="advice"
            value={formData.advice}
            onChange={handleChange}
            placeholder="Advice"
            rows={4}
            className="mb-4 w-full rounded-lg border p-3"
          />

          <input
            type="date"
            name="nextVisit"
            value={formData.nextVisit}
            onChange={handleChange}
            className="mb-6 w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Update Prescription
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditPrescriptionModal;