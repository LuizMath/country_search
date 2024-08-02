import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box !important;
    };
    html, body, #root {
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme.background};
        transition: ease-in 150ms background;
    }
`;

export default GlobalStyle;
