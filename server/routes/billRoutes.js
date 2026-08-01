import express from "express";


import {

createBill,

getBills,

getBillById,

updateBill,

deleteBill

} from "../controllers/billController.js";



import {

protect,

adminOnly

} from "../middleware/authMiddleware.js";



const router = express.Router();





// ===============================
// Get All Bills
// ===============================

router.get(

"/",

protect,

adminOnly,

getBills

);







// ===============================
// Get Single Bill
// ===============================

router.get(

"/:id",

protect,

adminOnly,

getBillById

);







// ===============================
// Create Bill
// ===============================

router.post(

"/",

protect,

adminOnly,

createBill

);







// ===============================
// Update Bill
// ===============================

router.put(

"/:id",

protect,

adminOnly,

updateBill

);







// ===============================
// Delete Bill
// ===============================

router.delete(

"/:id",

protect,

adminOnly,

deleteBill

);






export default router;