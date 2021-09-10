import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import Home from "./views/Home/Home";
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import Jobs from "./views/Jobs";
import Services from "./views/Services";
import Contact from "./views/Contact";

const Main = styled.main`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  > * {
    //width: 100vw;
    //height: calc(100vh - 70px);
   
  }
`;

function App() {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark')
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Navbar theme={theme} setTheme={setTheme}/>
            <Main>
                <Home/>
                <AboutMe/>
                <Skills/>
                {/*<Jobs/>*/}
                {/*<Services/>*/}
                <Contact/>
            </Main>
        </ThemeProvider>
    );
}

export default App;
