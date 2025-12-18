import React, { useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import Logo from "./Logo";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ClipLoader, FadeLoader } from "react-spinners";

const Navber = () => {
  const { user, LogOutUser, loading } = useAuth();
  const [show, setShow] = useState(false)
console.log(show)
  const links = (
    <>
      <li className="font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      <li className="font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>

      <li className="font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
          to={"/coverage"}
        >
          Coverage
        </NavLink>
      </li>

      <li className="font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
  
    </>
  );

  const handleSignOut = () => {
    try {
      LogOutUser();
      toast.success("SignOut successful");
    } catch (err) {
      toast.error(err.code);
    }
  };

  const handleShowHide = () =>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  return (
    <div className="bg-base-100  shadow-sm">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className=" text-xl">
              <Logo></Logo>
            </div>
          </div>
          {/* <div className="navbar-center ">
      </div> */}
          <div className="navbar-end">
            <ul className=" space-x-8 mx-8 menu-horizontal px-1 hidden lg:flex">
              {links}
            </ul>
            <div>
              {loading ? <div> <ClipLoader /></div>: user ? (
                <img
                 onClick={()=>handleShowHide()}
                  className="rounded-full h-10 w-10"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                onClick={()=>handleShowHide()}
                  className="rounded-full h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000"
                  alt=""
                />
              )}
              <div className={`shadow-2xl ${!show && 'hidden'} p-5 space-y-3 bg-white/50  absolute right-5 top-17 z-50  rounded-xl`}>
                <div>
                  <Link to={'/dashboard'} className="btn btn-secondary"><MdOutlineSpaceDashboard size={22} /> DashBoard</Link>
                </div>
                {user ? (
                  <button className="btn text-white bg-red-500 w-full" onClick={handleSignOut}>
                   <GoSignOut size={22}/> SignOut
                  </button>
                ) : (
                  <Link className="btn btn-secondary w-full" to={"/login"}>
                    SignIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
