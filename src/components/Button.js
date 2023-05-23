import { useNavigate } from "react-router-dom";
import "../styles/button.css";

export default function Button(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.link) {
      navigate(props.link);
    } else if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button className={props.type} onClick={handleClick}>
      {props.text}
    </button>
  );
}
