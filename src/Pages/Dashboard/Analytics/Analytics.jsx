import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["service-demand"],
    queryFn: async () => {
      const res = await axiosSecure("/service-demand");
      return res.data;
    },
  });

  console.log(data);
  return (
    <div>
      <div>
        <div className="shadow-xl p-2 max-w-[70%]  md:p-5 bg-white ">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <IoMdAnalytics size={50} color="green" />
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
      </div>
    </div>
  );
};

export default Analytics;
