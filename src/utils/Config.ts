import { Config } from "../types/Config";
import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const requestConfig = (method: string) => {
  let config: Config;
  config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};

export const instance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    window.dispatchEvent(
      new CustomEvent("axios-error", { detail: error.response })
    );
    return Promise.reject(error);
  }
);
