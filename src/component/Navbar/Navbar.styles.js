import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { primary, secondary, tertiary } from "../../data";

export const Nav = styled.nav`
  background: ${({ scrolled }) => (scrolled ? secondary : "transparent")};
  height: 80px;
  margin-top: -80px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "rgba(0, 0, 0, 0.24) 0px 3px 8px;" : "0"};
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  display: flex;
  justify-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  text-decoration: none;
`;
export const Logo1 = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  color: ${primary};
`;
export const Logo2 = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  color: ${({ scrolled }) => (scrolled ? "#000" : "#fff")};
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrolled }) => (scrolled ? tertiary : secondary)};
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinkRouter = styled(LinkR)`
  color: ${({ $scrolled }) => ($scrolled ? tertiary : secondary)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;

  &.active {
    border-bottom: 3px solid ${primary};
  }

  &:hover {
    color: ${primary};
  }
`;
export const NavLinkScroll = styled(LinkS)`
  color: ${({ $scrolled }) => ($scrolled ? tertiary : secondary)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;

  &.active {
    border-bottom: 3px solid ${primary};
  }

  &:hover {
    color: ${primary};
    transition: all 0.2s ease-in-out;
  }
`;
