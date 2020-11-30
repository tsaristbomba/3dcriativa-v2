import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  SuccessContainer,
  MsgWrapper,
  SuccessWrapper,
  SuccessLink,
  SuccessIcon,
  MiniNav,
  NavLogo,
  Logo1,
  Logo2,
} from "./Success.styles";

const Success = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <SuccessContainer>
      <MiniNav>
        <NavLogo to="/">
          <Logo1>3D</Logo1>
          <Logo2>CRIATIVA</Logo2>
        </NavLogo>
      </MiniNav>
      <SuccessWrapper data-aos="fade-up">
        <MsgWrapper>
          <SuccessIcon /> Mensagem enviada, valeu!
        </MsgWrapper>
        <SuccessLink to="/">Voltar</SuccessLink>
      </SuccessWrapper>
    </SuccessContainer>
  );
};

export default Success;
