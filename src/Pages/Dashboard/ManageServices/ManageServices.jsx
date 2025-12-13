import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner';
import { FaStar } from 'react-icons/fa';
import { MdCancel, MdDriveFileRenameOutline } from 'react-icons/md';

const ManageServices = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: services = [], isLoading} = useQuery({
        queryKey: ['services', user.email],
        queryFn: async()=>{
            const res = await axiosSecure(`/manage-services?email=${user.email}`)
            return res.data
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Service</th>
        <th>Cost</th>
        <th>Category</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        services.map((service, i)=>(
             <tr key={i}>
        <th>
     
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" h-15 w-20">
                <img
                  src={service.serviceImg}
                  alt={service?.serviceName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{service?.serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          {service.cost}
         </td>
        <td>{service.category}</td>
        <td>
          <span className='badge badge-dash'>{service.rating} <FaStar color='yellow' /></span>
        </td>
        <td className='flex items-center gap-2'>
            <button >   <MdDriveFileRenameOutline size={30} /></button>
            <button > <MdCancel size={26} color="red" /></button>
        </td>
      </tr>
        ))
      }
     
  
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default ManageServices;