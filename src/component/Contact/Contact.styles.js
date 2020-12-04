import styled from "styled-components";
import { primary, secondary, tertiary } from "../../data";

export const ContactContainer = styled.div`
  background: ${secondary};
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 150px);
    align-items: center;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  max-width: 800px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 80px;
  }
`;
export const ContactTitle = styled.div`
  display: flex;
`;
export const ContactH3 = styled.h3`
  color: ${primary};
  font-weight: bolder;
  font-size: 18px;
  border-bottom: 3px solid ${primary};
`;
export const ContactFormWrap = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 24px 0;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
export const ContactInputSmall = styled.input`
  width: 47%;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50px;
  border: none;
  background: #e8e8e8;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactInputWide = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50px;
  border: none;
  background: #e8e8e8;
  outline: none;
`;
export const ContactTextarea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 22px;
  border: none;
  background: #e8e8e8;
  height: 10rem;
  outline: none;
  margin-bottom: 24px;
`;
export const ContactSubmit = styled.input`
  border-radius: 50px;
  background: ${primary};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${secondary};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1.1px;
  margin: 0 auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${tertiary};
  }
`;
