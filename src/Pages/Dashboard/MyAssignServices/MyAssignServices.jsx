import React from "react";
import Heading from "../../../Components/Shared/Heading";
import Container from "../../../Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { TiTick } from "react-icons/ti";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import Swal from "sweetalert2";

const MyAssignServices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["assigned services", user.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `bookings/decorator-assigned?email=${user.email}`
      );
      return res.data;
    },
  });

  const handleUpdateStatus = (service, status) => {
    Swal.fire({
      title: "You Want to do that?",
      text: "Your action will change service status",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateInfo = {
          status: status,
          trackingId: service.trackingId
        }

        axiosSecure
          .patch(`/bookings/${service._id}/Update-service-status`, updateInfo)
          .then((data) => {
              // console.log(data.data);
              
              refetch();
            // Swal.fire({
            //   title: "Yes!",
            //   text: "Your Confirmation has been successful",
            //   icon: "success",
            // });
          });
      }
    });
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      {/* <Heading className={'my-10'} Heading="My Assigned Service" sub_heading={'Track, manage, and complete your decoration service assignments easily.'}></Heading> */}
    
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="w-5">#</th>
                <th className="">Service</th>
                <th>Cost</th>
                <th>Location</th>
                <th>Service Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={service.serviceImg}
                            alt={service.serviceName}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.serviceName}</div>
                        <div className="text-sm opacity-50">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{service.cost}</td>
                  <td>{service.customerLocation}</td>
                  <td className={service.serviceStatus === 'Completed' && 'text-green-600 font-semibold'}>{service.serviceStatus}</td>
                  <th>
                    {service.serviceStatus === "Assigned" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(service, "Planning Phase")
                        }
                        className="btn btn-ghost btn-xs bg-blue-300 text-white"
                      >
                        <TiTick />
                        Accept
                      </button>
                    )}
                    {service.serviceStatus === "Planning Phase" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(service, "Materials Prepared")
                        }
                        className="btn btn-ghost btn-xs bg-blue-300 text-white"
                      >
                        Materials Prepared
                      </button>
                    )}
                    {service.serviceStatus === "Materials Prepared" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(service, "On the Way to Venue")
                        }
                        className="btn btn-ghost btn-xs bg-blue-300 text-white"
                      >
                        On the Way to Venue
                      </button>
                    )}
                    {service.serviceStatus === "On the Way to Venue" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(service, "Setup in Progress")
                        }
                        className="btn btn-ghost btn-xs bg-blue-300 text-white"
                      >
                        Setup in Progress
                      </button>
                    )}
                    {service.serviceStatus === "Setup in Progress" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(service, "Completed")
                        }
                        className="btn btn-ghost btn-xs bg-green-400 text-white"
                      >
                      Completed
                        <TiTick />
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MyAssignServices;
