import { useState ,useEffect} from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = QUESTIONS[currentQuestionIndex];


  return <div>
  
  
  
  </div>;
}
