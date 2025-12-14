import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../Provaider/AuthProvaider";

const Register = () => {
  const {createuser,setuser,updateprofile}=use(Authcontext);

  const navigate  = useNavigate()

  const hendlesubmit = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({name,photo,email,password})
    createuser(email,password)
    .then(result=>{
      const user= result.user
      // console.log(user)
      updateprofile({displayName:name,photoURL:photo})
      .then(()=>{
        setuser({...user,displayName:name,photoURL:photo})
        navigate('/')
      }).catch(error=>{
        console.log(error)
        setuser(user)
      })
    })
    .catch(error=>{
      console.log(error.message)
      alert(error.message)
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-center font-semibold text-xl">
         Register Your Account
        </h2>
        <form onSubmit={hendlesubmit} className="card-body" action="">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your name</label>
            <input type="text" name="name" className="input" placeholder="Enter your name" />
            {/* photo url */}
            <label className="label">Photo url</label>
            <input type="photo" name="photo" className="input" placeholder="photo url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className="pt-3 font-semibold text-center ">
              Already Have An Account Please?
              <Link className="text-blue-400 underline" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
