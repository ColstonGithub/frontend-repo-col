import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://64.227.150.49:5000/", // put your base url here
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     config.headers["authorization"] = `Bearer ${
//       JSON.parse(localStorage.getItem("Sidebar_Module_Assigned"))?.token
//     }`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     setItem("AUTH_ACCESS_TOKEN", response?.data?.token);
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401 && window.location.pathname !== LANDING_PAGE) {
//       window.localStorage.clear();
//       window.location.replace(LANDING_PAGE);
//       window.location.reload();
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
