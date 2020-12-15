import styled from "styled-components";
import { primary, secondary } from "../../data";

export const PortfolioContainer = styled.div`
  background: ${secondary};
  min-height: 100vh;
  height: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  padding: 24px;
`;
export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  max-width: 1100px;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const PortfolioTitle = styled.div`
  display: flex;
`;
export const PortfolioH3 = styled.div`
  color: ${primary};
  font-weight: bolder;
  font-size: 18px;
  border-bottom: 3px solid ${primary};
`;
export const PortfolioColumns = styled.div`
  margin-top: 24px;
`;
