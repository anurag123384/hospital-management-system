import { Routes, Route } from "react-router-dom";


// Public
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


// Layout
import AdminLayout from "../layouts/AdminLayout";


// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDoctors from "../pages/admin/AdminDoctors";
import AdminPatients from "../pages/admin/AdminPatients";
import AdminAppointments from "../pages/admin/AdminAppointments";
import AdminPrescription from "../pages/admin/AdminPrescription";
import AdminBilling from "../pages/admin/AdminBilling";
import AdminDepartments from "../pages/admin/AdminDepartments";
import AdminSettings from "../pages/admin/AdminSettings";


// Doctor
import DoctorDashboard from "../pages/doctor/DoctorDashboard";


// Patient
import PatientDashboard from "../pages/patient/PatientDashboard";


// Appointment
import Appointment from "../pages/appointment/Appointment";


// Protection
import ProtectedRoute from "./ProtectedRoute";



function AppRoutes(){


return(

<Routes>


{/* Public Routes */}


<Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />





{/* Admin Routes */}


<Route

path="/admin"

element={

<ProtectedRoute allowedRoles={["admin"]}>

<AdminLayout />

</ProtectedRoute>

}

>


<Route index element={<AdminDashboard />} />


<Route path="doctors" element={<AdminDoctors />} />


<Route path="patients" element={<AdminPatients />} />


<Route path="appointments" element={<AdminAppointments />} />


<Route path="prescriptions" element={<AdminPrescription />} />


<Route path="billing" element={<AdminBilling />} />


<Route path="departments" element={<AdminDepartments />} />


<Route path="settings" element={<AdminSettings />} />


</Route>







{/* Appointment */}

<Route

path="/appointments"

element={<Appointment />}

/>






{/* Doctor */}

<Route

path="/doctor"

element={

<ProtectedRoute allowedRoles={["doctor"]}>

<DoctorDashboard />

</ProtectedRoute>

}

/>






{/* Patient */}

<Route

path="/patient"

element={

<ProtectedRoute allowedRoles={["patient"]}>

<PatientDashboard />

</ProtectedRoute>

}

/>



</Routes>


);


}


export default AppRoutes;