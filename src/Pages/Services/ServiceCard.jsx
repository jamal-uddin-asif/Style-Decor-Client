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
          <p className="text-gray-500 ">{category}</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <IoIosStar color="orange" />
          </div>
          <div>{rating}/5</div>
        </div>
      </div>

      <div className="space-y-2 ">
        <small className="line-clamp-2 text-gray-500 dark:text-base-content">{shortDescription}</small>
      </div>

      <div className="flex flex-1 py-2 justify-between items-center">
        <div>
          <p className="font-semibold text-gray-600 dark:text-base-content">Per meter</p>
          <span className="text-2xl font-bold">{cost} $</span>
        </div>
        <div>
          <Link to={`/services/${_id}`} className="btn btn-secondary">
            Details
          </Link>


        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
