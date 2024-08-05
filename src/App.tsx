import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle/Styles";
import Home from "./routes/Home";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme/Theme";
import { useContext } from "react";
import { ToggleThemeContext } from "./context/ToggleThemeContext";
import CountryDetail from "./routes/CountryDetail";
import Header from "./components/Header";

const App = (): JSX.Element => {
  const { isDarkTheme } = useContext(ToggleThemeContext);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/country_search" element={<Home />} />
            <Route path="/country_search/:name" element={<CountryDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
