import React from "react";
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

const Footer = () => {
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
        <FooterLogo smooth to="/#top">
          <Logo1>
            3D<Logo2>CRIATIVA</Logo2>
          </Logo1>

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

export default Footer;
