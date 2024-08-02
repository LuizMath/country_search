import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ToggleTheme = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

const ToggleThemeContext = createContext<ToggleTheme>({} as ToggleTheme);

const ToggleThemeContextProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const Theme = {
    isDarkTheme,
    setIsDarkTheme,
  };
  return (
    <ToggleThemeContext.Provider value={Theme}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export { ToggleThemeContext, ToggleThemeContextProvider };
