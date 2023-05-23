import { Link } from "react-router-dom";
import "../styles/header.css";
import HomeButton from "./HomeButton";

export default function Menu({ isOpen, onClose, setIsOpen }) {
  return (
    <div className={isOpen ? "menu-open" : "menu"}>
      <div className="menu-overlay" onClick={onClose}></div>
      <div className="menu-content">
        <HomeButton />
        <Link to="/useful-links">
          <h2 >Useful birding links</h2>
        </Link>
        <Link to="/gallery">
          <h2>Nice bird photos</h2>
        </Link>
        <Link to="/about">
          <h2>About this app</h2>
        </Link>
      </div>
    </div>
  );
}
