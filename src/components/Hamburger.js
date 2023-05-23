import { useState } from "react";
import "../styles/header.css";
import Menu from "./Menu";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
 //   if (!isOpen) {
 //     document.body.classList.add("no-scroll");
//    } else {
 //     document.body.classList.remove("no-scroll");
 //   }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

 // const toggleSubMenu = (subMenu) => {
 //   if (activeSubMenu === subMenu) {
  //    setActiveSubMenu(null);
  //  } else {
 //     setActiveSubMenu(subMenu);
  //  }
 // };

  return (
    <>
      <div
        className={isOpen ? "hamburger-open" : "hamburger"}
        onClick={toggleMenu}
      >
        <div className="hamburger-icon">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>
      <Menu
        isOpen={isOpen}
        onClose={handleClose}
        setIsOpen={setIsOpen}
        
      />
    </>
  );
}
