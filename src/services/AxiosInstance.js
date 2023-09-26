import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://colstonconcepts.com:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;