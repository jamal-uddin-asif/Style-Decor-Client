import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import { Link } from "react-router";
import { Button } from "@headlessui/react";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [totalHistory, setTotalHistory] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const limit = 5

    useEffect(() => {
      axiosSecure(`/bookings/payment-history/count?email=${user.email}`).then((data) => {
        setTotalHistory(data.data.length);
        const page = Math.ceil(data.data.length / limit);
        setTotalPage(page);
      });
    }, [totalHistory, axiosSecure, user]);

  const { data: payments = [], isLoading: paymentsLoading , } = useQuery({
    queryKey: ["payment-history", user.email, currentPage],
    queryFn: async () => {
      const res = await axiosSecure(`/bookings/${user?.email}/payment-history?limit=${limit}&skip=${currentPage * limit}`);
      return res.data;
    },
  });


  if (paymentsLoading) return <LoadingSpinner></LoadingSpinner>;

  
  return (
    <div>
        {
              payments.length === 0 &&<div className="min-h-screen flex text-2xl justify-center items-center w-full ">
                    <h3>Payments not available</h3>
                </div>
        }
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="shadow-2xl bg-secondary text-white">
              <th></th>
              <th>service</th>
              <th>tracking ID</th>
              <th>Transaction ID</th>
              <th>Cost</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {
              payments.map((payment, i)=>(
            <tr key={i} className="shadow-2xl bg-white ">
              <th>{i+1}</th>
              <td>{payment?.serviceName}</td>
              <td>{payment?.trackingId}</td>
              <td>{payment?.transactionId}</td>
              <td>{payment?.cost}</td>
              <td><Link to={`/dashboard/payment-receipt/${payment?._id}`} className="badge badge-warning">Receipt</Link></td>
            </tr>

                ))
            }
       
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {
            [...Array(totalPage).keys()].map(i=><button onClick={()=>setCurrentPage(i)} className={`btn ${currentPage === i && 'btn-secondary'}`}>{i+1}</button>)
        }
      </div>
    </div>
  );
};

export default PaymentHistory;
