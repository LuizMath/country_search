import { Country } from "../types/Country";
import { instance } from "../utils/Config";

export const GetAllCountry = async () => {
  const response = await instance.get("all", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data as Country[];
};
