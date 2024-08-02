import { Country } from "../types/Country";
import { BASE_URL, requestConfig } from "../utils/Config";

export const getIndividualCountry = async (name: string) => {
  const url = `${BASE_URL}name/${name}`;
  const response = await fetch(url, requestConfig("GET"));
  const data = (await response.json()) as Country[];
  return data;
};
