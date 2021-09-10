import {createGlobalStyle} from "styled-components";
import {ThemeInterface} from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.body};
    overflow-x: hidden;
    line-height: 1.8;
    //font-size: 1.1rem;
    font-weight: 300;
    transition: all ${({theme}) => theme.transitionTime};
  }
`
export default GlobalStyle