import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();
   const googleSignIn =() =>{
     return signInWithPopup(auth,googleProvider);
   }
   const githubSignIn =() =>{
      return signInWithPopup(auth,githubProvider);
   }
   const signUp =(email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
   }
   const logInEmail = (email,password) =>{
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = () =>{
      return signOut(auth);
   }
   useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         console.log("State Changes")
         setUser(currentUser);
      })
      return (() => {
         return unsubscribe();
      })
   },[])
   const AuthInfo ={
      googleSignIn,
      githubSignIn,
      signUp,
      logInEmail,
      user,
      logOut,
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;