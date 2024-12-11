import { useState } from "react";
import axois from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const navigate = useNavigate()
  const [data, setdata] = useState({});


  
  const handleSubmit = async(e)=>{
    
    
       e.preventDefault(); 
       try {
        const datas = await axois.post("http://localhost:5000/api/auth/signup",data);
         
        if(datas.status === 200){
          toast.success(datas.data.message)
          setdata({})
          setTimeout(()=>{
            navigate("/Home")
          },2000)
        }


       } catch (error) {
        console.log(error);
        
        toast.error(error.response.data.message)
        
       }
  }
  const handlechange = (e) => {
    setdata(() => ({ ...data, [e.target.id]: e.target.value }));
  };

  console.log(data);

  return (
    <div className="min-h-[89vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={handlechange}
              value={data.username}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={handlechange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={handlechange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Signup;
