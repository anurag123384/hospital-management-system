import {
  FaHospital,
  FaPen,
  FaTrash,
  FaPlus,
  FaUserMd,
} from "react-icons/fa";


const departments = [

  {
    id:1,
    name:"Cardiology",
    doctors:8,
    head:"Dr. Rajesh Sharma"
  },

  {
    id:2,
    name:"Neurology",
    doctors:6,
    head:"Dr. Priya Verma"
  },

  {
    id:3,
    name:"Orthopedic",
    doctors:5,
    head:"Dr. Amit Singh"
  },

  {
    id:4,
    name:"Dermatology",
    doctors:4,
    head:"Dr. Neha Gupta"
  },

  {
    id:5,
    name:"Pediatrics",
    doctors:7,
    head:"Dr. Vivek Kumar"
  },

  {
    id:6,
    name:"ENT",
    doctors:3,
    head:"Dr. Sandeep Roy"
  }

];




function AdminDepartments(){


  return (

    <div className="min-h-screen bg-slate-100 p-8 text-slate-900">


      <div className="mb-8 flex items-center justify-between">


        <div>

          <h1 className="text-4xl font-bold">
            Departments
          </h1>


          <p className="mt-2 text-gray-600">
            Manage hospital departments
          </p>

        </div>



        <button

          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-5
          py-3
          font-semibold
          text-white
          hover:bg-blue-700
          "

        >

          <FaPlus />

          Add Department

        </button>


      </div>





      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">


        {
          departments.map((department)=>(


            <div

              key={department.id}

              className="
              rounded-3xl
              bg-white
              p-6
              shadow
              transition
              hover:shadow-xl
              "

            >


              <div className="mb-5 flex items-center justify-between">


                <div className="rounded-2xl bg-blue-100 p-4">


                  <FaHospital

                    className="text-3xl text-blue-600"

                  />


                </div>





                <div className="flex gap-2">


                  <button

                    className="
                    rounded-lg
                    bg-yellow-500
                    p-3
                    text-white
                    hover:bg-yellow-600
                    "

                  >

                    <FaPen />

                  </button>





                  <button

                    className="
                    rounded-lg
                    bg-red-600
                    p-3
                    text-white
                    hover:bg-red-700
                    "

                  >

                    <FaTrash />

                  </button>


                </div>


              </div>







              <h2 className="text-2xl font-bold">

                {department.name}

              </h2>







              <div className="mt-6 space-y-4">


                <div className="flex justify-between">


                  <span className="text-gray-600">

                    Department Head

                  </span>



                  <span className="font-semibold">

                    {department.head}

                  </span>


                </div>







                <div className="flex items-center justify-between">


                  <span className="flex items-center gap-2 text-gray-600">


                    <FaUserMd />


                    Doctors


                  </span>





                  <span className="
                  rounded-full
                  bg-blue-100
                  px-4
                  py-1
                  font-semibold
                  text-blue-700
                  ">


                    {department.doctors}


                  </span>


                </div>



              </div>





            </div>


          ))
        }



      </div>



    </div>

  );


}



export default AdminDepartments;