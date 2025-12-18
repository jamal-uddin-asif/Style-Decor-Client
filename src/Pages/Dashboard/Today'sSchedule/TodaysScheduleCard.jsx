import React from "react";
import { Link } from "react-router";

const TodaysScheduleCard = ({ booking }) => {
  return (
    <div className="bg-white  shadow-2xl p-3 rounded-xl space-y-2 ">
      <div>
        <img className="mx-auto h-[200px] rounded-xl hover:scale-105 transition-all" src={booking.serviceImg} alt={booking?.serviceName} />
      </div>
      <div className="">
        <div>
          <h1 className="text-2xl font-semibold text-center">{booking.serviceName}</h1>
          <p className="text-gray-400 mb-2 text-center">Date: {booking.bookingDate}</p>
        </div>
        <div className="flex justify-center ">
          <Link to={'/dashboard/myAssignedServices'} className="btn btn-secondary ">Go for work</Link>
        </div>
      </div>
    </div>
  );
};

export default TodaysScheduleCard;
