import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: role = "User", isLoading: roleLoading } = useQuery({
    queryKey: ["role", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user?.email}/role`);
      return res.data.role;
    },
  });

  return { role, roleLoading };
};
