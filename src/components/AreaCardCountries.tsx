import { useEffect, useState } from "react";
import * as Styles from "../styles/AreaCardCountries/Styles";
import CardCountry from "./CardCountry";
import { Country } from "../types/Country";
import { GetAllCountry } from "../services/GetAllCountry";
import { GetRegionCountry } from "../services/GetRegionCountry";
import Loader from "./Loader";
import Error from "./Error";

type Props = {
  region: "Africa" | "America" | "Oceania" | "Europe" | "Asia";
  country: string;
};

const AreaCardCountries = ({ region, country }: Props): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const setCountriesInState = async () => {
    if (region) {
      setLoader(true);
      const countries = await GetRegionCountry(region);
      setCountries(countries);
      setLoader(false);
    } else {
      setLoader(true);
      const countries = await GetAllCountry();
      setCountries(countries);
      setLoader(false);
    }
  };
  useEffect(() => {
    setCountriesInState();
  }, [region, country]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : countries.filter(({ name }) =>
          name.common.toLowerCase().includes(country.toLowerCase())
        ).length > 0 ? (
        <Styles.Main>
          {countries
            .filter(({ name }) =>
              name.common.toLowerCase().includes(country.toLowerCase())
            )
            .map(({ flags, name, population, region, capital }, _index) => (
              <CardCountry
                flag={flags.png}
                name={name.common}
                population={population}
                region={region}
                capital={capital}
                key={_index}
              />
            ))}
        </Styles.Main>
      ) : (
        <Error />
      )}
    </>
  );
};

export default AreaCardCountries;
