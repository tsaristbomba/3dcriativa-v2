import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
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
    height: 150px;
  }
`;
export const FooterLogo = styled(LinkR)`
  justify-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const Logo1 = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  color: ${primary};
`;
export const Logo2 = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  color: ${tertiary};
`;
export const FooterRights = styled.div`
  color: ${tertiary};
  font-size: 14px;
  text-align: center;
  margin-left: 8px;
`;
export const FooterSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;
export const SocialLink = styled.a`
  color: ${tertiary};
  font-size: 24px;
  display: flex;
  align-items: center;
`;
export const InstagramIcon = styled(RiInstagramFill)`
  font-size: 22px;

  &:hover {
    color: ${primary};
  }
`;
export const EmailIcon = styled(MdEmail)`
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
