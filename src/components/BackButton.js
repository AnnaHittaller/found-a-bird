import "../styles/button.css";

export default function BackButton(props) {
  return (
    <button className="outline" onClick={props.onClick}>
      Back
    </button>
  );
}
