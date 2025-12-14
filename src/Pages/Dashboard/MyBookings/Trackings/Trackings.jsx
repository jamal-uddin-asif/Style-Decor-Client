import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import { useAxiosSecure } from '../../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../../Components/Shared/LoadingSpinner';
import Heading from '../../../../Components/Shared/Heading';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

const Trackings = () => {
    const {trackingId} = useParams()
    const axiosSecure = useAxiosSecure()

    const {data: trackings = [], isLoading} = useQuery({
        queryKey: ['trackings', trackingId], 
        queryFn: async()=>{
            const res = await axiosSecure(`/trackings/${trackingId}`)
            return res.data
        }
    })
    console.log(trackings)

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
            <Heading Heading={'Track Your Service'} sub_heading={`Your tracking ID is ${trackingId}`}></Heading>
       
            <div className='space-y-4'>
                {
                    trackings.map((tracking, i)=>(
                <div key={i} className='grid grid-cols-2 shadow-xl py-4 bg-white'>
                    <div className='text-end font-semibold '>{tracking.status}</div>
                    <div className='flex items-center gap-2'><IoCheckmarkDoneCircleSharp size={30} color='green'/> <div className='font-semibold'> {tracking.createdAt}</div></div>
                   
                </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Trackings;