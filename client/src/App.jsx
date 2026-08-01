import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


// Public Pages
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";

import Doctors from "./pages/doctor/Doctors";
import Appointment from "./pages/appointment/Appointment";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


// Admin
import AdminLayout from "./layouts/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminPatients from "./pages/admin/AdminPatients";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminBilling from "./pages/admin/AdminBilling";


// Doctor
import DoctorDashboard from "./pages/doctor/DoctorDashboard";


// Patient
import PatientDashboard from "./pages/patient/PatientDashboard";


// Protected
import ProtectedRoute from "./routes/ProtectedRoute";



function App(){


return(

<>

<Navbar />


<Routes>


{/* Public Routes */}

<Route 
path="/"
element={<Home />}
/>


<Route 
path="/doctors"
element={<Doctors />}
/>


<Route 
path="/appointments"
element={<Appointment />}
/>


<Route 
path="/about"
element={<About />}
/>


<Route 
path="/contact"
element={<Contact />}
/>


<Route 
path="/login"
element={<Login />}
/>


<Route 
path="/register"
element={<Register />}
/>






{/* ADMIN ROUTES */}

<Route

path="/admin"

element={

<ProtectedRoute allowedRoles={["admin"]}>

<AdminLayout />

</ProtectedRoute>

}

>


<Route index element={<AdminHome />} />


<Route 
path="doctors"
element={<AdminDoctors />}
/>


<Route 
path="patients"
element={<AdminPatients />}
/>


<Route 
path="appointments"
element={<AdminAppointments />}
/>


<Route 
path="departments"
element={<AdminDepartments />}
/>


<Route 
path="billing"
element={<AdminBilling />}
/>


<Route 
path="settings"
element={<AdminSettings />}
/>


</Route>







{/* DOCTOR */}

<Route

path="/doctor"

element={

<ProtectedRoute allowedRoles={["doctor"]}>

<DoctorDashboard />

</ProtectedRoute>

}

/>







{/* PATIENT */}

<Route

path="/patient"

element={

<ProtectedRoute allowedRoles={["patient"]}>

<PatientDashboard />

</ProtectedRoute>

}

/>






{/* 404 */}

<Route

path="*"

element={<Home />}

/>



</Routes>


</>

);


}


export default App;