import { Country } from "../types/Country";
import { instance } from "../utils/Config";

export const GetAllCountryCode = async (codeCca3: string) => {
  const response = await instance.get(`alpha/${codeCca3}`);
  return response.data as Country[];
};
