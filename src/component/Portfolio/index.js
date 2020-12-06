import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import Aos from "aos";
import "aos/dist/aos.css";

// Portfolio Images
import portfolioOne from "../../images/panoramic.jpg";
import portfolioTwo from "../../images/normal.jpg";
import portfolioThree from "../../images/panoramic.jpg";
import portfolioFour from "../../images/normal.jpg";
import portfolioFive from "../../images/panoramic.jpg";
import portfolioSix from "../../images/normal.jpg";
import portfolioSeven from "../../images/panoramic.jpg";
import portfolioEight from "../../images/panoramic.jpg";
import portfolioNine from "../../images/panoramic.jpg";

import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioTitle,
  PortfolioH3,
  PortfolioColumns,
} from "./Portfolio.styles";
import ImageComponent from "./ImageComponent";

const Portfolio = () => {
  // Scroll to top every render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //

  //Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    480: 1,
  };
  //

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <PortfolioContainer id="trabalhos">
      <PortfolioWrapper>
        <PortfolioTitle>
          <PortfolioH3>Trabalhos</PortfolioH3>
        </PortfolioTitle>
        <PortfolioColumns data-aos="fade-up">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <ImageComponent imgSrc={portfolioOne} imgAlt="Portfolio" />
            <ImageComponent large imgSrc={portfolioSix} imgAlt="Portfolio" />
            <ImageComponent imgSrc={portfolioThree} imgAlt="Portfolio" />
            <ImageComponent imgSrc={portfolioFive} imgAlt="Portfolio" />
            <ImageComponent imgSrc={portfolioSeven} imgAlt="Portfolio" />
            <ImageComponent large imgSrc={portfolioTwo} imgAlt="Portfolio" />
            <ImageComponent large imgSrc={portfolioFour} imgAlt="Portfolio" />
            <ImageComponent imgSrc={portfolioEight} imgAlt="Portfolio" />
            <ImageComponent imgSrc={portfolioNine} imgAlt="Portfolio" />
          </Masonry>
        </PortfolioColumns>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
