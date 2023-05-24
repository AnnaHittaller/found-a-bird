import Hamburger from "./Hamburger";
import logo from "../assets/bird-logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <Hamburger />
    </div>
  );
}
