
import Navbar from "../Components/Header/Navbar";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import AllServices from "../Components/AllServices";

const Home = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div className="bg-white">
         <Navbar></Navbar>
         <div>
            <AllServices></AllServices>
         </div>
      </div>
   );
};

export default Home;