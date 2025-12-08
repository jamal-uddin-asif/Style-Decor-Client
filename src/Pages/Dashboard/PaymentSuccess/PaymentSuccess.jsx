import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [searchParams] = useSearchParams()
    const session_id = searchParams.get("session_id")
    
     useEffect(()=>{
        axiosSecure.patch(`/payment-success?sessionId=${session_id}`)
        .then(data=>{
            console.log(data.data)
        })
    },[axiosSecure,session_id])

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-green-600">Payment success</h1>
            </div>
        </div>
    );
};

export default PaymentSuccess;