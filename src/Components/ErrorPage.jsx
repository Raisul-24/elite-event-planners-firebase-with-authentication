import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";


const ErrorPage = () => {
   return (
      <div className="bg-white">

         <div className="flex flex-col justify-center items-center">
         <h2 className="text-3xl text-red-500 font-bold pt-10 ">Page Not Found!!!</h2>
         <button className="btn btn-outline btn-error "><Link to="/">Back to Home</Link></button>
         <img src="https://i.ibb.co/3pkYkyp/photo-2023-10-07-00-37-08.jpg" alt="" />
        
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ErrorPage;