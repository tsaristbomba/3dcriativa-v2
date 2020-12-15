import styled from "styled-components";
import { NavHashLink as LinkR } from "react-router-hash-link";
import { FiInstagram, FiMail } from "react-icons/fi";
import { secondary, primary, tertiary } from "../../data";

export const FooterContainer = styled.div`
  background: ${secondary};
`;
export const FooterWrapper = styled.div`
  padding: 24px 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    height: 150px;
  }
`;
export const FooterLogo = styled(LinkR)`
  justify-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Logo1 = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  color: ${primary};
  display: flex;
`;
export const Logo2 = styled.span`
  font-size: 18px;
  font-weight: bolder;
  color: ${tertiary};
`;
export const FooterRights = styled.div`
  color: ${tertiary};
  font-size: 14px;
  text-align: center;
  margin-left: 8px;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0;
  }
`;
export const FooterSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SocialLink = styled.a`
  color: ${tertiary};
  font-size: 24px;
  display: flex;
  align-items: center;
`;
export const InstagramIcon = styled(FiInstagram)`
  font-size: 22px;

  &:hover {
    color: ${primary};
  }
`;
export const EmailIcon = styled(FiMail)`
  &:hover {
    color: ${primary};
  }
`;
export const FooterMaker = styled.div`
  color: ${tertiary};
  font-size: 14px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 1rem;
  }
`;
export const MakerLink = styled.a`
  color: ${tertiary};
  text-decoration: none;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    color: ${primary};
  }
`;
