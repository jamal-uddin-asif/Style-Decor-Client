import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { FcLikePlaceholder } from "react-icons/fc";
const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [searchParams] = useSearchParams()
    const session_id = searchParams.get("session_id")
    const navigate = useNavigate()
    
     useEffect(()=>{
        axiosSecure.patch(`/payment-success?sessionId=${session_id}`)
        .then(data=>{
            // console.log(data.data)
        })
    },[axiosSecure,session_id])

    return (
        <div className='min-h-screen space-y-3  flex justify-center items-center text-center'>
            <div className='shadow-2xl rounded-2xl p-10 md:p-20'>
                <h1 className="text-3xl font-bold text-green-600">Payment successful</h1>
                <p className='font-semibold text-sm'> Wait for Decorator assign</p>
                <p  className='font-semibold text-sm'>Thank you</p>
                <button onClick={()=>navigate('/dashboard/myBookings')} className="btn btn-secondary mt-2">Back</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;