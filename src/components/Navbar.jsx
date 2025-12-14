import React, { use } from "react";
import { Link, NavLink } from "react-router";
import usericon from "../assets/user.png";
import { Authcontext } from "../Provaider/AuthProvaider";

const Navbar = () => {
  const {user,userlogout}=use(Authcontext)
  
  const hendlelogout = ()=>{
    // console.log('logout button click')
   userlogout()
    .then(()=>{
          alert('user log out')
        }).catch((error)=>{
          console.log(error)
        })
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-11 rounded-full" src={`${user? user.photoURL:usericon}`} alt="" />
        {
          user? <button onClick={hendlelogout} className="btn btn-primary px-10">Logout</button>:  <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>
        }
      
      </div>
    </div>
  );
};

export default Navbar;
