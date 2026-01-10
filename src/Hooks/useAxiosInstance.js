import axios from "axios";

const instance = axios.create({
  // baseURL: "https://style-decor-server-lilac.vercel.app",
  baseURL: "http://localhost:3000",
});

export const useAxiosInstance = () => {

  return instance;
};