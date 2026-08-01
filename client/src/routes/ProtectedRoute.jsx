import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function ProtectedRoute({
  children,
  allowedRoles
}) {


  const { user } = useAuth();


  const token = localStorage.getItem("token");


  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );


  const currentUser = user || storedUser;



  console.log(
    "PROTECTED USER:",
    currentUser
  );

  console.log(
    "ALLOWED ROLES:",
    allowedRoles
  );





  if(!token){

    return <Navigate to="/login" replace />;

  }




  if(!currentUser){

    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );

  }




  if(
    allowedRoles &&
    !allowedRoles.includes(
      currentUser.role?.toLowerCase()
    )
  ){

    console.log(
      "ROLE NOT MATCHED:",
      currentUser.role
    );


    return <Navigate to="/" replace />;

  }





  return children;


}


export default ProtectedRoute;