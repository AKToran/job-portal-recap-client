import Lottie from 'lottie-react';
import React from 'react';
import login from "../../assets/Login.json"

const Login = () => {

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:gap-12 my-8 md:my-12'>
      <div className='w-1/3'>
        <Lottie animationData={login} />
      </div>

      <div className="card bg-base-100 w-2/3 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;