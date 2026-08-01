import React from "react";

function ViewPrescriptionModal({ open, onClose, prescription }) {
  if (!open || !prescription) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">
            Prescription Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Close
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <h4 className="font-semibold text-slate-500">Patient</h4>
            <p className="text-lg font-medium">
              {prescription.patient?.name || "-"}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-500">Doctor</h4>
            <p className="text-lg font-medium">
              {prescription.doctor?.name || "-"}
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-slate-500">Diagnosis</h4>
            <p>{prescription.diagnosis}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-slate-500 mb-2">
              Medicines
            </h4>

            <table className="w-full border">
              <thead className="bg-cyan-600 text-white">
                <tr>
                  <th className="border p-2">Medicine</th>
                  <th className="border p-2">Dosage</th>
                  <th className="border p-2">Frequency</th>
                  <th className="border p-2">Duration</th>
                </tr>
              </thead>

              <tbody>
                {prescription.medicines?.map((medicine, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      {medicine.medicineName}
                    </td>

                    <td className="border p-2">
                      {medicine.dosage}
                    </td>

                    <td className="border p-2">
                      {medicine.frequency}
                    </td>

                    <td className="border p-2">
                      {medicine.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-slate-500">
              Advice
            </h4>

            <p>{prescription.advice || "-"}</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-500">
              Next Visit
            </h4>

            <p>
              {prescription.nextVisit
                ? new Date(prescription.nextVisit).toLocaleDateString()
                : "-"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ViewPrescriptionModal;