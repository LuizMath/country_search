import { useContext } from "react";
import * as Styles from "../styles/ReturnAndFlag/Styles";
import { DefaultTheme, ThemeContext } from "styled-components";
import { arrowDark, arrowLight } from "../export/Icon";
import { useNavigate } from "react-router-dom";

type Props = {
  srcFlag: string;
};

const ReturnAndFlag = ({ srcFlag }: Props) => {
  const themeContext = useContext(ThemeContext) as DefaultTheme;
  const navigate = useNavigate();
  return (
    <Styles.MainSection>
      <Styles.BackToHome onClick={() => navigate("/country_search")}>
        <Styles.Icon
          src={themeContext.theme === "light" ? arrowLight : arrowDark}
        />
        Back
      </Styles.BackToHome>
      <Styles.ImgArea>
        <Styles.Flag src={srcFlag} />
      </Styles.ImgArea>
    </Styles.MainSection>
  );
};

export default ReturnAndFlag;
