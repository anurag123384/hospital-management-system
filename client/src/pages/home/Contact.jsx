import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";


function Contact() {

  return (

    <div className="min-h-screen bg-slate-100">


      {/* Header */}

      <div className="py-8 text-center">

        <h1 className="text-5xl font-bold text-slate-900">
          Contact Us
        </h1>


        <p className="mt-3 text-xl text-slate-600">
          Have questions? We'd love to hear from you.
        </p>

      </div>





      <div className="grid gap-8 px-6 md:grid-cols-2">


        {/* Contact Form */}

        <div className="rounded-3xl bg-white p-8 shadow-xl">


          <form className="space-y-5">


            <input

              type="text"

              placeholder="Full Name"

              className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-slate-900
              placeholder:text-slate-500
              outline-none
              focus:border-cyan-500
              "

            />




            <input

              type="email"

              placeholder="Email"

              className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-slate-900
              placeholder:text-slate-500
              outline-none
              focus:border-cyan-500
              "

            />





            <input

              type="text"

              placeholder="Subject"

              className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-slate-900
              placeholder:text-slate-500
              outline-none
              focus:border-cyan-500
              "

            />






            <textarea

              rows="6"

              placeholder="Your Message"

              className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-slate-900
              placeholder:text-slate-500
              outline-none
              focus:border-cyan-500
              "

            />







            <button

              className="
              w-full
              rounded-xl
              bg-cyan-500
              py-3
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-cyan-600
              "

            >

              Send Message

            </button>



          </form>


        </div>









        {/* Contact Information */}


        <div className="rounded-3xl bg-white p-8 shadow-xl">


          <h2 className="mb-6 text-3xl font-bold text-slate-900">

            Get In Touch

          </h2>




          <div className="space-y-8">



            <div className="flex items-center gap-5">

              <FaLocationDot
                className="text-4xl text-cyan-600"
              />

              <div>

                <h3 className="font-bold text-slate-900">
                  Address
                </h3>

                <p className="text-slate-600">
                  New Delhi, India
                </p>

              </div>


            </div>






            <div className="flex items-center gap-5">


              <FaPhone
                className="text-4xl text-cyan-600"
              />


              <div>

                <h3 className="font-bold text-slate-900">
                  Phone
                </h3>


                <p className="text-slate-600">
                  +91 9876543210
                </p>


              </div>


            </div>








            <div className="flex items-center gap-5">


              <FaEnvelope
                className="text-4xl text-cyan-600"
              />


              <div>


                <h3 className="font-bold text-slate-900">
                  Email
                </h3>


                <p className="text-slate-600">
                  support@medicare.com
                </p>


              </div>


            </div>



          </div>


        </div>



      </div>


    </div>

  );

}


export default Contact;