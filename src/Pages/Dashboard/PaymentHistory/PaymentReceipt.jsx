import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { CiReceipt } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';

const PaymentReceipt = () => {

    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const {data: receipt= {}} = useQuery({
        queryKey: ['receipt', id], 
        queryFn: async()=>{
            const res = await axiosSecure(`/booking/${id}/payment-receipt`)
            return res.data
        }
    })
    console.log(receipt)

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='p-5'>

                <div>
                    <h2 className='flex items-center gap-1 font-semibold  justify-center text-3xl'>Payment receipt <CiReceipt size={35}/></h2>
                </div>
                <div className='bg-white shadow p-4 space-y-1.5'>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Service Name:</p>
                        <h3>{receipt.serviceName}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Category:</p>
                        <h3>{receipt.category}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Feet:</p>
                        <h3>{receipt.feet}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Payment status:</p>
                        <h3>{receipt.paymentStatus}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Decorator Email:</p>
                        <h3>{receipt.decoratorEmail}</h3>
                    </div>
                    <div className='flex gap-7 justify-between'>
                        <p className='font-semibold'>Tracking ID:</p>
                        <h3>{receipt.trackingId}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Transaction ID:</p>
                        <h3>{receipt.transactionId}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-2xl'>Total Cost:</p>
                        <h3 className='text-2xl font-semibold'>{receipt.cost}</h3>
                    </div>
                </div>
                <div className='flex justify-end'>

                <button onClick={()=>navigate(-1)} className="btn btn-outline"><FaArrowLeft />Back </button>
                </div>

            </div>
        </div>
    );
};

export default PaymentReceipt;