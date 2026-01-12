import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

const instance = axios.create({
  baseURL: "https://style-decor-server-lilac.vercel.app",
});

export const useAxiosSecure = () => {
  const { user, LogOutUser } = useAuth();
  useEffect(() => {
    const requestInterceptors = instance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `bearer ${user?.accessToken}`;
      }
      return config;
    });

    // response Interceptors
    const responseInterceptors = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const status = error.response.status
        if(status === 401 || status === 403){
          LogOutUser()
          
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptors);
      instance.interceptors.response.eject(responseInterceptors)
    };
  }, [user, LogOutUser]);

  return instance;
};
