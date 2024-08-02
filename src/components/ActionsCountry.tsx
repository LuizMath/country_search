import { ChangeEvent } from "react";
import * as Styles from "../styles/ActionsCountry/Styles";

type Props = {
  setRegion: (
    region: "Africa" | "America" | "Oceania" | "Europe" | "Asia"
  ) => void;
  setCountry: (country: string) => void;
};

const ActionsCountry = ({ setRegion, setCountry }: Props) => {
  const ActionsSelect = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ] satisfies string[];
  return (
    <Styles.SectionAction>
      <Styles.InputAction
        onChange={(input: ChangeEvent<HTMLInputElement>) =>
          setCountry(input.target.value)
        }
      />
      <Styles.SelectAction
        onChange={(select: ChangeEvent<HTMLSelectElement>) =>
          setRegion(
            select.target.value as
              | "Africa"
              | "America"
              | "Oceania"
              | "Europe"
              | "Asia"
          )
        }
      >
        {ActionsSelect.map((value, _index) => (
          <Styles.OptionAction key={_index} value={value}>
            {value}
          </Styles.OptionAction>
        ))}
      </Styles.SelectAction>
    </Styles.SectionAction>
  );
};

export default ActionsCountry;
