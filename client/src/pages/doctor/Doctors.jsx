import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import ViewDoctorModal from "../../components/ViewDoctorModal";


const doctors = [

  {
    id: 1,
    name: "Dr. Roshni Pandey",
    specialization: "Cardiologist",
    experience: "10+ Years",
    image: "/doctor1.png?v=1",
    description:
      "Expert in heart diseases, cardiac surgery and advanced cardiac care.",
  },


  {
    id: 2,
    name: "Dr. Ankur Verma",
    specialization: "Neurologist",
    experience: "8+ Years",
    image: "/doctor2.png?v=2",
    description:
      "Specialist in brain, nerve disorders and neurological treatments.",
  },


  {
    id: 3,
    name: "Dr. Diya Thakur",
    specialization: "Orthopedic",
    experience: "12+ Years",
    image: "/doctor3.png?v=3",
    description:
      "Experienced in bone, joint and spine related treatments.",
  },

];



function Doctors() {


  const [selectedDoctor, setSelectedDoctor] = useState(null);



  return (

    <>




      <section className="
      min-h-screen
      bg-slate-950
      py-24
      ">


        <div className="
        mx-auto
        max-w-7xl
        px-6
        ">


          {/* Heading */}

          <div className="
          mb-16
          text-center
          ">


            <span className="
            rounded-full
            border
            border-cyan-400/40
            bg-white/10
            px-5
            py-2
            text-cyan-300
            ">

              Our Doctors

            </span>



            <h1 className="
            mt-6
            text-4xl
            font-extrabold
            text-white
            sm:text-5xl
            ">

              Meet Our Specialists

            </h1>




            <p className="
            mx-auto
            mt-5
            max-w-3xl
            text-lg
            text-blue-100
            ">

              Our highly qualified doctors provide excellent healthcare
              with modern technology and patient focused treatment.

            </p>


          </div>





          {/* Doctor Cards */}


          <div className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          ">


            {

              doctors.map((doctor)=>(


                <div

                  key={doctor.id}

                  className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  shadow-xl
                  transition
                  duration-500
                  hover:-translate-y-3
                  "

                >



                  {/* Image */}

                  <div className="
                  relative
                  bg-gradient-to-b
                  from-blue-900
                  to-cyan-700
                  ">



                    <img

                      src={doctor.image}

                      alt={doctor.name}

                      className="
                      mx-auto
                      h-80
                      w-full
                      object-contain
                      p-5
                      transition
                      duration-500
                      group-hover:scale-105
                      "

                    />




                    <span className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-yellow-400
                    px-3
                    py-1
                    font-bold
                    text-black
                    ">

                      ⭐ 4.9

                    </span>





                    <span className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-green-500
                    px-3
                    py-1
                    text-sm
                    font-bold
                    text-white
                    ">

                      Available

                    </span>



                  </div>






                  {/* Content */}


                  <div className="
                  p-6
                  ">


                    <h2 className="
                    text-2xl
                    font-bold
                    text-white
                    ">

                      {doctor.name}

                    </h2>




                    <p className="
                    mt-2
                    text-xl
                    font-semibold
                    text-cyan-300
                    ">

                      {doctor.specialization}

                    </p>




                    <p className="
                    mt-2
                    text-blue-100
                    ">

                      Experience: {doctor.experience}

                    </p>






                    <div className="
                    mt-6
                    flex
                    gap-3
                    ">



                      <Link

                        to="/appointments"

                        className="
                        flex-1
                        rounded-xl
                        bg-cyan-400
                        py-3
                        text-center
                        font-bold
                        text-slate-900
                        hover:bg-cyan-300
                        "

                      >

                        Book Now

                      </Link>






                      <button

                        onClick={() => setSelectedDoctor(doctor)}

                        className="
                        rounded-xl
                        border
                        border-cyan-300
                        px-5
                        text-cyan-300
                        hover:bg-cyan-300
                        hover:text-slate-900
                        "

                      >

                        View

                      </button>



                    </div>



                  </div>




                </div>


              ))

            }



          </div>



        </div>



      </section>






      {

        selectedDoctor &&

        <ViewDoctorModal

          doctor={selectedDoctor}

          onClose={() => setSelectedDoctor(null)}

        />

      }







      <Footer />



    </>

  );


}


export default Doctors;