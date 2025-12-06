import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()


  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile = (profileInfo) =>{
    return updateProfile(auth.currentUser, profileInfo)
  }

  const LogOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })

    return()=>{
      unsubscribe()
    }
  },[]) 


  const authInfo = {
    user, 
    loading,
    createUser,
    signInUser,
    updateUserProfile,
    LogOutUser,
    googleSignIn,

  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
