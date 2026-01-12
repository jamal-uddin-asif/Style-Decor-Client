import React from "react";
import Container from "../../../Components/Shared/Container";
import { FaBorderStyle } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const TopDecoratorsCard = ({ decorator }) => {
  return (
    <Container>
      <div>
        <div className="bg-secondary text-white  rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <img
            src={decorator.photo}
            className="w-full hover:scale-110 duration-500 transition-all h-48 object-cover"
            alt="Decorator"
          />
          <div className="p-5">
            <div className="flex items-center gap-1 text-emerald-300 text-xs font-bold uppercase mb-2">
              <MdVerified /> Verified Pro
            </div>
            <h3 className="font-bold text-lg ">{decorator.name}</h3>
            <div className="flex justify-between items-center text-orange-200 gap-1 mt-1">
              <div className="text-slate-700 dark:text-white text-sm">{decorator.email}</div>
              <div className="flex ">

              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </Container>
  );
};

export default TopDecoratorsCard;
