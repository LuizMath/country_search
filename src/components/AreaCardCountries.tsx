import { useEffect, useState } from "react";
import * as Styles from "../styles/AreaCardCountries/Styles";
import CardCountry from "./CardCountry";
import { Country } from "../types/Country";
import { getAllCountry } from "../services/GetAllCountry";
import { getRegionCountry } from "../services/GetRegionCountry";
import Loader from "./Loader";

type Props = {
  region: "Africa" | "America" | "Oceania" | "Europe" | "Asia";
  country: string;
};

const AreaCardCountries = ({ region, country }: Props): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const discao = "peladicão e chiluiu";
  const setCountriesInState = async () => {
    if (region) {
      setLoader(true);
      const countries = await getRegionCountry(region);
      setCountries(countries);
      setLoader(false);
    } else {
      setLoader(true);
      const countries = await getAllCountry();
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
        <p>Não Há um pais com esse nome!</p>
      )}
    </>
  );
};

export default AreaCardCountries;
