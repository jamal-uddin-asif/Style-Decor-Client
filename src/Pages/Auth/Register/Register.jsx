import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hooks/useAuth";
import Container from "../../../Components/Shared/Container";
import { Link } from "react-router";

const Register = () => {
    const authInfo = useAuth()
    console.log(authInfo)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleRegister = data =>{
        console.log(data)


    }
  return (
  <Container>

    <div className="flex justify-center items-center min-h-screen">

        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Create Account</h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <fieldset className="fieldset">

              <label className="label">Name</label>
              <input type="name" {...register('name', {required:{value:true, message:'Name is required'}})} className="input outline-0 ring-4 ring-blue-900" placeholder="Full Name" />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}

              <label className="label">Email</label>
              <input type="email" {...register('email',{required:{value:true, message:'Email is required'}})} className="input outline-0 ring-4 ring-blue-900" placeholder="Email" />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}

              <label className="label">Photo</label>
              <input type="file" {...register('photo', {required:{value:true, message:'Photo is required'}})} className="input  outline-0 ring-4 ring-blue-900" placeholder="Photo" />
              {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}

              <label className="label">Password</label>
              <input type="password" {...register('password', {required: {
                value: true,
                message: 'Password is required'
              }})} className="input outline-0 ring-4 ring-blue-900" placeholder="Password" />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Create Account</button>
                            <p className='font-semibold'>Already have an Style Decor account? <Link className='text-blue-600 link-hover ml-2' to={'/login'}>SignIn</Link></p>

              <SocialLogin></SocialLogin>
            </fieldset>
          </form>
        </div>
  
    </div>
  </Container>
  );
};

export default Register;
