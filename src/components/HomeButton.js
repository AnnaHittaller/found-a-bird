import { useNavigate } from "react-router-dom";
import "../styles/button.css";

export default function HomeButton() {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <button className="outline" onClick={backHome}>
      Home
    </button>
  );
}
