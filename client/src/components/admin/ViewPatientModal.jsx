const ViewPatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Patient Details</h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-red-500"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold">{patient.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{patient.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold">{patient.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-semibold">{patient.gender}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-semibold">{patient.age}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Blood Group</p>
            <p className="font-semibold">{patient.bloodGroup}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold">{patient.address}</p>
          </div>

        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewPatientModal;