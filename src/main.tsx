import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToggleThemeContextProvider } from "./context/ToggleThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToggleThemeContextProvider>
      <App />
    </ToggleThemeContextProvider>
  </StrictMode>
);
