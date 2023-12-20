import axios from "axios";
import { store } from "../redux/store";
import { setAuth } from "../redux/userSlice";

axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

axios.interceptors.response.use(function (config) {
  if (config.status === 401 || config.status === 500) {
    store.dispatch(setAuth({ isAuth: false }));
  }

  return config;
});

export default axios;
