import { Country } from "../types/Country";
import { instance } from "../utils/Config";

export const GetIndividualCountry = async (name: string) => {
  const response = await instance.get(`name/${name}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data as Country[];
};
