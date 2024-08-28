import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setQuizResults(null); // Quiz tekrar başlatılırsa sonuçları sıfırlamak için
  };

  const handleQuizEnd = (score, answers) => {
    setQuizResults({ correct: score, total: answers.length, answers });
    setIsQuizStarted(false); // Quiz bittiğinde quiz'i durdur
  };

  return (
    <div className="App">
      {!isQuizStarted ? (
        quizResults ? (
          <Result
            correct={quizResults.correct}
            total={quizResults.total}
            answers={quizResults.answers}
          />
        ) : (
          <Introduction startQuiz={startQuiz} />
        )
      ) : (
        <Quiz onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
}

export default App;
