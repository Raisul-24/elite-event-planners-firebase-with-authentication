import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import ServiceCard from "../Components/ServiceCard";

const AllServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   // console.log(services)
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div>
         <div className="container mx-auto">
         <div className="my-10" data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
               <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-center font-extrabold">Our Services</h2>
            </div>
         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
               <div>
                  <h2 className="text-3xl text-left font-extrabold text-fuchsia-500 pt-10">We Provide</h2>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Wedding</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Birthday Parties</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Anniversaries</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Engagement Parties</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom">Retirement Parties</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Baby Showers</h3>
                  <h3 className="md:text-lg lg:text-2xl font-bold text-purple-500 my-20" data-aos="fade-up"
                     data-aos-duration="1000">Any Event We can arrange</h3>
               </div>
               <div className="md:col-span-3 lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5"  data-aos="fade-up">
                     {
                        services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllServices;