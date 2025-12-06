import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        toast.success("SignIn successful");
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
