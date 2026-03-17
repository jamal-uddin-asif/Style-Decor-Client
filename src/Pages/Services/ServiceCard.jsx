import React from "react";
import { IoIosStar } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { serviceImg, serviceName, rating, category, cost, shortDescription, _id } = service;

  return (
    <div className="group bg-base-100 border border-base-300 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-fit">
      
      <div className="relative h-40 overflow-hidden">
        <img 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={serviceImg} 
          alt={serviceName} 
        />
        <div className="absolute top-2 left-2">
          <span className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm border border-gray-100">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-bold  truncate">
            {serviceName}
          </h2>
          <div className="flex items-center gap-1">
            <IoIosStar className="text-orange-500 text-sm" />
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{rating}</span>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-xs leading-snug line-clamp-2 mb-3">
          {shortDescription}
        </p>

   
        <div className="pt-3 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium leading-none mb-1">Price</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-extrabold  ">${cost}</span>
              <span className="text-gray-400 text-[10px]">/m</span>
            </div>
          </div>

          <Link 
            to={`/services/${_id}`} 
            className="p-2.5 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <HiOutlineArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;