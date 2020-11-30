import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { primary, secondary, tertiary } from "../../data";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${secondary};
  display: grid;
  align-items: center;
  justify-content: center;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: ${tertiary};
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and(max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SidebarLinkScroll = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${tertiary};
  letter-spacing: 1.1px;

  &:hover {
    color: ${primary};
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarLinkRouter = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${tertiary};
  letter-spacing: 1.1px;

  &:hover {
    color: ${primary};
    transition: 0.2s ease-in-out;
  }
`;
