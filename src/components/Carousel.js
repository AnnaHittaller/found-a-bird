import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "./Button";
import "../styles/carousel.css";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import hatchling from "../assets/hatchling.jpg";
import nestling from "../assets/nestling.jpg";
import fledgling from "../assets/fledgling.jpg";
import adult from "../assets/adult.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const renderPrevButton = ({ isDisabled }) => {
  return <BsCaretLeftFill style={{ color: "white", fontSize: "20px" }} />;
};

const renderNextButton = ({ isDisabled }) => {
  return <BsCaretRightFill style={{ color: "white", fontSize: "20px" }} />;
};

export default function Carousel({ handleAnswer, setCurrentQuestion }) {
  //console.log(handleAnswer, "this");

  const items = [
    <div className="item" data-value="1">
      <p className="letter">A</p>
      <img src={hatchling} alt="hatchling" />
      <span className="photographer">Photo by Fas Khan on Unsplash</span>

      <p>
        Newly hatched birds that typically have very sparse or downy feathers.
        Their feathers are often underdeveloped, soft, and fluffy.
      </p>
      <Button
        type="primary"
        text="It's a hatchling"
        onClick={() => handleAnswer("q3")}
      />
    </div>,
    <div className="item" data-value="2">
      <p className="letter">B</p>
      <img src={nestling} alt="nestling" />
      <span className="photographer">Photo by Josie Weiss on Unsplash</span>
      <p>
        The plumage is still mostly downy. The feathers may appear more
        organized and slightly stiffer, but they are not yet fully formed.
      </p>
      <Button
        type="primary"
        text="It's a nestling"
        onClick={() => handleAnswer("q3")}
      />
    </div>,
    <div className="item" data-value="3">
      <p className="letter">C</p>
      <img src={fledgling} alt="fledgling" />
      <span className="photographer">Photo by Arturo Alvarez on Unsplash</span>
      <p>
        The feathers begin to resemble those of adult birds'. Fledglings have a
        mix of downy and juvenile feathers, with the latter starting to show the
        adult plumage patterns.
      </p>
      <Button
        type="primary"
        text="It's a fledgling"
        onClick={() => handleAnswer("q7")}
      />
    </div>,
    <div className="item" data-value="4">
      <p className="letter">D</p>
      <img src={adult} alt="adult bird" />
      <span className="photographer">Photo by Andy Holmes on Unsplash</span>
      <p>
        Fully developed and mature plumage. The feathers are well-structured,
        strong and relatively stiff.
      </p>
      <Button
        type="primary"
        text="It's an adult"
        onClick={() => handleAnswer("q9")}
      />
    </div>,
  ];

  return (
    <div className="carousel-container">
      <AliceCarousel
        // handleAnswer = {handleAnswer}
        mouseTracking
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        disableSlideInfo={true}
        disableDotsControls={false}
      />
    </div>
  );
}
