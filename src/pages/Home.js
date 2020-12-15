import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  heroObj,
  homeContactObject,
  infoObjOne,
  infoObjThree,
  infoObjTwo,
} from "../data";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Sidebar from "../component/Sidebar";
import Info from "../component/Info";
import Footer from "../component/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // open/close mobile menu
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  //

  // Change styles if scroll down from home
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return function cleanup() {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  //

  // Scroll to the top onclick
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  //

  return (
    <>
      <Navbar
        handleMenu={handleMenu}
        toggleHome={toggleHome}
        scrolled={scrolled}
      />
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
      <Hero {...heroObj} />
      <div id="sobre">
        <Info {...infoObjOne} />
        <Info {...infoObjTwo} />
        <Info {...infoObjThree} />
        <Info {...homeContactObject} />
      </div>
      <Footer toggleHome={toggleHome} />
    </>
  );
};

export default Home;
