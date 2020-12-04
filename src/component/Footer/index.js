import React from "react";
import PropTypes from "prop-types";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  Logo1,
  Logo2,
  FooterRights,
  FooterSocials,
  InstagramIcon,
  EmailIcon,
  SocialLink,
  FooterMaker,
  MakerLink,
} from "./Footer.styles";

const Footer = ({ toggleHome }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocials>
          <SocialLink
            href="https://www.instagram.com/3d.criativa/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="mailto:criativa3d@outlook.com" aria-label="Email">
            <EmailIcon />
          </SocialLink>
        </FooterSocials>
        <FooterLogo to="/" onClick={toggleHome}>
          <Logo1>3D</Logo1>
          <Logo2>CRIATIVA</Logo2>
          <FooterRights>
            ⓒ {new Date().getFullYear()} todos os direitos reservados.
          </FooterRights>
        </FooterLogo>
        <FooterMaker>
          dev by{" "}
          <MakerLink
            href="https://telfer.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            telfer
          </MakerLink>
        </FooterMaker>
      </FooterWrapper>
    </FooterContainer>
  );
};

Footer.propTypes = {
  toggleHome: PropTypes.func,
};

export default Footer;
