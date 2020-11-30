import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { primary, secondary, tertiary } from "../../data";
import { SiMinutemailer } from "react-icons/si";

export const SuccessContainer = styled.div``;
export const SuccessWrapper = styled.div`
  background: ${secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 100vh;
  margin-top: -80px;
`;
export const MsgWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SuccessLink = styled(LinkR)`
  color: ${tertiary};
  text-decoration: none;
  font-weight: bolder;

  &:hover {
    color: ${primary};
  }
`;
export const SuccessIcon = styled(SiMinutemailer)`
  font-size: 24px;
  margin-right: 8px;
`;
export const MiniNav = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 80px;
  margin-left: 24px;
`;
export const NavLogo = styled(LinkR)`
  display: flex;
  cursor: pointer;
  align-items: center;
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
  color: ${tertiary};
`;
