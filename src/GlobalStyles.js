import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { primary, secondary, tertiary } from "./data/index";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Archivo", sans-serif;
    }

    //Masonry css
    .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      margin-left: -30px; /* gutter size offset */
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 30px; /* gutter size */
      background-clip: padding-box;
    }
  
  /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
      background: grey;
      margin-bottom: 30px;
  }
  //
`;

export const Button = styled(LinkR)`
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

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${tertiary};
  }
`;
