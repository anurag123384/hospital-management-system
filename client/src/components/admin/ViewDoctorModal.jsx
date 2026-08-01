const ViewDoctorModal = ({ doctor, onClose }) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-blue-700">
            Doctor Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold text-gray-500 hover:text-red-600"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <p className="text-gray-500">Doctor Name</p>
            <h3 className="text-lg font-semibold">
              {doctor.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="text-lg font-semibold">
              {doctor.email}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <h3 className="text-lg font-semibold">
              {doctor.phone}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Gender</p>
            <h3 className="text-lg font-semibold">
              {doctor.gender}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Specialization
            </p>
            <h3 className="text-lg font-semibold">
              {doctor.specialization}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Qualification
            </p>
            <h3 className="text-lg font-semibold">
              {doctor.qualification}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Experience
            </p>
            <h3 className="text-lg font-semibold">
              {doctor.experience} Years
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Consultation Fee
            </p>
            <h3 className="text-lg font-semibold text-green-600">
              ₹ {doctor.fees}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500">
              Address
            </p>

            <h3 className="rounded-lg bg-gray-100 p-4 text-lg font-medium">
              {doctor.address}
            </h3>
          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ViewDoctorModal;