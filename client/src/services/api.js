import axios from "axios";

const api = axios.create({

 baseURL: "https://hospital-management-system-k3n2.onrender.com/api",

  headers:{
    "Content-Type":"application/json",
  },

});


// Add token automatically

api.interceptors.request.use(

(config)=>{


const token = localStorage.getItem("token");


if(token){

config.headers.Authorization = `Bearer ${token}`;

}


return config;


},


(error)=>{

return Promise.reject(error);

}

);



export default api;