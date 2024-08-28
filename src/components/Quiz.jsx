import { useState, useEffect } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelected, setUserSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);



  const currentQuestion = QUESTIONS[currentQuestionIndex];

  // useEffect(()=>{
  //   if()
  // })

  const handleNextQuestion = () => {
    setUserSelected(null);
    setTimeLeft(30);
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Test bitti! Doğru sayısı: ${score}`);
      // Quiz bittiğinde sonucu gösterebilir veya başka bir işlem yapabilirsiniz
    }
  };


  return (
    <div className="quiz-content">
      <h2>{currentQuestion.question}</h2>
      <img src={currentQuestion.media} alt="Question media" />
      <div className="options">
        {currentQuestion.options.map((option) => (
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
    </div>
  );
}
