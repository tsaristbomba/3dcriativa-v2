import React, { useState } from "react";
import { Spinner } from "../../../GlobalStyles";
import { Image, ImageContainer } from "./ImageComponent.styles";
import PropTypes from "prop-types";

const ImageComponent = ({ imgSrc, imgAlt, large }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ImageContainer>
      <Image
        src={imgSrc}
        alt={imgAlt}
        $large={large}
        onLoad={() => setImgLoaded(true)}
      />
      {!imgLoaded && <Spinner />}
    </ImageContainer>
  );
};

ImageComponent.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  large: PropTypes.bool,
};

export default ImageComponent;
