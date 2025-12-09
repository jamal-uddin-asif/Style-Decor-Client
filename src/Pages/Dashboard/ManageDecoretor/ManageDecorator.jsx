import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import Container from "../../../Components/Shared/Container";

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
    axiosSecure.patch(`/users/${user._id}` ,updateInfo)
    .then(data=>{
        console.log(data.data)
        refetch()

    })

  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <Container>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-5">No.</th>
              <th>Name</th>
              <th className="">Email</th>
              <th className="">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
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
                <td>{user.role}</td>
                <td>
                    {user.role === 'User'? (
                  <button onClick={()=>handleRoleStatus(user, 'Decorator')} className="btn btn-ghost btn-xs">
                    <span className="badge badge-outline">Make Decorator</span>
                  </button>

                    ): (

                  <button onClick={()=> handleRoleStatus(user, 'User')} className="btn btn-ghost btn-xs">
                    <span className="badge badge-outline">Make User</span>
                  </button>
                    )
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
