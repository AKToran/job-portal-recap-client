import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Register now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <Link to={'/login'} className="link link-hover">Already have an account? </Link>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
