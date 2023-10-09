// import React from 'react';

import { useLoaderData } from "react-router-dom";
import NavbarTop from "../Components/Header/NavbarTop";
import SingleImage from "../Components/Images/SingleImage";

const Gallery = () => {
   const data = useLoaderData();
   console.log(data);
   return (
      <div>
         <NavbarTop></NavbarTop>
         <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
               {
                  data.map(single =><SingleImage key={single.id} single={single}></SingleImage>)
               }
               
            </div>
         </div>

      </div>
   );
};

export default Gallery;