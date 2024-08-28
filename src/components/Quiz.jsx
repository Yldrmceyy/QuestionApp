import { useState, useEffect } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelected, setUserSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showOptions, setShowOptions] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = QUESTIONS[currentQuestionIndex];


  useEffect(() => {
    // Seçeneklerin görünür olmasını sağlayacak zamanlayıcı
    const optionsTimer = setTimeout(() => {
      setShowOptions(true);
    }, 4000); // İlk 4 saniye seçenekler gizli

    // Zamanlayıcıyı ayarla
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer); // Zamanlayıcıyı temizle
          handleNextQuestion(); // Zaman dolduğunda bir sonraki soruya geç
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(optionsTimer); // Component unmount edildiğinde temizle
      clearInterval(timer);
    };
  }, [currentQuestionIndex]);



  const handleOptionClick = (option) => {
    setUserSelected(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setTimeout(() => handleNextQuestion(), 4000);
  };






  const handleNextQuestion = () => {
    setUserSelected(null);
    setShowOptions(false);
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
        {showOptions && currentQuestion.options.map((option) => (
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
