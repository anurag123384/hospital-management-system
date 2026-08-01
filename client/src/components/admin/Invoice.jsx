import React from "react";

function Invoice({ bill }) {
  if (!bill) return null;

  const total =
    Number(bill.consultationFee || 0) +
    Number(bill.medicineCharge || 0) +
    Number(bill.labCharge || 0) +
    Number(bill.roomCharge || 0) +
    Number(bill.otherCharge || 0);

  return (
    <div
      id="invoice"
      className="mx-auto w-full max-w-4xl rounded-lg bg-white p-10 text-black shadow-lg"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b pb-5">
        <div>
          <h1 className="text-3xl font-bold">
            Hospital Management System
          </h1>

          <p className="text-gray-500">
            Hospital Invoice
          </p>
        </div>

        <div className="text-right">
          <p className="font-bold">
            Invoice No.
          </p>

          <p>{bill.billNumber}</p>

          <p className="mt-2 text-sm text-gray-500">
            {new Date(
              bill.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Patient */}
      <div className="mb-8 grid grid-cols-2 gap-8">

        <div>
          <h3 className="mb-2 text-lg font-bold">
            Patient
          </h3>

          <p>{bill.patient?.name}</p>
          <p>{bill.patient?.email}</p>
          <p>{bill.patient?.phone}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-bold">
            Doctor
          </h3>

          <p>{bill.doctor?.name}</p>
          <p>{bill.doctor?.specialization}</p>
        </div>

      </div>

      {/* Charges */}

      <table className="mb-8 w-full border">

        <thead className="bg-gray-200">

          <tr>

            <th className="border p-3 text-left">
              Description
            </th>

            <th className="border p-3">
              Amount
            </th>

          </tr>

        </thead>

        <tbody>

          <tr>
            <td className="border p-3">
              Consultation Fee
            </td>
            <td className="border p-3 text-center">
              ₹ {bill.consultationFee}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Medicine Charge
            </td>
            <td className="border p-3 text-center">
              ₹ {bill.medicineCharge}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Lab Charge
            </td>
            <td className="border p-3 text-center">
              ₹ {bill.labCharge}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Room Charge
            </td>
            <td className="border p-3 text-center">
              ₹ {bill.roomCharge}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Other Charge
            </td>
            <td className="border p-3 text-center">
              ₹ {bill.otherCharge}
            </td>
          </tr>

        </tbody>

      </table>

      {/* Footer */}

      <div className="flex justify-between">

        <div>

          <h3 className="text-lg font-bold">
            Payment Status
          </h3>

          <span
            className={`rounded-full px-4 py-2 text-white ${
              bill.paymentStatus === "Paid"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {bill.paymentStatus}
          </span>

        </div>

        <div className="text-right">

          <h2 className="text-3xl font-bold">
            ₹ {total}
          </h2>

          <p className="text-gray-500">
            Grand Total
          </p>

        </div>

      </div>

      <div className="mt-10 border-t pt-5 text-center text-gray-500">
        Thank you for choosing our Hospital.
      </div>

    </div>
  );
}

export default Invoice;