
import { useContext } from 'react';
import NavbarTop from '../Header/NavbarTop';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Register = () => {
   const {signUp} = useContext(AuthContext);
   const [registerError,setRegisterError] = useState(null);
   const [success, setSuccess] = useState('');
   const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name =form.get('name');
      const photo =form.get('photo');
      const email =form.get('email');
      const password =form.get('password');
      console.log(name,photo,email,password);
      // reset
      setRegisterError('');
      setSuccess('');
      // password validation
      if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
         return setRegisterError("Minimum eight characters, at least one letter and one number!");
      }
      signUp(email,password)
      .then(result =>{
         console.log(result.user);
         setSuccess("You have registered Successfully");
      })
      .catch(error =>{
         console.log(error.message);
         setRegisterError(error.message);
      })
   }
   return (
      <div>
         <NavbarTop></NavbarTop>
         <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-24 pb-10">
            <form onSubmit={handleRegister}>
               <div className="form-control">
                  <div className="text-black text-center mb-8">
                     <h2 className="text-3xl font-bold border-b-2 pb-5">Register your account</h2>
                  </div>
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Your Name</span>
                  </label>
                  <input type="text"
                     name="name"
                     placeholder="Enter your name"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Photo URL</span>
                  </label>
                  <input type="text"
                     name="photo"
                     placeholder="Enter your photo URL"
                     className="input input-bordered bg-[#F3F3F3] py-4"/>

                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Email</span>
                  </label>
                  <input type="email"
                     name="email"
                     placeholder="Enter your email address"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Password</span>
                  </label>
                  <input type="password"
                     name="password"
                     placeholder="Enter your password"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control mt-6">
                  <input type="submit" value="Register" className="btn text-white bg-black" />
               </div>
               <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                  Do you have an account?
                  <Link
                     to="/login"
                     className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Login
                  </Link>
               </p>
            </form>
            {
               registerError && Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: registerError
                })
            }
            {
               success &&  Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: success,
                  showConfirmButton: false,
                  timer: 1500
               })
            }
               
         </div>
      </div>
   );
};

export default Register;