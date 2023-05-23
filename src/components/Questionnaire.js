import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";
import React, { useState } from "react";
import { questionData } from "../data/QuestionData";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
import Carousel from "./Carousel";

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(questionData[0]);
  const [prevQuestion, setPrevQuestion] = useState(null);
  const [progress, setProgress] = useState([]);

  const navigate = useNavigate();

  const handleAnswer = (nextQuestionId) => {
    console.log("handleAnswer fired");
    const nextQuestion = questionData.find(
      (question) => question.id === nextQuestionId
    );

    setPrevQuestion(currentQuestion);
    setCurrentQuestion(nextQuestion);
    setProgress([
      ...progress,
      { question: currentQuestion.id, answer: nextQuestionId },
    ]);
  };

  //console.log(handleAnswer, "questioncomp");

  const handleBack = () => {
    const prevAnswer = progress.pop();
    if (currentQuestion.id === "q1") {
      navigate("/home");
    } else if (prevAnswer) {
      const prevQuestion = questionData.find(
        (question) => question.id === prevAnswer.question
      );
      setCurrentQuestion(prevQuestion);
      setPrevQuestion(null);
      setProgress([...progress]);
    } else {
      navigate(-1);
    }
  };

  const navToGallery = () => {
    navigate("/gallery");
  };

  const navToLinks = () => {
    navigate("/useful-links");
  };

  //console.log(progress);

  return (
    <MainLayout>
      <div className="question-main">
        {currentQuestion && (
          <div className="question-content">
            {currentQuestion.number ? (
              <div className="number">{progress.length + 1}</div>
            ) : null}
            <h1>{currentQuestion.text}</h1>
            <p>{currentQuestion.details}</p>
            {currentQuestion.id === "q2" ? (
              <Carousel
                setCurrentQuestion={setCurrentQuestion}
                handleAnswer={handleAnswer}
              />
            ) : null}
            <h1>{currentQuestion.message}</h1>
          </div>
        )}
        <div className="button-group">
          {currentQuestion.id === "q2"
            ? null
            : currentQuestion.answers.map((answer, idx) => (
                <React.Fragment key={idx}>
                  <Button
                    type="primary"
                    text={answer.text}
                    onClick={() => handleAnswer(answer.nextQuestion)}
                  />
                  {answer.text === "Yes" ? <p>- OR -</p> : null}
                </React.Fragment>
              ))}
          <BackButton onClick={handleBack} className="back-btn" />
          {currentQuestion.id === "outcomeOK" ||
          currentQuestion.id === "outcomeHelp" ? (
            <HomeButton />
          ) : null}
          {currentQuestion.id === "outcomeOK" ? (
            <>
              <Button
                text="I want to learn more about birds!"
                type="primary"
                onClick={navToLinks}
              />
              <Button
                text="Show me some nice bird photos"
                type="primary"
                onClick={navToGallery}
              />
            </>
          ) : null}
          {currentQuestion.id === "outcomeHelp" ? (
            <>
              <Button text="Where can I get help nearby?" type="primary" />
            </>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
}
