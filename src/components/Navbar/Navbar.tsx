import React, {useEffect, useState} from "react";
import styled from "styled-components";
//import {NavLink as Link} from "react-router-dom";
import {FaBars, FaMagento, FaTimes} from "react-icons/fa";
import {FiMoon, FiSun} from "react-icons/fi";
import {Link} from 'react-scroll'
import { useLocation } from 'react-router-dom'

const Header = styled.header`
  height: 70px;
  width: 100vw;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  background: ${({theme}) => theme.navBg};
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

const Nav = styled.nav`
  width: inherit;
  display: flex;
  align-items: center;
  padding: 1rem;

  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const NavMenu = styled.ul<{ open: boolean }>`
  margin-left: auto;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: ${({open}) => (open ? 0 : '-100%')};
  opacity: 1;
  transition: all ${({theme}) => theme.transitionTime} ease;
  background: ${({theme}) => theme.body};

  @media screen and (min-width: 960px) {
    background: inherit;
    width: auto;
    height: auto;
    position: relative;
    align-items: center;
    text-align: center;
    flex-direction: row;
    left: inherit;
    top: 0;
  }
`;

const NavItem = styled.li`
  //width: 100%;
  @media screen and (min-width: 960px) {
    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({theme}) => theme.text};
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.primaryColor};
    transition: all ${({theme}) => theme.transitionTime} ease;
  }

  &.active {
    color: ${({theme}) => theme.primaryColor};
    font-weight: bold;
  }
  
  @media screen and (min-width: 960px) {
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme}) => theme.text}
`;

const LogoIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  color: ${({theme}) => theme.primaryColor};
`;

const MenuIcon = styled.div`
  margin-left: auto;
  display: flex;

  @media screen and (min-width: 960px) {
    display: none;
  }
`
const ModeIcon = styled.div`
  position: absolute;
  display: flex;
  right: 50%;
  transform: translate(50%, 0%);
  cursor: pointer;
  @media screen and (min-width: 960px) {
    position: inherit;
  }

  &:hover {
    color: ${({theme}) => theme.primaryColor};
    transition: all ${({theme}) => theme.transitionTime} ease;
  }
`

const Navbar: React.FC<{ theme: string, setTheme: (e: string) => void }> = ({theme, setTheme}) => {
    const location = useLocation()
    const hideLinks = location.pathname === '/animio/privacy';
    const [open, setOpen] = useState<boolean>(false)
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')
    const openDrawer = () => setOpen(!open)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <Header>
            <Nav>
                <NavLogo to="/">
                    <LogoIcon/>Pablo
                </NavLogo>
                <NavMenu open={open}>
                    {!hideLinks && (
                        <>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    spy={true}
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    onClick={openDrawer}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    spy={true}
                                    to="aboutMe"
                                    smooth={true}
                                    duration={500}
                                    onClick={openDrawer}>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    spy={true}
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    onClick={openDrawer}>Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    spy={true}
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    onClick={openDrawer}>Contact</NavLink>
                            </NavItem>
                        </>
                    )}
                </NavMenu>
                <ModeIcon onClick={toggleTheme}>
                    {theme === 'light' ? <FiMoon size={26}/> : <FiSun size={26}/>}
                </ModeIcon>
                <MenuIcon onClick={openDrawer}>
                    {open ? <FaTimes size={26}/> : <FaBars size={26}/>}
                </MenuIcon>
            </Nav>
        </Header>
    );
}

export default Navbar;

