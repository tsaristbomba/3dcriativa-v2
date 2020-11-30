import React from "react";
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

const index = () => {
  return (
    <SuccessContainer>
      <MiniNav>
        <NavLogo to="/">
          <Logo1>3D</Logo1>
          <Logo2>CRIATIVA</Logo2>
        </NavLogo>
      </MiniNav>
      <SuccessWrapper>
        <MsgWrapper>
          <SuccessIcon /> Mensagem enviada, valeu!
        </MsgWrapper>
        <SuccessLink to="/">Voltar</SuccessLink>
      </SuccessWrapper>
    </SuccessContainer>
  );
};

export default index;
