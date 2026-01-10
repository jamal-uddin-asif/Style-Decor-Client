import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
const ServiceCard = ({ service }) => {
  const {
    serviceImg,
    serviceName,
    rating,
    category,
    cost,
    shortDescription,
    _id,
  } = service;

  return (
    <div className="p-4 flex flex-col rounded-2xl shadow-2xl">
      <div>
        <img className="h-[200px] w-full object-cover" src={serviceImg} alt="" />
      </div>

      <div className="flex py-3 justify-between">
        <div>
          <h2 className="text-xl font-bold">{serviceName}</h2>
          <p className="text-gray-500">{category}</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <IoIosStar color="orange" />
          </div>
          <div>{rating}/5</div>
        </div>
      </div>

      <div className="space-y-2 ">
        <small className="line-clamp-2 text-gray-500">{shortDescription}</small>
      </div>

      <div className="flex flex-1 py-2 justify-between items-center">
        <div>
          <p className="font-semibold text-gray-600">Per meter</p>
          <span className="text-2xl font-bold">{cost} $</span>
        </div>
        <div>
          <Link to={`/services/${_id}`} className="btn btn-secondary">
            Details
          </Link>

{/* <button
  class="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase  rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
>
  <span class="relative z-20">Details</span>

  <span
    class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
  ></span>

  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
  ></span>
</button> */}

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
