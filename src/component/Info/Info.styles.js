import styled from "styled-components";
import { primary, secondary, tertiary } from "../../data";
import { FiInstagram, FiMail } from "react-icons/fi";

export const InfoContainer = styled.div`
  color: ${tertiary};
  background: ${({ $darkBg }) => ($darkBg ? "#dddddd" : secondary)};

  @media screen and (max-width: 768px) {
    padding: ${({ $isHome }) => ($isHome ? "80px 0" : "2rem 0")};
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${(props) =>
    props.$imgStart ? "'col2 col1'" : "'col1 col2'"};
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
`;
export const Column2 = styled.div`
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
export const TopLine = styled.p`
  color: ${primary};
  font-size: 16px;
  line-height: 16px;
  font-weight: bolder;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${tertiary};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: ${tertiary};
`;
export const BtnWrap = styled.div`
  display: ${({ $btnOn }) => ($btnOn ? "flex" : "none")};
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const ContactIcons = styled.div`
  display: ${({ $iconOn }) => ($iconOn ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  max-width: 120px;
  margin-top: 1rem;
`;
export const IconLink = styled.a`
  font-size: 3rem;
  color: ${tertiary};

  &:hover {
    color: ${primary};
  }
`;
export const EmailIcon = styled(FiMail)``;
export const InstaIcon = styled(FiInstagram)`
  font-size: 2.6rem;
`;
