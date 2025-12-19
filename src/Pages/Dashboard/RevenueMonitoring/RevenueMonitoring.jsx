import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import Heading from "../../../Components/Shared/Heading";

const RevenueMonitoring = () => {
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [] } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axiosSecure("/revenue");
      return res.data;
    },
  });

  const sumOfbookingsCost = () => {
    let sum = 0;
    for (const booking of bookings) {
      sum = sum + booking.cost;
    }
    return sum;
  };

  return (
    <div className="p-3">
        <Heading className={'mb-5 rounded-2xl'} Heading={'Revenue Monitoring'}></Heading>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" text-center bg-white shadow-2xl rounded-2xl p-15">
          <h2 className="text-2xl font-semibold">Paid bookings</h2>
          <h2 className="text-4xl font-semibold ">{bookings.length}</h2>
        </div>
        <div className="text-center bg-white shadow-2xl rounded-2xl p-15">
          <h2 className="text-2xl font-semibold">Total Earn</h2>
          <h2 className="text-4xl font-semibold ">$ {sumOfbookingsCost()}</h2>
        </div>
      </div>
    </div>
  );
};

export default RevenueMonitoring;
