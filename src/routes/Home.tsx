import * as Styles from "../styles/Home/Styles";
import AreaCardCountries from "../components/AreaCardCountries";
import ActionsCountry from "../components/ActionsCountry";
import { useState } from "react";

const Home = () => {
  const [region, setRegion] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const setRegionInState = (
    region: "Africa" | "America" | "Oceania" | "Europe" | "Asia"
  ) => {
    setRegion(region);
  };
  const setCountryInState = (country: string) => {
    setCountry(country);
  };
  return (
    <>
      <Styles.Div>
        <ActionsCountry
          setRegion={setRegionInState}
          setCountry={setCountryInState}
        />
        <AreaCardCountries
          region={
            region as "Africa" | "America" | "Oceania" | "Europe" | "Asia"
          }
          country={country}
        />
      </Styles.Div>
    </>
  );
};

export default Home;
