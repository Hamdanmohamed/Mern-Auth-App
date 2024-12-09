import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// src/Login.jsx
function Login() {
    const navigate = useNavigate()
    const [data,setData] = useState({})

    const handlechangedata = (e) => {
      setData(()=>(
        {...data,[e.target.id]:e.target.value}
      ))
    }

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {

        const datas = await axios.post("http://localhost:5000/api/auth/signin",data)
        console.log(datas);
        
        if(datas.status === 200) {
          toast.success(datas.data.message)
          setTimeout(() => {
            navigate("/Home")
          },2000);
        }
        
      } catch (error) {
        
      }
    }

    return (
      <div className="min-h-[89vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <ToastContainer autoClose={2000}/>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Log In to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
onChange={handlechangedata}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handlechangedata}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Login;
  