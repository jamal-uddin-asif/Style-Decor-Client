import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import Container from "../../../Components/Shared/Container";
import Heading from "../../../Components/Shared/Heading";
import Swal from "sweetalert2";

const ManageDecorator = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });


  const handleRoleStatus = (user, role) => {
    const updateInfo = {
        role,
    }

    Swal.fire({
  title: "Are you sure?",
  text: "",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes!"
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.patch(`/users/${user._id}` ,updateInfo)
    .then(data=>{
        // console.log(data.data)
        refetch()
        Swal.fire({
          title: "Done",
          text: "",
          icon: "success"
        });
    
    })

  }
});


  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      {/* <Heading className={'my-10 border-b-8 border-red-300 border-t-8'} Heading={'Organize Your Decorator Team'} sub_heading={'Streamline team management with easy controls and smart monitoring.'}></Heading> */}
      <Container>

      <div className="overflow-x-auto p-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-secondary text-white ">
              <th className="w-5">No.</th>
              <th>Name</th>
              <th className="">Email</th>
              <th className="">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, i) => (
              <tr key={i} className="shadow-sm bg-yellow-50/20">
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
                <td ><span className={`${user.role === 'Admin' && 'badge badge-success text-white'} ${user.role === 'Decorator' && 'badge badge-warning'}`}>{user.role}</span></td>
                <td>
                  {
                    user.role !== 'Admin' && <>
                    
                    {user.role === 'User'? (
                      <button onClick={()=>handleRoleStatus(user, 'Decorator')} className="btn btn-ghost btn-xs">
                    <span className="btn btn-secondary">Make Decorator</span>
                  </button>

): (

  <button onClick={()=> handleRoleStatus(user, 'User')} className="btn btn-ghost btn-xs">
                    <span className="btn btn-secondary">Make User</span>
                  </button>
                    )
                    }
                    </>
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Container>
    </div>
  );
};

export default ManageDecorator;
