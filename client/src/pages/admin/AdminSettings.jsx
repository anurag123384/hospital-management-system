import { useState } from "react";

import toast from "react-hot-toast";

import {
  FaHospital,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaBell,
  FaMoon,
  FaFloppyDisk,
} from "react-icons/fa6";



function AdminSettings(){



const [settings,setSettings] = useState({

hospitalName:"MediCare Hospital",

email:"admin@medicare.com",

phone:"+91 9876543210",

address:"New Delhi, India",

notifications:true,

darkMode:false

});






const handleChange=(e)=>{


const {
name,
value,
type,
checked
}=e.target;



setSettings((prev)=>({

...prev,

[name]:

type==="checkbox"

?

checked

:

value


}));



};








const saveSettings=()=>{


toast.success(
"Settings Saved Successfully"
);


};








return(

<div className="
min-h-screen
bg-slate-100
p-8
text-slate-900
">






<div className="mb-8">


<h1 className="
text-4xl
font-bold
">

Settings

</h1>



<p className="
mt-2
text-gray-600
">

Manage hospital information and preferences

</p>


</div>









<div className="
mx-auto
max-w-3xl
rounded-3xl
bg-white
p-8
shadow
">





<div className="space-y-6">







<div>


<label className="
mb-2
flex
items-center
gap-2
font-semibold
text-gray-700
">


<FaHospital/>

Hospital Name


</label>




<input

type="text"

name="hospitalName"

value={settings.hospitalName}

onChange={handleChange}

className="
w-full
rounded-xl
border
p-3
outline-none
focus:border-blue-500
"

/>


</div>







<div>


<label className="
mb-2
flex
items-center
gap-2
font-semibold
text-gray-700
">

<FaEnvelope/>

Email

</label>



<input

type="email"

name="email"

value={settings.email}

onChange={handleChange}

className="
w-full
rounded-xl
border
p-3
outline-none
focus:border-blue-500
"

/>


</div>








<div>


<label className="
mb-2
flex
items-center
gap-2
font-semibold
text-gray-700
">

<FaPhone/>

Phone

</label>




<input

type="text"

name="phone"

value={settings.phone}

onChange={handleChange}

className="
w-full
rounded-xl
border
p-3
outline-none
focus:border-blue-500
"

/>


</div>
<div>


<label className="
mb-2
flex
items-center
gap-2
font-semibold
text-gray-700
">

<FaLocationDot/>

Address

</label>



<textarea

rows="3"

name="address"

value={settings.address}

onChange={handleChange}

className="
w-full
rounded-xl
border
p-3
outline-none
focus:border-blue-500
"

/>


</div>









<div className="
flex
items-center
justify-between
rounded-xl
bg-slate-100
p-4
">


<div className="
flex
items-center
gap-3
font-semibold
text-gray-700
">

<FaBell/>

Enable Notifications

</div>





<input

type="checkbox"

name="notifications"

checked={settings.notifications}

onChange={handleChange}

/>



</div>








<div className="
flex
items-center
justify-between
rounded-xl
bg-slate-100
p-4
">


<div className="
flex
items-center
gap-3
font-semibold
text-gray-700
">

<FaMoon/>

Dark Mode

</div>





<input

type="checkbox"

name="darkMode"

checked={settings.darkMode}

onChange={handleChange}

/>



</div>








<button

onClick={saveSettings}

className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-blue-600
py-3
text-lg
font-bold
text-white
hover:bg-blue-700
"

>


<FaFloppyDisk/>

Save Settings


</button>







</div>



</div>





</div>


);


}



export default AdminSettings;