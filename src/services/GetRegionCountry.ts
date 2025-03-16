import { Country } from "../types/Country";
import { instance } from "../utils/Config";

export const GetRegionCountry = async (
  region: "Africa" | "America" | "Oceania" | "Europe" | "Asia"
) => {
  const response = await instance.get(`region/${region.toLowerCase()}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data as Country[];
};
