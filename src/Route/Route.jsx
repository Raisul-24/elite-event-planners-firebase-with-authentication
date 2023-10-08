import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";


const Route = () => {
   return (
      <div className="font-poppins bg-white">
         <Outlet></Outlet>
         <Footer></Footer>

      </div>
   );
};

export default Route;