import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [message] = useState("Welcome!");

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore((prevScore) => prevScore + 1)}>
          Increase score
        </button>
        <button onClick={() => setScore((prevScore) => prevScore + 2)}>
          Double bonus
        </button>
        <button onClick={() => setScore((prevScore) => prevScore - 1)}>
          Decrease score
        </button>
        <button onClick={() => setScore(0)}>Reset score</button>
      </header>
    </div>
  );
}

export default App;
