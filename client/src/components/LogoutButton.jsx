import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";


function LogoutButton(){

const navigate = useNavigate();

const { logout } = useAuth();



const handleLogout = ()=>{

logout();

toast.success(
"Logout Successfully"
);

navigate("/login");

};



return(

<button

onClick={handleLogout}

className="
rounded-xl
bg-red-600
px-5
py-2
font-bold
text-white
hover:bg-red-700
"

>

Logout

</button>

);

}


export default LogoutButton;