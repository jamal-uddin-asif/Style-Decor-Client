import React, { useEffect, useState } from "react";
import { useAxiosInstance } from "../../../Hooks/useAxiosInstance";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

const HeroUsers = () => {
  const axiosInstance = useAxiosInstance();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance("/users").then((data) => {
      setUsers(data.data);
    });
    // users dependency removed to prevent infinite loop
  }, [axiosInstance]);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center">
      
      {/* Top Floating Badge: Satisfied Clients */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        whileHover={{ y: -5 }}
        className="absolute top-10 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl z-20"
      >
        <div className="text-2xl font-bold text-white leading-none">{users?.length}+</div>
        <p className="text-slate-300 text-sm mb-3">Satisfied Clients</p>
        <div className="flex -space-x-3">
          {users.slice(0, 4).map((user, i) => (
            <img
              key={i}
              className="h-10 w-10 rounded-full border-2 border-secondary object-cover"
              src={user?.photo}
              alt="User"
            />
          ))}
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white border-2 border-white">
            ★
          </div>
        </div>
      </motion.div>

      {/* Main Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 -left-5 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl max-w-xs shadow-2xl"
      >
        <div className="bg-secondary w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <IoLocationSharp className="text-white text-2xl" />
        </div>
        <h3 className="font-bold text-white text-xl mb-2">
          Chattogram, Bangladesh
        </h3>
        <p className="text-slate-200 text-sm leading-relaxed">
          Style Decor is dedicated to creating inspiring and meaningful spaces that tell your unique story.
        </p>
        
        {/* Subtle Decorative element */}
        <div className="mt-4 flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className="h-1 w-8 bg-secondary/40 rounded-full"></div>)}
        </div>
      </motion.div>

      {/* Background Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
};

export default HeroUsers;