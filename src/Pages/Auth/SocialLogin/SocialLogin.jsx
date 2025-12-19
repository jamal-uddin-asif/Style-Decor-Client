import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosSecure = useAxiosSecure()
  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    googleSignIn()
      .then((res) => {
        // console.log(res.user.displayName, res.user.photoURL, res.user.email);
        toast.success("SignIn successful");
        
            // save user in the database 
          const userInfo = {
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL
          }
          axiosSecure.post('/users', userInfo)
          .then(result =>{
            // console.log(result.data)
            navigate(location.state || '/')
          })
          .catch(err=>{
            console.log(err)
          })

      })
      .catch((err) => {
        toast.success(err.code);
      });
  };
  return (
    <div onClick={handleGoogleSignIn}>
      <p className="text-center font-bold py-4">
        --------------- OR -----------------
      </p>
      <button type="button" className="btn btn-secondary w-full">
        <img
          className="w-7 h-7"
          src="https://img.icons8.com/officel/80/google-logo.png"
          alt="Google btn"
        />
        Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
