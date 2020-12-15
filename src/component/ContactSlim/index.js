import React, { useEffect } from "react";
import { contactObject } from "../../data";
import Info from "../Info";

import {
  SlimContainer,
  SlimWrapper,
  ContactTitle,
  SlimH3,
} from "./Slim.styles";

const ContactSlim = () => {
  // Scroll to top every render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  return (
    <SlimContainer>
      <SlimWrapper>
        <ContactTitle>
          <SlimH3>Contato</SlimH3>
        </ContactTitle>
        <Info {...contactObject} />
      </SlimWrapper>
    </SlimContainer>
  );
};

export default ContactSlim;
