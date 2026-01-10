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
        <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <img
            src={decorator.photo}
            className="w-full hover:scale-110 duration-500 transition-all h-48 object-cover"
            alt="Decorator"
          />
          <div className="p-5">
            <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold uppercase mb-2">
              <MdVerified /> Verified Pro
            </div>
            <h3 className="font-bold text-lg text-slate-800">{decorator.name}</h3>
            <div className="flex justify-between items-center text-orange-400 gap-1 mt-1">
              <div className="text-slate-400 text-sm">{decorator.email}</div>
              <div className="flex ">

              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white py-10 shadow-md rounded-2xl md:p-6 p-2  ">
       
          <p className="text-gray-600 mb-6">
            <FaBorderStyle size={40} color="green" />
          </p>

          <div className="border-t border-dashed border-gray-300 my-4"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-900">
              <img className="rounded-full" src={decorator.photo} alt="" />
            </div>

            <div>
              <h3 className="font-semibold text-xl  text-cyan-900">
                {decorator.name}
              </h3>
              <p className="text-gray-500 ">{decorator.email}</p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                {" "}
                <FcRating size={20}></FcRating>5/5
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default TopDecoratorsCard;
