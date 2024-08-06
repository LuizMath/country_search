import { useEffect, useState } from "react";
import * as Styles from "../styles/InformationsIndividualCountry/Styles";
import BordersCountry from "./BordersCountry";

type Props = {
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: string;
  languages: object;
  name: string;
  borders: string[];
};

const InformationsIndividualCountry = ({
  region,
  subRegion,
  capital,
  currencies,
  topLevelDomain,
  languages,
  nativeName,
  population,
  name,
  borders,
}: Props) => {
  const [languagesArr, setLanguagesArr] = useState<string[]>([]);
  useEffect(() => {
    setLanguagesArr(Object.values(languages));
  }, [languages]);
  return (
    <Styles.MainSection $borders={borders ? true : false}>
      <Styles.TitleName>{name}</Styles.TitleName>
      <Styles.ListInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Native Name:</Styles.TitleInformation>
          {nativeName}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Top Level Domain:</Styles.TitleInformation>
          {topLevelDomain}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Population:</Styles.TitleInformation>
          {population.toLocaleString()}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Currencies:</Styles.TitleInformation>
          {currencies}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Region:</Styles.TitleInformation> {region}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Languages:</Styles.TitleInformation>
          {languagesArr
            .filter((language) => languagesArr.indexOf(language) < 3)
            .map((language) => language)
            .toLocaleString()}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Sub Region:</Styles.TitleInformation>
          {subRegion}
        </Styles.ItemInformation>
        <Styles.ItemInformation>
          <Styles.TitleInformation>Capital:</Styles.TitleInformation>{" "}
          {capital.toLocaleString()}
        </Styles.ItemInformation>
      </Styles.ListInformation>
      <BordersCountry borders={borders ? borders : null} />
    </Styles.MainSection>
  );
};

export default InformationsIndividualCountry;
