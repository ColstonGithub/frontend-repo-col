import axios from "axios";
// import { LOGIN } from "Routes/Routes";
import { setItem } from "./commonService";

const axiosInstance = axios.create({
  baseURL: "https://colstonconcepts.com:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;