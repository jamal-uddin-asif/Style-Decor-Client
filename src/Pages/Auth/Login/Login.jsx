import React from 'react';
import Container from '../../../Components/Shared/Container';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router';

const Login = () => {

        const {register, handleSubmit, formState: {errors}} = useForm()

    return (
        <Container>

    <div className="flex justify-center items-center min-h-screen">

        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Welcome Back</h1>
          <form  className="card-body">
            <fieldset className="fieldset">


              <label className="label">Email</label>
              <input type="email" {...register('email',{required:{value:true, message:'Email is required'}})} className="input outline-0 ring-4 ring-blue-900" placeholder="Email" />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}


              <label className="label">Password</label>
              <input type="password" {...register('password', {required: {
                value: true,
                message: 'Password is required'
              }})} className="input outline-0 ring-4 ring-blue-900" placeholder="Password" />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">SignIn</button>
              <p className='font-semibold'>New in Style Decor? <Link className='text-blue-600 link-hover ml-2' to={'/register'}>Create Account</Link></p>
              <SocialLogin></SocialLogin>
            </fieldset>
          </form>
        </div>
  
    </div>
  </Container>
    );
};

export default Login;