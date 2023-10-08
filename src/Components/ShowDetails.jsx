// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import NavbarTop from "./Header/NavbarTop";


const ShowDetails = () => {
   const services = useLoaderData();
   // console.log(services.length)
   const { id } = useParams();
   const idInt = parseInt(id);
   const service = services.find(service => service.id === idInt);
   //  console.log(service)

   return (
      <div className="text-black pb-10 md:pb-20">
         <NavbarTop></NavbarTop>
         <div className=" container mx-auto pt-10">
            <h2 className="text-3xl font-bold text-center my-5"> {service.category}</h2>
            <h3 className="text-xl font-semibold text-center mb-5">{service.short_description}</h3>
            <div className="carousel w-full">
               <div id="item1" className="carousel-item w-full ">
                  <img src={service.img} className="w-full rounded-2xl h-[60vh]" />
               </div>
               <div id="item2" className="carousel-item w-full">
                  <img src={service.img2} className="w-full rounded-2xl h-[60vh]" />
               </div>
               <div id="item3" className="carousel-item w-full">
                  <img src={service.img3} className="w-full rounded-2xl h-[60vh]" />
               </div>
               <div id="item4" className="carousel-item w-full">
                  <img src={service.img4} className="w-full rounded-2xl h-[60vh]" />
               </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
               <a href="#item1" className="btn btn-xs">1</a>
               <a href="#item2" className="btn btn-xs">2</a>
               <a href="#item3" className="btn btn-xs">3</a>
               <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className="text-left">
               <h1 className="text-xl font-semibold mb-3">{service.title}</h1>
               <h3 className="text-xl font-semibold">Why we are best Choice?</h3>

               <div className="text-lg font-medium">
                  <p># {service.features[0]}</p>
                  <p># {service.features[1]}</p>
                  <p># {service.features[2]}</p>
                  <p># {service.features[3]}</p>
                  <p># {service.features[4]}</p>
                  <p># {service.features[5]}</p>
               </div>
               <h2 className="text-xl font-bold mt-5">Price: {service.price}</h2>
               <p className="text-lg my-6"><span className="font-bold">Details: </span> {service.detail_description}</p>
               <h3><span className="font-bold">Clint Review: </span>{service.best_opinion}</h3>
            </div>

         </div>
      </div>

   );
};

export default ShowDetails;