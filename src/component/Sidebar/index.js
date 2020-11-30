import React from "react";
import PropTypes from "prop-types";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLinkScroll,
  SidebarLinkRouter,
} from "./Sidebar.styles";

const Sidebar = ({ handleMenu, isOpen, about }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={handleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {
          // if about is true(only true on homepage) then show link
          about ? (
            <SidebarLinkScroll
              to="sobre"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={handleMenu}
            >
              Sobre
            </SidebarLinkScroll>
          ) : (
            <></>
          )
        }
        <SidebarLinkRouter onClick={handleMenu} to="/trabalhos">
          Trabalhos
        </SidebarLinkRouter>
        <SidebarLinkRouter onClick={handleMenu} to="/contato">
          Contato
        </SidebarLinkRouter>
      </SidebarMenu>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  handleMenu: PropTypes.func,
  isOpen: PropTypes.bool,
  about: PropTypes.bool,
};

export default Sidebar;
