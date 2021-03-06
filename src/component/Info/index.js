import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../../GlobalStyles";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ContactIcons,
  IconLink,
  InstaIcon,
  EmailIcon,
} from "./Info.styles";

const Info = ({
  imgStart,
  topLine,
  headline,
  description,
  btnOn,
  btnLabel,
  imgSrc,
  imgAlt,
  iconOn,
  isHome,
  darkBg,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <InfoContainer data-aos="fade-up" $isHome={isHome} $darkBg={darkBg}>
      <InfoWrapper>
        <InfoRow $imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading> {headline} </Heading>
              <Subtitle> {description} </Subtitle>
              <BtnWrap $btnOn={btnOn}>
                <Button to="/trabalhos">{btnLabel}</Button>
              </BtnWrap>
              <ContactIcons $iconOn={iconOn}>
                <IconLink
                  href="mailto:criativa3d@outlook.com"
                  aria-label="Email"
                >
                  <EmailIcon />
                </IconLink>
                <IconLink
                  href="https://www.instagram.com/3d.criativa/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <InstaIcon />
                </IconLink>
              </ContactIcons>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={imgSrc} alt={imgAlt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

Info.propTypes = {
  id: PropTypes.string,
  imgStart: PropTypes.bool,
  topLine: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  btnOn: PropTypes.bool,
  iconOn: PropTypes.bool,
  isHome: PropTypes.bool,
  btnLabel: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Info;
