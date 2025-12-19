import axios from "axios";

const instance = axios.create({
  baseURL: "https://style-decor-server-lilac.vercel.app",
});

export const useAxiosInstance = () => {

  return instance;
};