import { useNavigate } from "react-router-dom";
import * as Styles from "../styles/CardCountry/Styles";
type Props = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};
const CardCountry = ({
  flag,
  name,
  population,
  region,
  capital,
}: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Styles.Card onClick={() => navigate(`/${name}`)}>
      <Styles.Flag src={flag} />
      <Styles.InformationsArea>
        <Styles.NameCountry>{name}</Styles.NameCountry>
        <Styles.OtherInformations>
          <Styles.GroupOtherInformations>
            Population:{" "}
            <Styles.TextInformations>
              {population.toLocaleString()}
            </Styles.TextInformations>
          </Styles.GroupOtherInformations>
          <Styles.GroupOtherInformations>
            Region: <Styles.TextInformations>{region}</Styles.TextInformations>
          </Styles.GroupOtherInformations>
          <Styles.GroupOtherInformations>
            Capital:{" "}
            <Styles.TextInformations>{capital}</Styles.TextInformations>
          </Styles.GroupOtherInformations>
        </Styles.OtherInformations>
      </Styles.InformationsArea>
    </Styles.Card>
  );
};

export default CardCountry;
