import React from "react";
import PropTypes from "prop-types";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLinkRouter,
} from "./Sidebar.styles";

const Sidebar = ({ handleMenu, isOpen }) => {
  // scroll offset function
  const scrollOffset = (e) => {
    const yCordinate = e.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCordinate + yOffset, behavior: "smooth" });
  };
  //

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={handleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLinkRouter
          to="/#sobre"
          smooth
          onClick={handleMenu}
          scroll={scrollOffset}
        >
          Sobre
        </SidebarLinkRouter>
        <SidebarLinkRouter onClick={handleMenu} to="/trabalhos#top">
          Trabalhos
        </SidebarLinkRouter>
        <SidebarLinkRouter onClick={handleMenu} to="/contato#top">
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
