function Invoice({ bill }) {


if(!bill){

return null;

}



return (


<div className="
w-full
bg-white
p-10
text-black
">


{/* Header */}


<div className="
border-b
pb-5
text-center
">


<h1 className="
text-3xl
font-bold
">

🏥 MediCare Hospital

</h1>


<p className="
mt-2
text-gray-600
">

Hospital Management System

</p>



</div>







{/* Bill Info */}


<div className="
mt-6
flex
justify-between
">


<div>


<p>
<strong>Bill No:</strong> {bill.billNumber}
</p>


<p>

<strong>Date:</strong>

{" "}

{
new Date(
bill.createdAt
).toLocaleDateString()

}

</p>


</div>




<div>


<p>

<strong>Status:</strong>

{" "}

{bill.paymentStatus}

</p>


</div>



</div>








{/* Patient Doctor */}


<div className="
mt-8
grid
grid-cols-2
gap-6
">


<div className="
rounded-lg
border
p-4
">


<h2 className="
mb-3
text-xl
font-bold
">

Patient Details

</h2>


<p>

Name:

{" "}

{bill.patient?.name || "N/A"}

</p>


<p>

Email:

{" "}

{bill.patient?.email || "N/A"}

</p>


</div>








<div className="
rounded-lg
border
p-4
">


<h2 className="
mb-3
text-xl
font-bold
">

Doctor Details

</h2>


<p>

Name:

{" "}

Dr. {bill.doctor?.name || "N/A"}

</p>



<p>

Specialization:

{" "}

{bill.doctor?.specialization || "N/A"}

</p>


</div>



</div>









{/* Charges */}



<div className="
mt-8
">


<h2 className="
mb-4
text-xl
font-bold
">

Bill Details

</h2>





<table className="
w-full
border
">


<thead>

<tr className="
bg-gray-200
">


<th className="
border
p-3
text-left
">

Description

</th>


<th className="
border
p-3
text-right
">

Amount

</th>


</tr>


</thead>





<tbody>



<tr>

<td className="border p-3">

Consultation Fee

</td>


<td className="
border
p-3
text-right
">

₹ {bill.consultationFee}

</td>

</tr>





<tr>

<td className="border p-3">

Medicine Charges

</td>


<td className="
border
p-3
text-right
">

₹ {bill.medicineCharges}

</td>

</tr>






<tr>

<td className="border p-3">

Test Charges

</td>


<td className="
border
p-3
text-right
">

₹ {bill.testCharges}

</td>

</tr>






<tr>

<td className="border p-3">

Room Charges

</td>


<td className="
border
p-3
text-right
">

₹ {bill.roomCharges}

</td>

</tr>







<tr>

<td className="border p-3">

Other Charges

</td>


<td className="
border
p-3
text-right
">

₹ {bill.otherCharges}

</td>

</tr>






<tr className="
font-bold
text-lg
">


<td className="
border
p-3
">

Total Amount

</td>


<td className="
border
p-3
text-right
">

₹ {bill.totalAmount}

</td>


</tr>





</tbody>


</table>


</div>








<div className="
mt-8
text-center
text-gray-600
">


<p>

Thank you for choosing MediCare Hospital

</p>


<p className="
mt-2
">

Get well soon ❤️

</p>


</div>






</div>


);


}


export default Invoice;