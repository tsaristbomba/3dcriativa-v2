import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  background: transparent;
  min-height: 200px;
  border-radius: 4px;
`;
export const Image = styled.img`
  width: 100%;
  max-height: ${({ $large }) => ($large ? "450px" : "400px")};
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
