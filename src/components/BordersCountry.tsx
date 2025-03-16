import { useEffect, useState } from "react";
import * as Styles from "../styles/BordersCountry/Styles";
import { GetAllCountryCode } from "../services/GetAllCountryArray";
import { useNavigate } from "react-router-dom";

type Props = {
  borders: string[] | null;
};

const BordersCountry = ({ borders }: Props) => {
  const navigate = useNavigate();
  const [countriesBorder, setCountriesBorder] = useState<string[]>([]);
  const setCountriesBordersInState = async () => {
    if (borders !== null) {
      const countries = await Promise.all(
        borders!
          .filter((border) => borders!.indexOf(border) < 3)
          .map(async (border) => {
            return await GetAllCountryCode(border);
          })
      );
      setCountriesBorder(countries.map((country) => country[0].name.common));
      return;
    }
  };
  useEffect(() => {
    setCountriesBordersInState();
  }, [borders]);
  return (
    <>
      {borders !== null ? (
        <Styles.MainSection>
          <Styles.TitleBorder>Border Countries: </Styles.TitleBorder>
          <Styles.ListBorders>
            {countriesBorder.map((border, _index) => (
              <Styles.ItemBorders
                onClick={() => navigate(`/country_search/${border}`)}
                key={_index}
              >
                {border}
              </Styles.ItemBorders>
            ))}
          </Styles.ListBorders>
        </Styles.MainSection>
      ) : null}
    </>
  );
};

export default BordersCountry;
