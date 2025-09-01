import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    overflow-x: hidden;
    line-height: 1.8;
    font-weight: 300;
    transition: all ${({ theme }) => theme.transitionTime};
  }

  h1 {
    font-size: 3rem;
    line-height: initial;
  }
`;

export default GlobalStyle;