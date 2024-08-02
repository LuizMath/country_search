import { Config } from "../types/Config";

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
