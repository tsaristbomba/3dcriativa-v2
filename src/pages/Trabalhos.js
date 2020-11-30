import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Sidebar from "../component/Sidebar";

const Trabalhos = () => {
  const [isOpen, setIsOpen] = useState(false);

  // open/close mobile menu
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  //

  return (
    <>
      <Navbar scrolled={true} handleMenu={handleMenu} />
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Trabalhos;
