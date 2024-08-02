import { useParams } from "react-router-dom";
import ReturnAndFlag from "../components/ReturnAndFlag";
import { useEffect, useState } from "react";
import { Country } from "../types/Country";
import { getIndividualCountry } from "../services/GetIndividualCountry";
import InformationsIndividualCountry from "../components/InformationsIndividualCountry";
import * as Styles from "../styles/CountryDetail/Styles";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country[]>([]);

  const setCountryInState = async () => {
    const country = await getIndividualCountry(name?.toLowerCase() as string);
    setCountry(country);
  };
  useEffect(() => {
    setCountryInState();
  }, [name]);
  const getOtherInformations = ():
    | {
        nativeName: string;
        currencies: string;
      }
    | undefined => {
    if (country.length !== 0) {
      const nativeNameObj = Object.assign(
        {},
        country.map((c) => c.name.nativeName)
      );
      const valuesNative = Object.values(nativeNameObj[0] || {});
      const currenciesObj = Object.assign(
        {},
        country.map((c) => c.currencies)
      );
      const currenciesValue = Object.values(currenciesObj[0] || {});
      return {
        nativeName: valuesNative[0].common,
        currencies: currenciesValue[0].name,
      };
    }
  };
  return (
    <>
      {country.length !== 0 ? (
        <Styles.MainSection>
          <ReturnAndFlag srcFlag={country[0].flags.png} />
          <InformationsIndividualCountry
            name={country[0].name.common}
            region={country[0].region}
            subRegion={country[0].subregion}
            capital={country[0].capital}
            population={country[0].population}
            nativeName={getOtherInformations()?.nativeName as string}
            currencies={getOtherInformations()?.currencies as string}
            topLevelDomain={country[0].tld}
            languages={country[0].languages}
            borders={country[0].borders}
          />
        </Styles.MainSection>
      ) : null}
    </>
  );
};

export default CountryDetail;
