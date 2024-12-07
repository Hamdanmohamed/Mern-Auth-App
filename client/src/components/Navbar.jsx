import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleButton = () => {
    // setIsLogin(()=>(!isLogin)); 
    setIsLogin(!isLogin); 
  };

  return (
    <header className="flex justify-between items-center p-8 bg-gray-800 text-white">
      <div>
        <h1 className="text-3xl font-bold font-mono">MERN Auth Application</h1>
      </div>
      <div className="flex gap-7">
        <Link className="font-mono text-2xl capitalize" to={"/Home"}>home</Link>
        <Link className="font-mono text-2xl capitalize" to={"/about"}>about</Link>
        <Link
          className="bg-white text-black px-4 py-2 rounded"
          to={isLogin ? "/Login" : "/"}
          onClick={toggleButton}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </Link>
      </div>
    </header>
  );
}
