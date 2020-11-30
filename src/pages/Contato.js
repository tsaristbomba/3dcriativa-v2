import React, { useState } from "react";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const Contato = () => {
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
      <Contact />
      <Footer />
    </>
  );
};

export default Contato;
