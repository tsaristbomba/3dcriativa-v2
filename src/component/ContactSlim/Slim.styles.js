import styled from "styled-components";
import { primary, secondary } from "../../data";

export const SlimContainer = styled.div`
  background: ${secondary};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    /* align-items: center; */
  }
`;
export const SlimWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1100px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const ContactTitle = styled.div`
  display: flex;
`;
export const SlimH3 = styled.h3`
  color: ${primary};
  font-weight: bolder;
  font-size: 18px;
  border-bottom: 3px solid ${primary};
`;
