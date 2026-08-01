import React from "react";

function ViewBillModal({ bill, onClose }) {
  if (!bill) return null;

  const total =
    Number(bill.consultationFee || 0) +
    Number(bill.medicineCharge || 0) +
    Number(bill.labCharge || 0) +
    Number(bill.roomCharge || 0) +
    Number(bill.otherCharge || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-slate-900 p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            Bill Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-slate-400">Bill Number</p>
            <h3 className="text-white font-semibold">
              {bill.billNumber}
            </h3>
          </div>

          <div>
            <p className="text-slate-400">Patient</p>
            <h3 className="text-white font-semibold">
              {bill.patient?.name}
            </h3>
          </div>

          <div>
            <p className="text-slate-400">Doctor</p>
            <h3 className="text-white font-semibold">
              {bill.doctor?.name}
            </h3>
          </div>

          <div>
            <p className="text-slate-400">Payment Status</p>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                bill.paymentStatus === "Paid"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {bill.paymentStatus}
            </span>
          </div>

          <div>
            <p className="text-slate-400">Consultation Fee</p>
            <h3 className="text-white">₹ {bill.consultationFee}</h3>
          </div>

          <div>
            <p className="text-slate-400">Medicine Charge</p>
            <h3 className="text-white">₹ {bill.medicineCharge}</h3>
          </div>

          <div>
            <p className="text-slate-400">Lab Charge</p>
            <h3 className="text-white">₹ {bill.labCharge}</h3>
          </div>

          <div>
            <p className="text-slate-400">Room Charge</p>
            <h3 className="text-white">₹ {bill.roomCharge}</h3>
          </div>

          <div>
            <p className="text-slate-400">Other Charge</p>
            <h3 className="text-white">₹ {bill.otherCharge}</h3>
          </div>

          <div>
            <p className="text-slate-400">Grand Total</p>
            <h3 className="text-2xl font-bold text-cyan-400">
              ₹ {total}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewBillModal;