import React from "react";
import { MdVerified, MdEmail } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BiTask } from "react-icons/bi";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TopDecoratorsCard = ({ decorator }) => {
    // const {user} = useAuth()
    //   const axiosSecure = useAxiosSecure()
  
    //   const {data: earning = []} = useQuery({
    //       queryKey: ['service-completed', user?.email],
    //       queryFn: async() =>{
    //           const res = await axiosSecure(`/bookings/${user?.email}/earning-summary`)
    //           return res.data
    //       }
    //   })


  return (
    <div className="group  rounded-3xl border border-base-300  shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full relative">
      
    
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Available</span>
      </div>


      <div className="relative h-48 overflow-hidden">
        <img
          src={decorator.photo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          alt={decorator.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
        
  
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1 text-emerald-400 mb-1">
            <MdVerified className="text-sm" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Elite Decorator</span>
          </div>
          <h3 className="font-bold text-xl text-white leading-tight">
            {decorator.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-700 transition-colors group-hover:border-secondary/30">
            <BiTask className="text-white mb-1" size={18} />
            <span className="text-[10px] text-white uppercase font-bold">Services</span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">10+</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-700 transition-colors group-hover:border-orange-300/30">
            <AiFillStar className="text-orange-400 mb-1" size={18} />
            <span className="text-[10px] text-white uppercase font-bold">Rating</span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">5.0/5</span>
          </div>
        </div>

   
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
           <div className="flex items-center gap-2">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <MdEmail className="text-secondary text-sm" />
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                {decorator.email}
              </span>
           </div>
           
        
           <div className="flex items-center gap-1 px-3 py-1 bg-secondary text-white rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">
              <HiOutlineSparkles className="animate-pulse" />
              <span className="text-[10px] font-black uppercase">Top Choice</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TopDecoratorsCard;