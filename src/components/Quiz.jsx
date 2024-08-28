import { useState, useEffect } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelected, setUserSelected] = useState(null);
  

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return(

<div className="quiz-content">
<h2>{currentQuestion.question}</h2>
<img src={currentQuestion.media} alt="Question media" />
<div className="options">

</div>
</div>

    
  ) 
}
