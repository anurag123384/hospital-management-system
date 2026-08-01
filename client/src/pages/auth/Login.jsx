import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";



function Login(){


const navigate = useNavigate();


const { login } = useAuth();



const [selectedRole,setSelectedRole] = useState("");

const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

email:"",
password:""

});






const roles=[


{
role:"admin",
title:"Admin",
icon:"👨‍💼"
},


{
role:"doctor",
title:"Doctor",
icon:"👨‍⚕️"
},


{
role:"patient",
title:"Patient",
icon:"👤"
}


];







const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};









const handleSubmit = async(e)=>{


e.preventDefault();



if(!selectedRole){


toast.error(
"Please select login type"
);


return;


}






try{


setLoading(true);




const response = await api.post(

"/auth/login",

formData

);




console.log(
"LOGIN RESPONSE:",
response.data
);






const token = response.data.token;


const user = response.data.user;






if(!user){


toast.error(
"User data not found"
);


return;


}







if(
user.role.toLowerCase()
!== 
selectedRole.toLowerCase()
){


toast.error(

`You selected ${selectedRole} but this account is ${user.role}`

);


return;


}







login(

user,

token

);






toast.success(
"Login Successful"
);







if(user.role==="admin"){


navigate("/admin");


}

else if(user.role==="doctor"){


navigate("/doctor");


}

else if(user.role==="patient"){


navigate("/patient");


}



}
catch(error){


console.log(
"LOGIN ERROR:",
error.response?.data || error.message
);



toast.error(

error.response?.data?.message ||

"Invalid Email or Password"

);



}
finally{


setLoading(false);


}



};









return(


<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-[#020617]
via-[#0B2447]
to-[#0F4C81]
px-5
">





<div className="
w-full
max-w-lg
rounded-3xl
bg-white
p-8
shadow-2xl
">





<h1 className="
text-center
text-4xl
font-bold
text-blue-700
">

MediCare Login

</h1>



<p className="
mt-2
mb-8
text-center
text-gray-500
">

Select Login Type

</p>








<div className="
grid
grid-cols-3
gap-3
mb-8
">


{

roles.map((item)=>(


<button

key={item.role}

type="button"

onClick={()=>setSelectedRole(item.role)}

className={

`
rounded-xl
border-2
p-4
transition

${
selectedRole===item.role

?

"border-blue-600 bg-blue-50 shadow-lg"

:

"border-gray-200 hover:border-blue-400"

}

`

}

>


<div className="
text-3xl
">

{item.icon}

</div>



<p className="
mt-2
font-bold
text-gray-800
">

{item.title}

</p>


</button>


))


}


</div>









<form

onSubmit={handleSubmit}

className="
space-y-5
"

>





<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

required

className="
w-full
rounded-xl
border
p-4
text-black
"

/>








<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

required

className="
w-full
rounded-xl
border
p-4
text-black
"

/>







<button

disabled={loading}

className="
w-full
rounded-xl
bg-blue-600
py-4
font-bold
text-white
hover:bg-blue-700
"

>


{

loading

?

"Logging in..."

:

"Login"

}


</button>






</form>






</div>



</div>


);


}


export default Login;