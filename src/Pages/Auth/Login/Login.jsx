import React from 'react';
import Container from '../../../Components/Shared/Container';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const {signInUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
 

        const {register, handleSubmit, formState: {errors}} = useForm()
  const handleSignIn =async(data)=>{
    try{
     const res = await signInUser(data.email, data.password)
     navigate(location.state || '/')

      toast.success("SignIn successful")
    }
    catch(err){
      console.log(err)
      toast.error(err.code)
    }

  } 


    return (
        <Container>

    <div className="flex justify-center items-center min-h-screen">

        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-secondary">Welcome Back</h1>
          <form onSubmit={handleSubmit(handleSignIn)}  className="card-body">
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
              <button className="btn btn-secondary mt-4 ">SignIn</button>
              <p className='font-semibold'>New in Style Decor? <Link state={location.state} className='text-blue-600 link-hover ml-2' to={'/register'}>Create Account</Link></p>
              <SocialLogin state={location.state}></SocialLogin>
            </fieldset>
          </form>
        </div>
  
    </div>
  </Container>
    );
};

export default Login;