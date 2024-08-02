import { Country } from "../types/Country";
import { BASE_URL, requestConfig } from "../utils/Config";

export const getRegionCountry = async (
  region: "Africa" | "America" | "Oceania" | "Europe" | "Asia"
) => {
  const url = `${BASE_URL}region/${region.toLowerCase()}`;
  const response = await fetch(url, requestConfig("GET"));
  const data = (await response.json()) as Country[];
  return data;
};