import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { useAxiosSecure } from '../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const DecoratorsDialog = ({isOpen, setIsOpen, decorators, clickedBooking, bookingRefetch}) => {

  const axiosSecure = useAxiosSecure()

    const handleAssignDecorator = (decorator) =>{
        const assignInfo = {
          decoratorName: decorator.name,
          decoratorEmail: decorator.email,
          decoratorPhoto: decorator.photo,
          decoratorId: decorator._id,
          trackingId: clickedBooking.trackingId,
        }

        // console.log({assignInfo, clickedBooking})
        axiosSecure.patch(`/bookings/${clickedBooking._id}`, assignInfo)
        .then(data=>{
          // console.log(data)
          bookingRefetch()
          setIsOpen(false)
          toast.success("Decorator Assigned")
        })
    }

    return (
        <div>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-xl bg-gray-100 shadow-2xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium ">
                Assign Decorator!
              </DialogTitle>
         <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-5">No.</th>
              <th>Name</th>
              <th className="">Email</th>
          
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {decorators.map((user, i) => (
              <tr key={i} className="">
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
         
                <td>
                <button onClick={()=>handleAssignDecorator(user)} className='btn btn-secondary'>Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
              <div className="mt-4 flex justify-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                >
                 Close
                </Button>
               </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
        </div>
    );
};

export default DecoratorsDialog;