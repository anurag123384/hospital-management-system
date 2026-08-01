import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// ==============================
// Register User
// ==============================

export const registerUser = async (req,res)=>{

try{


const {
name,
email,
password,
role
}=req.body;



if(!name || !email || !password){

return res.status(400).json({

success:false,

message:"Please fill all required fields"

});

}




const existingUser = await User.findOne({
email
});



if(existingUser){

return res.status(400).json({

success:false,

message:"User already exists"

});

}




const user = await User.create({

name,

email,

password,

role

});





const token = generateToken(
user._id,
user.role
);




res.status(201).json({

success:true,

message:"Registration Successful",

token,

user:{

id:user._id,

name:user.name,

email:user.email,

role:user.role

}


});




}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};









// ==============================
// Login User
// ==============================

export const loginUser = async(req,res)=>{


try{


const {
email,
password
}=req.body;



console.log("========== LOGIN DEBUG ==========");

console.log(
"Email Received:",
email
);

console.log(
"Password Received:",
password
);





const user = await User.findOne({
email
});




console.log(
"User Found:",
user
);





if(!user){


return res.status(401).json({

success:false,

message:"Invalid Email or Password"

});


}






console.log(
"Password From Database:",
user.password
);






const isMatch =
await user.comparePassword(password);





console.log(
"Password Match:",
isMatch
);






if(!isMatch){


return res.status(401).json({

success:false,

message:"Invalid Email or Password"

});


}







const token = generateToken(

user._id,

user.role

);







res.status(200).json({

success:true,

message:"Login Successful",

token,

user:{

id:user._id,

name:user.name,

email:user.email,

role:user.role

}


});







}catch(error){



console.log(
"LOGIN ERROR:",
error
);



res.status(500).json({

success:false,

message:error.message

});


}


};









// ==============================
// Current Logged In User
// ==============================


export const getCurrentUser = async(req,res)=>{


try{


const user = await User.findById(
req.user.id
)
.select("-password");



res.status(200).json({

success:true,

user

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};