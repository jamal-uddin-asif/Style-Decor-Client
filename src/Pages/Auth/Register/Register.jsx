import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hooks/useAuth";
import Container from "../../../Components/Shared/Container";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const Register = () => {
    const {createUser, updateUserProfile} = useAuth()
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const navigate = useNavigate()

  
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleRegister = data =>{
       
      createUser(data.email, data.password)
      .then(result=>{
        // console.log(result)
        toast.success("Account Created successfully")

        const photo = data.photo[0];
        const formData = new FormData()
        formData.append('image', photo)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API_KEY}`, formData)
        .then(res=>{
          const photo = res.data.data.url
          const profileUpdateInfo = {
            displayName: data.name,
            photoURL: photo
          }
        
          // save user in the database 
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: photo
          }
          axiosSecure.post('/users', userInfo)
          .then(result =>{
            // console.log(result)
          })
          .catch(err=>{
            console.log(err)
          })
           
          updateUserProfile(profileUpdateInfo)
          .then(()=>{
            // console.log('Profile updated')
            navigate(location.state || '/')
          })
          .catch(err=>{
            // console.log(err)
          })


        })
        .catch(err=>{
          // console.log(err)
        })


      })
      .catch(err=>{
        console.log(err)
        toast.error(err.code)
      })


    }
  return (
  <Container>

    <div className="flex justify-center items-center min-h-screen">

        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-secondary">Create Account</h1>
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
              <button className="btn btn-secondary mt-4">Create Account</button>
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
