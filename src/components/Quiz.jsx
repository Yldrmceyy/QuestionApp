import { useState, useEffect } from "react";
import QUESTIONS from "../questions";

export default function Quiz({ onQuizEnd }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelected, setUserSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showOptions, setShowOptions] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  useEffect(() => {
    // Seçeneklerin 4 saniye sonra görünür hale gelmesini sağlıyoruz.
    const optionsTimer = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleNextQuestion();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(optionsTimer);
      clearInterval(timer);
    };
  }, [currentQuestionIndex]);

  const handleOptionClick = (option) => {
    setUserSelected(option);
    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        selectedAnswer: option,
      },
    ]);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setTimeout(() => handleNextQuestion(), 1000);
  };

  const handleNextQuestion = () => {
    setUserSelected(null);
    setShowOptions(false);
    setTimeLeft(30);
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizEnd(score, answers);
    }
  };

  return (
    <div className="quiz-content">
      <h2>{currentQuestion.question}</h2>
      <img src={currentQuestion.media} alt="Question media" />
      <div className="options">
        {showOptions &&
          currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={!!userSelected || timeLeft > 26}
              className={
                userSelected
                  ? option === currentQuestion.answer
                    ? "correct"
                    : option === userSelected
                    ? "incorrect"
                    : ""
                  : ""
              }
            >
              {option}
            </button>
          ))}
      </div>
      <div className="timer">
        <p>Time Left: {timeLeft}s</p>
      </div>
    </div>
  );
}
