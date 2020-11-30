import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import video1 from "../../videos/video-1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Hero.styles";
import { Button } from "../../GlobalStyles";

const Hero = ({ heroTitle, heroSub, btnLabel }) => {
  const [hover, setHover] = useState(false);

  // handle icon change on btn
  function onHover() {
    setHover(!hover);
  }
  //

  // Scroll to top every render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          // autoPlay
          loop
          muted
          src={video1}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent data-aos="fade-up">
        <HeroH1>{heroTitle}</HeroH1>
        <HeroP>{heroSub}</HeroP>
        <HeroBtnWrapper>
          <Button onMouseEnter={onHover} onMouseLeave={onHover} to="/trabalhos">
            {btnLabel} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

Hero.propTypes = {
  heroTitle: PropTypes.string,
  heroSub: PropTypes.string,
  btnLabel: PropTypes.string,
};

export default Hero;
