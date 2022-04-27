import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: process.env.NODE_ENV === "production" ? true : false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  function (error) {
    console.error(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response.status === 401) {
      if (error.config.url === "refresh-token") {
        localStorage.clear();
        window.location.href = "http://localhost:3000/";
        return Promise.reject(error);
      }
      axiosInstance
        .post("refresh-token")
        .then((response) => {
          const accessToken = response.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          const { config } = error;
          config.headers = { Authorization: `Bearer ${accessToken}` };
          config.withCredentials =
            process.env.NODE_ENV === "production" ? true : false;
          return new Promise((resolve) => resolve(axios(config)));
        })
        .catch((error) => {
          console.error("[refresh-token]", error);
          return Promise.reject(error);
        });
    } else {
      // Do something with response error
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
