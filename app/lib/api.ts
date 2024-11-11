import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import {
  errorInterceptor,
  requestInterceptor,
  successInterceptor,
} from "./interceptors";
import config from "@/app/config";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: config.apiServer,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };
