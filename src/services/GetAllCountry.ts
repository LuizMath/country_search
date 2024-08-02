import { Country } from "../types/Country";
import { BASE_URL, requestConfig } from "../utils/Config";

export const getAllCountry = async () => {
  const url = `${BASE_URL}all`;
  const response = await fetch(url, requestConfig("GET"));
  const data = (await response.json()) as Country[];
  return data;
};
