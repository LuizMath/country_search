import { Country } from "../types/Country";
import { BASE_URL, requestConfig } from "../utils/Config";

export const getAllCountryArray = async (codeCca3: string) => {
  const url = `${BASE_URL}alpha/${codeCca3}`;
  const response = await fetch(url, requestConfig("GET"));
  const data = (await response.json()) as Country[];
  return data;
};
