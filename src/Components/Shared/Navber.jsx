import React, { useState, useEffect } from "react";
import Container from "./Container";
import { Link, NavLink, useLocation } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import Logo from "./Logo";
import toast from "react-hot-toast";
import { 
  HiOutlineHome, 
  HiOutlineOfficeBuilding, 
  HiOutlineMap, 
  HiOutlineInformationCircle, 
  HiOutlineMail 
} from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import SwitchMode from "./Swich";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, LogOutUser, loading } = useAuth();
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await LogOutUser();
      toast.success("Signed out successfully");
    } catch (err) {
      toast.error(err.code);
    }
  };

  const links = [
    { name: "Home", path: "/", icon: <HiOutlineHome size={20} /> },
    { name: "Services", path: "/services", icon: <HiOutlineOfficeBuilding size={20} /> },
    { name: "Coverage", path: "/coverage", icon: <HiOutlineMap size={20} /> },
    { name: "About", path: "/about", icon: <HiOutlineInformationCircle size={20} /> },
    { name: "Contact", path: "/contact", icon: <HiOutlineMail size={20} /> },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 dark:bg-base-100/80 backdrop-blur-xl border border-slate-300 dark:border-slate-700 shadow-xl  ">
      <Container>
        <nav className="relative  flex items-center justify-between px-5 py-6 ">
          
          <div className="flex-shrink-0 scale-90 md:scale-100">
            <Logo />
          </div>

          {/* Center: Desktop Links (Icons + Text) */}
          <ul className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={({ isActive }) =>
    `relative flex items-center gap-2 py-2 px-1 transition-all duration-300 font-medium hover:text-secondary ${
      isActive ? "text-secondary" : ""
    }`}>
                  {({ isActive }) => (
                    <>
                      <span className={`${isActive ? "scale-110" : "opacity-70"}`}>{link.icon}</span>
                      <span className="text-sm">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <SwitchMode />
            </div>

            {/* Profile & Dropdown Control */}
            <div className="relative flex items-center gap-2 pl-3 border-l border-slate-200 dark:border-slate-800">
              {loading ? (
                <ClipLoader size={20} color="#E11D48" />
              ) : (
                <button 
                  onClick={() => setShow(!show)}
                  className="flex items-center gap-2 p-1 rounded-full bg-background border border-transparent hover:border-secondary/30 transition-all"
                >
                  <img
                    className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover shadow-inner"
                    src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                    alt="User"
                  />
                  <div className="pr-1 text-slate-500">
                    {show ? <ImMenu3 size={22} className="text-secondary" /> : <ImMenu4 size={22} />}
                  </div>
                </button>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-14 w-64 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-2xl z-[100]"
                  >
                    {/* For Mobile: Menu Links with Icons */}
                    <div className="lg:hidden grid grid-cols-1 gap-1 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                       <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-1">Navigation</p>
                       {links.map(link => (
                         <Link key={link.path} to={link.path} className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-secondary/5 rounded-xl transition-colors text-slate-600 dark:text-slate-300">
                           <span className="text-secondary">{link.icon}</span>
                           {link.name}
                         </Link>
                       ))}
                       <div className="px-3 pt-2 sm:hidden flex items-center justify-between">
                          <span className="text-xs text-slate-400">Appearance</span>
                          <SwitchMode />
                       </div>
                    </div>

                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-1">Account</p>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 w-full text-secondary px-3 py-2.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <MdOutlineSpaceDashboard size={20} className="text-secondary" /> 
                      Dashboard
                    </Link>

                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 w-full px-3 py-2.5 mt-1 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
                      >
                        <GoSignOut size={20} /> 
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="flex items-center gap-3 w-full px-3 py-2.5 mt-1 text-sm font-medium text-secondary hover:bg-secondary/10 rounded-xl transition-colors"
                      >
                        <HiOutlineMail size={20} /> 
                        Sign In
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;