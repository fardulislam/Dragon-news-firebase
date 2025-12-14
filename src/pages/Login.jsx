import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../Provaider/AuthProvaider";

const Login = () => {
  const [error,seterror]=useState('')

  const {signin}=use(Authcontext)
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location)
  const hendlelogin =(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({email,password})
    signin(email,password)
    .then((result)=>{
      console.log(result.user)
      navigate(`${location.state? location.state: '/'}`)
    })
    .catch((error)=>{
      // console.log(error.message)
      seterror(error.message)
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-center font-semibold text-xl">Login Your Account</h2>
        <form onSubmit={hendlelogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            {
              error&&<p className="text-red-400 text-xs">password not match {error}</p>
            }
            <p className="pt-3 font-semibold text-center ">Don't Have An Account Please? <Link className="text-blue-400 underline" to='/auth/register'>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
