import React, { useRef, useState } from 'react';
import Container from '../../../Components/Shared/Container';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { IoIosLogIn } from 'react-icons/io';
import { TbMoodHappy } from "react-icons/tb";
import { MdAdminPanelSettings, MdEco } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
const Login = () => {
    const {signInUser, resetPassword} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()


        const {register, handleSubmit, getValues, setValue, formState: {errors}} = useForm()
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
const handleAdmin = () => {
  setValue('email', 'ad@min.com')
  setValue('password', 'ad@min.com')
}

const handleDecorator = () => {
  setValue('email', 'test@3.com')
  setValue('password', 'asdfjk')
}

const handleUser = () => {
  setValue('email', 'us@er.com')
  setValue('password', 'asdfjk')
}


const handleResetPass = () => {
  const email = getValues('email')

  if (!email) {
    toast.error("Please enter your email")
    return
  }

  resetPassword(email)
    .then(() => {
      toast.success("Password reset email sent")
    })
    .catch(err => toast.error(err.code))
}
    return (
        <Container>

    <div className="flex justify-center items-center min-h-screen">

        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className='flex justify-center pt-5'>

          <h1 className="text-3xl font-bold text-center text-secondary flex items-center gap-2 ">Welcome Back <TbMoodHappy size={30} /></h1>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)}  className="card-body">
            <fieldset className="fieldset">


              <label className="label">Email</label>
              <input type="email"  {...register('email',{required:{value:true, message:'Email is required'}})} className="input outline-0  ring-blue-900" placeholder="Email" />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}


              <label className="label">Password</label>
              <input type="password" {...register('password', {required: {
                value: true,
                message: 'Password is required'
              }})} className="input outline-0  ring-blue-900" placeholder="Password" />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              <div>
                <button type='button' onClick={handleResetPass} className="link link-hover">Forgot password?</button>
              </div>
              <div className='my-2'>
                <p className='mb-1 font-semibold'>Login as a </p>
                <div className='flex '>

                <button onClick={handleAdmin} type='button' className='bg-primary dark:text-white font-semibold p-2 mr-2 rounded-sm flex  gap-1 items-center' ><MdAdminPanelSettings />Admin</button>
                <button onClick={handleDecorator} type='button' className='bg-primary dark:text-white font-semibold p-2 mr-2 rounded-sm flex  gap-1 items-center' ><MdEco /> Decorator</button> 
                <button onClick={handleUser} type='button' className='bg-primary dark:text-white font-semibold p-2 mr-2 rounded-sm flex  gap-1 items-center'><FaUser />User</button>
                </div>
              </div>
              <button className="btn btn-secondary mt-4 ">SignIn <IoIosLogIn size={30}  /></button>
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