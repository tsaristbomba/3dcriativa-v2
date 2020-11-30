import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactH3,
  ContactFormWrap,
  ContactForm,
  ContactInputSmall,
  ContactInputWide,
  ContactTextarea,
  ContactSubmit,
} from "./Contact.styles";

const Contact = () => {
  // Scroll to top every render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactTitle>
          <ContactH3>Contato</ContactH3>
        </ContactTitle>
        <ContactFormWrap data-aos="fade-up">
          <ContactForm name="contact" id="form" method="POST" action="/success">
            <input type="hidden" name="form-name" value="contact" />
            <ContactInputSmall
              required
              type="text"
              name="name"
              placeholder="Nome"
            />
            <ContactInputSmall
              required
              type="email"
              name="email"
              placeholder="Email"
            />
            <ContactInputWide
              required
              type="text"
              name="subject"
              placeholder="Assunto"
            />
            <ContactTextarea
              required
              type="text"
              maxLength={280}
              placeholder="Mensagem"
            />
            <div data-netlify-recaptcha="true" />
            <ContactSubmit type="submit" value="Enviar" />
          </ContactForm>
        </ContactFormWrap>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
