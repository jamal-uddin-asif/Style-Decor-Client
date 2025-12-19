import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { LuDollarSign } from "react-icons/lu";

const EarningsSummary = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: earning = []} = useQuery({
        queryKey: ['earning-summary', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure(`/bookings/${user?.email}/earning-summary`)
            return res.data
        }
    })


    const calculateTotalEarn = () =>{
            let sum = 0;
            earning.forEach(e=>{
                sum = sum + e.cost;
            })
            return sum
    }
  return (
    <div>
      <div className="flex mb-6 justify-center text-2xl md:text-4xl font-semibold py-5">
        <h2>
          {" "}
          Earnings <span className="text-secondary"> Summary</span>
        </h2>
      </div>
      <div className="md:flex justify-center gap-10 ">
        <div className="text-center space-y-3 bg-white shadow-2xl rounded-2xl p-9">
            <h2  className="text-2xl md:text-3xl">Service completed</h2>
            <p className="text-3xl font-semibold text-secondary">{earning.length}</p>
        </div>
        <div className="text-center space-y-3 bg-white  shadow-2xl rounded-2xl p-9">
            <h2 className="text-2xl md:text-3xl">Total earning</h2>
            <p className="text-3xl font-semibold flex items-center justify-center  text-secondary"><LuDollarSign size={30}/>{calculateTotalEarn()}</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;
