import styled from "styled-components";
import { primary, secondary } from "../../data";

export const PortfolioContainer = styled.div`
  background: ${secondary};
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
export const ImgSmall = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-bottom: 24px;
  transform: none;
  transition: 0.2s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1000;
    transform: scale(1.15) translateZ(0px);
  }
`;
export const ImgLarge = styled.img`
  z-index: 1000;
  width: 100%;
  max-height: 450px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-bottom: 24px;
  transform: none;
  transition: 0.2s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1000;
    transform: scale(1.15) translateZ(0px);
  }
`;
