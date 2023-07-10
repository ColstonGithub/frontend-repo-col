import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://64.227.150.49/:5000/", // put your base url here
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
