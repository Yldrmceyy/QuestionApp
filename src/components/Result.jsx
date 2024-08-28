import React from "react";

export default function Result({ correct, total, answers }) {
  return (
    <div className="result-container">
      <h2>Test Sonuçları</h2>
      <div className="results">
        <p>
          <strong>Doğru:</strong> {correct}
        </p>
        <p>
          <strong>Yanlış:</strong> {total - correct}
        </p>
      </div>

      <h3>Sorulara Verilen Cevaplar</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <span>{index + 1}. Soru:</span> <strong>Doğru Cevap:</strong>{" "}
            {answer.correctAnswer}, <strong>Verilen Cevap:</strong>{" "}
            {answer.selectedAnswer ? answer.selectedAnswer : "Cevap Verilmedi"}
          </li>
        ))}
      </ul>
    </div>
  );
}
