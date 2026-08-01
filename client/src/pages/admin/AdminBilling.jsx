import {
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import toast from "react-hot-toast";

import {
  useReactToPrint
} from "react-to-print";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import api from "../../services/api";


import AddBillModal from "../../components/admin/AddBillModal";
import EditBillModal from "../../components/admin/EditBillModal";
import ViewBillModal from "../../components/admin/ViewBillModal";
import Invoice from "../../components/admin/Invoice";


import {
  FaPlus,
  FaSearch,
  FaTrash,
  FaEdit,
  FaEye,
  FaPrint,
  FaFilePdf
} from "react-icons/fa";




function AdminBilling(){



const [patients,setPatients] = useState([]);

const [doctors,setDoctors] = useState([]);

const [bills,setBills] = useState([]);



const [loading,setLoading] = useState(true);



const [search,setSearch] = useState("");



const [selectedBill,setSelectedBill] = useState(null);



const [showAddModal,setShowAddModal] = useState(false);

const [showEditModal,setShowEditModal] = useState(false);

const [showViewModal,setShowViewModal] = useState(false);




const invoiceRef = useRef(null);





const handlePrint = useReactToPrint({

content:()=>invoiceRef.current

});







const downloadPDF = async()=>{


if(!selectedBill){

toast.error(
"Please select bill"
);

return;

}



const element = invoiceRef.current;


const canvas = await html2canvas(element);



const imgData = canvas.toDataURL(
"image/png"
);



const pdf = new jsPDF(
"p",
"mm",
"a4"
);



const imgWidth = 190;


const imgHeight =
(
canvas.height * imgWidth
)
/
canvas.width;



pdf.addImage(
imgData,
"PNG",
10,
10,
imgWidth,
imgHeight
);



pdf.save(
`${selectedBill.billNumber}.pdf`
);



};









const fetchPatients = async()=>{


try{


const res = await api.get(
"/patients"
);


setPatients(
res.data.patients || []
);


}
catch(error){

console.log(error);

}


};







const fetchDoctors = async()=>{


try{


const res = await api.get(
"/doctors"
);


setDoctors(
res.data.doctors || []
);


}
catch(error){

console.log(error);

}


};







const fetchBills = async()=>{


try{


setLoading(true);



const res = await api.get(
"/bills"
);



setBills(
res.data.bills || []
);



}
catch(error){


console.log(error);



toast.error(
"Unable to load bills"
);


}

finally{


setLoading(false);


}


};









useEffect(()=>{


fetchPatients();

fetchDoctors();

fetchBills();


},[]);









const deleteBill = async(id)=>{


try{


await api.delete(

`/bills/${id}`

);



toast.success(
"Bill deleted"
);



fetchBills();



}
catch(error){


console.log(error);



toast.error(
"Delete failed"
);



}


};







const filteredBills = useMemo(()=>{


return bills.filter((bill)=>{


const keyword = search.toLowerCase();



return(

bill.billNumber
?.toLowerCase()
.includes(keyword)



||


bill.patient?.name
?.toLowerCase()
.includes(keyword)



||


bill.doctor?.name
?.toLowerCase()
.includes(keyword)


);



});


},[bills,search]);








const totalRevenue = bills.reduce(

(sum,bill)=>

sum + Number(bill.totalAmount || 0),

0

);






const paidBills = bills.filter(

(bill)=>

bill.paymentStatus==="Paid"

).length;
return(

<div className="
min-h-screen
bg-slate-100
p-6
text-slate-900
">






<div className="
mb-6
flex
items-center
justify-between
">


<div>


<h1 className="
text-3xl
font-bold
">

Billing Management

</h1>


<p className="
text-slate-600
">

Manage hospital bills

</p>


</div>





<button

onClick={()=>setShowAddModal(true)}

className="
flex
items-center
gap-2
rounded-lg
bg-blue-600
px-5
py-3
text-white
"

>

<FaPlus/>

Generate Bill

</button>



</div>








<div className="
mb-8
grid
gap-5
md:grid-cols-3
">





<div className="
rounded-xl
bg-white
p-5
shadow
">


<h2 className="font-semibold">

Total Bills

</h2>


<p className="
mt-2
text-3xl
font-bold
">

{bills.length}

</p>


</div>







<div className="
rounded-xl
bg-white
p-5
shadow
">


<h2 className="font-semibold">

Revenue

</h2>


<p className="
mt-2
text-3xl
font-bold
text-blue-600
">

₹{totalRevenue}

</p>


</div>







<div className="
rounded-xl
bg-white
p-5
shadow
">


<h2 className="font-semibold">

Paid Bills

</h2>


<p className="
mt-2
text-3xl
font-bold
text-green-600
">

{paidBills}

</p>


</div>





</div>









<div className="
relative
mb-6
">


<FaSearch className="
absolute
left-4
top-4
text-gray-500
"/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search bill..."

className="
w-full
rounded-lg
border
px-12
py-3
"

/>



</div>









<div className="
overflow-x-auto
rounded-xl
bg-white
shadow
">


<table className="
w-full
">



<thead className="
bg-blue-700
text-white
">


<tr>


<th className="p-3 text-left">
Bill No
</th>


<th className="p-3 text-left">
Patient
</th>


<th className="p-3 text-left">
Doctor
</th>


<th className="p-3 text-left">
Amount
</th>


<th className="p-3 text-left">
Status
</th>


<th className="p-3 text-center">
Action
</th>


</tr>


</thead>







<tbody>


{

loading ?


<tr>

<td

colSpan="6"

className="p-8 text-center"

>

Loading...

</td>

</tr>



:


filteredBills.map((bill)=>(


<tr

key={bill._id}

className="
border-b
hover:bg-slate-50
"

>


<td className="p-3">

{bill.billNumber}

</td>



<td className="p-3">

{bill.patient?.name || "N/A"}

</td>




<td className="p-3">

Dr. {bill.doctor?.name || "N/A"}

</td>




<td className="p-3 font-bold">

₹{bill.totalAmount}

</td>




<td className="p-3">

{bill.paymentStatus}

</td>






<td className="p-3">


<div className="
flex
justify-center
gap-2
">






<button

onClick={()=>{

setSelectedBill(bill);

setShowViewModal(true);

}}

className="
rounded
bg-blue-600
p-2
text-white
"

>

<FaEye/>

</button>







<button

onClick={()=>{

setSelectedBill(bill);

setTimeout(()=>{

handlePrint();

},300);


}}

className="
rounded
bg-green-600
p-2
text-white
"

>

<FaPrint/>

</button>







<button

onClick={()=>{

setSelectedBill(bill);

setTimeout(()=>{

downloadPDF();

},300);


}}

className="
rounded
bg-purple-600
p-2
text-white
"

>

<FaFilePdf/>

</button>







<button

onClick={()=>{

setSelectedBill(bill);

setShowEditModal(true);

}}

className="
rounded
bg-yellow-500
p-2
text-white
"

>

<FaEdit/>

</button>








<button

onClick={()=>deleteBill(bill._id)}

className="
rounded
bg-red-600
p-2
text-white
"

>

<FaTrash/>

</button>





</div>


</td>


</tr>


))


}



</tbody>


</table>


</div>










<div className="hidden">


<div ref={invoiceRef}>


{

selectedBill &&

<Invoice bill={selectedBill}/>

}


</div>


</div>









{
showAddModal &&

<AddBillModal

patients={patients}

doctors={doctors}

onClose={()=>setShowAddModal(false)}

refreshBills={fetchBills}

/>

}








{
showEditModal && selectedBill &&


<EditBillModal

bill={selectedBill}

onClose={()=>{

setShowEditModal(false);

setSelectedBill(null);

}}

refreshBills={fetchBills}

/>


}








{
showViewModal && selectedBill &&


<ViewBillModal

bill={selectedBill}

onClose={()=>{

setShowViewModal(false);

setSelectedBill(null);

}}

/>

}







</div>

);


}



export default AdminBilling;