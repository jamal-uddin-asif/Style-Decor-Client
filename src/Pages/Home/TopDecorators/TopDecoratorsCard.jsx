import React from 'react';
import Container from '../../../Components/Shared/Container';
import { FaBorderStyle } from "react-icons/fa";
import { FcRating } from 'react-icons/fc';
const TopDecoratorsCard = ({decorator}) => {
    return (
     <Container>

        <div>
             <div className="bg-white py-10 shadow-md rounded-2xl md:p-6 p-2 max-w-sm ">
      {/* Quote Icon */}
      {/* <FaQuoteLeft className="text-cyan-300 text-3xl mb-4" /> */}

      {/* Message */}
      <p className="text-gray-600 mb-6"><FaBorderStyle size={40} color='green'/></p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Circle Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-cyan-900">
          <img className="rounded-full" src={decorator.photo} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-xl  md:text-3xl text-cyan-900">{decorator.name}</h3>
          <p className="text-gray-500  md:text-xl">{decorator.email}</p>
          <p className="text-gray-500 text-sm flex items-center gap-1"> <FcRating size={20}></FcRating>5/5</p>
        </div>
      </div>
    </div>
        </div>
        </Container>
    );
};

export default TopDecoratorsCard;