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
      <div>
         <NavbarTop></NavbarTop>
         show Details {service.id}
         <p>{service.category}</p>
         <p>{service.detail_description}</p>
         {service.short_description}
         {service.title}
         {
            service.best_opinion
         }
         {service.features[0]}
      </div>
   );
};

export default ShowDetails;