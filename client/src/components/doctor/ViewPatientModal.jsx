function ViewPatientModal({ patient, onClose }) {


if(!patient) return null;



return(

<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/60
p-5
">


<div className="
w-full
max-w-lg
rounded-3xl
bg-white
p-8
shadow-2xl
text-slate-900
">





<div className="text-center">


<div className="
mx-auto
flex
h-24
w-24
items-center
justify-center
rounded-full
bg-blue-100
text-4xl
">

👤

</div>



<h2 className="
mt-5
text-3xl
font-bold
text-slate-900
">

{patient.name}

</h2>



<p className="
mt-2
font-semibold
text-blue-600
">

Patient Details

</p>


</div>








<div className="mt-8 space-y-4">





<div className="
rounded-xl
bg-slate-100
p-4
">

<p className="text-sm text-slate-600">
Email
</p>

<p className="font-semibold">
{patient.email || "Not Available"}
</p>

</div>








<div className="
rounded-xl
bg-slate-100
p-4
">

<p className="text-sm text-slate-600">
Phone
</p>

<p className="font-semibold">
{patient.phone || "Not Available"}
</p>

</div>








<div className="
grid
grid-cols-2
gap-4
">



<div className="
rounded-xl
bg-slate-100
p-4
">

<p className="text-sm text-slate-600">
Gender
</p>

<p className="font-semibold">
{patient.gender || "N/A"}
</p>


</div>






<div className="
rounded-xl
bg-slate-100
p-4
">

<p className="text-sm text-slate-600">
Disease
</p>

<p className="font-semibold">
{patient.disease || "N/A"}
</p>


</div>




</div>








<div className="
rounded-xl
bg-slate-100
p-4
">

<p className="text-sm text-slate-600">
Address
</p>

<p className="font-semibold">
{patient.address || "N/A"}
</p>


</div>





</div>









<button

onClick={onClose}

className="
mt-8
w-full
rounded-xl
bg-red-600
py-3
font-bold
text-white
hover:bg-red-700
"

>

Close

</button>






</div>


</div>

);


}


export default ViewPatientModal;