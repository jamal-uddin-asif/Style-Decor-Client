import React from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import { Link } from "react-router";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading: paymentsLoading } = useQuery({
    queryKey: ["payment-history", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/bookings/${user?.email}/payment-history`);
      return res.data;
    },
  });
  console.log(payments);

  if (paymentsLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
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
                payments.length === 0 ? <div>
                    <p>Payments not available</p>
                </div>: payments.map((payment, i)=>(
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
    </div>
  );
};

export default PaymentHistory;
