import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import register from '../../assets/register.json'

const Register = () => {

  const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 my-8 md:my-12">
      <div className="w-1/3">
        <Lottie animationData={register} loop={true} />
      </div>

      <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-2/3">
        <div className="card-body">
          <h1 className="text-4xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <Link to={"/login"} className="link link-hover">
                Already have an account?
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
