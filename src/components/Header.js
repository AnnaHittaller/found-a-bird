import { GiNestBirds } from "react-icons/gi";
import Hamburger from "./Hamburger";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <GiNestBirds className="logo" />
      <Hamburger />
    </div>
  );
}
