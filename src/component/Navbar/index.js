import React from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo1,
  Logo2,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkRouter,
  NavLinkScroll,
} from "./Navbar.styles";

const Navbar = ({ scrolled, toggleHome, handleMenu, about }) => {
  return (
    <Nav scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo onClick={toggleHome} to="/">
          <Logo1>3D</Logo1>
          <Logo2 scrolled={scrolled}>CRIATIVA</Logo2>
        </NavLogo>
        <MobileIcon onClick={handleMenu} scrolled={scrolled}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {about ? (
            <NavItem>
              <NavLinkScroll
                to="sobre"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                $scrolled={scrolled}
              >
                Sobre
              </NavLinkScroll>
            </NavItem>
          ) : (
            <></>
          )}
          <NavItem>
            <NavLinkRouter to="/trabalhos" $scrolled={scrolled}>
              Trabalhos
            </NavLinkRouter>
          </NavItem>
          <NavItem>
            <NavLinkRouter to="/contato" $scrolled={scrolled}>
              Contato
            </NavLinkRouter>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  scrolled: PropTypes.bool,
  toggleHome: PropTypes.func,
  handleMenu: PropTypes.func,
  about: PropTypes.bool,
};

export default Navbar;
