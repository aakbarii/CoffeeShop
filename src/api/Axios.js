import axios from "axios";
// import Cookies from "js-cookie";

export const Axios = axios.create({
  baseURL: "https://abolnoori.ir/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("token");
    // if (token) {
    //   config.headers["x-auth-token"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // ErrorHandler(error);
    return Promise.reject(error);
  }
);
