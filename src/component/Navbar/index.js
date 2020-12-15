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
} from "./Navbar.styles";

const Navbar = ({ scrolled, toggleHome, handleMenu }) => {
  // scroll offset function
  const scrollOffset = (e) => {
    const yCordinate = e.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCordinate + yOffset, behavior: "smooth" });
  };
  //

  return (
    <Nav scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo smooth onClick={toggleHome} to="/#">
          <Logo1>3D</Logo1>
          <Logo2 scrolled={scrolled}>CRIATIVA</Logo2>
        </NavLogo>
        <MobileIcon onClick={handleMenu} scrolled={scrolled}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinkRouter
              smooth
              to="/#sobre"
              scroll={scrollOffset}
              $scrolled={scrolled}
            >
              Sobre
            </NavLinkRouter>
          </NavItem>
          <NavItem>
            <NavLinkRouter to="/trabalhos#top" $scrolled={scrolled}>
              Trabalhos
            </NavLinkRouter>
          </NavItem>
          <NavItem>
            <NavLinkRouter to="/contato#top" $scrolled={scrolled}>
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
};

export default Navbar;
