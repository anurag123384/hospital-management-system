
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      

      <section className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="mb-6 text-center text-4xl font-bold text-slate-800">
            About MediCare Hospital
          </h1>

          <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-gray-600">
            MediCare Hospital Management System is designed to provide
            high-quality healthcare services with modern technology.
            Our goal is to simplify hospital operations while ensuring
            the best patient experience.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-cyan-600">
                Our Mission
              </h2>

              <p className="text-gray-600">
                To deliver world-class healthcare with compassion,
                innovation, and advanced medical technology.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-cyan-600">
                Our Vision
              </h2>

              <p className="text-gray-600">
                To become one of the most trusted hospitals by
                providing quality treatment and exceptional patient
                care.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-cyan-600">
                Why Choose Us?
              </h2>

              <ul className="space-y-2 text-gray-600">
                <li>✔ Experienced Doctors</li>
                <li>✔ Modern Equipment</li>
                <li>✔ 24×7 Emergency Services</li>
                <li>✔ Affordable Healthcare</li>
                <li>✔ Online Appointment Booking</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;