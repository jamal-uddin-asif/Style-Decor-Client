import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
const ServiceCard = ({ service }) => {
  console.log(service);
  const {
    serviceImg,
    serviceName,
    createdAt,
    rating,
    category,
    cost,
    location,
    creatorName,
    creatorEmail,
  } = service;

  return (
    <div className="p-4 flex flex-col rounded-2xl shadow-2xl">
      <div>
        <img src={serviceImg} alt="" />
      </div>

      <div className="flex py-3 justify-between">
        <div>
          <h2 className="text-2xl font-bold">{serviceName}</h2>
          <p className="text-gray-500">{creatorName}</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <IoIosStar color="orange" />
          </div>
          <div>{rating}/5</div>
        </div>
      </div>

      <div className="space-y-2 ">
        <p className="flex gap-1 items-center">
          <IoLocationSharp size={29} /> {location}{" "}
        </p>

        <p className="flex gap-1 items-center">
          <MdCategory size={29} /> {category}
        </p>

        <p className="flex gap-1 items-center">
          <MdEmail size={29} /> {creatorEmail}
        </p>

      </div>
        <div className="flex flex-1 py-2 justify-between items-center">
          <div>
            <p className="font-semibold text-gray-600">Per meter</p>
            <span className="text-2xl font-bold">{cost} $</span>
          </div>
          <div>
            <Link className="btn btn-secondary">Details</Link>
          </div>
        </div>
    </div>
  );
};

export default ServiceCard;
