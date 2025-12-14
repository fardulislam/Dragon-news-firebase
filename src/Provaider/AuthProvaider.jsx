import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const Authcontext = createContext()
const auth = getAuth(app);
const AuthProvaider = ({children}) => {
   const [user,setuser]=useState(null);
   const [loading,setloading]=useState(true)

  //  console.log(loading,user)

  const createuser = (email,password)=>{
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signin =(email,password)=>{
     setloading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateprofile = (updatedata)=>{
    return updateProfile(auth.currentUser,updatedata)
  }

  const userlogout =()=>{
    return signOut(auth)
    
  }

  useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth,(currentuser)=>{
        setuser(currentuser)
        setloading(false)

    })
    return ()=>{
        unsubscrib();
    }
  },[])


   const authdata ={
    user,
    setuser,
    createuser,
    userlogout,
    signin,
    loading,
    setloading,
    updateprofile,
    
   }
   
    return <Authcontext value={authdata}>{children}</Authcontext>
};

export default AuthProvaider;