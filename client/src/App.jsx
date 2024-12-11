import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import Logout from "./pages/Logout";


export default function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
