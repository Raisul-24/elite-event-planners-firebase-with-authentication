import { Collapse } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
   const [openNav, setOpenNav] = useState(false);
   const { user, logOut } = useContext(AuthContext);
   console.log(user);

   const handleLogOut = () => {
      logOut()
         .then()
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to access this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, LogOut'
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire(
               'LogOut!',
               'success'
            )
         }
      })
   }
   const links = <>
      <li className="block p-1 text-sm  leading-normal text-inherit antialiased"><NavLink to="/">Home</NavLink></li>
      <li className="block p-1 text-sm  leading-normal text-inherit antialiased"><NavLink to="/services">Services</NavLink></li>
      <li className="block p-1 text-sm  leading-normal text-inherit antialiased"><NavLink to="/gallery">Gallery</NavLink></li>
      <li className="block p-1 text-sm  leading-normal text-inherit antialiased"><NavLink to="/about">About Us</NavLink></li>
      <li className="block p-1 text-sm  leading-normal text-inherit antialiased"><NavLink to="/contact">Contact Us</NavLink></li>
   </>
   return (
      <div>
         <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 opacity-95">
            <div className="flex items-center text-gray-900">
               <Link
                  className="mr-4 block cursor-pointer py-1.5 text-xl font-extrabold leading-relaxed text-inherit antialiased"
               >
                  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">EliteEvent</span> Planners
               </Link>
               <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                  {links}
               </ul>

               {
                  user ?
                     <div className="flex items-center">
                        <p className="text-xs font-medium mr-1">{user.email}</p>
                        <button onClick={handleLogOut}
                           className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                           type="button"
                           data-ripple-light="true"
                        >
                           <Link to="/login">Log Out</Link>
                        </button>

                     </div>
                     :
                     <button
                        className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button"
                        data-ripple-light="true"
                     >
                        <Link to="/login">Log In</Link>
                     </button>
               }
               <button
                  className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  data-collapse-target="sticky-navar" onClick={() => setOpenNav(!openNav)}
               >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                     {openNav ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           className="h-6 w-6"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     ) : (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        </svg>
                     )}
                  </span>
               </button>
            </div>
            <Collapse open={openNav}>
               <div className="container mx-auto">
                  <ul className="mt-2 mb-4 flex flex-col gap-2 pb-1 text-black">
                     {links}
                     <li>
                        {
                           user ? <button onClick={handleLogOut}>
                              <Link to="">Log Out</Link>
                           </button>
                              :
                              <button>
                                 <Link to="/login">Log In</Link>
                              </button>
                        }
                     </li>
                  </ul>
               </div>
            </Collapse>
         </nav>
         <div className="mx-auto max-w-screen-xl py-12">
            <div className="relative flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

               <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                     <img src="https://i.ibb.co/34rPCtQ/slider2-comptoir-de-la-guirlande-1.jpg"
                        className="h-[32rem] w-full object-cover object-center" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                     <img src="https://i.ibb.co/ZGDPFW5/0418-STD-Social-Gathering-Feature.jpg"
                        className="h-[32rem] w-full object-cover object-center" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                     <img src="https://i.ibb.co/dbymC8W/Eclairageextrieurguirlande1440x850jpg-5e19b476f156f.jpg"
                        className="h-[32rem] w-full object-cover object-center" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                     <img src="https://i.ibb.co/cJzq3Gf/shabby-chic-style-garden.jpg"
                        className="h-[32rem] w-full object-cover object-center" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Navbar;