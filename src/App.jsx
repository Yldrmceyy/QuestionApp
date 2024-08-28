import "./App.css";
import Introduction from "./components/introduction";
import Quiz from "./components/Quiz";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  // Quiz'i başlatmak için kullanılan fonksiyon
  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <>
      <Introduction startQuiz={startQuiz} />
      <Quiz />
    </>
  );
}

export default App;
