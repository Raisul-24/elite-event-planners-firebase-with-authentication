// import React from 'react';

import { useContext, useState } from "react";
import NavbarTop from "../Header/NavbarTop";
import { AuthContext } from "../Firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const { googleSignIn, githubSignIn, logInEmail } = useContext(AuthContext);
   // console.log(user);

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   console.log('location:', location);
   console.log('location.state:', location.state);
   console.log('location.state.from:', location.state?.from);
   console.log('location.state.from.pathname:', location.state?.from?.pathname);
   console.log('from:', from);


   const handleGoogleSignIn = () => {
      // e.preventDefault()
      // console.log("login")
      googleSignIn()
      .then(result => {
         console.log(result.user);
         Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login with Google Successfully!!',
            showConfirmButton: false,
            timer: 1500
         })
         navigate(from, { replace: true });
      })
   }
   const handleGithubSignIn = () => {
      githubSignIn().then(result => {
         const credential = GithubAuthProvider.credentialFromResult(result);
         // eslint-disable-next-line no-unused-vars
         const token = credential.accessToken;
         Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login with Github Successfully!!',
            showConfirmButton: false,
            timer: 1500
         })
         // console.log(result.user);

         navigate(from, { replace: true });
      })
   }
   const handleLogIn = (e) => {
      e.preventDefault();

      setError('');
      if (email, password) {
         console.log("login")
         logInEmail(email, password)
            .then(result => {
               console.log(result.user);
               Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Login Successfully!!',
                  showConfirmButton: false,
                  timer: 1500
               })
               navigate(from, { replace: true });
            })
            .catch(error => {
               const errorMessage = error.message;
               console.log(errorMessage)
               setError(errorMessage);
            })
      }
   }
   return (
      <div className=" mb-10 md:mb-20 ">
         <NavbarTop></NavbarTop>
         <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-24">
            <form >
               {error && Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: error
                })}
               <div className="form-control">
                  <div className="text-black text-center mb-8">
                     <h2 className="text-3xl font-bold border-b-2 pb-5">Login your account</h2>
                  </div>
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Email address</span>
                  </label>
                  <input type="email"
                     onChange={e => setEmail(e.target.value)}
                     name="email"
                     placeholder="Enter your email address"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Password</span>
                  </label>
                  <input type="password"
                     onChange={e => setPassword(e.target.value)}
                     name="password"
                     placeholder="Enter your password"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control mt-6">
                  <input onClick={handleLogIn}
                     type="submit" value="Login" className="btn text-white bg-black" />
               </div>
               <div className="my-5">
                  <h2 className="text-lg text-center font-medium mb-4">Or, Sign up with</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-5 items-center">
                     <div className="flex items-center btn btn-outline btn-info" onClick={handleGoogleSignIn}>
                        <FcGoogle className="text-xl"></FcGoogle>
                        <h2 className="font-semibold text-green-950">Continue with Google</h2>
                     </div>
                     <div className="flex items-center btn btn-outline btn-info" onClick={handleGithubSignIn}>
                        <FaGithub className="text-xl text-black"></FaGithub>
                        <h2 className="font-semibold text-green-950">Continue with Github</h2>
                     </div>

                  </div>
               </div>
               <p className="mt-6 flex justify-center  text-sm font-light leading-normal text-inherit antialiased">
                  Do not have an account?
                  <Link
                     to="/register"
                     className="ml-1 block  text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Register
                  </Link>
               </p>
            </form>
         </div>

      </div>
   );
};

export default Login;