import "../layouts/mainLayout.css";
import Button from "./Button";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
  return (
    <>
      <MainLayout />
      <div className="homepage-content">
        <h1>Hey! I found a bird!</h1>
        <h2>What should I do?</h2>
        <img
          alt="baby bird sitting in the grass"
          src="https://c.pxhere.com/photos/06/21/red_robin_bird_feathered_nature_wildlife_animal_fledgling_poult-1357505.jpg!d"
        />
        <p>
          Many of us may have already stumbled upon seemingly helpless baby
          birds - but do they really need help? Follow this short manual and
          find out what is the best thing to do!
        </p>
        <Button type="primary" text="Let's see!" link="/questionnaire" />
      </div>
    </>
  );
}
