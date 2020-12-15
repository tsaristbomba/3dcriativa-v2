import React, { useState } from "react";
import ContactSlim from "../component/ContactSlim";
// import Contact from "../component/Contact";
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
      {/* <Contact /> */}
      <ContactSlim />
      <Footer />
    </>
  );
};

export default Contato;
