import { Link, useNavigate } from "react-router-dom";
import {
  FaUserDoctor,
  FaCalendarCheck,
  FaUsers,
  FaHouse,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="text-center py-8 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-400">
          🏥 MediCare
        </h1>
      </div>

      <nav className="p-5 space-y-3">

        <Link
          to="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <FaHouse />
          Dashboard
        </Link>

        <Link
          to="/doctors"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <FaUserDoctor />
          Doctors
        </Link>

        <Link
          to="/appointments"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <FaCalendarCheck />
          Appointments
        </Link>

        <Link
          to="/patients"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <FaUsers />
          Patients
        </Link>

      </nav>

      <div className="absolute bottom-8 left-5">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg"
        >
          <FaArrowRightFromBracket />
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;