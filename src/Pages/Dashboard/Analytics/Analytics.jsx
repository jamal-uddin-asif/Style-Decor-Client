import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import { FaChartBar } from "react-icons/fa";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["service-demand"],
    queryFn: async () => {
      const res = await axiosSecure("/service-demand");
      return res.data;
    },
  });

  // console.log(data);
  return (
    <div className="p-2">
      <div className="md:grid  space-y-4 grid-cols-2 shadow-xl p-2  md:p-5 bg-white">
        <div className=" ">
        <h1 className="text-2xl  font-bold flex items-center gap-2">
          <IoMdAnalytics size={40} color="green" />
          Service Demand{" "}
        </h1>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
            margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
          >
            <Pie
              data={data}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              fill="#8884d8"
              isAnimationActive={true}
            />
            <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
        </div>
        <div>
              <h1 className="text-2xl mb-5 font-bold flex items-center gap-2">
          <FaChartBar  size={40} color="green" />
          Number of services booked by users{" "}
        </h1>
        <div className="flex justify-center items-center">
            <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="_id" />
    <YAxis width="count" />
    <Tooltip />
    <Legend />
    <Bar dataKey="count" fill="#8884d8" isAnimationActive={true} />
  </BarChart>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
