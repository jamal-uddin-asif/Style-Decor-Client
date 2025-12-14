import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import { FaStar } from "react-icons/fa";
import { MdCancel, MdDriveFileRenameOutline } from "react-icons/md";
import Swal from "sweetalert2";
import ManageServicesModal from "./ManageServicesModal";

const ManageServices = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [clickedService, setClickedService] = useState({})

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: services = [], isLoading , refetch} = useQuery({
    queryKey: ["services", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/manage-services?email=${user.email}`);
      return res.data;
    },
  });

  const handleDeleteService = (service) =>{
      Swal.fire({
          title: "Are you want to delete your service?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/services/${service._id}`).then((data) => {
              console.log(data.data);
              refetch()
              Swal.fire({
                title: "Your Service has been Deleted",
                text: "Your Service has been deleted.",
                icon: "success",
              });
            });
          }
        });
  }

  const handleEditService = (service) =>{
    console.log(service)
    setClickedService(service)
    setIsOpen(true)

  }

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Cost</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={i}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-15 w-20">
                        <img
                          src={service.serviceImg}
                          alt={service?.serviceName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>{service.cost}</td>
                <td>{service.category}</td>
                <td>
                  <span className="badge badge-dash">
                    {service.rating} <FaStar color="yellow" />
                  </span>
                </td>
                <td className="flex items-center gap-2">
                  <button onClick={()=>handleEditService(service)}>
                    {" "}
                    <MdDriveFileRenameOutline size={30} />
                  </button>
                  <button onClick={() => handleDeleteService(service)}>
                    {" "}
                    <MdCancel size={26} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            <ManageServicesModal service={clickedService} isOpen={isOpen} setIsOpen={setIsOpen}></ManageServicesModal>
      </div>
    </div>
  );
};

export default ManageServices;
