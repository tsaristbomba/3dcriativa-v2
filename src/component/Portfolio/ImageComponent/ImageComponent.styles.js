import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  background: transparent;
  /* min-height: 200px; */
  border-radius: 4px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: ${({ $large }) => ($large ? "450px" : "400px")};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transform: none;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1000;
    transform: scale(1.1) translateZ(0px);
  }
`;
