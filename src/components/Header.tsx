import { useContext } from "react";
import * as Styles from "../styles/Header/Styles";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import { DefaultTheme, ThemeContext } from "styled-components";
import { moonDark, moonLight } from "../export/Icon";
const Header = (): JSX.Element => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ToggleThemeContext);
  const themeContext = useContext(ThemeContext) as DefaultTheme;
  return (
    <Styles.Header>
      <Styles.SubHeader>
        <Styles.Title>Where in the world?</Styles.Title>
        <Styles.Mode onClick={() => setIsDarkTheme(!isDarkTheme)}>
          <Styles.Icon
            src={themeContext.theme === "light" ? moonLight : moonDark}
          />
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </Styles.Mode>
      </Styles.SubHeader>
    </Styles.Header>
  );
};

export default Header;
