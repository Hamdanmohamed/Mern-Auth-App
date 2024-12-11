import { useDispatch } from "react-redux";
import { clearUser } from "../redux/slices/userslice";
import { toast ,ToastContainer} from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser()); // Clear user data from Redux
    toast.success("Logged out successfully");
    navigate("/Login");
  };

  return (
   <>
    <header className="flex justify-between items-center p-8 bg-gray-800 text-white">
      <div>
        <h1 className="text-3xl font-bold font-mono">MERN Auth Application</h1>
      </div>
      <div className="flex gap-7">
        <Link className="font-mono text-2xl capitalize" to={"/Home"}>home</Link>  
        <Link className="font-mono text-2xl capitalize" to={"/about"}>about</Link>  
        
        <button onClick={handleLogout} className="bg-white text-black px-4 py-2 rounded">
      Logout
           </button>
           </div>
        </header>
   
    <ToastContainer/>
    </>
  );
}

export default Logout;