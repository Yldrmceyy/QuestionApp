// Introduction Component
export default function Introduction({ startQuiz }) {
  return (
    <div className="intro-content">
      <h1>Quiz App'e Hoşgeldiniz.</h1>
      <p>Bu test 10 sorudan oluşmaktadır. Her soru için 30 saniyeniz vardır. Hazırsanız, başlamak için "Teste Başla" butonuna tıklayın.</p>
      <button id="start" onClick={startQuiz}>Teste Başla</button>
    </div>
  );
}