function ViewDoctorModal({ doctor, onClose }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">


        <div className="text-center">


          <img
            src={doctor.image}
            alt={doctor.name}
            className="mx-auto h-48 w-48 rounded-full object-contain"
          />


          <h2 className="mt-5 text-3xl font-bold text-slate-800">
            {doctor.name}
          </h2>


          <p className="mt-2 text-xl font-semibold text-cyan-600">
            {doctor.specialization}
          </p>


          <p className="mt-3 text-gray-600">
            Experience: {doctor.experience}
          </p>


          <p className="mt-3 text-gray-600">
            ⭐ Rating: 4.9/5
          </p>


        </div>


        <div className="mt-8 flex gap-4">


          <a
            href="/appointments"
            className="flex-1 rounded-xl bg-cyan-500 py-3 text-center font-bold text-white hover:bg-cyan-600"
          >
            Book Appointment
          </a>


          <button
            onClick={onClose}
            className="flex-1 rounded-xl bg-red-500 py-3 font-bold text-white hover:bg-red-600"
          >
            Close
          </button>


        </div>


      </div>

    </div>
  );
}


export default ViewDoctorModal;