
import Navbar from "../Components/Header/Navbar";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import AllServices from "../Components/AllServices";
import Marquee from "react-fast-marquee";

const Home = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div className="bg-white">
         <Navbar></Navbar>
         <h2 className="text-2xl text-center font-semibold text-green-600 my-5">{"Some of our Event's Decoration"}</h2>
         <div className="border-2 py-4 px-2 bg-gray-100 rounded-xl ">
            
               <div className="flex justify-between">
                  <Marquee pauseOnHover={true} speed={100} className="mx-4 md:mx-10 lg:mx-20">

                     <img src="https://i.ibb.co/PhS3YD5/maxresdefault.jpg" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                     <img src="https://i.ibb.co/p3H98xw/81-I1kn-Vs-PMS-AC-SL1500-1.jpg" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                     <img src="https://i.ibb.co/1ZV9mwd/hd13.jpg" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                     <img src="https://i.ibb.co/KLWjwrW/Blog-Cover-Pic-7.jpg" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                     <img src="https://i.ibb.co/WPSm1dP/1641824439-large.jpg" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                     <img src="https://i.ibb.co/H7WmB4z/1676975773-anniversary-10.webp" alt="" className="w-64 h-36 mr-6 rounded-xl" />
                  </Marquee>
               </div>
            </div>
         <div>
            <AllServices></AllServices>
         </div>
         <div className="">
            
         </div>
      </div>
   );
};

export default Home;