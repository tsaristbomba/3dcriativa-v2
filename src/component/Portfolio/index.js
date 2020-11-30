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
  ImgSmall,
  ImgLarge,
} from "./Portfolio.styles";

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
            <ImgSmall src={portfolioOne} alt="Portfolio" />
            <ImgLarge src={portfolioSix} alt="Portfolio" />
            <ImgSmall src={portfolioThree} alt="Portfolio" />
            <ImgSmall src={portfolioFive} alt="Portfolio" />
            <ImgSmall src={portfolioSeven} alt="Portfolio" />
            <ImgLarge src={portfolioTwo} alt="Portfolio" />
            <ImgLarge src={portfolioFour} alt="Portfolio" />
            <ImgSmall src={portfolioEight} alt="Portfolio" />
            <ImgSmall src={portfolioNine} alt="Portfolio" />
          </Masonry>
        </PortfolioColumns>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
