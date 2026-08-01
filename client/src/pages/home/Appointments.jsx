
import Footer from "../../components/Footer";
import { FaCalendarAlt, FaUserMd, FaClock } from "react-icons/fa";
import doctorImage from "../../assets/hero.png";

function Appointments() {
  return (
    <>

      <section className="min-h-screen bg-gradient-to-br from-[#021024] via-[#0B2447] to-[#0F4C81] py-20">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mb-14 text-center">

            <h1 className="text-5xl font-extrabold text-white">
              Book an Appointment
            </h1>

            <p className="mt-4 text-lg text-cyan-200">
              Schedule your consultation with our experienced specialists.
            </p>

          </div>

          {/* Main Layout */}

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left Side Form */}

            <div className="rounded-3xl bg-white/95 p-10 shadow-2xl backdrop-blur-lg">

              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Appointment Form
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                />

                <input
                  type="date"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                />
                                <select
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                >
                  <option>Select Doctor</option>
                  <option>Cardiologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic</option>
                  <option>Pediatrician</option>
                  <option>Dermatologist</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Reason for Appointment"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-white transition duration-300 hover:bg-cyan-600"
                >
                  Book Appointment
                </button>

              </form>

            </div>

            {/* Right Side */}

            <div className="flex flex-col justify-center">

              <div className="mb-8 flex justify-center">

                <img
                  src={doctorImage}
                  alt="Doctor"
                  className="w-[420px] drop-shadow-2xl"
                />

              </div>

              <div className="grid gap-6">

                <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                  <FaUserMd className="text-5xl text-cyan-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      Expert Doctors
                    </h3>

                    <p className="text-cyan-100">
                      Highly qualified specialists available.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                  <FaCalendarAlt className="text-5xl text-cyan-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      Instant Booking
                    </h3>

                    <p className="text-cyan-100">
                      Book your appointment within seconds.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                  <FaClock className="text-5xl text-cyan-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      24×7 Support
                    </h3>

                    <p className="text-cyan-100">
                      Emergency healthcare available anytime.
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        {/* Emergency Contact */}

            <div className="mt-10 rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 text-center backdrop-blur-md">

              <h2 className="mb-2 text-2xl font-bold text-white">
                Emergency?
              </h2>

              <p className="mb-4 text-cyan-100">
                Our emergency department is available 24 hours a day,
                7 days a week.
              </p>

              <a
                href="tel:+919876543210"
                className="inline-block rounded-xl bg-cyan-400 px-8 py-3 font-bold text-slate-900 transition hover:bg-cyan-300"
              >
                📞 Call Now
              </a>

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-20 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md">
              <h2 className="text-5xl font-bold text-cyan-300">50+</h2>
              <p className="mt-3 text-lg text-white">
                Specialist Doctors
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md">
              <h2 className="text-5xl font-bold text-cyan-300">10K+</h2>
              <p className="mt-3 text-lg text-white">
                Happy Patients
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md">
              <h2 className="text-5xl font-bold text-cyan-300">24×7</h2>
              <p className="mt-3 text-lg text-white">
                Emergency Care
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md">
              <h2 className="text-5xl font-bold text-cyan-300">100%</h2>
              <p className="mt-3 text-lg text-white">
                Patient Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Appointments;